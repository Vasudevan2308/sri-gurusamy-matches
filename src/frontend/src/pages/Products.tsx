import { Button } from "@/components/ui/AppButton";
import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/ui/AppCard";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useProducts } from "@/hooks/useProducts";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Flame,
  Layers,
  Package,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  safety_matches: "Safety Matches",
  wax_matches: "Wax Matches",
  dipped_splints: "Dipped Splints",
};

const CATEGORY_ICON: Record<
  ProductCategory,
  React.ComponentType<{ className?: string }>
> = {
  safety_matches: Flame,
  wax_matches: Layers,
  dipped_splints: Package,
};

const CATEGORY_BADGE: Record<ProductCategory, string> = {
  safety_matches: "bg-accent/12 text-accent border-accent/25",
  wax_matches: "bg-secondary/20 text-secondary-foreground border-secondary/35",
  dipped_splints: "bg-muted text-muted-foreground border-border",
};

type FilterKey = "all" | ProductCategory;

const FILTERS: { label: string; value: FilterKey }[] = [
  { label: "All Products", value: "all" },
  { label: "Safety Matches", value: "safety_matches" },
  { label: "Wax Matches", value: "wax_matches" },
  { label: "Dipped Splints", value: "dipped_splints" },
];

export function Products() {
  const { data: products, isLoading } = useProducts();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen" data-ocid="products.page">
      {/* Page Hero */}
      <section className="bg-primary py-16 md:py-20 overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 90% 50%, oklch(0.62 0.19 60 / 0.18), transparent)",
          }}
        />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-0.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                Our Range
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3 leading-tight">
              Our Products
            </h1>
            <p className="text-primary-foreground text-base md:text-lg max-w-xl leading-relaxed opacity-90">
              Premium quality safety matches, wax matches, and dipped splints —
              crafted with precision in Sivakasi since 2007 and trusted across
              India and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-20 bg-card/95 backdrop-blur-sm border-b border-border shadow-subtle">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0 mr-1" />
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                data-ocid={`products.filter.${f.value}`}
                type="button"
                className={cn(
                  "shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-smooth whitespace-nowrap",
                  activeFilter === f.value
                    ? "bg-accent text-accent-foreground border-accent shadow-subtle"
                    : "bg-transparent text-muted-foreground border-border hover:border-accent/40 hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section
        className="bg-background py-14 md:py-20"
        data-ocid="products.grid.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Our Crafted Range"
            subtitle="From 300-box bundles to bulk dipped splints — every product engineered for reliability and exported worldwide."
          />

          {isLoading ? (
            <div
              className="flex flex-col items-center justify-center py-24 gap-4"
              data-ocid="products.loading_state"
            >
              <LoadingSpinner size="lg" />
              <p className="text-muted-foreground text-sm">Loading products…</p>
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 gap-4 text-center"
              data-ocid="products.empty_state"
            >
              <Package className="w-12 h-12 text-muted-foreground/30" />
              <p className="text-muted-foreground">
                No products in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="text-accent text-sm font-medium hover:underline transition-smooth"
              >
                View all products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((product, i) => {
                const CategoryIcon = CATEGORY_ICON[product.category];
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    data-ocid={`products.item.${i + 1}`}
                    className="h-full"
                  >
                    <Card hover className="h-full flex flex-col group">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        {product.image ? (
                          <CardImage
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full"
                          />
                        ) : (
                          <div className="h-full w-full bg-muted flex items-center justify-center">
                            <CategoryIcon className="w-14 h-14 text-muted-foreground/25" />
                          </div>
                        )}
                        {/* Badge on image */}
                        <div className="absolute top-3 left-3">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border",
                              CATEGORY_BADGE[product.category],
                            )}
                          >
                            <CategoryIcon className="w-3 h-3" />
                            {CATEGORY_LABELS[product.category]}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <CardBody className="flex flex-col flex-1">
                        <CardTitle className="mb-1.5 leading-snug">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 flex-1">
                          {product.description}
                        </CardDescription>

                        {/* Key Specs */}
                        <ul className="mt-3.5 space-y-1 border-t border-border pt-3.5">
                          {product.specs.slice(0, 3).map((spec) => (
                            <li
                              key={spec.key}
                              className="flex items-start gap-2 text-xs"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              <span className="text-muted-foreground">
                                <span className="font-semibold text-foreground">
                                  {spec.key}:
                                </span>{" "}
                                {spec.value}
                              </span>
                            </li>
                          ))}
                          {product.specs.length > 3 && (
                            <li className="text-xs text-muted-foreground pl-3.5">
                              +{product.specs.length - 3} more specs
                            </li>
                          )}
                        </ul>

                        {/* CTA */}
                        <Link
                          to="/products/$id"
                          params={{ id: String(product.id) }}
                          className="mt-4"
                          data-ocid={`products.item.${i + 1}.link`}
                        >
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-full"
                          >
                            View Details <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="bg-muted/40 border-t border-border py-14"
        data-ocid="products.cta.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto text-center sm:text-left"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1.5">
                Need Custom Packing or Bulk Orders?
              </h2>
              <p className="text-muted-foreground text-sm max-w-md">
                We customise box counts, bundle sizes, and specifications for
                dealers and exporters all over India.
              </p>
            </div>
            <Link
              to="/contact"
              data-ocid="products.contact.button"
              className="shrink-0"
            >
              <Button variant="fire" size="lg">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
