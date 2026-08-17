import { Search } from "lucide-react";

type ProductSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ProductSearch({ value, onChange }: ProductSearchProps) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
      <input
        id="product-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products..."
        autoComplete="off"
        className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-10 text-sm text-foreground shadow-sm shadow-black/4 placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
    </div>
  );
}
