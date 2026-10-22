import { Button } from "@/components/ui/AppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCompanyInfo } from "@/hooks/useCompanyInfo";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Factory,
  Globe,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const milestones = [
  {
    year: "2007",
    title: "Company Founded",
    description:
      "Sri Gurusamy Matches Unit established in Sivakasi, Tamil Nadu — India's matchmaking capital — with a core mission of quality and safety.",
  },
  {
    year: "2010",
    title: "Pan-India Distribution",
    description:
      "Expanded supply network across all major states, forging reliable dealer partnerships from Kerala to Kashmir.",
  },
  {
    year: "2014",
    title: "International Exports Begin",
    description:
      "Commenced exporting safety matches beyond Indian borders, serving international markets per dealer and customer specifications.",
  },
  {
    year: "2018",
    title: "Full Product Range",
    description:
      "Launched Wax Matches Bundles and premium Dipped Splints — Normal and Carborised Matti varieties — expanding our catalog significantly.",
  },
  {
    year: "2024",
    title: "17 Years of Excellence",
    description:
      "Continuing our heritage of quality manufacturing. Still family-run, still committed to the craftsmanship that defined our founding.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every matchbox is crafted with precision chemistry and rigorous quality control to ensure safe ignition every time.",
  },
  {
    icon: Star,
    title: "Uncompromising Quality",
    description:
      "From 39mm splints to perfectly dipped match heads, our production standards are built on decades of Sivakasi expertise.",
  },
  {
    icon: Globe,
    title: "Reliability & Trust",
    description:
      "Supplying the best quality safety matches all over India and exporting internationally — meeting every dealer and customer need.",
  },
];

const specs = [
  { label: "Splint Length", value: "39mm" },
  { label: "Cutting Size", value: "12.5mm" },
  { label: "Box Packing Options", value: "300 Box & 600 Box" },
  { label: "Match Stick Count", value: "25, 30, 35, 40, 45, 60, 70 sticks" },
  { label: "Splint Types", value: "Normal & Carborised Matti" },
  { label: "Splint Form", value: "Dipped Splints in Loose Form" },
  { label: "Distribution", value: "All Over India" },
  { label: "Export", value: "International on Requirement" },
];

const qualityItems = [
  {
    icon: CheckCircle2,
    title: "Normal Matti Splints",
    body: "Traditional poplar wood splints processed for consistent ignition. Available in 39mm length with 12.5mm cut — the standard for reliable safety match boxes.",
  },
  {
    icon: CheckCircle2,
    title: "Carborised Matti Splints",
    body: "Carbon-treated splints offering enhanced durability and a cleaner, more consistent burn. Preferred for export-grade and premium match products.",
  },
  {
    icon: CheckCircle2,
    title: "Dipped Splints (Loose Form)",
    body: "Best quality dipped splints supplied in loose form, ready for match-head application. Consistent dip depth ensures reliable strike performance in every batch.",
  },
];

export function About() {
  const { data: company } = useCompanyInfo();

  return (
    <div data-ocid="about.page" className="overflow-hidden">
      {/* Hero Banner */}
      <section
        data-ocid="about.hero.section"
        className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/generated/factory-heritage.dim_800x600.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, oklch(1 0 0 / 0.06) 40px, oklch(1 0 0 / 0.06) 41px)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/40" />

        <div className="relative container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              data-ocid="about.since_badge"
              className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase bg-accent/20 text-accent border border-accent/30"
            >
              Since {company.foundingYear}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
              {company.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto leading-relaxed uppercase tracking-wide opacity-90">
              {company.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section
        data-ocid="about.story.section"
        className="py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/generated/factory-heritage.dim_800x600.jpg"
                  alt="Sri Gurusamy Matches Unit factory heritage in Sivakasi"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <Factory className="w-5 h-5 text-accent" />
                    <span className="text-primary-foreground font-semibold text-sm tracking-wide">
                      Sivakasi, India — Est. {company.foundingYear}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="inline-block mb-4 text-accent font-semibold tracking-widest text-sm uppercase">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Born in India's
                <br />
                <span className="text-accent-glow">Matchmaking Heartland</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in {company.foundingYear} in Sivakasi — India's
                  Legendary matches manufacturing hub, We are SRI GURUSAMY
                  MATCHES UNIT - Where Safety meets Spark in every strike was
                  built on this One Unwavering Principle.
                </p>
                <p>
                  Over 17 years, we have grown from a local manufacturer into a
                  trusted supplier serving customers all over India and
                  exporting internationally. Every matchbox that leaves our
                  factory is a testament to the precision, craft, and heritage
                  of Sivakasi.
                </p>
                <p>
                  We manufacture 300 Box and 600 Box packing safety matches, wax
                  match bundles, and premium dipped splints — all crafted with
                  strict adherence to safety standards and customer
                  specifications.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/products" data-ocid="about.explore_products.button">
                  <Button variant="fire" size="lg">
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        data-ocid="about.timeline.section"
        className="py-20 md:py-28 bg-muted/30"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <SectionHeading
            title="Our Journey"
            subtitle="17 years of building trust, one matchbox at a time."
          />
          <div data-ocid="about.timeline.list" className="relative mt-4">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-8 md:space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  data-ocid={`about.timeline.item.${i + 1}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`relative flex gap-8 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 pb-2 pl-14 md:pl-0 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-5 shadow-subtle hover:shadow-elevated transition-smooth">
                      <span className="font-display text-accent font-bold text-lg">
                        {m.year}
                      </span>
                      <h3 className="font-display text-foreground font-semibold text-lg mt-1 mb-2">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-sm top-6" />
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Quality */}
      <section
        data-ocid="about.quality.section"
        className="py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeading
            title="Manufacturing Excellence"
            subtitle="Experts in Engineering the Perfect Flame that define the Sri Gurusamy standard."
          />
          <div className="grid md:grid-cols-2 gap-10 items-start mt-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-subtle">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Product Specifications
                  </h3>
                </div>
                <div
                  data-ocid="about.specs.list"
                  className="divide-y divide-border"
                >
                  {specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      data-ocid={`about.specs.item.${i + 1}`}
                      className="flex justify-between items-center py-3.5 gap-4"
                    >
                      <span className="text-muted-foreground text-sm">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-sm text-foreground text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5"
            >
              {qualityItems.map((item, i) => (
                <div
                  key={item.title}
                  data-ocid={`about.quality.item.${i + 1}`}
                  className="flex gap-4 bg-muted/40 rounded-xl p-5 border border-border"
                >
                  <item.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        data-ocid="about.values.section"
        className="py-20 md:py-28 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-accent font-semibold tracking-widest text-sm uppercase">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Our Core Values
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-accent rounded-full mx-auto" />
          </div>
          <div
            data-ocid="about.values.list"
            className="grid md:grid-cols-3 gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                data-ocid={`about.values.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-7 text-center hover:bg-primary-foreground/10 transition-smooth"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {v.title}
                </h3>
                <p className="text-primary-foreground text-sm leading-relaxed opacity-85">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
