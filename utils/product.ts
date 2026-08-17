import type { ProductCategory, ProductData } from "@/types/product";
import { formatLabel, formatPrice, formatValue } from "@/utils/format";

export interface ProductAttribute {
  key: string;
  label: string;
  value: string;
}

function findPriceValue(data: ProductData | null): unknown {
  if (!data) {
    return undefined;
  }

  const priceEntry = Object.entries(data).find(
    ([key]) => key.toLowerCase() === "price",
  );

  return priceEntry?.[1];
}

export function getProductPrice(data: ProductData | null): string | null {
  return formatPrice(findPriceValue(data));
}

export function getProductAttributes(
  data: ProductData | null,
  options?: { includePrice?: boolean; limit?: number },
): ProductAttribute[] {
  if (!data) {
    return [];
  }

  const includePrice = options?.includePrice ?? false;
  const limit = options?.limit;

  const attributes = Object.entries(data)
    .filter(([key]) => includePrice || key.toLowerCase() !== "price")
    .map(([key, value]) => ({
      key,
      label: formatLabel(key),
      value:
        key.toLowerCase() === "price"
          ? (formatPrice(value) ?? formatValue(value))
          : formatValue(value),
    }));

  return typeof limit === "number" ? attributes.slice(0, limit) : attributes;
}

export function getProductCategory(name: string): ProductCategory {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes("fold")) {
    return "foldable";
  }

  if (normalizedName.includes("macbook") || normalizedName.includes("laptop")) {
    return "laptop";
  }

  if (
    normalizedName.includes("airpods") ||
    normalizedName.includes("beats") ||
    normalizedName.includes("headphone")
  ) {
    return "audio";
  }

  if (normalizedName.includes("watch")) {
    return "watch";
  }

  if (normalizedName.includes("ipad") || normalizedName.includes("tablet")) {
    return "tablet";
  }

  if (
    normalizedName.includes("iphone") ||
    normalizedName.includes("pixel") ||
    normalizedName.includes("galaxy") ||
    normalizedName.includes("phone")
  ) {
    return "phone";
  }

  return "generic";
}
