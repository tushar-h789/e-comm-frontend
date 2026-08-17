import Link from "next/link";
import { BrandMark } from "@/components/layout/BrandMark";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,0.7fr))]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <BrandMark size="sm" />
            <p className="text-[1.05rem] font-semibold tracking-[-0.03em] text-foreground">
              Aurel
            </p>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">
            A modern technology catalog for phones, laptops, and audio.
            Clear specifications. Honest pricing. Nothing extra.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Catalog
          </p>
          <Link
            href="/#products"
            className="mt-4 inline-block text-sm text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Products
          </Link>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Store
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Aurel is a focused product catalog. Browse the collection and
            open any device for its full details.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Aurel. All rights reserved.</p>
          <p>A simple catalog for modern devices.</p>
        </div>
      </div>
    </footer>
  );
}
