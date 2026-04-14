import type { LucideIcon } from 'lucide-react';
import { MonitorPlay, Briefcase, Calculator, Megaphone, Code2 } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export const categories: Category[] = [
    { id: 'it', name: 'IT Courses', icon: MonitorPlay, description: 'Networking, cybersecurity, databases, and IT infrastructure' },
    { id: 'software-engineering', name: 'Software Engineering', icon: Code2, description: 'Web development, programming languages, agile, and software testing' },
    { id: 'business', name: 'Business Courses', icon: Briefcase, description: 'Project management, process improvement, and business strategy' },
    { id: 'accounting', name: 'Accounting', icon: Calculator, description: 'Understand finance, bookkeeping, and accounts' },
    { id: 'marketing', name: 'Marketing', icon: Megaphone, description: 'Master digital marketing, SEO, and social media' },
];
