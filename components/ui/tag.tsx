type TagProps = {
  children: string;
  tone?: "default" | "blue" | "cyan" | "violet" | "green";
};

export function Tag({ children, tone = "default" }: TagProps) {
  const toneClass = {
    default: "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]",
    blue: "border-blue-400/30 bg-blue-500/10 text-blue-200",
    cyan: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    violet: "border-violet-400/30 bg-violet-500/10 text-violet-200",
    green: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
  }[tone];

  return (
    <span className={`inline-flex rounded-md border px-2.5 py-1 text-xs font-medium ${toneClass}`}>
      {children}
    </span>
  );
}
