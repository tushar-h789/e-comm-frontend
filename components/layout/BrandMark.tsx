type BrandMarkProps = {
  size?: "sm" | "md";
};

export function BrandMark({ size = "md" }: BrandMarkProps) {
  const markSize = size === "sm" ? "h-8 w-8 text-[0.95rem]" : "h-9 w-9 text-base";

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-xl bg-accent font-semibold tracking-tight text-accent-foreground ${markSize}`}
    >
      A
    </span>
  );
}
