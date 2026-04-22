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

export interface InterviewQuestion {
  question: string;
  why: string;
  sampleAnswer: string;
  redFlag?: string;
}

export interface InterviewPrep {
  id: string;
  role: string;
  category: string;
  curator: AuthorKey | AuthorKey[];
  lastUpdated: string;
  description: string;
  salaryRange: string;
  cvMustInclude: string[];
  cvAvoid: string[];
  cvTips: { heading: string; body: string }[];
  keySkills: string[];
  questions: InterviewQuestion[];
  relatedRoadmapId: string;
  relatedPrepIds: string[];
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

export type PortfolioField =
  | 'Marketing'
  | 'Tech'
  | 'Data'
  | 'Finance'
  | 'Design'
  | 'Business';

export type PortfolioDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface PortfolioRubricCriterion {
  key: string;
  label: string;
  description: string;
  weight: number;
}

export interface PortfolioTask {
  id: string;
  title: string;
  field: PortfolioField;
  difficulty: PortfolioDifficulty;
  estimatedHours: string;
  tagline: string;
  scenario: string;
  brief: string;
  deliverables: string[];
  deliverableFormat: 'text' | 'markdown';
  submissionGuidance: string;
  rubric: PortfolioRubricCriterion[];
  skillsProven: string[];
  relatedRoadmapIds: string[];
}

export interface RubricScore {
  key: string;
  label: string;
  score: number;
  maxScore: number;
  feedback: string;
}

export interface PortfolioEvaluation {
  overallScore: number;
  verdict: 'Pass with Distinction' | 'Pass' | 'Needs Revision';
  summary: string;
  strengths: string[];
  improvements: string[];
  rubricScores: RubricScore[];
}

export interface PortfolioProof {
  id: string;
  task_id: string;
  task_title: string;
  task_field: PortfolioField;
  graduate_name: string;
  submission: string;
  submission_links: string[];
  evaluation: PortfolioEvaluation;
  created_at: string;
}
