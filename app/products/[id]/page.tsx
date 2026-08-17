import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/ProductDetails";
import { getProduct } from "@/lib/api";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const product = await getProduct(id);

    if (!product) {
      return {
        title: "Product not found",
        description: "The product you're looking for could not be found.",
      };
    }

    return {
      title: product.name,
      description: `View details for ${product.name} in the Aurel catalog.`,
    };
  } catch {
    return {
      title: "Product",
      description: "View product details in the Aurel catalog.",
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
