export type ExperienceItem = {
  company: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "P2P Softtek LLC",
    jobTitle: "MS Dynamics CRM Senior Consultant",
    location: "USA",
    startDate: "August 2024",
    endDate: "Present",
    summary:
      "Supporting large-scale Microsoft Dynamics 365 CRM systems across DEV and UAT environments with a focus on stability, Azure integrations, troubleshooting, and production-ready delivery.",
    responsibilities: [
      "Troubleshot high-priority CRM issues including plugin failures, configuration defects, workflow errors, and data migration inconsistencies.",
      "Designed and supported Azure Functions for serverless business logic and background processing triggered by Dynamics 365 events.",
      "Implemented Azure Service Bus and Logic Apps for asynchronous integrations, workflow orchestration, and system reliability improvements.",
      "Built and enhanced C# plugins, custom actions, and custom workflow activities with performance and error-handling best practices.",
      "Developed PCF controls with TypeScript to modernize model-driven app interfaces and replace legacy JavaScript customizations.",
      "Supported Power Pages migrations, portal security configuration, data validation, regression testing, and CI/CD-based solution deployments."
    ],
    technologies: [
      "Dynamics 365",
      "Dataverse",
      "C#",
      "TypeScript",
      "PCF",
      "Azure Functions",
      "Azure Logic Apps",
      "Azure Service Bus",
      "SQL Server",
      "Azure SQL Database",
      "Power Pages",
      "Azure DevOps"
    ]
  },
  {
    company: "ZenithIQ Technologies",
    jobTitle: "Software Engineer",
    location: "USA",
    startDate: "July 2021",
    endDate: "August 2024",
    summary:
      "Delivered Dynamics 365 Sales customization, process automation, integrations, and CI/CD deployments for NJEDA.",
    responsibilities: [
      "Customized and enhanced Dynamics 365 Sales modules to improve sales pipeline visibility and consistency.",
      "Designed C# plugins across multiple execution stages to enforce business rules for Leads and Opportunities.",
      "Built Business Process Flows and stage-level validations for lead-to-opportunity conversion.",
      "Developed Power Automate workflows for lead assignment, approvals, and notifications.",
      "Customized forms, views, dashboards, and security roles to align CRM with business processes and organization structure.",
      "Executed data migration for Leads, Accounts, Contacts, Opportunities, and Products with mapping, validation, deduplication, and Dataverse transformation logic.",
      "Integrated Dynamics 365 with external systems through REST APIs and resolved production issues across plugins, workflows, and data consistency."
    ],
    technologies: [
      "Dynamics 365 Sales",
      "Dataverse",
      "C#",
      "Power Automate",
      "Business Process Flows",
      "REST APIs",
      "JavaScript",
      "Azure DevOps",
      "CI/CD"
    ]
  },
  {
    company: "P2P Softtek LLC",
    jobTitle: "MS Dynamics CRM Senior Consultant",
    location: "USA",
    startDate: "March 2019",
    endDate: "December 2021",
    summary:
      "Designed, developed, configured, and supported Microsoft Dynamics CRM solutions for New Hampshire DMV business processes.",
    responsibilities: [
      "Configured Dynamics CRM entities, forms, screens, views, workflows, dashboards, reports, security roles, teams, and users.",
      "Developed and debugged C# plugins and custom workflows using Visual Studio, CRM SDK, and Plugin Registration Tool.",
      "Built JavaScript, jQuery, HTML, CSS, and ASP.NET customizations for Dynamics CRM user experiences.",
      "Developed Canvas Apps, Power Automate flows, Power Pages, and omnichannel chat channels.",
      "Worked on Azure Logic Apps, Function Apps, Web API integrations, and Azure DevOps pipelines for solution deployment.",
      "Supported data migration packaging, mailbox configuration, server-side sync, unit testing, UCI upgrade work, and production troubleshooting."
    ],
    technologies: [
      "Dynamics 365 CRM UCI",
      "C#",
      "JavaScript",
      "jQuery",
      "ASP.NET",
      "CRM SDK",
      "SQL Server",
      "SSIS",
      "SSRS",
      "Power Automate",
      "Power Pages",
      "Azure Logic Apps",
      "Azure Functions"
    ]
  }
];
