export type AuthorKey = 'jason' | 'ndulamiso';

export interface RoadmapStage {
  number: number;
  title: string;
  duration: string;
  description: string;
  courseIds: string[];
  milestone: string;
}

export interface CareerRoadmap {
  id: string;
  title: string;
  tagline: string;
  category: string;
  curator: AuthorKey | AuthorKey[];
  lastUpdated: string;
  timeToJobReady: string;
  demandLevel: 'Moderate' | 'High' | 'Very High';
  entryLevel: boolean;
  description: string;
  overview: string;
  jobTitles: string[];
  technicalSkills: string[];
  softSkills: string[];
  stages: RoadmapStage[];
  certifications: {
    name: string;
    provider: string;
    free: boolean;
    why: string;
  }[];
  portfolioProjects: string[];
  relatedRoadmapIds: string[];
}

export interface Course {
  id: string;
  title: string;
  tag: string;
  category: string;
  subCategory?: string;
  duration: string;
  rating: number;
  image: string;
  affiliateLink: string;
  description: string;
  longDescription?: string;
  outcomes?: string[];
  careerPath?: string;
  targetAudience?: string;
  editorsTake?: string;
  featured?: boolean;
  isExternal?: boolean;
}
