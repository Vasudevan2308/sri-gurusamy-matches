import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Spec {
    key: string;
    value: string;
}
export interface Product {
    id: bigint;
    name: string;
    description: string;
    specs: Array<Spec>;
    category: ProductCategory;
}
export interface CompanyInfo {
    tagline: string;
    name: string;
    description: string;
    email: string;
    foundingYear: bigint;
    address: string;
    phones: Array<string>;
}
export enum ProductCategory {
    dipped_splints = "dipped_splints",
    wax_matches = "wax_matches",
    safety_matches = "safety_matches"
}
export interface backendInterface {
    getCompanyInfo(): Promise<CompanyInfo>;
    getProduct(id: bigint): Promise<Product | null>;
    getProducts(): Promise<Array<Product>>;
}
