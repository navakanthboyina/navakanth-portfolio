"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import { confidentialityNote } from "@/data/projects";
import { uniqueItems } from "@/lib/site";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const technologies = useMemo(
    () => ["All", ...uniqueItems(projects.flatMap((project) => project.technologies))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    if (selectedTechnology === "All") {
      return projects;
    }

    return projects.filter((project) => project.technologies.includes(selectedTechnology));
  }, [projects, selectedTechnology]);

  return (
    <section id="projects" className="section-shell bg-[var(--section-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Representative Dynamics 365 and Power Platform solutions."
          description="Each project highlights the business challenge, proposed solution, contribution, architecture, features, outcomes, and technical decisions."
        />

        <FadeIn className="mb-8 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
          <p className="text-sm leading-6 text-[var(--muted)]">{confidentialityNote}</p>
        </FadeIn>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter projects by technology">
          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              onClick={() => setSelectedTechnology(technology)}
              className={`shrink-0 rounded-md border px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)] ${
                selectedTechnology === technology
                  ? "border-[var(--accent-cyan)] bg-[var(--accent-soft)] text-[var(--text)]"
                  : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--text)]"
              }`}
            >
              {technology}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.04} className="h-full">
              <ProjectCard project={project} onOpen={setActiveProject} />
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
