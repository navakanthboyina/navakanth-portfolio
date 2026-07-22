import type { ReactNode } from "react";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import type { profile } from "@/data/profile";
import { createMailto, isPlaceholderUrl } from "@/lib/site";

type SiteFooterProps = {
  profile: typeof profile;
};

export function SiteFooter({ profile }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--footer-bg)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-base font-semibold text-[var(--text)]">{profile.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{profile.role}</p>
          <p className="mt-2 text-xs text-[var(--muted)]">
            © {year} {profile.name}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <FooterLink href={profile.social.github} label="GitHub">
            <Code2 aria-hidden="true" size={18} />
          </FooterLink>
          <FooterLink href={profile.social.linkedin} label="LinkedIn">
            <BriefcaseBusiness aria-hidden="true" size={18} />
          </FooterLink>
          <FooterLink href={createMailto(profile.email)} label="Email">
            <Mail aria-hidden="true" size={18} />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const disabled = isPlaceholderUrl(href);

  return (
    <a
      href={disabled ? undefined : href}
      target={href.startsWith("http") && !disabled ? "_blank" : undefined}
      rel={href.startsWith("http") && !disabled ? "noreferrer" : undefined}
      aria-disabled={disabled}
      title={disabled ? "Update this URL in data/profile.ts" : label}
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent-cyan)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)] ${
        disabled ? "pointer-events-none opacity-55" : ""
      }`}
    >
      {children}
      <span>{label}</span>
    </a>
  );
}
