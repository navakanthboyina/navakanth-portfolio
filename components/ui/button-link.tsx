import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { isPlaceholderUrl, withBasePath } from "@/lib/site";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  download,
  external,
  icon,
  className = ""
}: ButtonLinkProps) {
  const disabled = isPlaceholderUrl(href);
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]",
    variant === "primary"
      ? "bg-[var(--accent-blue)] text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)] hover:bg-[var(--accent-blue-strong)]"
      : "",
    variant === "secondary"
      ? "border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-strong)]"
      : "",
    variant === "ghost"
      ? "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
      : "",
    disabled ? "pointer-events-none opacity-55" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={disabled ? undefined : withBasePath(href)}
      className={classes}
      download={download}
      target={external && !disabled ? "_blank" : undefined}
      rel={external && !disabled ? "noreferrer" : undefined}
      aria-disabled={disabled}
      title={disabled ? "Update this URL in data/profile.ts" : undefined}
    >
      {icon}
      {children}
      {external && !icon ? <ExternalLink aria-hidden="true" size={16} /> : null}
    </a>
  );
}
