import { portfolioUrl, repositoryName } from "@/site.config";

export const profile = {
  name: "Navakanth Boyina",
  initials: "NB",
  role: "Dynamics 365 CRM & Power Platform Developer",
  headline: "Dynamics 365 CRM & Power Platform Developer",
  location: "Irving, Texas, USA",
  availability: "Open to Opportunities",
  experienceSummary: "6+ years of professional experience",
  email: "navakanth.boyina@gmail.com",
  repositoryName,
  portfolioUrl,
  resumePath: "/resume/Navakanth_Boyina_Resume.pdf",
  // TODO: Replace this with a real professional headshot path, for example "/images/navakanth-headshot.jpg".
  headshotPath: "",
  social: {
    // TODO: Add your GitHub URL.
    github: "YOUR_GITHUB_URL",
    // TODO: Add your LinkedIn URL.
    linkedin: "YOUR_LINKEDIN_URL"
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
    // TODO: Replace this with the public URL of your headshot after adding one.
    profileImageUrl: `${portfolioUrl}images/profile-placeholder.svg`
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
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
] as const;
