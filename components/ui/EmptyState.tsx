import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <div className="rounded-[1.6rem] border border-dashed border-border bg-card px-6 py-16 text-center">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
        {description}
      </p>
      {children ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {children}
        </div>
      ) : null}
    </div>
  );
}
