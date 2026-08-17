import { Hero } from "@/components/layout/Hero";
import { ProductListSkeleton } from "@/components/products/ProductListSkeleton";

export default function HomeLoading() {
  return (
    <>
      <Hero />
      <ProductListSkeleton />
    </>
  );
}
