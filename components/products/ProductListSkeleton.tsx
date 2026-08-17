import { Skeleton } from "@/components/ui/Skeleton";

export function ProductListSkeleton() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
      aria-busy="true"
      aria-label="Loading products"
    >
      <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Skeleton className="h-3 w-16" />
          <Skeleton className="mt-3 h-9 w-52" />
          <Skeleton className="mt-3 h-4 w-24" />
        </div>
        <Skeleton className="h-12 w-full rounded-full sm:w-64" />
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }, (_, index) => (
          <li key={index} className="min-w-0">
            <div className="overflow-hidden rounded-[1.4rem] border border-border bg-card">
              <Skeleton className="aspect-4/3 rounded-none" />
              <div className="space-y-3 p-5">
                <Skeleton className="h-5 w-4/5" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
