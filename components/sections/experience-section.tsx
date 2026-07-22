import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell bg-[var(--section-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience in Dynamics 365 delivery."
          description="Recent CRM, Power Platform, Azure integration, migration, and enterprise support work."
        />

        <div className="relative grid gap-6">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-[var(--line)] md:block" />
          {experience.map((item, index) => (
            <FadeIn key={`${item.company}-${index}`} delay={index * 0.05}>
              <article className="relative rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6 md:ml-12">
                <span className="absolute -left-[3.25rem] top-8 hidden h-8 w-8 rounded-md border border-[var(--line)] bg-[var(--surface)] md:grid md:place-items-center">
                  <BriefcaseBusiness aria-hidden="true" size={17} className="text-[var(--accent-cyan)]" />
                </span>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag tone="cyan">{item.jobTitle}</Tag>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-normal text-[var(--text)]">
                      {item.company}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">{item.summary}</p>
                  </div>
                  <div className="shrink-0 space-y-2 text-sm text-[var(--muted)]">
                    <p className="flex items-center gap-2">
                      <MapPin aria-hidden="true" size={16} className="text-[var(--accent-cyan)]" />
                      {item.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarDays aria-hidden="true" size={16} className="text-[var(--accent-cyan)]" />
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <ul className="space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
                    <p className="text-sm font-semibold text-[var(--text)]">Technologies</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
