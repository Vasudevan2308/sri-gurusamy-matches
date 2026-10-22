import { j as jsxRuntimeExports, a as cn } from "./index-DlCS8uXG.js";
function SectionHeading({
  title,
  subtitle,
  centered = true,
  accent = false,
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mb-10 md:mb-14", centered && "text-center", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
          accent ? "text-accent-glow" : "text-foreground"
        ),
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed", children: subtitle }),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "mt-4 h-0.5 w-16 bg-accent rounded-full",
          centered && "mx-auto"
        )
      }
    )
  ] });
}
export {
  SectionHeading as S
};
