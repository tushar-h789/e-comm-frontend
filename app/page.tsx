import { Hero } from "@/components/layout/Hero";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <ProductCatalog products={products} />
    </>
  );
}
