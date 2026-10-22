import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-DlCS8uXG.js";
import { m as motion, B as Button } from "./proxy-DDfmaAs-.js";
import { S as SectionHeading } from "./SectionHeading-DITPKy1c.js";
import { u as useCompanyInfo } from "./useCompanyInfo-CA1SUzuz.js";
import { A as Award, G as Globe } from "./globe-CkhOnc2z.js";
import { C as CircleCheck } from "./circle-check-BWZuNaFX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  [
    "path",
    {
      d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
      key: "1iv0i2"
    }
  ],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const Factory = createLucideIcon("factory", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const milestones = [
  {
    year: "2007",
    title: "Company Founded",
    description: "Sri Gurusamy Matches Unit established in Sivakasi, Tamil Nadu — India's matchmaking capital — with a core mission of quality and safety."
  },
  {
    year: "2010",
    title: "Pan-India Distribution",
    description: "Expanded supply network across all major states, forging reliable dealer partnerships from Kerala to Kashmir."
  },
  {
    year: "2014",
    title: "International Exports Begin",
    description: "Commenced exporting safety matches beyond Indian borders, serving international markets per dealer and customer specifications."
  },
  {
    year: "2018",
    title: "Full Product Range",
    description: "Launched Wax Matches Bundles and premium Dipped Splints — Normal and Carborised Matti varieties — expanding our catalog significantly."
  },
  {
    year: "2024",
    title: "17 Years of Excellence",
    description: "Continuing our heritage of quality manufacturing. Still family-run, still committed to the craftsmanship that defined our founding."
  }
];
const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every matchbox is crafted with precision chemistry and rigorous quality control to ensure safe ignition every time."
  },
  {
    icon: Star,
    title: "Uncompromising Quality",
    description: "From 39mm splints to perfectly dipped match heads, our production standards are built on decades of Sivakasi expertise."
  },
  {
    icon: Globe,
    title: "Reliability & Trust",
    description: "Supplying the best quality safety matches all over India and exporting internationally — meeting every dealer and customer need."
  }
];
const specs = [
  { label: "Splint Length", value: "39mm" },
  { label: "Cutting Size", value: "12.5mm" },
  { label: "Box Packing Options", value: "300 Box & 600 Box" },
  { label: "Match Stick Count", value: "25, 30, 35, 40, 45, 60, 70 sticks" },
  { label: "Splint Types", value: "Normal & Carborised Matti" },
  { label: "Splint Form", value: "Dipped Splints in Loose Form" },
  { label: "Distribution", value: "All Over India" },
  { label: "Export", value: "International on Requirement" }
];
const qualityItems = [
  {
    icon: CircleCheck,
    title: "Normal Matti Splints",
    body: "Traditional poplar wood splints processed for consistent ignition. Available in 39mm length with 12.5mm cut — the standard for reliable safety match boxes."
  },
  {
    icon: CircleCheck,
    title: "Carborised Matti Splints",
    body: "Carbon-treated splints offering enhanced durability and a cleaner, more consistent burn. Preferred for export-grade and premium match products."
  },
  {
    icon: CircleCheck,
    title: "Dipped Splints (Loose Form)",
    body: "Best quality dipped splints supplied in loose form, ready for match-head application. Consistent dip depth ensures reliable strike performance in every batch."
  }
];
function About() {
  const { data: company } = useCompanyInfo();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "about.hero.section",
        className: "relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/factory-heritage.dim_800x600.jpg",
              alt: "",
              "aria-hidden": "true",
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, oklch(1 0 0 / 0.06) 40px, oklch(1 0 0 / 0.06) 41px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-accent/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 md:px-8 max-w-5xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    "data-ocid": "about.since_badge",
                    className: "inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase bg-accent/20 text-accent border border-accent/30",
                    children: [
                      "Since ",
                      company.foundingYear
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5", children: company.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto leading-relaxed uppercase tracking-wide opacity-90", children: company.tagline })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.story.section",
        className: "py-20 md:py-28 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8 max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-elevated", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/generated/factory-heritage.dim_800x600.jpg",
                    alt: "Sri Gurusamy Matches Unit factory heritage in Sivakasi",
                    className: "w-full h-full object-cover aspect-[4/3]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "w-5 h-5 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary-foreground font-semibold text-sm tracking-wide", children: [
                    "Sivakasi, India — Est. ",
                    company.foundingYear
                  ] })
                ] }) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.7, delay: 0.15 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mb-4 text-accent font-semibold tracking-widest text-sm uppercase", children: "Our Story" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6", children: [
                  "Born in India's",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-glow", children: "Matchmaking Heartland" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "Founded in ",
                    company.foundingYear,
                    " in Sivakasi — India's Legendary matches manufacturing hub, We are SRI GURUSAMY MATCHES UNIT - Where Safety meets Spark in every strike was built on this One Unwavering Principle."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Over 17 years, we have grown from a local manufacturer into a trusted supplier serving customers all over India and exporting internationally. Every matchbox that leaves our factory is a testament to the precision, craft, and heritage of Sivakasi." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We manufacture 300 Box and 600 Box packing safety matches, wax match bundles, and premium dipped splints — all crafted with strict adherence to safety standards and customer specifications." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "about.explore_products.button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "fire", size: "lg", children: "Explore Our Products" }) }) })
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.timeline.section",
        className: "py-20 md:py-28 bg-muted/30",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8 max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Journey",
              subtitle: "17 years of building trust, one matchbox at a time."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.timeline.list", className: "relative mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 md:space-y-10", children: milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                "data-ocid": `about.timeline.item.${i + 1}`,
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.55, delay: i * 0.1 },
                className: `relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `flex-1 pb-2 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-subtle hover:shadow-elevated transition-smooth", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-accent font-bold text-lg", children: m.year }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-foreground font-semibold text-lg mt-1 mb-2", children: m.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: m.description })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-sm top-6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block flex-1" })
                ]
              },
              m.year
            )) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.quality.section",
        className: "py-20 md:py-28 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8 max-w-6xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Manufacturing Excellence",
              subtitle: "Experts in Engineering the Perfect Flame that define the Sri Gurusamy standard."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-start mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-subtle", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-accent" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground", children: "Product Specifications" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "data-ocid": "about.specs.list",
                      className: "divide-y divide-border",
                      children: specs.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          "data-ocid": `about.specs.item.${i + 1}`,
                          className: "flex justify-between items-center py-3.5 gap-4",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: spec.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground text-right", children: spec.value })
                          ]
                        },
                        spec.label
                      ))
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.15 },
                className: "space-y-5",
                children: qualityItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `about.quality.item.${i + 1}`,
                    className: "flex gap-4 bg-muted/40 rounded-xl p-5 border border-border",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-accent mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: item.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.body })
                      ] })
                    ]
                  },
                  item.title
                ))
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.values.section",
        className: "py-20 md:py-28 bg-primary text-primary-foreground",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8 max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mb-4 text-accent font-semibold tracking-widest text-sm uppercase", children: "What We Stand For" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-bold leading-tight", children: "Our Core Values" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-0.5 w-16 bg-accent rounded-full mx-auto" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "about.values.list",
              className: "grid md:grid-cols-3 gap-6",
              children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `about.values.item.${i + 1}`,
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: i * 0.12 },
                  className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-7 text-center hover:bg-primary-foreground/10 transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-6 h-6 text-accent" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold mb-3", children: v.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground text-sm leading-relaxed opacity-85", children: v.description })
                  ]
                },
                v.title
              ))
            }
          )
        ] })
      }
    )
  ] });
}
export {
  About
};
