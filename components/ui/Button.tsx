import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "sm";

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-[-0.01em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const sizeClassName: Record<ButtonSize, string> = {
  md: "px-5 py-2.5",
  sm: "px-4 py-2",
};

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-sm shadow-black/10 hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  secondary:
    "border border-border bg-card text-foreground hover:border-foreground/20 hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
) {
  return `${baseClassName} ${sizeClassName[size]} ${variantClassName[variant]}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${buttonClassName(variant, size)} ${className}`}
      {...props}
    />
  );
}
