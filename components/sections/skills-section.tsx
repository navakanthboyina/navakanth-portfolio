import { skillCategories } from "@/data/skills";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit for Dynamics 365 delivery."
          description="Grouped by practical delivery area, without percentage bars or inflated scoring."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.name} delay={index * 0.04}>
              <article className="h-full rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6">
                <h3 className="text-xl font-semibold tracking-normal text-[var(--text)]">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
