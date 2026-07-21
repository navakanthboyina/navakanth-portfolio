export type ExperienceItem = {
  company: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  editable: boolean;
};

export const experience: ExperienceItem[] = [
  {
    // TODO: Replace this experience entry with your actual employer, title, dates, and project context.
    company: "Company Name",
    jobTitle: "Dynamics 365 CRM / Power Platform Developer",
    location: "Location",
    startDate: "Start Date",
    endDate: "End Date",
    summary:
      "Editable placeholder based on Dynamics 365, Dataverse, Power Platform, Azure integration, automation, and enterprise support experience.",
    responsibilities: [
      "Configured and customized Dynamics 365 CRM tables, forms, views, dashboards, business process flows, business rules, and security roles.",
      "Developed C# plugins, Custom APIs, custom actions, and workflow activities for server-side business logic.",
      "Built JavaScript and TypeScript form customizations, command-bar actions, web resources, and PCF controls.",
      "Designed Dataverse table relationships, validation rules, environment variables, and managed solution packaging.",
      "Implemented Azure-based integrations using Azure Functions, Logic Apps, Service Bus, REST APIs, and Managed Identity.",
      "Created Power Automate workflows for approvals, notifications, data synchronization, and process automation.",
      "Supported data migration, mapping, validation, reconciliation, error logging, and deployment across DEV, UAT, and PROD.",
      "Troubleshot production issues, optimized CRM behavior, documented technical designs, and collaborated with analysts, architects, QA, product owners, and stakeholders."
    ],
    technologies: [
      "Dynamics 365",
      "Dataverse",
      "C#",
      "JavaScript",
      "TypeScript",
      "Power Automate",
      "Azure Functions",
      "Azure Service Bus",
      "Power Platform CLI"
    ],
    editable: true
  }
];
