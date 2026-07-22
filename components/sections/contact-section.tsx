"use client";

import { BriefcaseBusiness, Check, Clipboard, Code2, Mail, MapPin, Radio } from "lucide-react";
import { useState } from "react";
import type { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMailto } from "@/lib/site";

type ContactSectionProps = {
  profile: typeof profile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Ready for Dynamics 365 and Power Platform opportunities."
          description="Available for full-time and contract roles involving CRM development, Dataverse, automation, integrations, Azure-connected solutions, and relocation opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6">
            <dl className="space-y-5">
              <ContactRow icon={<Mail aria-hidden="true" size={18} />} label="Email" value={profile.email} href={createMailto(profile.email)} />
              <ContactRow icon={<MapPin aria-hidden="true" size={18} />} label="Location" value={profile.location} />
              <ContactRow icon={<Radio aria-hidden="true" size={18} />} label="Availability" value={profile.availability} />
              <ContactRow icon={<MapPin aria-hidden="true" size={18} />} label="Relocation" value={profile.relocation} />
              <ContactRow icon={<BriefcaseBusiness aria-hidden="true" size={18} />} label="LinkedIn" value="linkedin.com/in/navakanth-b-b26a29208" href={profile.social.linkedin} />
              <ContactRow icon={<Code2 aria-hidden="true" size={18} />} label="GitHub" value="github.com/navakanthboyina" href={profile.social.github} />
            </dl>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-normal text-[var(--text)]">
              Connect with Navakanth
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
              Reach out for Dynamics 365 CRM, Power Platform, Dataverse, Azure integration,
              or CRM support and delivery roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={createMailto(profile.email)} variant="primary" icon={<Mail aria-hidden="true" size={18} />}>
                Email Me
              </ButtonLink>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
              >
                {copied ? <Check aria-hidden="true" size={18} /> : <Clipboard aria-hidden="true" size={18} />}
                {copied ? "Copied" : "Copy Email"}
              </button>
              <ButtonLink href={profile.social.linkedin} external variant="secondary" icon={<BriefcaseBusiness aria-hidden="true" size={18} />}>
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.social.github} external variant="secondary" icon={<Code2 aria-hidden="true" size={18} />}>
                GitHub
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 text-[var(--accent-cyan)]">{icon}</div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{label}</dt>
        <dd className="mt-1 break-words text-sm font-medium text-[var(--text)]">
          {href ? (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-sm underline decoration-[var(--accent-cyan)]/45 underline-offset-4 transition hover:text-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
            >
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      </div>
    </div>
  );
}
