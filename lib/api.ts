import type { Product, ProductData } from "@/types/product";

const API_BASE_URL = "https://api.restful-api.dev";

function toProductData(value: unknown): ProductData | null {
  if (value === null || value === undefined) {
    return null;
  }

  if (typeof value === "object" && !Array.isArray(value)) {
    return value as ProductData;
  }

  return null;
}

function normalizeProduct(value: unknown): Product | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const item = value as Record<string, unknown>;
  const hasValidId = typeof item.id === "string" || typeof item.id === "number";

  if (!hasValidId || typeof item.name !== "string") {
    return null;
  }

  return {
    id: String(item.id),
    name: item.name,
    data: toProductData(item.data),
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/objects`);

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const payload: unknown = await response.json();

  if (!Array.isArray(payload)) {
    throw new Error("Failed to load products");
  }

  return payload.flatMap((item) => {
    const product = normalizeProduct(item);
    return product ? [product] : [];
  });
}

export async function getProduct(id: string): Promise<Product | null> {
  const response = await fetch(
    `${API_BASE_URL}/objects/${encodeURIComponent(id)}`,
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load product");
  }

  return normalizeProduct(await response.json());
}
