import { Button } from "@/components/ui/Button";

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Product pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <Button
        variant="secondary"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {pages.map((page) => {
        const isCurrentPage = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            aria-current={isCurrentPage ? "page" : undefined}
            onClick={() => onPageChange(page)}
            className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              isCurrentPage
                ? "bg-accent text-accent-foreground"
                : "border border-border bg-card text-foreground hover:bg-background"
            }`}
          >
            {page}
          </button>
        );
      })}

      <Button
        variant="secondary"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
