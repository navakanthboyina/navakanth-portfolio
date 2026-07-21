export type ArchitectureFlow = {
  id: string;
  title: string;
  summary: string;
  nodes: {
    label: string;
    detail: string;
    tone: "blue" | "cyan" | "violet" | "green";
  }[];
};

export const architectureFlows: ArchitectureFlow[] = [
  {
    id: "pcf-custom-api-azure",
    title: "PCF Control to Custom API to Azure API",
    summary:
      "A model-driven app control keeps the user experience native while Dataverse and Azure handle secure rule retrieval.",
    nodes: [
      {
        label: "Model-Driven App",
        detail: "User selects and filters rules",
        tone: "blue"
      },
      {
        label: "PCF Control",
        detail: "Search, filter, persist selection",
        tone: "cyan"
      },
      {
        label: "Dataverse Custom API",
        detail: "Controlled CRM integration boundary",
        tone: "violet"
      },
      {
        label: "Azure Rules API",
        detail: "Secured enterprise rules service",
        tone: "green"
      }
    ]
  },
  {
    id: "dynamics-migration-flow",
    title: "Dynamics 365 Environment Migration",
    summary:
      "Source records are validated, transformed, and migrated through Azure processing into the target Dataverse environment.",
    nodes: [
      {
        label: "Source Dataverse",
        detail: "DEV, UAT, or PROD records",
        tone: "blue"
      },
      {
        label: "CRM Migration Action",
        detail: "Command and plugin orchestration",
        tone: "violet"
      },
      {
        label: "Azure Function",
        detail: "Identity, mapping, retry, logging",
        tone: "cyan"
      },
      {
        label: "Target Dataverse",
        detail: "Relationships and summaries saved",
        tone: "green"
      }
    ]
  },
  {
    id: "json-xlsx-flow",
    title: "Dynamic JSON to XLSX to Dataverse File",
    summary:
      "Variable intake payloads are normalized into workbook sheets and stored back in Dataverse for download.",
    nodes: [
      {
        label: "JSON Intake",
        detail: "Objects, arrays, and display order",
        tone: "blue"
      },
      {
        label: "C# Processing",
        detail: "Parse, map, validate, trace",
        tone: "cyan"
      },
      {
        label: "XLSX Workbook",
        detail: "Dynamic sheets and columns",
        tone: "violet"
      },
      {
        label: "Dataverse File",
        detail: "Stored output and base64 support",
        tone: "green"
      }
    ]
  }
];
