export type EducationItem = {
  degree: string;
  school: string;
  location?: string;
  notes?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Business Administration",
    school: "Westcliff University",
    location: "USA"
  },
  {
    degree: "Master of Science in Computer Science",
    school: "Indiana University Bloomington",
    location: "USA"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Lovely Professional University",
    location: "India"
  }
];
