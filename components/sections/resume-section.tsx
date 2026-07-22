import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";

export function ResumeSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[var(--accent-soft)] text-[var(--accent-cyan)]">
                  <FileText aria-hidden="true" size={23} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                    Resume
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-normal text-[var(--text)]">
                    Download Navakanth Boyina&apos;s resume
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                    Review a concise overview of my Dynamics 365 CRM, Power Platform,
                    Dataverse, C#, SQL Server, and Azure integration experience.
                  </p>
                </div>
              </div>

              <ButtonLink
                href={profile.resumePath}
                download
                variant="primary"
                icon={<Download aria-hidden="true" size={18} />}
                className="shrink-0"
              >
                Download Resume
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
