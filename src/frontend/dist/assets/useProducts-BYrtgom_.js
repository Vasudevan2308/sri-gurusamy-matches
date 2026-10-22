import { c as createLucideIcon } from "./index-DlCS8uXG.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
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
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode);
const PRODUCTS = [
  {
    id: 1,
    name: "300 Box Safety Matches",
    description: "Premium quality safety matches packed in 300-box bundles. Available with match stick counts of 25, 30, 35, 40, 45, 60 and 70 sticks per box for all household and commercial needs.",
    specs: [
      { key: "Packing", value: "300 boxes per bundle" },
      { key: "Stick Count", value: "25 / 30 / 35 / 40 / 45 / 60 / 70" },
      { key: "Type", value: "Normal & Carbonised Matti Splints" },
      { key: "Length", value: "39 mm" },
      { key: "Cutting Size", value: "12.5 mm" }
    ],
    category: "safety_matches",
    image: "/assets/generated/matchboxes-classic.dim_800x600.jpg"
  },
  {
    id: 2,
    name: "600 Box Safety Matches",
    description: "Large-volume safety matches packed in 600-box bundles, ideal for wholesale dealers and export requirements. Consistent quality with reliable flame ignition every time.",
    specs: [
      { key: "Packing", value: "600 boxes per bundle" },
      { key: "Stick Count", value: "25 / 30 / 35 / 40 / 45 / 60 / 70" },
      { key: "Type", value: "Normal & Carbonised Matti Splints" },
      { key: "Length", value: "39 mm" },
      { key: "Cutting Size", value: "12.5 mm" }
    ],
    category: "safety_matches",
    image: "/assets/generated/matches-products.dim_800x600.jpg"
  },
  {
    id: 3,
    name: "Wax Matches Bundles",
    description: "Long-lasting wax matches with superior burn quality. Available in multi-stick bundles for extended use applications such as candles, fireplaces and outdoor settings.",
    specs: [
      { key: "Form", value: "Bundles" },
      { key: "Stick Count", value: "25 / 30 / 35 / 40 / 45 / 60 / 70" },
      { key: "Coating", value: "Premium Wax Dipped" },
      { key: "Burn Time", value: "Extended" }
    ],
    category: "wax_matches",
    image: "/assets/generated/wax-matches.dim_800x600.jpg"
  },
  {
    id: 4,
    name: "Dipped Splints (Loose Form)",
    description: "Best quality dipped splints in loose form. Available in Normal and Carbonised Matti Splints with precise dimensions — ideal for OEM manufacturers and industrial use.",
    specs: [
      { key: "Form", value: "Loose / Bulk" },
      { key: "Types", value: "Normal & Carbonised Matti Splints" },
      { key: "Length", value: "39 mm" },
      { key: "Cutting Size", value: "12.5 mm" }
    ],
    category: "dipped_splints",
    image: "/assets/generated/match-splints.dim_800x600.jpg"
  }
];
function useProducts() {
  return { data: PRODUCTS, isLoading: false };
}
function useProduct(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  return { data: product, isLoading: false };
}
export {
  ArrowRight as A,
  Package as P,
  useProduct as a,
  useProducts as u
};
