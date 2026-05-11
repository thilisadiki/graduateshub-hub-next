export interface FeaturedLink {
  href: string;
  label: string;
  badge: string;
  colors: {
    bg: string;
    hover: string;
    text: string;
    badge: string;
    mobileFocus: string;
  };
}

export interface GuideLink {
  href: string;
  title: string;
  desc: string;
  badge: string;
}

export const featuredLinks: FeaturedLink[] = [
  {
    href: '/career-roadmaps',
    label: 'Career Roadmaps',
    badge: 'New',
    colors: { bg: 'bg-blue-50', hover: 'hover:bg-blue-100', text: 'text-primary', badge: 'bg-primary', mobileFocus: 'text-primary hover:text-blue-800' },
  },
  {
    href: '/interview-prep',
    label: 'CV & Interview Prep',
    badge: 'New',
    colors: { bg: 'bg-emerald-50', hover: 'hover:bg-emerald-100', text: 'text-emerald-700', badge: 'bg-emerald-600', mobileFocus: 'text-emerald-700 hover:text-emerald-900' },
  },
  {
    href: '/cv-builder',
    label: 'Free CV Builder',
    badge: 'New',
    colors: { bg: 'bg-violet-50', hover: 'hover:bg-violet-100', text: 'text-violet-700', badge: 'bg-violet-600', mobileFocus: 'text-violet-700 hover:text-violet-900' },
  },
  {
    href: '/portfolio',
    label: 'Proof of Work Portfolio',
    badge: 'New',
    colors: { bg: 'bg-amber-50', hover: 'hover:bg-amber-100', text: 'text-amber-700', badge: 'bg-amber-600', mobileFocus: 'text-amber-700 hover:text-amber-900' },
  },
];

export const popularGuides: GuideLink[] = [
  {
    href: '/free-courses-for-beginners',
    title: 'Free Courses for Beginners',
    desc: 'Zero experience needed. Start building real skills from scratch.',
    badge: 'Beginner',
  },
  {
    href: '/free-courses-with-certificates',
    title: 'Free Courses with Certificates',
    desc: 'Top-rated courses across IT, Business, Marketing, and Finance.',
    badge: 'Popular',
  },
  {
    href: '/best-alison-courses-with-certificates',
    title: 'Best Alison Courses (2026)',
    desc: 'CPD-accredited diplomas and certificates. Free to study.',
    badge: 'Alison',
  },
  {
    href: '/free-courses-for-data-analysts',
    title: 'Free Courses for Data Analysts',
    desc: 'Excel, SQL, Python, and Power BI: the full analyst learning path.',
    badge: 'Data',
  },
  {
    href: '/free-ai-courses-for-beginners',
    title: 'Free AI Courses for Beginners',
    desc: 'Learn AI and Generative AI without any coding background.',
    badge: 'AI',
  },
  {
    href: '/free-digital-marketing-courses',
    title: 'Free Digital Marketing Courses',
    desc: 'SEO, content, growth hacking, and conversion. Build a marketing career from scratch.',
    badge: 'Marketing',
  },
  {
    href: '/free-courses-for-software-developers',
    title: 'Free Courses for Software Developers',
    desc: 'Web development, programming languages, DevOps, and software architecture. All free.',
    badge: 'Dev',
  },
  {
    href: '/free-courses-for-accounting-and-finance',
    title: 'Free Courses for Accounting & Finance',
    desc: 'Bookkeeping, financial management, payroll, and auditing. Curated by an accounting specialist.',
    badge: 'Finance',
  },
  {
    href: '/free-business-courses',
    title: 'Free Business Courses Online',
    desc: 'Project management, Lean Six Sigma, GDPR, and economic strategy. CPD-accredited and free.',
    badge: 'Business',
  },
];
