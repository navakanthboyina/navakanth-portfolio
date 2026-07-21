import { BadgeCheck, Clock3, ListTodo } from "lucide-react";
import { certifications, type CertificationStatus } from "@/data/certifications";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const statusIcon: Record<CertificationStatus, typeof BadgeCheck> = {
  Completed: BadgeCheck,
  "In Progress": Clock3,
  Planned: ListTodo
};

const statusClass: Record<CertificationStatus, string> = {
  Completed: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
  "In Progress": "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  Planned: "border-violet-400/30 bg-violet-500/10 text-violet-200"
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Microsoft certification roadmap."
          description="Statuses are editable and intentionally conservative until you confirm completion."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = statusIcon[cert.status];

            return (
              <FadeIn key={cert.name} delay={index * 0.05}>
                <article className="h-full rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6">
                  <div className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold ${statusClass[cert.status]}`}>
                    <Icon aria-hidden="true" size={15} />
                    {cert.status}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-7 text-[var(--text)]">{cert.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{cert.provider}</p>
                  {cert.note ? <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{cert.note}</p> : null}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
