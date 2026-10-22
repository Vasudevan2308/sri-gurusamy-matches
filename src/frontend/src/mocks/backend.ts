import type { backendInterface, CompanyInfo, Product, ProductCategory } from "../backend";

const mockCompanyInfo: CompanyInfo = {
  name: "Sri Gurusamy Matches Unit",
  tagline: "Light Up Your World With Our Safety Matches Safely",
  description:
    "We are in the Market Since 2007 Manufacturing and Supplying the Best Quality Safety Matches All Over India and Exporting Outside India Based on the requirement of Dealers and Customers.",
  foundingYear: BigInt(2007),
  address: "3/760-B, Naranapuram Road, Anuppankulam, Sivakasi - 626 189",
  phones: ["9443375091", "9443375191", "9489311091"],
  email: "srigurusamymatchesunit@gmail.com",
};

const mockProducts: Product[] = [
  {
    id: BigInt(1),
    name: "Safety Matches 300 Box Packing",
    description:
      "Premium safety matches in 300 box packing. Match sticks counting varies from 25, 30, 35, 40, 45, 60, 70 sticks per box.",
    category: "safety_matches" as unknown as ProductCategory,
    specs: [
      { key: "Packing", value: "300 Box" },
      { key: "Stick Count", value: "25–70 per box" },
      { key: "Splint", value: "Normal and Carborised Matti" },
    ],
  },
  {
    id: BigInt(2),
    name: "Safety Matches 600 Box Packing",
    description:
      "High-volume 600 box packing safety matches, ideal for bulk orders and export. Available in various stick counts.",
    category: "safety_matches" as unknown as ProductCategory,
    specs: [
      { key: "Packing", value: "600 Box" },
      { key: "Stick Count", value: "25–70 per box" },
      { key: "Length", value: "39mm" },
    ],
  },
  {
    id: BigInt(3),
    name: "Wax Matches Bundle",
    description:
      "Premium wax matches bundled in matchbox with match sticks. Best for outdoor and industrial use.",
    category: "wax_matches" as unknown as ProductCategory,
    specs: [
      { key: "Type", value: "Wax Matches" },
      { key: "Format", value: "Bundle" },
      { key: "Cutting Size", value: "12.5mm" },
    ],
  },
  {
    id: BigInt(4),
    name: "Dipped Splints (Loose Form)",
    description:
      "Best quality dipped splints in loose form with Normal and Carborised Matti splints. 39mm length, 12.5mm cutting sizes.",
    category: "dipped_splints" as unknown as ProductCategory,
    specs: [
      { key: "Form", value: "Loose" },
      { key: "Length", value: "39mm" },
      { key: "Cutting Size", value: "12.5mm" },
    ],
  },
];

export const mockBackend: backendInterface = {
  getCompanyInfo: async () => mockCompanyInfo,
  getProducts: async () => mockProducts,
  getProduct: async (id: bigint) => mockProducts.find((p) => p.id === id) ?? null,
};
