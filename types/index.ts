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
