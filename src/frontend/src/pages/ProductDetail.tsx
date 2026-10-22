import { Button } from "@/components/ui/AppButton";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { useProduct } from "@/hooks/useProducts";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Flame,
  Layers,
  Package,
} from "lucide-react";
import { motion } from "motion/react";

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  safety_matches: "Safety Matches",
  wax_matches: "Wax Matches",
  dipped_splints: "Dipped Splints",
};

const CATEGORY_BADGE: Record<ProductCategory, string> = {
  safety_matches: "bg-accent/12 text-accent border-accent/25",
  wax_matches: "bg-secondary/20 text-secondary-foreground border-secondary/35",
  dipped_splints: "bg-muted text-muted-foreground border-border",
};

const CATEGORY_ICON: Record<
  ProductCategory,
  React.ComponentType<{ className?: string }>
> = {
  safety_matches: Flame,
  wax_matches: Layers,
  dipped_splints: Package,
};

const CATEGORY_CONTEXT: Record<
  ProductCategory,
  { headline: string; body: string }
> = {
  safety_matches: {
    headline: "Reliable ignition, every single strike.",
    body: "Manufactured using precision carbonised and normal matti splints, our safety matches deliver consistent flame performance for households and industry alike.",
  },
  wax_matches: {
    headline: "Extended burn, superior wax coating.",
    body: "Premium wax dipping ensures a longer, steadier flame — perfect for candles, fireplaces, and outdoor settings across India and beyond.",
  },
  dipped_splints: {
    headline: "Industrial-grade raw splints, in bulk.",
    body: "Supplied in loose bulk form at exact 39mm length and 12.5mm cutting size — trusted by OEM manufacturers and match factories across India.",
  },
};

export function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const { data: product, isLoading } = useProduct(Number(id));

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center py-48"
        data-ocid="product_detail.loading_state"
      >
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!product) {
    return (
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 text-center px-4"
        data-ocid="product_detail.error_state"
      >
        <Package className="w-16 h-16 text-muted-foreground/30" />
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Product Not Found
          </h2>
          <p className="text-muted-foreground">
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
        <Link to="/products" data-ocid="product_detail.back_button">
          <Button variant="primary">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const CategoryIcon = CATEGORY_ICON[product.category];
  const context = CATEGORY_CONTEXT[product.category];

  return (
    <div className="min-h-screen bg-background" data-ocid="product_detail.page">
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav
            className="flex items-center gap-1.5 text-sm"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              data-ocid="product_detail.home.link"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <Link
              to="/products"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              data-ocid="product_detail.products.link"
            >
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-background py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            to="/products"
            data-ocid="product_detail.back_button"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border aspect-[4/3] bg-muted">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <CategoryIcon className="w-24 h-24 text-muted-foreground/20" />
                  </div>
                )}
              </div>
              {/* Decorative ember glow */}
              <div
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full opacity-10 pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.62 0.19 60), transparent 70%)",
                }}
              />
            </motion.div>

            {/* Right — Details */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="flex flex-col"
            >
              {/* Category badge */}
              <div className="mb-4">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border",
                    CATEGORY_BADGE[product.category],
                  )}
                >
                  <CategoryIcon className="w-3.5 h-3.5" />
                  {CATEGORY_LABELS[product.category]}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                {product.description}
              </p>

              {/* Top highlights */}
              <div className="flex flex-col gap-2 mb-8">
                {product.specs.slice(0, 2).map((spec) => (
                  <div key={spec.key} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-foreground">
                      <strong>{spec.key}:</strong>{" "}
                      <span className="text-muted-foreground">
                        {spec.value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Link to="/contact" data-ocid="product_detail.enquire_button">
                  <Button variant="fire" size="lg" className="w-full sm:w-auto">
                    Enquire About This Product{" "}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link
                  to="/products"
                  data-ocid="product_detail.all_products_button"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <ArrowLeft className="w-4 h-4" /> All Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Specifications Table */}
      <section className="bg-muted/40 border-y border-border py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-accent" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Product Specifications
              </h2>
            </div>

            <div
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle"
              data-ocid="product_detail.specs_table"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60 border-b border-border">
                    <th className="text-left px-5 py-3 font-semibold text-foreground w-2/5">
                      Specification
                    </th>
                    <th className="text-left px-5 py-3 font-semibold text-foreground">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr
                      key={spec.key}
                      className={cn(
                        "border-b border-border last:border-0",
                        i % 2 === 0 ? "bg-card" : "bg-muted/20",
                      )}
                    >
                      <td className="px-5 py-3.5 font-medium text-foreground">
                        {spec.key}
                      </td>
                      <td className="px-5 py-3.5 text-muted-foreground">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Context Card */}
      <section className="bg-background py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-subtle"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 shrink-0">
                <CategoryIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {context.headline}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {context.body}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Manufactured by Sri Gurusamy Matches Unit, Sivakasi — Est. 2007
              </p>
              <Link
                to="/contact"
                data-ocid="product_detail.footer_enquire_button"
                className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline transition-smooth"
              >
                Get a Quote <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
