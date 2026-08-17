import type { Product } from "@/types/product";

const API_BASE_URL = "https://api.restful-api.dev";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/objects`);

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  return response.json();
}

export async function getProduct(id: string): Promise<Product | null> {
  const response = await fetch(`${API_BASE_URL}/objects/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load product");
  }

  return response.json();
}
