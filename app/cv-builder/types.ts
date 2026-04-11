export interface PersonalInfo {
  photo: string; // base64 data URL or empty string
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
}

export type LocationType = 'On-site' | 'Hybrid' | 'Remote' | '';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Self-employed' | 'Freelance' | 'Internship' | 'Apprenticeship' | 'Seasonal' | '';

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  locationType: LocationType;
  employmentType: EmploymentType;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  grade: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  references: Reference[];
}

export type TemplateType = 'modern' | 'professional' | 'minimalist';

export const STEPS = [
  { key: 'personal', label: 'Personal' },
  { key: 'summary', label: 'Summary' },
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Skills' },
  { key: 'references', label: 'References' },
] as const;

export const SKILL_LEVELS: Skill['level'][] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const DEFAULT_CV_DATA: CVData = {
  personal: {
    photo: '',
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  references: [],
};
