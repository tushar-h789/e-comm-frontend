import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductVisual } from "@/components/products/ProductVisual";
import type { Product } from "@/types/product";
import { getProductAttributes, getProductPrice } from "@/utils/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const price = getProductPrice(product.data);
  const highlights = getProductAttributes(product.data, { limit: 2 });

  return (
    <article className="min-w-0">
      <Link
        href={`/products/${product.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-border bg-card shadow-sm shadow-black/5 transition duration-200 motion-safe:hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lg hover:shadow-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ProductVisual name={product.name} />

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="line-clamp-2 text-base font-semibold leading-6 text-balance text-foreground">
            {product.name}
          </h3>

          <p
            className={
              price
                ? "text-sm font-medium text-foreground"
                : "text-sm text-muted"
            }
          >
            {price ?? "Price unavailable"}
          </p>

          {highlights.length > 0 ? (
            <p className="line-clamp-2 text-sm leading-6 text-muted">
              {highlights
                .map((attribute) => `${attribute.label} ${attribute.value}`)
                .join(" · ")}
            </p>
          ) : null}

          <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-accent">
            View details
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
