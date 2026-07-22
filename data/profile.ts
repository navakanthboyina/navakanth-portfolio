import { portfolioUrl, repositoryName } from "@/site.config";

export const profile = {
  name: "Navakanth Boyina",
  initials: "NB",
  role: "Dynamics 365 CRM & Power Platform Developer",
  headline: "Dynamics 365 CRM & Power Platform Developer",
  location: "USA",
  availability: "Open to Opportunities",
  relocation: "Open to relocation",
  experienceSummary: "6+ years of professional experience",
  email: "navakanth.boyina@gmail.com",
  repositoryName,
  portfolioUrl,
  resumePath: "/resume/Navakanth_Boyina_Resume.pdf",
  headshotPath: "/images/navakanth-boyina-headshot.jpg",
  social: {
    github: "https://github.com/navakanthboyina",
    linkedin: "https://www.linkedin.com/in/navakanth-b-b26a29208/"
  },
  seo: {
    title: "Navakanth Boyina | Dynamics 365 CRM & Power Platform Developer",
    description:
      "Portfolio of Navakanth Boyina, a Dynamics 365 CRM and Power Platform developer specializing in Dataverse, C# plugins, PCF controls, Power Automate, and Azure integrations.",
    keywords: [
      "Navakanth Boyina",
      "Dynamics 365 CRM Developer",
      "Power Platform Developer",
      "Dataverse Developer",
      "Dynamics 365 Sales Developer",
      "CRM Technical Consultant",
      "Azure Integration Developer",
      "C# Plugins",
      "PCF Controls",
      "Power Automate"
    ],
    canonicalUrl: portfolioUrl,
    profileImageUrl: `${portfolioUrl}images/navakanth-boyina-headshot.jpg`
  },
  techLine: [
    "Dynamics 365",
    "Power Platform",
    "Dataverse",
    "C#",
    "JavaScript",
    "TypeScript",
    "Azure"
  ]
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
] as const;
