import { ArrowRight, Layers3 } from "lucide-react";
import type { Project } from "@/data/projects";
import { Tag } from "@/components/ui/tag";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent-cyan)] hover:shadow-2xl">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[var(--accent-soft)] text-[var(--accent-cyan)]">
          <Layers3 aria-hidden="true" size={22} />
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold leading-7 tracking-normal text-[var(--text)]">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.shortDescription}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 6).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onOpen(project)}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
      >
        Project Details
        <ArrowRight aria-hidden="true" size={17} />
      </button>
    </article>
  );
}
