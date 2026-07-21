"use client";

import { useEffect, useMemo, useState } from "react";
import { profile, navItems } from "@/data/profile";
import { projects } from "@/data/projects";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { EducationSection } from "@/components/sections/education-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ContactSection } from "@/components/sections/contact-section";
import { BackToTop } from "@/components/ui/back-to-top";

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const observerIds = useMemo(
    () => ["home", "about", "experience", "skills", "projects", "certifications", "education", "contact"],
    []
  );

  useEffect(() => {
    const sections = observerIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [observerIds]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteHeader activeSection={activeSection} navItems={navItems} />
      <main>
        <HeroSection profile={profile} />
        <AboutSection />
        <HighlightsSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <ArchitectureSection />
        <CertificationsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection profile={profile} />
      </main>
      <SiteFooter profile={profile} />
      <BackToTop />
    </div>
  );
}
