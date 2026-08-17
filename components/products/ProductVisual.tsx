import {
  Box,
  Headphones,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
} from "lucide-react";
import type { ProductCategory } from "@/types/product";
import { getProductCategory } from "@/utils/product";

const visualTheme: Record<
  ProductCategory,
  { background: string; ink: string }
> = {
  phone: {
    background: "linear-gradient(160deg, #dce8e1 0%, #b9cfc3 100%)",
    ink: "#1c3d32",
  },
  laptop: {
    background: "linear-gradient(160deg, #e7e2d6 0%, #cfc6b4 100%)",
    ink: "#3b3428",
  },
  audio: {
    background: "linear-gradient(160deg, #e4d6d1 0%, #c9b0a8 100%)",
    ink: "#5a332c",
  },
  watch: {
    background: "linear-gradient(160deg, #d9dce8 0%, #b4bad0 100%)",
    ink: "#2a3050",
  },
  tablet: {
    background: "linear-gradient(160deg, #dce4ea 0%, #b7c5d0 100%)",
    ink: "#243542",
  },
  foldable: {
    background: "linear-gradient(160deg, #e6ddd2 0%, #cbb8a0 100%)",
    ink: "#4a3724",
  },
  generic: {
    background: "linear-gradient(160deg, #e3e1db 0%, #c5c2b8 100%)",
    ink: "#3f3d37",
  },
};

const categoryIcon = {
  phone: Smartphone,
  laptop: Laptop,
  audio: Headphones,
  watch: Watch,
  tablet: Tablet,
  foldable: Smartphone,
  generic: Box,
};

type ProductVisualProps = {
  name: string;
  size?: "card" | "detail";
};

export function ProductVisual({ name, size = "card" }: ProductVisualProps) {
  const category = getProductCategory(name);
  const theme = visualTheme[category];
  const Icon = categoryIcon[category];
  const iconSize = size === "detail" ? 28 : 20;

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${
        size === "detail" ? "aspect-4/3 min-h-64" : "aspect-4/3"
      }`}
      style={{ background: theme.background }}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/50" />
        <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-black/5" />
      </div>

      <DeviceShape category={category} />

      <div
        className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/75 shadow-sm"
        style={{ color: theme.ink }}
      >
        <Icon size={iconSize} strokeWidth={1.6} aria-hidden="true" />
      </div>

    </div>
  );
}

function DeviceShape({ category }: { category: ProductCategory }) {
  if (category === "laptop") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex w-36 flex-col items-center sm:w-40">
          <div className="h-20 w-full rounded-t-lg border border-white/80 bg-white/55 shadow-sm" />
          <div className="h-2 w-[115%] rounded-b-md bg-white/80" />
        </div>
      </div>
    );
  }

  if (category === "watch") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-20 rounded-[1.6rem] border border-white/80 bg-white/50 shadow-sm" />
      </div>
    );
  }

  if (category === "audio") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 rounded-full border border-white/80 bg-white/45 shadow-sm" />
      </div>
    );
  }

  if (category === "tablet") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-28 w-36 rounded-2xl border border-white/80 bg-white/50 shadow-sm" />
      </div>
    );
  }

  if (category === "foldable") {
    return (
      <div className="absolute inset-0 flex items-center justify-center gap-1">
        <div className="h-28 w-16 rounded-l-2xl border border-white/80 bg-white/50 shadow-sm" />
        <div className="h-28 w-16 rounded-r-2xl border border-white/80 bg-white/50 shadow-sm" />
      </div>
    );
  }

  if (category === "phone") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-16 rounded-[1.3rem] border border-white/80 bg-white/50 shadow-sm" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-20 w-20 rotate-12 rounded-2xl border border-white/80 bg-white/45 shadow-sm" />
    </div>
  );
}
