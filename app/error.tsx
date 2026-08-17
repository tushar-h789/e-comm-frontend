"use client";

import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export default function HomeError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <EmptyState
        title="Unable to load products."
        description="Please try again."
      >
        <Button onClick={retry}>Retry</Button>
      </EmptyState>
    </div>
  );
}
