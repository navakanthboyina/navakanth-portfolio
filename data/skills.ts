export type SkillCategory = {
  name: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Dynamics 365 and Dataverse",
    description: "CRM configuration, Dataverse modeling, security, and solution design.",
    skills: [
      "Dynamics 365 Sales",
      "Dynamics 365 Customer Engagement",
      "Model-Driven Apps",
      "Dataverse",
      "Forms",
      "Views",
      "Dashboards",
      "Business Process Flows",
      "Business Rules",
      "Security Roles",
      "Solutions",
      "Environment Variables",
      "Custom Tables",
      "Relationships",
      "FetchXML",
      "QueryExpression",
      "Dataverse Web API"
    ]
  },
  {
    name: "Custom Development",
    description: "Server-side and client-side CRM extensions with maintainable code.",
    skills: [
      "C#",
      ".NET",
      "Dynamics 365 Plugins",
      "Custom Workflow Activities",
      "Custom Actions",
      "Custom APIs",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML",
      "CSS",
      "AJAX",
      "Web Resources",
      "Ribbon and Command Bar Customization",
      "PCF Controls",
      "REST APIs",
      "OData",
      "SOAP",
      "CRM SDK"
    ]
  },
  {
    name: "Power Platform",
    description: "Low-code apps, process automation, reporting, pages, and AI-assisted tooling.",
    skills: [
      "Power Apps",
      "Model-Driven Apps",
      "Canvas Apps",
      "Power Automate",
      "Power Pages",
      "Power BI",
      "PCF",
      "AI Builder",
      "Microsoft Copilot Studio"
    ]
  },
  {
    name: "Azure and DevOps",
    description: "Cloud integrations, managed identity, data movement, and deployment support.",
    skills: [
      "Azure Functions",
      "Azure Logic Apps",
      "Azure Service Bus",
      "Azure App Service",
      "Azure Data Factory",
      "Azure Storage",
      "Microsoft Entra ID",
      "Managed Identity",
      "Azure Key Vault",
      "Application Insights",
      "Azure SQL Database",
      "Azure DevOps"
    ]
  },
  {
    name: "Data and Integration",
    description: "Migration, API integration, validation, and controlled data movement.",
    skills: [
      "SQL Server",
      "Azure SQL Database",
      "T-SQL",
      "Joins",
      "Views",
      "Stored Procedures",
      "SSIS",
      "KingswaySoft",
      "Data Migration Tool",
      "JSON",
      "XML",
      "API Integration",
      "Batch Processing",
      "Data Mapping",
      "Data Validation",
      "Error Logging",
      "Data Reconciliation"
    ]
  },
  {
    name: "Development and ALM Tools",
    description: "Developer tooling, source control, deployment support, and diagnostics.",
    skills: [
      "Visual Studio",
      "Visual Studio Code",
      "Git",
      "GitHub",
      "Azure DevOps",
      "Power Platform CLI",
      "Plugin Registration Tool",
      "XrmToolBox",
      "Postman",
      "Dataverse REST Builder",
      "CRM REST Builder",
      "Ribbon Workbench",
      "Solution Packager"
    ]
  }
];
