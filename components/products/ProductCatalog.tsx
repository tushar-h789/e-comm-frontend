"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductPagination } from "@/components/products/ProductPagination";
import { ProductSearch } from "@/components/products/ProductSearch";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Product } from "@/types/product";

const PRODUCTS_PER_PAGE = 8;

type ProductCatalogProps = {
  products: Product[];
};

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = debouncedQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery),
    );
  }, [products, debouncedQuery]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  function handleQueryChange(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  const productCountLabel =
    filteredProducts.length === 1
      ? "1 product"
      : `${filteredProducts.length} products`;

  return (
    <section
      id="products"
      className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase">
            Catalog
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
            The collection
          </h2>
          <p className="mt-2 text-sm text-muted" aria-live="polite">
            {productCountLabel}
          </p>
        </div>
        <ProductSearch value={query} onChange={handleQueryChange} />
      </div>

      <div className="mt-8">
        {visibleProducts.length > 0 ? (
          <>
            <ProductGrid products={visibleProducts} />
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <EmptyState
            title="No products found"
            description="Try searching with a different product name."
          />
        )}
      </div>
    </section>
  );
}
