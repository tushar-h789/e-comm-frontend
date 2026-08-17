"use client";

import Link from "next/link";
import { Button, buttonClassName } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export default function ProductError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <EmptyState
        title="Unable to load this product."
        description="Please try again."
      >
        <Button onClick={retry}>Retry</Button>
        <Link href="/" className={buttonClassName("secondary")}>
          Back to Products
        </Link>
      </EmptyState>
    </div>
  );
}
