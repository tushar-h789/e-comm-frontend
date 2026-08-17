import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Headphones, Laptop, Smartphone } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";

const highlights = [
  "Live product data",
  "Honest pricing",
  "Clear specifications",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Curated catalog
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-balance text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            Modern devices, presented with restraint.
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Browse phones, laptops, and audio in a calm storefront. Every
            detail comes from the catalog. If a price is missing, we leave
            it blank.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#products" className={buttonClassName("primary")}>
              Browse products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/#products" className={buttonClassName("secondary")}>
              View the collection
            </Link>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_24px_80px_-32px_rgba(18,17,15,0.35)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <p className="text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase">
                Aurel studio
              </p>
              <p className="text-xs text-muted">Selected devices</p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5">
              <ShowcaseTile
                label="Phones"
                className="col-span-1 min-h-40 bg-linear-to-br from-[#dce8e1] to-[#b9cfc3] sm:min-h-48"
              >
                <span className="h-28 w-14 rounded-[1.2rem] border border-white/80 bg-white/55 shadow-sm" />
                <Smartphone className="absolute right-3 bottom-3 h-4 w-4 text-[#1c3d32]" />
              </ShowcaseTile>

              <ShowcaseTile
                label="Laptops"
                className="min-h-40 bg-linear-to-br from-[#e7e2d6] to-[#cfc6b4] sm:min-h-48"
              >
                <span className="flex w-28 flex-col items-center">
                  <span className="h-16 w-full rounded-t-md border border-white/80 bg-white/55" />
                  <span className="h-1.5 w-[112%] rounded-b-sm bg-white/80" />
                </span>
                <Laptop className="absolute right-3 bottom-3 h-4 w-4 text-[#3b3428]" />
              </ShowcaseTile>

              <ShowcaseTile
                label="Audio"
                className="col-span-2 min-h-28 bg-linear-to-br from-[#e4d6d1] to-[#c9b0a8]"
              >
                <span className="h-16 w-16 rounded-full border border-white/80 bg-white/50 shadow-sm" />
                <Headphones className="absolute right-3 bottom-3 h-4 w-4 text-[#5a332c]" />
              </ShowcaseTile>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseTile({
  label,
  className,
  children,
}: {
  label: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
      <p className="absolute top-3 left-3 text-[0.65rem] font-medium tracking-[0.16em] text-foreground/55 uppercase">
        {label}
      </p>
    </div>
  );
}
