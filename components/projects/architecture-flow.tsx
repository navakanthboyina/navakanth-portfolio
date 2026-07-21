import { ArrowRight } from "lucide-react";
import type { ArchitectureFlow as ArchitectureFlowType } from "@/data/architecture";

type ArchitectureFlowProps = {
  flow: ArchitectureFlowType;
};

const toneClass = {
  blue: "border-blue-400/30 bg-blue-500/10 text-blue-100",
  cyan: "border-cyan-400/30 bg-cyan-500/10 text-cyan-100",
  violet: "border-violet-400/30 bg-violet-500/10 text-violet-100",
  green: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
};

export function ArchitectureFlow({ flow }: ArchitectureFlowProps) {
  return (
    <article className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-normal text-[var(--text)]">{flow.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">{flow.summary}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {flow.nodes.map((node, index) => (
          <div key={node.label} className="contents">
            <div className={`rounded-xl border p-4 ${toneClass[node.tone]}`}>
              <p className="text-sm font-semibold">{node.label}</p>
              <p className="mt-2 text-xs leading-5 opacity-85">{node.detail}</p>
            </div>
            {index < flow.nodes.length - 1 ? (
              <div className="grid place-items-center text-[var(--accent-cyan)]">
                <ArrowRight aria-hidden="true" className="hidden lg:block" size={20} />
                <span className="h-7 w-px bg-[var(--line)] lg:hidden" aria-hidden="true" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}
