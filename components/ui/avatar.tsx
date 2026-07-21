import Image from "next/image";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/site";

export function Avatar() {
  if (profile.headshotPath) {
    return (
      <Image
        src={withBasePath(profile.headshotPath)}
        alt={`${profile.name} headshot`}
        width={176}
        height={176}
        className="h-32 w-32 rounded-2xl border border-[var(--line)] object-cover shadow-2xl sm:h-44 sm:w-44"
        priority
      />
    );
  }

  return (
    <div
      className="grid h-32 w-32 place-items-center rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,var(--surface),var(--surface-strong))] shadow-2xl sm:h-44 sm:w-44"
      aria-label={`${profile.name} initials`}
    >
      <span className="text-4xl font-semibold tracking-normal text-[var(--accent-cyan)] sm:text-6xl">
        {profile.initials}
      </span>
    </div>
  );
}
