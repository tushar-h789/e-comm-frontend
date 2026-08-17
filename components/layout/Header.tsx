import Link from "next/link";
import { BrandMark } from "@/components/layout/BrandMark";
import { buttonClassName } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex h-17 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <BrandMark />
          <span className="truncate text-[1.05rem] font-semibold tracking-[-0.03em] text-foreground">
            Aurel
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
        >
          <Link
            href="/#products"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Products
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/#products"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            Products
          </Link>
          <Link
            href="/#products"
            className={`${buttonClassName("primary", "sm")} hidden sm:inline-flex`}
          >
            Browse catalog
          </Link>
        </div>
      </div>
    </header>
  );
}
