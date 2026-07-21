import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section id="education" className="section-shell bg-[var(--section-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation."
          description="Degree information is editable and does not include invented dates, GPA, honors, or coursework."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <FadeIn key={`${item.degree}-${item.school}`} delay={index * 0.05}>
              <article className="h-full rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-[var(--accent-soft)] text-[var(--accent-cyan)]">
                  <GraduationCap aria-hidden="true" size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-7 text-[var(--text)]">{item.degree}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.school}</p>
                {item.location ? <p className="mt-2 text-sm text-[var(--muted)]">{item.location}</p> : null}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
