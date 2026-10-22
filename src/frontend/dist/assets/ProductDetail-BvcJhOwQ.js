import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Link, a as cn } from "./index-DlCS8uXG.js";
import { B as Button, m as motion } from "./proxy-DDfmaAs-.js";
import { a as useProduct, P as Package, A as ArrowRight } from "./useProducts-BYrtgom_.js";
import { L as Layers, F as Flame } from "./layers-DZgbu3Xg.js";
import { C as CircleCheck } from "./circle-check-BWZuNaFX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const CATEGORY_LABELS = {
  safety_matches: "Safety Matches",
  wax_matches: "Wax Matches",
  dipped_splints: "Dipped Splints"
};
const CATEGORY_BADGE = {
  safety_matches: "bg-accent/12 text-accent border-accent/25",
  wax_matches: "bg-secondary/20 text-secondary-foreground border-secondary/35",
  dipped_splints: "bg-muted text-muted-foreground border-border"
};
const CATEGORY_ICON = {
  safety_matches: Flame,
  wax_matches: Layers,
  dipped_splints: Package
};
const CATEGORY_CONTEXT = {
  safety_matches: {
    headline: "Reliable ignition, every single strike.",
    body: "Manufactured using precision carbonised and normal matti splints, our safety matches deliver consistent flame performance for households and industry alike."
  },
  wax_matches: {
    headline: "Extended burn, superior wax coating.",
    body: "Premium wax dipping ensures a longer, steadier flame — perfect for candles, fireplaces, and outdoor settings across India and beyond."
  },
  dipped_splints: {
    headline: "Industrial-grade raw splints, in bulk.",
    body: "Supplied in loose bulk form at exact 39mm length and 12.5mm cutting size — trusted by OEM manufacturers and match factories across India."
  }
};
function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const { data: product } = useProduct(Number(id));
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen bg-background flex flex-col items-center justify-center gap-6 text-center px-4",
        "data-ocid": "product_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-16 h-16 text-muted-foreground/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Product Not Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "The product you're looking for doesn't exist or has been removed." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "product_detail.back_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to Products"
          ] }) })
        ]
      }
    );
  }
  const CategoryIcon = CATEGORY_ICON[product.category];
  const context = CATEGORY_CONTEXT[product.category];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "product_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: "flex items-center gap-1.5 text-sm",
        "aria-label": "Breadcrumb",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "text-muted-foreground hover:text-accent transition-colors duration-200",
              "data-ocid": "product_detail.home.link",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/products",
              className: "text-muted-foreground hover:text-accent transition-colors duration-200",
              "data-ocid": "product_detail.products.link",
              children: "Products"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium truncate max-w-[200px]", children: product.name })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/products",
          "data-ocid": "product_detail.back_button",
          className: "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium mb-8 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" }),
            "Back to Products"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -28 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-elevated border border-border aspect-[4/3] bg-muted", children: product.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: product.image,
                  alt: product.name,
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "w-24 h-24 text-muted-foreground/20" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute -bottom-8 -right-8 w-48 h-48 rounded-full opacity-10 pointer-events-none -z-10",
                  style: {
                    background: "radial-gradient(circle, oklch(0.62 0.19 60), transparent 70%)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 28 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.08 },
            className: "flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border",
                    CATEGORY_BADGE[product.category]
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "w-3.5 h-3.5" }),
                    CATEGORY_LABELS[product.category]
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-7", children: product.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 mb-8", children: product.specs.slice(0, 2).map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-accent shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                    spec.key,
                    ":"
                  ] }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: spec.value })
                ] })
              ] }, spec.key)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "product_detail.enquire_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "fire", size: "lg", className: "w-full sm:w-auto", children: [
                  "Enquire About This Product",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/products",
                    "data-ocid": "product_detail.all_products_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "lg",
                        className: "w-full sm:w-auto",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                          " All Products"
                        ]
                      }
                    )
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-y border-border py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-2xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-7 rounded-full bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Product Specifications" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-card border border-border rounded-2xl overflow-hidden shadow-subtle",
              "data-ocid": "product_detail.specs_table",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/60 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 font-semibold text-foreground w-2/5", children: "Specification" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 font-semibold text-foreground", children: "Details" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: product.specs.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: cn(
                      "border-b border-border last:border-0",
                      i % 2 === 0 ? "bg-card" : "bg-muted/20"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 font-medium text-foreground", children: spec.key }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-muted-foreground", children: spec.value })
                    ]
                  },
                  spec.key
                )) })
              ] })
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-subtle",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-accent/10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "w-6 h-6 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: context.headline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: context.body })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Manufactured by Sri Gurusamy Matches Unit, Sivakasi — Est. 2007" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                "data-ocid": "product_detail.footer_enquire_button",
                className: "inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline transition-smooth",
                children: [
                  "Get a Quote ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                ]
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  ProductDetail
};
