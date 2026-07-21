export type CertificationStatus = "Completed" | "In Progress" | "Planned";

export type Certification = {
  name: string;
  provider: string;
  status: CertificationStatus;
  note?: string;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Power Platform Functional Consultant",
    provider: "Microsoft",
    status: "In Progress",
    // TODO: Confirm certification status.
    note: "Editable placeholder status."
  },
  {
    name: "Microsoft Power Platform Developer",
    provider: "Microsoft",
    status: "Planned",
    // TODO: Confirm certification status.
    note: "Editable placeholder status."
  },
  {
    name: "Microsoft Dynamics 365 certifications",
    provider: "Microsoft",
    status: "Planned",
    // TODO: Confirm certification status.
    note: "Editable placeholder status."
  }
];
