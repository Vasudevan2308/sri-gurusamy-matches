import { Button } from "@/components/ui/AppButton";
import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/ui/AppCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCompanyInfo } from "@/hooks/useCompanyInfo";
import { useProducts } from "@/hooks/useProducts";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe, Package, Truck } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FlameFrame {
  flameHeight: number; // 0–1 scale
  flameOpacity: number; // 0–1
  flameColor: string; // oklch
  flickerX: number; // px offset for natural sway
  sparkCount: number; // 0–8 sparks visible
  glowRadius: number; // glow blur px
  headGlow: number; // 0–1 phosphorus glow on head
}

// ─── 30 animation frames: unlit → sparks → ignition → flame growing → steady → dancing
function buildFrames(): FlameFrame[] {
  const frames: FlameFrame[] = [];

  for (let i = 0; i < 30; i++) {
    if (i < 5) {
      // Frames 0–4: unlit match, just sitting there, slight ambient
      frames.push({
        flameHeight: 0,
        flameOpacity: 0,
        flameColor: "oklch(0.62 0.19 60)",
        flickerX: 0,
        sparkCount: 0,
        glowRadius: 0,
        headGlow: 0.05 + i * 0.02,
      });
    } else if (i < 10) {
      // Frames 5–9: friction / strike — sparks fly, head starts glowing
      const st = (i - 5) / 4;
      frames.push({
        flameHeight: 0,
        flameOpacity: 0,
        flameColor: "oklch(0.85 0.2 75)",
        flickerX: (Math.random() - 0.5) * 6,
        sparkCount: Math.round(st * 7),
        glowRadius: st * 12,
        headGlow: 0.3 + st * 0.7,
      });
    } else if (i < 16) {
      // Frames 10–15: ignition — flame erupts and blooms from head
      const it = (i - 10) / 5;
      frames.push({
        flameHeight: it * 0.35,
        flameOpacity: it,
        flameColor: `oklch(${0.65 + it * 0.15} ${0.22 + it * 0.05} ${55 + it * 15})`,
        flickerX: (Math.random() - 0.5) * 10,
        sparkCount: Math.max(0, 7 - i),
        glowRadius: 12 + it * 28,
        headGlow: 1,
      });
    } else if (i < 22) {
      // Frames 16–21: flame grows tall and bright
      const gt = (i - 16) / 5;
      frames.push({
        flameHeight: 0.35 + gt * 0.55,
        flameOpacity: 1,
        flameColor: `oklch(${0.8 - gt * 0.06} ${0.27} ${70 + gt * 5})`,
        flickerX: Math.sin(i * 1.8) * 4,
        sparkCount: 0,
        glowRadius: 40 + gt * 20,
        headGlow: 1,
      });
    } else {
      // Frames 22–29: steady burn → flame dancing
      const dt = (i - 22) / 7;
      frames.push({
        flameHeight: 0.9 + Math.sin(dt * Math.PI * 2) * 0.08,
        flameOpacity: 1,
        flameColor: `oklch(${0.74 + Math.sin(dt * 6) * 0.04} 0.27 ${70 + Math.sin(dt * 4) * 5})`,
        flickerX: Math.sin(dt * Math.PI * 3) * 7,
        sparkCount: 0,
        glowRadius: 56 + Math.sin(dt * Math.PI * 2) * 8,
        headGlow: 1,
      });
    }
  }

  return frames;
}

const FRAMES = buildFrames();

// Stage labels mapped across 30 frames in 6 acts
const STAGES = [
  {
    start: 0,
    label: "1. Prepare",
    sub: "Premium wood carefully selected and processed in Sivakasi",
  },
  {
    start: 5,
    label: "2. Strike",
    sub: "Red phosphorus blend meets the striking surface",
  },
  {
    start: 10,
    label: "3. Ignite",
    sub: "A single motion ignites — reliably, every time",
  },
  {
    start: 16,
    label: "4. Bloom",
    sub: "The flame erupts — bright, hot, and beautiful",
  },
  {
    start: 22,
    label: "5. Sustain",
    sub: "Steady burn with consistent performance",
  },
  {
    start: 26,
    label: "6. Trust",
    sub: "We bring the trust and quality in our each matchstick - Strike with confidence, burn with safety",
  },
];

function getStage(frame: number) {
  let current = STAGES[0];
  for (const s of STAGES) {
    if (frame >= s.start) current = s;
  }
  return current;
}

// ─── SVG Match Illustration (Canvas drawn via SVG) ───────────────────────────
function MatchSVG({ frame }: { frame: number }) {
  const f = FRAMES[Math.max(0, Math.min(29, frame))];

  // Match geometry (coordinate space 0 0 200 500)
  const stickTop = 220;
  const stickBottom = 460;
  const stickCx = 100;
  const headTop = stickTop - 34;
  const headRy = 17;
  const headRx = 9;

  // Flame drawn from headTop upward
  const flameBaseY = headTop + 2;
  const flameMaxHeight = 200;
  const fh = f.flameHeight * flameMaxHeight;
  const flameTip = flameBaseY - fh;
  const flameCtrlX = stickCx + f.flickerX;

  // Spark positions (deterministic, not random at render)
  const sparkPositions = [
    { x: 112, y: 204 },
    { x: 88, y: 198 },
    { x: 118, y: 195 },
    { x: 82, y: 208 },
    { x: 122, y: 185 },
    { x: 78, y: 188 },
    { x: 115, y: 178 },
    { x: 90, y: 172 },
  ];

  const glowId = "flameGlow";
  const woodGradId = "woodGrad";
  const headGradId = "headGrad";
  const flameGradId = "flameGrad";

  return (
    <svg
      viewBox="0 0 200 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        overflow: "visible",
        filter: `drop-shadow(0 0 ${f.glowRadius * 0.4}px oklch(0.72 0.22 60 / 0.6))`,
      }}
      className="w-full h-full"
    >
      <defs>
        {/* Wood grain gradient */}
        <linearGradient id={woodGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.52 0.08 55)" />
          <stop offset="30%" stopColor="oklch(0.62 0.10 52)" />
          <stop offset="60%" stopColor="oklch(0.58 0.09 54)" />
          <stop offset="100%" stopColor="oklch(0.48 0.07 50)" />
        </linearGradient>
        {/* Match head gradient */}
        <radialGradient id={headGradId} cx="50%" cy="40%" r="60%">
          <stop
            offset="0%"
            stopColor={`oklch(${0.65 + f.headGlow * 0.15} 0.25 28)`}
          />
          <stop offset="60%" stopColor="oklch(0.42 0.22 28)" />
          <stop offset="100%" stopColor="oklch(0.32 0.18 28)" />
        </radialGradient>
        {/* Flame gradient */}
        <linearGradient
          id={flameGradId}
          x1="0"
          y1="1"
          x2="0"
          y2="0"
          gradientUnits="objectBoundingBox"
        >
          <stop
            offset="0%"
            stopColor="oklch(0.55 0.25 35)"
            stopOpacity={f.flameOpacity}
          />
          <stop
            offset="35%"
            stopColor="oklch(0.68 0.28 50)"
            stopOpacity={f.flameOpacity}
          />
          <stop
            offset="65%"
            stopColor="oklch(0.78 0.26 65)"
            stopOpacity={f.flameOpacity * 0.9}
          />
          <stop offset="100%" stopColor="oklch(0.90 0.15 80)" stopOpacity={0} />
        </linearGradient>
        {/* Flame glow filter */}
        <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation={f.glowRadius * 0.25} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow halo behind head */}
      {f.headGlow > 0.2 && (
        <ellipse
          cx={stickCx}
          cy={headTop + 10}
          rx={f.headGlow * 28}
          ry={f.headGlow * 22}
          fill={`oklch(0.75 0.25 55 / ${f.headGlow * 0.35})`}
        />
      )}

      {/* Flame body */}
      {fh > 2 && (
        <path
          d={[
            `M ${stickCx - 10} ${flameBaseY}`,
            `C ${stickCx - 22 + f.flickerX * 0.5} ${flameBaseY - fh * 0.3}`,
            `  ${flameCtrlX - 18} ${flameTip + fh * 0.15}`,
            `  ${flameCtrlX} ${flameTip}`,
            `C ${flameCtrlX + 18} ${flameTip + fh * 0.15}`,
            `  ${stickCx + 22 + f.flickerX * 0.3} ${flameBaseY - fh * 0.3}`,
            `  ${stickCx + 10} ${flameBaseY} Z`,
          ].join(" ")}
          fill={`url(#${flameGradId})`}
          filter={`url(#${glowId})`}
          style={{ transition: "d 40ms linear" }}
        />
      )}

      {/* Inner flame highlight */}
      {fh > 20 && (
        <path
          d={[
            `M ${stickCx - 5} ${flameBaseY - 5}`,
            `C ${stickCx - 8 + f.flickerX * 0.3} ${flameBaseY - fh * 0.4}`,
            `  ${flameCtrlX - 5} ${flameTip + fh * 0.25}`,
            `  ${flameCtrlX} ${flameTip + fh * 0.08}`,
            `C ${flameCtrlX + 5} ${flameTip + fh * 0.25}`,
            `  ${stickCx + 8 + f.flickerX * 0.2} ${flameBaseY - fh * 0.4}`,
            `  ${stickCx + 5} ${flameBaseY - 5} Z`,
          ].join(" ")}
          fill="oklch(0.96 0.12 85)"
          opacity={f.flameOpacity * 0.55}
        />
      )}

      {/* Matchstick body */}
      <rect
        x={stickCx - 4.5}
        y={stickTop}
        width={9}
        height={stickBottom - stickTop}
        rx={4}
        fill={`url(#${woodGradId})`}
      />
      {/* Wood grain lines */}
      <line
        x1={stickCx - 2}
        y1={stickTop + 20}
        x2={stickCx - 2}
        y2={stickBottom - 10}
        stroke="oklch(0.40 0.07 52 / 0.3)"
        strokeWidth="0.8"
      />
      <line
        x1={stickCx + 1}
        y1={stickTop + 30}
        x2={stickCx + 1}
        y2={stickBottom - 20}
        stroke="oklch(0.68 0.08 54 / 0.2)"
        strokeWidth="0.6"
      />

      {/* Match head */}
      <ellipse
        cx={stickCx}
        cy={headTop + headRy}
        rx={headRx}
        ry={headRy}
        fill={`url(#${headGradId})`}
      />
      {/* Head highlight */}
      <ellipse
        cx={stickCx - 2}
        cy={headTop + 8}
        rx={4}
        ry={5}
        fill={`oklch(0.75 0.15 35 / ${0.3 + f.headGlow * 0.4})`}
      />

      {/* Sparks */}
      {sparkPositions.slice(0, f.sparkCount).map((sp, idx) => (
        <g key={`spark-${sp.x}-${sp.y}`}>
          <circle
            cx={sp.x}
            cy={sp.y}
            r={1.8}
            fill="oklch(0.95 0.22 75)"
            opacity={0.9}
          />
          <line
            x1={sp.x}
            y1={sp.y}
            x2={sp.x + (sp.x - 100) * 0.6}
            y2={sp.y - 8 - idx * 2}
            stroke="oklch(0.90 0.18 72)"
            strokeWidth="1"
            opacity={0.7}
          />
        </g>
      ))}
    </svg>
  );
}

// ─── Scroll-Driven Animation Section ─────────────────────────────────────────
function MatchAnimationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);
  const TOTAL_FRAMES = 30;

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(
        0,
        Math.min(1, scrolled / Math.max(sectionHeight, 1)),
      );
      const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1));
      setFrame(targetFrame);
    };

    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const stage = getStage(frame);
  const stageIndex = STAGES.indexOf(stage);
  const progressPct = Math.round((frame / 29) * 100);

  return (
    <section
      ref={containerRef}
      className="relative bg-primary"
      style={{ minHeight: "300vh" }}
      data-ocid="match-animation.section"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, oklch(0.28 0.03 35), oklch(0.18 0.02 30))",
          }}
        />

        {/* Ambient glow that grows with frame */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse 50% 45% at 50% 35%, oklch(0.62 0.19 60 / ${FRAMES[frame].headGlow * 0.18}), transparent 70%)`,
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: text info */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
                The Craft of Fire
              </span>
            </div>

            <div className="min-h-[120px]">
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-3">
                  {stage.label}
                </h2>
                <p className="font-body text-primary-foreground text-lg leading-relaxed opacity-90">
                  {stage.sub}
                </p>
              </motion.div>
            </div>

            {/* Stage progress indicators */}
            <div className="mt-8 flex flex-col gap-2">
              {STAGES.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 transition-smooth"
                  style={{ opacity: i <= stageIndex ? 1 : 0.35 }}
                >
                  <div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold font-body transition-smooth"
                    style={{
                      borderColor:
                        i <= stageIndex
                          ? "oklch(var(--accent))"
                          : "oklch(var(--primary-foreground) / 0.3)",
                      background:
                        i < stageIndex ? "oklch(var(--accent))" : "transparent",
                      color:
                        i < stageIndex
                          ? "oklch(var(--accent-foreground))"
                          : "oklch(var(--accent))",
                    }}
                  >
                    {i < stageIndex ? "✓" : i + 1}
                  </div>
                  <span
                    className="font-body text-xs tracking-wider uppercase"
                    style={{
                      color:
                        i <= stageIndex
                          ? "oklch(var(--primary-foreground))"
                          : "oklch(var(--primary-foreground) / 0.4)",
                    }}
                  >
                    {s.label.replace(/^\d+\. /, "")}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll progress bar */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-1 bg-primary-foreground/20 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-100"
                  style={{
                    width: `${progressPct}%`,
                    background: "oklch(var(--accent))",
                  }}
                />
              </div>
              <span className="font-body text-primary-foreground text-xs tabular-nums w-10 text-right opacity-70">
                {progressPct}%
              </span>
            </div>
            <span className="font-body text-primary-foreground text-xs tracking-widest uppercase mt-2 opacity-60">
              ↓ Scroll to ignite
            </span>
          </div>

          {/* Right: SVG match */}
          <div className="order-1 md:order-2 flex flex-col justify-end items-center gap-6">
            <div
              className="relative"
              style={{ width: "min(260px, 42vw)", height: "min(520px, 72vh)" }}
            >
              <MatchSVG frame={frame} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────
const WHY_US = [
  {
    icon: Award,
    title: "Best Quality",
    desc: "Premium grade raw materials and strict quality control for every matchbox batch.",
  },
  {
    icon: Package,
    title: "Custom Packing",
    desc: "300 & 600 box bundles with stick counts of 25 to 70 — fully customizable.",
  },
  {
    icon: Globe,
    title: "Export Ready",
    desc: "Exporting outside India based on dealer and customer requirements.",
  },
  {
    icon: Truck,
    title: "Pan-India Supply",
    desc: "Reliable distribution across all major states from our Sivakasi base.",
  },
];

// ─── Featured products (first 3 only) ─────────────────────────────────────
const FEATURED_IDS = [1, 2, 3];

// ─── Main Home component ──────────────────────────────────────────────────────
export function Home() {
  const { data: company } = useCompanyInfo();
  const { data: products } = useProducts();
  const featuredProducts = products.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <div data-ocid="home.page">
      {/* ── SECTION 1: Hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-[96vh] flex items-end justify-start overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Hero image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/match-hero.dim_1400x900.jpg"
            alt="Safety matches from Sri Gurusamy Matches Unit"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.22 0.02 30 / 0.92) 0%, oklch(0.22 0.02 30 / 0.65) 55%, oklch(0.22 0.02 30 / 0.15) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.18 0.02 30 / 0.7) 0%, transparent 45%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* "Since 2007" badge */}
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-body text-accent text-sm font-semibold tracking-[0.12em] uppercase">
                Since {company.foundingYear} · Sivakasi, India
              </span>
            </div>

            {/* Company name */}
            <h1
              className="font-display font-bold text-primary-foreground leading-[1.0] tracking-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
            >
              SRI GURUSAMY
              <br />
              <span className="text-accent-glow">MATCHES UNIT</span>
            </h1>

            {/* Tagline */}
            <p
              className="font-display text-primary-foreground font-medium leading-snug mb-8 max-w-2xl opacity-95"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" }}
            >
              LIGHT UP YOUR WORLD WITH OUR SAFEST MATCHES - EVERY STRIKE, SAFE
              AND BRIGHT
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                to="/products"
                data-ocid="hero.explore_products.primary_button"
              >
                <Button variant="fire" size="lg" className="w-full sm:w-auto">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact" data-ocid="hero.contact_us.button">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="w-6 h-9 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Scroll-Driven Match Animation ─────────────────────── */}
      <MatchAnimationSection />

      {/* ── SECTION 3: Company Story ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        data-ocid="story.section"
        style={{ background: "oklch(0.96 0.01 45)" }}
      >
        {/* Background decorative image bleed */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none">
          <img
            src="/assets/generated/factory-heritage.dim_800x600.jpg"
            alt="Sri Gurusamy factory in Sivakasi"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.96 0.01 45), transparent 30%, oklch(0.96 0.01 45 / 0.4))",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-body text-accent text-xs font-semibold tracking-widest uppercase">
                  Our Story
                </span>
              </div>

              <h2
                className="font-display font-bold text-foreground leading-tight mb-5"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
              >
                Crafting Flame Since{" "}
                <span style={{ color: "oklch(var(--accent))" }}>2007</span>
              </h2>

              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                {company.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Founded", value: "2007" },
                  { label: "Based In", value: "Sivakasi, TN" },
                  { label: "Market", value: "Pan India + Export" },
                  { label: "Splint Size", value: "39mm · 12.5mm" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-card border border-border rounded-lg p-4"
                  >
                    <div
                      className="font-display font-bold text-xl"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      {item.value}
                    </div>
                    <div className="font-body text-muted-foreground text-xs tracking-wider uppercase mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" data-ocid="story.read_more.link">
                <Button variant="primary" size="md">
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
                <img
                  src="/assets/generated/factory-heritage.dim_800x600.jpg"
                  alt="Safety matches manufacturing at Sri Gurusamy unit"
                  className="w-full h-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-elevated">
                  <div className="font-display font-bold text-2xl text-foreground">
                    17+
                  </div>
                  <div className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                    Years of Excellence
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-xl rotate-12 -z-10"
                style={{ background: "oklch(var(--accent) / 0.15)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Featured Products ──────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "oklch(0.93 0.01 45)" }}
        data-ocid="featured-products.section"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeading
            title="Our Crafted Range"
            subtitle="Precision manufactured safety matches and dipped splints — trusted by dealers across India and exported worldwide."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-ocid={`featured-products.item.${i + 1}`}
              >
                <Card hover>
                  {product.image && (
                    <CardImage
                      src={product.image}
                      alt={product.name}
                      className="h-52"
                    />
                  )}
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-1.5">
                      {product.description}
                    </CardDescription>
                    <Link
                      to="/products/$id"
                      params={{ id: String(product.id) }}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-smooth hover:gap-2.5"
                      style={{ color: "oklch(var(--accent))" }}
                      data-ocid={`featured-products.learn_more.${i + 1}.link`}
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/products" data-ocid="featured-products.view_all.button">
              <Button variant="primary" size="lg">
                View All Products <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us strip */}
      <section
        className="bg-muted/40 py-16 md:py-20"
        data-ocid="why-us.section"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/12 flex items-center justify-center mb-4">
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "oklch(var(--accent))" }}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CTA ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        data-ocid="cta.section"
        style={{ background: "oklch(0.32 0.04 35)" }}
      >
        {/* Decorative flame glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, oklch(0.62 0.19 60 / 0.12), transparent 70%)",
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-2/5 hidden lg:block pointer-events-none overflow-hidden">
          <img
            src="/assets/generated/match-flame.dim_600x800.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-15"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.32 0.04 35), transparent 40%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h2
              className="font-display font-bold text-primary-foreground leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Ready to place an order?
            </h2>
            <p className="font-body text-primary-foreground text-lg leading-relaxed mb-8 opacity-90">
              Get in touch for wholesale pricing, custom packing options, and
              export enquiries. We serve dealers and distributors across India
              and internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" data-ocid="cta.get_in_touch.primary_button">
                <Button variant="fire" size="lg" className="w-full sm:w-auto">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products" data-ocid="cta.view_products.button">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Products
                </Button>
              </Link>
            </div>

            {/* Contact quick info */}
            <div className="mt-10 flex flex-col gap-2">
              <p className="font-body text-primary-foreground text-xs tracking-widest uppercase mb-1 opacity-70">
                Direct Contact
              </p>
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="font-body text-primary-foreground hover:text-accent transition-smooth text-base font-medium opacity-90"
                  data-ocid="cta.phone.link"
                >
                  +91 {phone}
                </a>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="font-body text-primary-foreground hover:text-accent transition-smooth text-sm mt-1 opacity-85"
                data-ocid="cta.email.link"
              >
                {company.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
