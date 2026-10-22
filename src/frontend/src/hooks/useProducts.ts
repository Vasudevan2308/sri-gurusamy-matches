import type { Product } from "@/types";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "300 Box Safety Matches",
    description:
      "Premium quality safety matches packed in 300-box bundles. Available with match stick counts of 25, 30, 35, 40, 45, 60 and 70 sticks per box for all household and commercial needs.",
    specs: [
      { key: "Packing", value: "300 boxes per bundle" },
      { key: "Stick Count", value: "25 / 30 / 35 / 40 / 45 / 60 / 70" },
      { key: "Type", value: "Normal & Carbonised Matti Splints" },
      { key: "Length", value: "39 mm" },
      { key: "Cutting Size", value: "12.5 mm" },
    ],
    category: "safety_matches",
    image: "/assets/generated/matchboxes-classic.dim_800x600.jpg",
  },
  {
    id: 2,
    name: "600 Box Safety Matches",
    description:
      "Large-volume safety matches packed in 600-box bundles, ideal for wholesale dealers and export requirements. Consistent quality with reliable flame ignition every time.",
    specs: [
      { key: "Packing", value: "600 boxes per bundle" },
      { key: "Stick Count", value: "25 / 30 / 35 / 40 / 45 / 60 / 70" },
      { key: "Type", value: "Normal & Carbonised Matti Splints" },
      { key: "Length", value: "39 mm" },
      { key: "Cutting Size", value: "12.5 mm" },
    ],
    category: "safety_matches",
    image: "/assets/generated/matches-products.dim_800x600.jpg",
  },
  {
    id: 3,
    name: "Wax Matches Bundles",
    description:
      "Long-lasting wax matches with superior burn quality. Available in multi-stick bundles for extended use applications such as candles, fireplaces and outdoor settings.",
    specs: [
      { key: "Form", value: "Bundles" },
      { key: "Stick Count", value: "25 / 30 / 35 / 40 / 45 / 60 / 70" },
      { key: "Coating", value: "Premium Wax Dipped" },
      { key: "Burn Time", value: "Extended" },
    ],
    category: "wax_matches",
    image: "/assets/generated/wax-matches.dim_800x600.jpg",
  },
  {
    id: 4,
    name: "Dipped Splints (Loose Form)",
    description:
      "Best quality dipped splints in loose form. Available in Normal and Carbonised Matti Splints with precise dimensions — ideal for OEM manufacturers and industrial use.",
    specs: [
      { key: "Form", value: "Loose / Bulk" },
      { key: "Types", value: "Normal & Carbonised Matti Splints" },
      { key: "Length", value: "39 mm" },
      { key: "Cutting Size", value: "12.5 mm" },
    ],
    category: "dipped_splints",
    image: "/assets/generated/match-splints.dim_800x600.jpg",
  },
];

export function useProducts(): { data: Product[]; isLoading: boolean } {
  return { data: PRODUCTS, isLoading: false };
}

export function useProduct(id: number): {
  data: Product | undefined;
  isLoading: boolean;
} {
  const product = PRODUCTS.find((p) => p.id === id);
  return { data: product, isLoading: false };
}
