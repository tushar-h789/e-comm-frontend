import { Skeleton } from "@/components/ui/Skeleton";

export function ProductDetailsSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14"
      aria-busy="true"
      aria-label="Loading product details"
    >
      <Skeleton className="h-5 w-36" />

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Skeleton className="aspect-4/3 min-h-64 rounded-3xl" />

        <div>
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="mt-4 h-8 w-28" />
          <Skeleton className="mt-10 h-4 w-40" />
          <div className="mt-4 space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
