import { j as jsxRuntimeExports, a as cn } from "./index-DlCS8uXG.js";
function Card({ className, children, hover = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "bg-card border border-border rounded-lg overflow-hidden",
        hover && "transition-smooth hover:shadow-elevated hover:-translate-y-1 cursor-pointer",
        className
      ),
      children
    }
  );
}
function CardImage({
  src,
  alt,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("overflow-hidden", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt,
      className: "w-full h-full object-cover transition-smooth hover:scale-105"
    }
  ) });
}
function CardBody({
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("p-5", className), children });
}
function CardTitle({
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h3",
    {
      className: cn(
        "font-display text-lg font-semibold text-foreground leading-tight",
        className
      ),
      children
    }
  );
}
function CardDescription({
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: cn(
        "text-muted-foreground text-sm leading-relaxed mt-1.5",
        className
      ),
      children
    }
  );
}
export {
  Card as C,
  CardImage as a,
  CardBody as b,
  CardTitle as c,
  CardDescription as d
};
