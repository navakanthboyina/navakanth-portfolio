export type EducationItem = {
  degree: string;
  school: string;
  location?: string;
  notes?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "Indiana University Bloomington"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Lovely Professional University"
  },
  {
    degree: "MBA in Artificial Intelligence in Business",
    school: "Westcliff University"
  }
];
