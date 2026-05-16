import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-graphite-900 bg-graphite-900 text-white hover:border-research-blue hover:bg-research-blue",
  secondary:
    "border-graphite-300 bg-white/70 text-graphite-900 hover:border-research-cyan hover:text-research-blue",
  ghost:
    "border-transparent bg-transparent text-graphite-700 hover:border-graphite-300 hover:bg-white/70 hover:text-graphite-950"
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-research-cyan ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
