
export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  impacts?: string[];
}

export interface Certification {
  title: string;
  description: string;
}
