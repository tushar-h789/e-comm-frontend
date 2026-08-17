import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata = {
  title: "Product not found",
  description: "The product you're looking for could not be found.",
};

export default function ProductNotFound() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <EmptyState
        title="Product not found"
        description="The product you're looking for could not be found."
      >
        <Link href="/" className={buttonClassName("primary")}>
          Back to Products
        </Link>
      </EmptyState>
    </div>
  );
}
