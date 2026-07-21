export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  contribution: string[];
  architecture: string;
  features: string[];
  technologies: string[];
  outcome: string;
  decisions: string[];
  repositoryUrl?: string;
};

export const confidentialityNote =
  "Project details have been generalized to protect confidential business information.";

export const projects: Project[] = [
  {
    id: "migration-framework",
    name: "Enterprise Dynamics 365 Data Migration Framework",
    shortDescription:
      "Reusable migration framework for transferring Dynamics 365 configuration and related records across DEV, UAT, and PROD environments.",
    challenge:
      "Teams needed a controlled way to move related CRM configuration and records between environments without brittle manual steps or incomplete relationship handling.",
    solution:
      "A Dynamics 365 initiated migration flow coordinated command-bar actions, C# logic, Azure Function processing, environment-aware configuration, validation, retry, and logging.",
    contribution: [
      "Designed the reusable migration approach and record-processing sequence.",
      "Implemented C# plugin and workflow activity integration with Dynamics 365 actions.",
      "Integrated Azure Function processing with Managed Identity authentication.",
      "Built lookup resolution, parent-child migration logic, N:N relationship handling, validation summaries, and error reporting."
    ],
    architecture:
      "Dynamics 365 command actions prepare migration requests, Azure Functions execute processing against source and target Dataverse environments, and status summaries return to CRM.",
    features: [
      "Custom command-bar migration actions",
      "C# plugin and workflow activity integration",
      "Azure Function-based processing",
      "Managed Identity authentication",
      "Dynamic lookup resolution",
      "Parent-child record migration",
      "N:N relationship handling",
      "Validation and error reporting",
      "Migration summaries",
      "Environment-specific configuration",
      "Retry and logging support"
    ],
    technologies: [
      "Dynamics 365",
      "Dataverse",
      "C#",
      "Azure Functions",
      "Managed Identity",
      "REST API",
      "JavaScript",
      "JSON"
    ],
    outcome:
      "Reduced manual migration risk by creating a repeatable, auditable process for moving CRM data and configuration between controlled environments.",
    decisions: [
      "Used Managed Identity to avoid embedding credentials in integration code.",
      "Kept environment-specific settings configurable to support DEV, UAT, and PROD.",
      "Added validation and retry paths so failures could be diagnosed without restarting the whole migration."
    ]
  },
  {
    id: "rulexpert-pcf",
    name: "RuleXpert PCF Rule Selector",
    shortDescription:
      "Reusable PCF control that replaces manual rule-ID entry with a searchable, filterable rule selector backed by an Azure-hosted rules API.",
    challenge:
      "Users needed a faster and less error-prone way to select rule records than manually entering identifiers into Dynamics 365 forms.",
    solution:
      "A PCF control provides a Dynamics-style selector experience, calls a secured rules API, persists selected values, and supports search, filtering, and hyperlinks.",
    contribution: [
      "Created the PCF control with TypeScript and React.",
      "Integrated Custom API and Azure Web API calls for rule retrieval.",
      "Designed the search, filter, value persistence, and hyperlink behaviors.",
      "Aligned the UI with Dynamics 365 interaction patterns."
    ],
    architecture:
      "Model-driven app users interact with a PCF control, the control calls a Dataverse Custom API, and the Custom API brokers secure access to an Azure-hosted rules service.",
    features: [
      "Searchable dropdown",
      "Rule-type filtering",
      "Rule ID, name, type, and URL support",
      "Dynamics-style user interface",
      "Custom API integration",
      "Secure Azure authentication",
      "Selection persistence",
      "Hyperlink support",
      "Reusable configuration"
    ],
    technologies: [
      "PCF",
      "TypeScript",
      "React",
      "Dynamics 365",
      "Dataverse",
      "Custom API",
      "Azure Web API",
      "C#"
    ],
    outcome:
      "Improved the user experience for rule selection by replacing manual entry with a reusable, searchable component.",
    decisions: [
      "Used PCF to keep the control native to model-driven apps.",
      "Routed service access through a Custom API so Dataverse remained the integration boundary.",
      "Separated display values and persisted identifiers to support clear UX and reliable storage."
    ]
  },
  {
    id: "knowledge-governance",
    name: "Knowledge Management Governance Solution",
    shortDescription:
      "Dynamics 365 controls for authorship, approval, locking, version protection, and article governance.",
    challenge:
      "Knowledge articles required stronger governance so authors and approvers could collaborate without overwriting protected or locked content.",
    solution:
      "A Dataverse solution with security roles, locking behavior, Custom APIs, plugins, approval actions, and article relationship management.",
    contribution: [
      "Implemented article lock and unlock behavior with expiration support.",
      "Built C# plugins and Custom APIs for approval, send-back, and governance workflows.",
      "Configured author and approver security roles.",
      "Protected immutable knowledge IDs and article relationship behavior."
    ],
    architecture:
      "Dynamics 365 users manage articles through governed forms and actions while plugin logic enforces lock state, concurrency rules, approval transitions, and relationship integrity.",
    features: [
      "Author and approver security roles",
      "Article lock and unlock functionality",
      "Session-based lock management",
      "Lock expiration",
      "Optimistic concurrency",
      "Custom actions and plugins",
      "Approval and send-back workflows",
      "Immutable knowledge IDs",
      "Article relationship management"
    ],
    technologies: [
      "Dynamics 365",
      "Dataverse",
      "C#",
      "JavaScript",
      "Custom API",
      "Security Roles",
      "Power Automate"
    ],
    outcome:
      "Created a controlled authoring process that helped protect knowledge content and support clear review ownership.",
    decisions: [
      "Used optimistic concurrency to reduce overwrite risk.",
      "Kept lock state visible and time-bound so stale sessions could be recovered.",
      "Enforced governance rules in server-side code rather than relying only on form scripts."
    ]
  },
  {
    id: "dynamic-excel-generator",
    name: "Dynamic Excel Generator for Dynamics 365",
    shortDescription:
      "Server-side solution that converts dynamic JSON intake data into downloadable XLSX workbooks from Dynamics 365.",
    challenge:
      "CRM users needed generated Excel files from variable JSON intake structures without relying on a fixed workbook template.",
    solution:
      "A sandbox-compatible plugin flow parses JSON payloads, creates dynamic worksheets and columns, stores generated files in Dataverse, and returns file output metadata.",
    contribution: [
      "Designed JSON parsing and worksheet-generation logic.",
      "Implemented dynamic column ordering, object and array handling, base64 output, and Dataverse file storage.",
      "Added trace logging and user-friendly error handling for plugin diagnostics.",
      "Supported dynamic file naming and multiple worksheet generation."
    ],
    architecture:
      "Dynamics 365 submits JSON to C# processing logic, the server-side code generates XLSX content, and the output is stored or returned through Dataverse file capabilities.",
    features: [
      "Multiple worksheet generation",
      "Dynamic columns",
      "Display-order support",
      "JSON object and array handling",
      "XLSX output",
      "Dataverse file storage",
      "Base64 output support",
      "Plugin trace logging",
      "Sandbox-compatible processing",
      "Dynamic file naming"
    ],
    technologies: [
      "Dynamics 365",
      "C#",
      "JSON",
      "Dataverse",
      "XLSX",
      "Custom Actions",
      "Plugins"
    ],
    outcome:
      "Enabled flexible workbook generation for changing intake structures while keeping processing inside a Dynamics 365-compatible architecture.",
    decisions: [
      "Avoided fixed schemas so the generator could adapt to dynamic JSON input.",
      "Handled arrays and nested objects explicitly to keep workbook output readable.",
      "Used trace logging for supportability in sandbox plugin execution."
    ]
  },
  {
    id: "artifact-article-merge",
    name: "Artifact and Knowledge Article Merge Solution",
    shortDescription:
      "Dynamics 365 feature for selecting completed artifacts and merging their related knowledge content into a new unified record.",
    challenge:
      "Users needed a guided way to combine completed artifact content and related knowledge articles without manually copying HTML content.",
    solution:
      "A subgrid command-bar action invokes a custom action and C# plugin process that validates selections, merges content, creates a new artifact, and generates knowledge content.",
    contribution: [
      "Built the subgrid multi-record selection command and client-side validation.",
      "Implemented custom action and plugin processing for server-side merge logic.",
      "Handled HTML content merging and related record creation.",
      "Returned clear success and error feedback to users."
    ],
    architecture:
      "Selected subgrid records flow through a custom command action into Dataverse plugin logic, where records are validated, merged, and written back as new artifact and knowledge records.",
    features: [
      "Subgrid multi-record selection",
      "Custom command-bar button",
      "Custom action",
      "C# plugin processing",
      "Record validation",
      "HTML content merging",
      "New artifact creation",
      "Knowledge article generation",
      "User-friendly success and error handling"
    ],
    technologies: [
      "Dynamics 365",
      "Dataverse",
      "C#",
      "JavaScript",
      "Custom Action",
      "Plugins",
      "HTML"
    ],
    outcome:
      "Streamlined content consolidation while preserving validation and server-side control over generated records.",
    decisions: [
      "Used server-side merge logic to maintain data integrity and consistent validation.",
      "Kept client-side scripting focused on selection flow and user feedback.",
      "Generated a new record instead of mutating source artifacts."
    ]
  }
];
