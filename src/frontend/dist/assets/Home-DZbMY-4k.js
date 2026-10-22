import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-DlCS8uXG.js";
import { m as motion, B as Button } from "./proxy-DDfmaAs-.js";
import { C as Card, a as CardImage, b as CardBody, c as CardTitle, d as CardDescription } from "./AppCard-D47dFLI6.js";
import { S as SectionHeading } from "./SectionHeading-DITPKy1c.js";
import { u as useCompanyInfo } from "./useCompanyInfo-CA1SUzuz.js";
import { A as ArrowRight, P as Package, u as useProducts } from "./useProducts-BYrtgom_.js";
import { A as Award, G as Globe } from "./globe-CkhOnc2z.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
function buildFrames() {
  const frames = [];
  for (let i = 0; i < 30; i++) {
    if (i < 5) {
      frames.push({
        flameHeight: 0,
        flameOpacity: 0,
        flameColor: "oklch(0.62 0.19 60)",
        flickerX: 0,
        sparkCount: 0,
        glowRadius: 0,
        headGlow: 0.05 + i * 0.02
      });
    } else if (i < 10) {
      const st = (i - 5) / 4;
      frames.push({
        flameHeight: 0,
        flameOpacity: 0,
        flameColor: "oklch(0.85 0.2 75)",
        flickerX: (Math.random() - 0.5) * 6,
        sparkCount: Math.round(st * 7),
        glowRadius: st * 12,
        headGlow: 0.3 + st * 0.7
      });
    } else if (i < 16) {
      const it = (i - 10) / 5;
      frames.push({
        flameHeight: it * 0.35,
        flameOpacity: it,
        flameColor: `oklch(${0.65 + it * 0.15} ${0.22 + it * 0.05} ${55 + it * 15})`,
        flickerX: (Math.random() - 0.5) * 10,
        sparkCount: Math.max(0, 7 - i),
        glowRadius: 12 + it * 28,
        headGlow: 1
      });
    } else if (i < 22) {
      const gt = (i - 16) / 5;
      frames.push({
        flameHeight: 0.35 + gt * 0.55,
        flameOpacity: 1,
        flameColor: `oklch(${0.8 - gt * 0.06} ${0.27} ${70 + gt * 5})`,
        flickerX: Math.sin(i * 1.8) * 4,
        sparkCount: 0,
        glowRadius: 40 + gt * 20,
        headGlow: 1
      });
    } else {
      const dt = (i - 22) / 7;
      frames.push({
        flameHeight: 0.9 + Math.sin(dt * Math.PI * 2) * 0.08,
        flameOpacity: 1,
        flameColor: `oklch(${0.74 + Math.sin(dt * 6) * 0.04} 0.27 ${70 + Math.sin(dt * 4) * 5})`,
        flickerX: Math.sin(dt * Math.PI * 3) * 7,
        sparkCount: 0,
        glowRadius: 56 + Math.sin(dt * Math.PI * 2) * 8,
        headGlow: 1
      });
    }
  }
  return frames;
}
const FRAMES = buildFrames();
const STAGES = [
  {
    start: 0,
    label: "1. Prepare",
    sub: "Premium wood carefully selected and processed in Sivakasi"
  },
  {
    start: 5,
    label: "2. Strike",
    sub: "Red phosphorus blend meets the striking surface"
  },
  {
    start: 10,
    label: "3. Ignite",
    sub: "A single motion ignites — reliably, every time"
  },
  {
    start: 16,
    label: "4. Bloom",
    sub: "The flame erupts — bright, hot, and beautiful"
  },
  {
    start: 22,
    label: "5. Sustain",
    sub: "Steady burn with consistent performance"
  },
  {
    start: 26,
    label: "6. Trust",
    sub: "We bring the trust and quality in our each matchstick - Strike with confidence, burn with safety"
  }
];
function getStage(frame) {
  let current = STAGES[0];
  for (const s of STAGES) {
    if (frame >= s.start) current = s;
  }
  return current;
}
function MatchSVG({ frame }) {
  const f = FRAMES[Math.max(0, Math.min(29, frame))];
  const stickTop = 220;
  const stickBottom = 460;
  const stickCx = 100;
  const headTop = stickTop - 34;
  const headRy = 17;
  const headRx = 9;
  const flameBaseY = headTop + 2;
  const flameMaxHeight = 200;
  const fh = f.flameHeight * flameMaxHeight;
  const flameTip = flameBaseY - fh;
  const flameCtrlX = stickCx + f.flickerX;
  const sparkPositions = [
    { x: 112, y: 204 },
    { x: 88, y: 198 },
    { x: 118, y: 195 },
    { x: 82, y: 208 },
    { x: 122, y: 185 },
    { x: 78, y: 188 },
    { x: 115, y: 178 },
    { x: 90, y: 172 }
  ];
  const glowId = "flameGlow";
  const woodGradId = "woodGrad";
  const headGradId = "headGrad";
  const flameGradId = "flameGrad";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 200 500",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      style: {
        overflow: "visible",
        filter: `drop-shadow(0 0 ${f.glowRadius * 0.4}px oklch(0.72 0.22 60 / 0.6))`
      },
      className: "w-full h-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: woodGradId, x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.52 0.08 55)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "30%", stopColor: "oklch(0.62 0.10 52)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "oklch(0.58 0.09 54)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.48 0.07 50)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: headGradId, cx: "50%", cy: "40%", r: "60%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: `oklch(${0.65 + f.headGlow * 0.15} 0.25 28)`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "oklch(0.42 0.22 28)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.32 0.18 28)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: flameGradId,
              x1: "0",
              y1: "1",
              x2: "0",
              y2: "0",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "0%",
                    stopColor: "oklch(0.55 0.25 35)",
                    stopOpacity: f.flameOpacity
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "35%",
                    stopColor: "oklch(0.68 0.28 50)",
                    stopOpacity: f.flameOpacity
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "65%",
                    stopColor: "oklch(0.78 0.26 65)",
                    stopOpacity: f.flameOpacity * 0.9
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.90 0.15 80)", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: glowId, x: "-100%", y: "-100%", width: "300%", height: "300%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: f.glowRadius * 0.25, result: "blur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "blur" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] })
        ] }),
        f.headGlow > 0.2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: stickCx,
            cy: headTop + 10,
            rx: f.headGlow * 28,
            ry: f.headGlow * 22,
            fill: `oklch(0.75 0.25 55 / ${f.headGlow * 0.35})`
          }
        ),
        fh > 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: [
              `M ${stickCx - 10} ${flameBaseY}`,
              `C ${stickCx - 22 + f.flickerX * 0.5} ${flameBaseY - fh * 0.3}`,
              `  ${flameCtrlX - 18} ${flameTip + fh * 0.15}`,
              `  ${flameCtrlX} ${flameTip}`,
              `C ${flameCtrlX + 18} ${flameTip + fh * 0.15}`,
              `  ${stickCx + 22 + f.flickerX * 0.3} ${flameBaseY - fh * 0.3}`,
              `  ${stickCx + 10} ${flameBaseY} Z`
            ].join(" "),
            fill: `url(#${flameGradId})`,
            filter: `url(#${glowId})`,
            style: { transition: "d 40ms linear" }
          }
        ),
        fh > 20 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: [
              `M ${stickCx - 5} ${flameBaseY - 5}`,
              `C ${stickCx - 8 + f.flickerX * 0.3} ${flameBaseY - fh * 0.4}`,
              `  ${flameCtrlX - 5} ${flameTip + fh * 0.25}`,
              `  ${flameCtrlX} ${flameTip + fh * 0.08}`,
              `C ${flameCtrlX + 5} ${flameTip + fh * 0.25}`,
              `  ${stickCx + 8 + f.flickerX * 0.2} ${flameBaseY - fh * 0.4}`,
              `  ${stickCx + 5} ${flameBaseY - 5} Z`
            ].join(" "),
            fill: "oklch(0.96 0.12 85)",
            opacity: f.flameOpacity * 0.55
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: stickCx - 4.5,
            y: stickTop,
            width: 9,
            height: stickBottom - stickTop,
            rx: 4,
            fill: `url(#${woodGradId})`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: stickCx - 2,
            y1: stickTop + 20,
            x2: stickCx - 2,
            y2: stickBottom - 10,
            stroke: "oklch(0.40 0.07 52 / 0.3)",
            strokeWidth: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: stickCx + 1,
            y1: stickTop + 30,
            x2: stickCx + 1,
            y2: stickBottom - 20,
            stroke: "oklch(0.68 0.08 54 / 0.2)",
            strokeWidth: "0.6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: stickCx,
            cy: headTop + headRy,
            rx: headRx,
            ry: headRy,
            fill: `url(#${headGradId})`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: stickCx - 2,
            cy: headTop + 8,
            rx: 4,
            ry: 5,
            fill: `oklch(0.75 0.15 35 / ${0.3 + f.headGlow * 0.4})`
          }
        ),
        sparkPositions.slice(0, f.sparkCount).map((sp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: sp.x,
              cy: sp.y,
              r: 1.8,
              fill: "oklch(0.95 0.22 75)",
              opacity: 0.9
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: sp.x,
              y1: sp.y,
              x2: sp.x + (sp.x - 100) * 0.6,
              y2: sp.y - 8 - idx * 2,
              stroke: "oklch(0.90 0.18 72)",
              strokeWidth: "1",
              opacity: 0.7
            }
          )
        ] }, `spark-${sp.x}-${sp.y}`))
      ]
    }
  );
}
function MatchAnimationSection() {
  const containerRef = reactExports.useRef(null);
  const [frame, setFrame] = reactExports.useState(0);
  const TOTAL_FRAMES = 30;
  reactExports.useEffect(() => {
    let rafId;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(
        0,
        Math.min(1, scrolled / Math.max(sectionHeight, 1))
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
  const progressPct = Math.round(frame / 29 * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref: containerRef,
      className: "relative bg-primary",
      style: { minHeight: "300vh" },
      "data-ocid": "match-animation.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 h-screen flex items-center justify-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse 70% 60% at 50% 40%, oklch(0.28 0.03 35), oklch(0.18 0.02 30))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 transition-opacity duration-300",
            style: {
              background: `radial-gradient(ellipse 50% 45% at 50% 35%, oklch(0.62 0.19 60 / ${FRAMES[frame].headGlow * 0.18}), transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 md:order-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent text-xs tracking-widest uppercase font-semibold", children: "The Craft of Fire" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-3", children: stage.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground text-lg leading-relaxed opacity-90", children: stage.sub })
                ]
              },
              stage.label
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-col gap-2", children: STAGES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 transition-smooth",
                style: { opacity: i <= stageIndex ? 1 : 0.35 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold font-body transition-smooth",
                      style: {
                        borderColor: i <= stageIndex ? "oklch(var(--accent))" : "oklch(var(--primary-foreground) / 0.3)",
                        background: i < stageIndex ? "oklch(var(--accent))" : "transparent",
                        color: i < stageIndex ? "oklch(var(--accent-foreground))" : "oklch(var(--accent))"
                      },
                      children: i < stageIndex ? "✓" : i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-xs tracking-wider uppercase",
                      style: {
                        color: i <= stageIndex ? "oklch(var(--primary-foreground))" : "oklch(var(--primary-foreground) / 0.4)"
                      },
                      children: s.label.replace(/^\d+\. /, "")
                    }
                  )
                ]
              },
              s.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1 bg-primary-foreground/20 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-all duration-100",
                  style: {
                    width: `${progressPct}%`,
                    background: "oklch(var(--accent))"
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-primary-foreground text-xs tabular-nums w-10 text-right opacity-70", children: [
                progressPct,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-primary-foreground text-xs tracking-widest uppercase mt-2 opacity-60", children: "↓ Scroll to ignite" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 md:order-2 flex flex-col justify-end items-center gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative",
              style: { width: "min(260px, 42vw)", height: "min(520px, 72vh)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchSVG, { frame })
            }
          ) })
        ] })
      ] })
    }
  );
}
const WHY_US = [
  {
    icon: Award,
    title: "Best Quality",
    desc: "Premium grade raw materials and strict quality control for every matchbox batch."
  },
  {
    icon: Package,
    title: "Custom Packing",
    desc: "300 & 600 box bundles with stick counts of 25 to 70 — fully customizable."
  },
  {
    icon: Globe,
    title: "Export Ready",
    desc: "Exporting outside India based on dealer and customer requirements."
  },
  {
    icon: Truck,
    title: "Pan-India Supply",
    desc: "Reliable distribution across all major states from our Sivakasi base."
  }
];
const FEATURED_IDS = [1, 2, 3];
function Home() {
  const { data: company } = useCompanyInfo();
  const { data: products } = useProducts();
  const featuredProducts = products.filter((p) => FEATURED_IDS.includes(p.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[96vh] flex items-end justify-start overflow-hidden",
        "data-ocid": "hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/match-hero.dim_1400x900.jpg",
                alt: "Safety matches from Sri Gurusamy Matches Unit",
                className: "w-full h-full object-cover object-center"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(to right, oklch(0.22 0.02 30 / 0.92) 0%, oklch(0.22 0.02 30 / 0.65) 55%, oklch(0.22 0.02 30 / 0.15) 100%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(to top, oklch(0.18 0.02 30 / 0.7) 0%, transparent 45%)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-20 pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              className: "max-w-3xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-accent text-sm font-semibold tracking-[0.12em] uppercase", children: [
                    "Since ",
                    company.foundingYear,
                    " · Sivakasi, India"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "font-display font-bold text-primary-foreground leading-[1.0] tracking-tight mb-4",
                    style: { fontSize: "clamp(2.2rem, 6vw, 5rem)" },
                    children: [
                      "SRI GURUSAMY",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-glow", children: "MATCHES UNIT" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-primary-foreground font-medium leading-snug mb-8 max-w-2xl opacity-95",
                    style: { fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" },
                    children: "LIGHT UP YOUR WORLD WITH OUR SAFEST MATCHES - EVERY STRIKE, SAFE AND BRIGHT"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/products",
                      "data-ocid": "hero.explore_products.primary_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "fire", size: "lg", className: "w-full sm:w-auto", children: [
                        "Explore Products ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "hero.contact_us.button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      className: "w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
                      children: "Get In Touch"
                    }
                  ) })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { y: [0, 8, 0] },
              transition: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.6,
                ease: "easeInOut"
              },
              className: "w-6 h-9 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-1.5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-2 bg-primary-foreground/50 rounded-full" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MatchAnimationSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden py-20 md:py-28",
        "data-ocid": "story.section",
        style: { background: "oklch(0.96 0.01 45)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/factory-heritage.dim_800x600.jpg",
                alt: "Sri Gurusamy factory in Sivakasi",
                className: "w-full h-full object-cover opacity-20"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(to right, oklch(0.96 0.01 45), transparent 30%, oklch(0.96 0.01 45 / 0.4))"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent text-xs font-semibold tracking-widest uppercase", children: "Our Story" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "h2",
                    {
                      className: "font-display font-bold text-foreground leading-tight mb-5",
                      style: { fontSize: "clamp(1.9rem, 4vw, 3.2rem)" },
                      children: [
                        "Crafting Flame Since",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(var(--accent))" }, children: "2007" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-lg leading-relaxed mb-6", children: company.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mb-8", children: [
                    { label: "Founded", value: "2007" },
                    { label: "Based In", value: "Sivakasi, TN" },
                    { label: "Market", value: "Pan India + Export" },
                    { label: "Splint Size", value: "39mm · 12.5mm" }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "bg-card border border-border rounded-lg p-4",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "font-display font-bold text-xl",
                            style: { color: "oklch(var(--accent))" },
                            children: item.value
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-muted-foreground text-xs tracking-wider uppercase mt-0.5", children: item.label })
                      ]
                    },
                    item.label
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "story.read_more.link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "md", children: [
                    "Read Our Story ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: {
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1]
                },
                className: "relative",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "/assets/generated/factory-heritage.dim_800x600.jpg",
                        alt: "Safety matches manufacturing at Sri Gurusamy unit",
                        className: "w-full h-full object-cover"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-elevated", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl text-foreground", children: "17+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground tracking-widest uppercase", children: "Years of Excellence" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -top-4 -right-4 w-20 h-20 rounded-xl rotate-12 -z-10",
                      style: { background: "oklch(var(--accent) / 0.15)" }
                    }
                  )
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 md:py-28",
        style: { background: "oklch(0.93 0.01 45)" },
        "data-ocid": "featured-products.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Crafted Range",
              subtitle: "Precision manufactured safety matches and dipped splints — trusted by dealers across India and exported worldwide."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2", children: featuredProducts.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: {
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              },
              "data-ocid": `featured-products.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, children: [
                product.image && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CardImage,
                  {
                    src: product.image,
                    alt: product.name,
                    className: "h-52"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: product.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "line-clamp-2 mt-1.5", children: product.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/products/$id",
                      params: { id: String(product.id) },
                      className: "inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-smooth hover:gap-2.5",
                      style: { color: "oklch(var(--accent))" },
                      "data-ocid": `featured-products.learn_more.${i + 1}.link`,
                      children: [
                        "Learn More ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  )
                ] })
              ] })
            },
            product.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "mt-12 text-center",
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.3 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "featured-products.view_all.button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "lg", children: [
                "View All Products ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] }) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-16 md:py-20",
        "data-ocid": "why-us.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: WHY_US.map((item, i) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.5 },
              className: "bg-card border border-border rounded-xl p-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-accent/12 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    className: "w-5 h-5",
                    style: { color: "oklch(var(--accent))" }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1.5", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.desc })
              ]
            },
            item.title
          );
        }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden py-20 md:py-24",
        "data-ocid": "cta.section",
        style: { background: "oklch(0.32 0.04 35)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 80% at 80% 50%, oklch(0.62 0.19 60 / 0.12), transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-0 bottom-0 w-2/5 hidden lg:block pointer-events-none overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/match-flame.dim_600x800.jpg",
                alt: "",
                "aria-hidden": "true",
                className: "w-full h-full object-cover opacity-15"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(to right, oklch(0.32 0.04 35), transparent 40%)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              className: "max-w-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display font-bold text-primary-foreground leading-tight mb-4",
                    style: { fontSize: "clamp(2rem, 4vw, 3.2rem)" },
                    children: "Ready to place an order?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground text-lg leading-relaxed mb-8 opacity-90", children: "Get in touch for wholesale pricing, custom packing options, and export enquiries. We serve dealers and distributors across India and internationally." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "cta.get_in_touch.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "fire", size: "lg", className: "w-full sm:w-auto", children: [
                    "Get in Touch ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "cta.view_products.button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      className: "w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
                      children: "View Products"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground text-xs tracking-widest uppercase mb-1 opacity-70", children: "Direct Contact" }),
                  company.phones.map((phone) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:+91${phone}`,
                      className: "font-body text-primary-foreground hover:text-accent transition-smooth text-base font-medium opacity-90",
                      "data-ocid": "cta.phone.link",
                      children: [
                        "+91 ",
                        phone
                      ]
                    },
                    phone
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `mailto:${company.email}`,
                      className: "font-body text-primary-foreground hover:text-accent transition-smooth text-sm mt-1 opacity-85",
                      "data-ocid": "cta.email.link",
                      children: company.email
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  Home
};
