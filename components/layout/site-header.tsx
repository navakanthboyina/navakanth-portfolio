"use client";

import { Download, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import type { navItems } from "@/data/profile";
import { profile } from "@/data/profile";
import { createMailto, withBasePath } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type SiteHeaderProps = {
  activeSection: string;
  navItems: typeof navItems;
};

export function SiteHeader({ activeSection, navItems }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
          onClick={closeMenu}
        >
          <span className="grid h-10 w-10 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-sm font-bold text-[var(--accent-cyan)]">
            NB
          </span>
          <span className="hidden min-[420px]:block">
            <span className="block text-sm font-semibold text-[var(--text)]">{profile.name}</span>
            <span className="block text-xs text-[var(--muted)]">Dynamics 365 Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)] ${
                activeSection === item.id
                  ? "bg-[var(--surface-strong)] text-[var(--text)]"
                  : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={createMailto(profile.email)}
            className="hidden h-10 w-10 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition hover:border-[var(--accent-cyan)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)] sm:grid"
            aria-label="Email Navakanth Boyina"
            title="Email"
          >
            <Mail aria-hidden="true" size={18} />
          </a>
          <a
            href={withBasePath(profile.resumePath)}
            download
            className="hidden h-10 w-10 place-items-center rounded-md border border-[var(--line)] bg-[var(--accent-blue)] text-white transition hover:bg-[var(--accent-blue-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)] sm:grid"
            aria-label="Download resume"
            title="Download resume"
          >
            <Download aria-hidden="true" size={18} />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`rounded-md px-3 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)] ${
                  activeSection === item.id
                    ? "bg-[var(--surface-strong)] text-[var(--text)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={withBasePath(profile.resumePath)}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent-blue)] px-3 py-3 text-sm font-semibold text-white"
              >
                <Download aria-hidden="true" size={17} />
                Resume
              </a>
              <a
                href={createMailto(profile.email)}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-3 text-sm font-semibold text-[var(--text)]"
              >
                <Mail aria-hidden="true" size={17} />
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
