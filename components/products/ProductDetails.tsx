import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductVisual } from "@/components/products/ProductVisual";
import { buttonClassName } from "@/components/ui/Button";
import type { Product } from "@/types/product";
import { getProductAttributes, getProductPrice } from "@/utils/product";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const price = getProductPrice(product.data);
  const attributes = getProductAttributes(product.data, { includePrice: true });

  return (
    <article className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
      <Link
        href="/#products"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Products
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-sm shadow-black/5">
          <ProductVisual name={product.name} size="detail" />
        </div>

        <div className="min-w-0">
          <h1 className="text-3xl font-semibold tracking-[-0.035em] text-balance text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p
            className={
              price
                ? "mt-4 text-2xl font-medium tracking-tight text-foreground"
                : "mt-4 text-base text-muted"
            }
          >
            {price ?? "Price unavailable"}
          </p>

          <section className="mt-10">
            <h2 className="text-sm font-medium tracking-wide text-muted uppercase">
              Product Information
            </h2>

            {attributes.length > 0 ? (
              <dl className="mt-4 divide-y divide-border border-y border-border">
                {attributes.map((attribute) => (
                  <div
                    key={attribute.key}
                    className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-6"
                  >
                    <dt className="text-sm text-muted">{attribute.label}</dt>
                    <dd className="text-sm leading-6 break-words text-foreground">
                      {attribute.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-4 text-sm leading-6 text-muted">
                No additional product information available.
              </p>
            )}
          </section>

          <Link
            href="/#products"
            className={`${buttonClassName("secondary")} mt-8`}
          >
            Back to Products
          </Link>
        </div>
      </div>
    </article>
  );
}
