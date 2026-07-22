import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/profile";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-12 text-[var(--text)]">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center gap-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
          404
        </p>
        <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">
          This portfolio page is not available.
        </h1>
        <p className="max-w-2xl text-lg text-[var(--muted)]">
          The page may have moved, or the link may no longer be active.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--text)] shadow-sm transition hover:border-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
        >
          <ArrowLeft aria-hidden="true" size={18} />
          Return to {profile.name}
        </Link>
      </div>
    </main>
  );
}
