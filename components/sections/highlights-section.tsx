import { Blocks, CloudCog, Gauge, Layers, Workflow } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const highlights = [
  {
    title: "6+ Years of Experience",
    description: "Hands-on enterprise CRM development, support, delivery, and troubleshooting.",
    icon: Gauge
  },
  {
    title: "Dynamics 365 and Dataverse Development",
    description: "Model-driven apps, tables, security, forms, views, plugins, and Custom APIs.",
    icon: Blocks
  },
  {
    title: "Enterprise Azure Integrations",
    description: "Azure Functions, Logic Apps, Service Bus, REST APIs, identity, and observability.",
    icon: CloudCog
  },
  {
    title: "Power Platform Automation",
    description: "Power Automate workflows and Power Apps solutions that reduce manual steps.",
    icon: Workflow
  },
  {
    title: "End-to-End Solution Delivery",
    description: "Requirements, development, testing, deployment, documentation, and production support.",
    icon: Layers
  }
];

export function HighlightsSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <FadeIn key={highlight.title} delay={index * 0.04} className="h-full">
                <article className="h-full rounded-xl border border-[var(--line)] bg-[var(--panel)] p-5">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-[var(--accent-soft)] text-[var(--accent-cyan)]">
                    <Icon aria-hidden="true" size={21} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-6 text-[var(--text)]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{highlight.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
