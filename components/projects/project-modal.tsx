"use client";

import { Download, ExternalLink, Printer, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";
import { confidentialityNote } from "@/data/projects";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="mx-auto max-w-5xl rounded-xl border border-[var(--line)] bg-[var(--bg)] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] p-4 backdrop-blur-xl sm:p-6">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-cyan)]">
              Project Detail
            </p>
            <h2 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-normal text-[var(--text)]">
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
            aria-label="Close project details"
            title="Close"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>

        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Technology Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Actions
              </h3>
              <div className="mt-4 grid gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
                >
                  <Printer aria-hidden="true" size={17} />
                  Print Details
                </button>
                <ButtonLink
                  href={profile.resumePath}
                  download
                  variant="secondary"
                  icon={<Download aria-hidden="true" size={17} />}
                >
                  Resume
                </ButtonLink>
                {project.repositoryUrl ? (
                  <ButtonLink href={project.repositoryUrl} external variant="secondary" icon={<ExternalLink aria-hidden="true" size={17} />}>
                    Repository
                  </ButtonLink>
                ) : null}
              </div>
            </div>

            <p className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--muted)]">
              {confidentialityNote}
            </p>
          </aside>

          <div className="space-y-5">
            <DetailBlock title="Business Challenge" body={project.challenge} />
            <DetailBlock title="Proposed Solution" body={project.solution} />
            <DetailBlock title="Technical Architecture" body={project.architecture} />
            <DetailBlock title="Outcome" body={project.outcome} />
            <DetailList title="My Contribution" items={project.contribution} />
            <DetailList title="Main Features" items={project.features} />
            <DetailList title="Key Technical Decisions" items={project.decisions} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-5">
      <h3 className="text-base font-semibold text-[var(--text)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-5">
      <h3 className="text-base font-semibold text-[var(--text)]">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
