import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as cn, L as Link } from "./index-DlCS8uXG.js";
import { m as motion, B as Button } from "./proxy-DDfmaAs-.js";
import { C as Card, a as CardImage, b as CardBody, c as CardTitle, d as CardDescription } from "./AppCard-D47dFLI6.js";
import { S as SectionHeading } from "./SectionHeading-DITPKy1c.js";
import { P as Package, A as ArrowRight, u as useProducts } from "./useProducts-BYrtgom_.js";
import { L as Layers, F as Flame } from "./layers-DZgbu3Xg.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const CATEGORY_LABELS = {
  safety_matches: "Safety Matches",
  wax_matches: "Wax Matches",
  dipped_splints: "Dipped Splints"
};
const CATEGORY_ICON = {
  safety_matches: Flame,
  wax_matches: Layers,
  dipped_splints: Package
};
const CATEGORY_BADGE = {
  safety_matches: "bg-accent/12 text-accent border-accent/25",
  wax_matches: "bg-secondary/20 text-secondary-foreground border-secondary/35",
  dipped_splints: "bg-muted text-muted-foreground border-border"
};
const FILTERS = [
  { label: "All Products", value: "all" },
  { label: "Safety Matches", value: "safety_matches" },
  { label: "Wax Matches", value: "wax_matches" },
  { label: "Dipped Splints", value: "dipped_splints" }
];
function Products() {
  const { data: products } = useProducts();
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const filtered = activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", "data-ocid": "products.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-primary py-16 md:py-20 overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: {
            background: "radial-gradient(ellipse 60% 80% at 90% 50%, oklch(0.62 0.19 60 / 0.18), transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-0.5 rounded-full bg-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-xs font-semibold uppercase tracking-widest", children: "Our Range" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3 leading-tight", children: "Our Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground text-base md:text-lg max-w-xl leading-relaxed opacity-90", children: "Premium quality safety matches, wax matches, and dipped splints — crafted with precision in Sivakasi since 2007 and trusted across India and beyond." })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 bg-card/95 backdrop-blur-sm border-b border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4 text-muted-foreground shrink-0 mr-1" }),
      FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveFilter(f.value),
          "data-ocid": `products.filter.${f.value}`,
          type: "button",
          className: cn(
            "shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-smooth whitespace-nowrap",
            activeFilter === f.value ? "bg-accent text-accent-foreground border-accent shadow-subtle" : "bg-transparent text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
          ),
          children: f.label
        },
        f.value
      ))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-14 md:py-20",
        "data-ocid": "products.grid.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Crafted Range",
              subtitle: "From 300-box bundles to bulk dipped splints — every product engineered for reliability and exported worldwide."
            }
          ),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-24 gap-4 text-center",
              "data-ocid": "products.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 text-muted-foreground/30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No products in this category." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveFilter("all"),
                    className: "text-accent text-sm font-medium hover:underline transition-smooth",
                    children: "View all products"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8", children: filtered.map((product, i) => {
            const CategoryIcon = CATEGORY_ICON[product.category];
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 28 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1, duration: 0.5 },
                "data-ocid": `products.item.${i + 1}`,
                className: "h-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, className: "h-full flex flex-col group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[4/3]", children: [
                    product.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CardImage,
                      {
                        src: product.image,
                        alt: product.name,
                        className: "h-full w-full"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "w-14 h-14 text-muted-foreground/25" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border",
                          CATEGORY_BADGE[product.category]
                        ),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "w-3 h-3" }),
                          CATEGORY_LABELS[product.category]
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "flex flex-col flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "mb-1.5 leading-snug", children: product.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "line-clamp-2 flex-1", children: product.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3.5 space-y-1 border-t border-border pt-3.5", children: [
                      product.specs.slice(0, 3).map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-2 text-xs",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                                spec.key,
                                ":"
                              ] }),
                              " ",
                              spec.value
                            ] })
                          ]
                        },
                        spec.key
                      )),
                      product.specs.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground pl-3.5", children: [
                        "+",
                        product.specs.length - 3,
                        " more specs"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/products/$id",
                        params: { id: String(product.id) },
                        className: "mt-4",
                        "data-ocid": `products.item.${i + 1}.link`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "primary",
                            size: "sm",
                            className: "w-full",
                            children: [
                              "View Details ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                            ]
                          }
                        )
                      }
                    )
                  ] })
                ] })
              },
              product.id
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 border-t border-border py-14",
        "data-ocid": "products.cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto text-center sm:text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-1.5", children: "Need Custom Packing or Bulk Orders?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-md", children: "We customise box counts, bundle sizes, and specifications for dealers and exporters all over India." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  "data-ocid": "products.contact.button",
                  className: "shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "fire", size: "lg", children: [
                    "Enquire Now ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ] })
                }
              )
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  Products
};
