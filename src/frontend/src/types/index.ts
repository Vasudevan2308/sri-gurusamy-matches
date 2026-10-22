export type ProductCategory =
  | "safety_matches"
  | "wax_matches"
  | "dipped_splints";

export interface Spec {
  key: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  specs: Spec[];
  category: ProductCategory;
  image?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: string;
  phones: string[];
  email: string;
  foundingYear: number;
  description: string;
}
