export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  description?: string;
  current?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    description?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Deep Learning' | 'Cyber Security' | 'Web Development';
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface LanguageSpoken {
  language: string;
  proficiency: string;
  native?: boolean;
  level: number; // percentage
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  phone: string;
  email: string;
  altEmail: string;
  address: string;
  city: string;
  country: string;
  linkedin: string;
  github: string;
  codeforces: string;
  codeforcesHandle: string;
  bio: string;
  university: string;
  academicYear: string;
  status: string;
  languages: LanguageSpoken[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
