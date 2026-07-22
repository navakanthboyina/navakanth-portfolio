import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="section-shell bg-[var(--section-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="CRM solutions that stay maintainable after launch."
          description="A concise overview for recruiters, hiring managers, and technical stakeholders."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <FadeIn className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>
                I am a Microsoft Dynamics 365 CRM developer and Software Engineer with more
                than six years of experience designing, developing, integrating, migrating, and
                supporting enterprise CRM solutions.
              </p>
              <p>
                My work includes Dynamics 365 Sales, model-driven applications, Dataverse
                architecture, C# plugins, JavaScript customizations, PCF controls, Custom APIs,
                Power Automate, Azure Functions, Azure Service Bus, Logic Apps, REST APIs, SQL
                Server, Azure SQL Database, data migration, ALM, and production support.
              </p>
              <p>
                I collaborate with business analysts, architects, product owners, QA engineers,
                and business stakeholders to translate requirements into secure, scalable, and
                maintainable technical solutions across development, testing, deployment,
                troubleshooting, documentation, and post-production support.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="grid gap-4">
            {[
              "Dynamics 365 Sales and Dataverse customization",
              "C# plugin, Custom API, and workflow extension development",
              "Power Automate and Azure integration delivery",
              "Solution packaging, deployment, troubleshooting, and support"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
                <p className="text-base font-semibold leading-7 text-[var(--text)]">{item}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
