export type ProductData = Record<string, unknown>;

export interface Product {
  id: string;
  name: string;
  data: ProductData | null;
}

export type ProductCategory =
  | "phone"
  | "laptop"
  | "audio"
  | "watch"
  | "tablet"
  | "foldable"
  | "generic";
