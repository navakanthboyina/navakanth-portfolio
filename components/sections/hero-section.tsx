import { BriefcaseBusiness, Code2, Download, Mail, MapPin, Radio, Send } from "lucide-react";
import type { profile } from "@/data/profile";
import { Avatar } from "@/components/ui/avatar";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { Tag } from "@/components/ui/tag";
import { createMailto } from "@/lib/site";

type HeroSectionProps = {
  profile: typeof profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="home" className="section-shell relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <FadeIn className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--muted)]">
            <Radio aria-hidden="true" size={16} className="text-[var(--accent-green)]" />
            {profile.availability} · {profile.relocation}
          </div>
          <p className="mt-8 text-base font-semibold text-[var(--accent-cyan)]">{profile.name}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-[var(--text)] sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            I build scalable Dynamics 365, Dataverse, Power Platform, and Azure solutions
            that automate business processes, integrate enterprise systems, and improve user experience.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" size={17} className="text-[var(--accent-cyan)]" />
              {profile.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--muted)] sm:block" />
            <span>{profile.experienceSummary}</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--muted)] sm:block" />
            <span>{profile.relocation}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="primary" icon={<Send aria-hidden="true" size={17} />}>
              View Projects
            </ButtonLink>
            <ButtonLink
              href={profile.resumePath}
              download
              variant="secondary"
              icon={<Download aria-hidden="true" size={17} />}
            >
              Download Resume
            </ButtonLink>
            <ButtonLink href={createMailto(profile.email)} variant="secondary" icon={<Mail aria-hidden="true" size={17} />}>
              Contact Me
            </ButtonLink>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <ButtonLink href={profile.social.github} external variant="ghost" icon={<Code2 aria-hidden="true" size={17} />}>
              GitHub
            </ButtonLink>
            <ButtonLink
              href={profile.social.linkedin}
              external
              variant="ghost"
              icon={<BriefcaseBusiness aria-hidden="true" size={17} />}
            >
              LinkedIn
            </ButtonLink>
            <ButtonLink href={createMailto(profile.email)} variant="ghost" icon={<Mail aria-hidden="true" size={17} />}>
              Email
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
            {profile.techLine.map((tech) => (
              <Tag key={tech} tone={tech === "Azure" ? "green" : tech === "TypeScript" ? "violet" : "cyan"}>
                {tech}
              </Tag>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 shadow-2xl">
            <div className="flex items-start gap-5">
              <Avatar />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[var(--muted)]">Portfolio profile</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-normal text-[var(--text)]">
                  {profile.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{profile.role}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {[
                ["CRM delivery", "Configuration, custom development, testing, release support"],
                ["Integration work", "Azure Functions, Logic Apps, Service Bus, REST APIs"],
                ["Power Platform", "Model-driven apps, automation, Dataverse-first solutions"]
              ].map(([title, detail]) => (
                <div key={title} className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
                  <p className="text-sm font-semibold text-[var(--text)]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
