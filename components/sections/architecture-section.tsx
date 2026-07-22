import { architectureFlows } from "@/data/architecture";
import { ArchitectureFlow } from "@/components/projects/architecture-flow";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function ArchitectureSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architecture"
          title="Integration flows at a glance."
          description="Selected CRM integration, migration, and automation patterns from Dynamics 365 delivery work."
        />

        <div className="grid gap-5">
          {architectureFlows.map((flow, index) => (
            <FadeIn key={flow.id} delay={index * 0.05}>
              <ArchitectureFlow flow={flow} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
