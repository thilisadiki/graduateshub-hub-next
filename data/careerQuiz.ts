export type CareerCategory = 'it' | 'data' | 'business' | 'marketing' | 'accounting' | 'languages';

export interface QuizOption {
  label: string;
  emoji: string;
  weights: Partial<Record<CareerCategory, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

export interface CareerResult {
  category: CareerCategory;
  title: string;
  tagline: string;
  description: string;
  jobTitles: string[];
  courseIds: string[];
  categoryHref: string;
  gradient: string;
  badgeColor: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which of these tasks sounds most enjoyable to you?',
    subtitle: 'Go with your gut — there\'s no wrong answer.',
    options: [
      { label: 'Building apps, websites, or systems', emoji: '💻', weights: { it: 3 } },
      { label: 'Digging into data to find patterns', emoji: '📊', weights: { data: 3, accounting: 1 } },
      { label: 'Planning projects and managing teams', emoji: '📋', weights: { business: 3 } },
      { label: 'Creating content and reaching audiences', emoji: '📣', weights: { marketing: 3 } },
      { label: 'Tracking budgets and financial reports', emoji: '💰', weights: { accounting: 3 } },
      { label: 'Writing, translating, or teaching language', emoji: '🌍', weights: { languages: 3 } },
    ],
  },
  {
    id: 2,
    question: 'How do you prefer to solve problems?',
    subtitle: 'Think about how you naturally approach challenges.',
    options: [
      { label: 'Break it down logically, step by step', emoji: '🔍', weights: { it: 2, data: 2 } },
      { label: 'Look at the numbers and let data decide', emoji: '📈', weights: { data: 3, accounting: 1 } },
      { label: 'Brainstorm creative ideas and test them', emoji: '💡', weights: { marketing: 3 } },
      { label: 'Organise people and resources around it', emoji: '🤝', weights: { business: 3 } },
      { label: 'Follow a structured process or checklist', emoji: '✅', weights: { accounting: 2, business: 1 } },
      { label: 'Talk it through and find common ground', emoji: '💬', weights: { languages: 2, business: 1 } },
    ],
  },
  {
    id: 3,
    question: 'Which of these job titles excites you most?',
    subtitle: 'Even if you\'re not sure what they do — go with instinct.',
    options: [
      { label: 'Software Developer', emoji: '🧑‍💻', weights: { it: 3 } },
      { label: 'Data Analyst', emoji: '🧮', weights: { data: 3 } },
      { label: 'Marketing Manager', emoji: '📱', weights: { marketing: 3 } },
      { label: 'Business Analyst', emoji: '🏢', weights: { business: 3 } },
      { label: 'Financial Accountant', emoji: '🧾', weights: { accounting: 3 } },
      { label: 'Language Specialist / Translator', emoji: '🗣️', weights: { languages: 3 } },
    ],
  },
  {
    id: 4,
    question: 'What matters most to you in a career?',
    subtitle: 'Pick the one that resonates most right now.',
    options: [
      { label: 'High demand and strong job security', emoji: '🔒', weights: { it: 2, data: 2 } },
      { label: 'Creative freedom and visible impact', emoji: '🎨', weights: { marketing: 3 } },
      { label: 'Financial stability and clear progression', emoji: '📊', weights: { accounting: 2, business: 1 } },
      { label: 'Leadership and strategic influence', emoji: '🚀', weights: { business: 3 } },
      { label: 'Working with international teams or cultures', emoji: '🌐', weights: { languages: 3, business: 1 } },
      { label: 'Making sense of complex information', emoji: '🧩', weights: { data: 3, it: 1 } },
    ],
  },
  {
    id: 5,
    question: "What's your strongest natural ability?",
    subtitle: 'Be honest — what do people say you\'re good at?',
    options: [
      { label: 'Technical and logical thinking', emoji: '⚙️', weights: { it: 3, data: 1 } },
      { label: 'Spotting trends and patterns', emoji: '🔎', weights: { data: 3, marketing: 1 } },
      { label: 'Writing, persuading, and storytelling', emoji: '✍️', weights: { marketing: 3, languages: 1 } },
      { label: 'Leading, delegating, and strategising', emoji: '🎯', weights: { business: 3 } },
      { label: 'Precision, accuracy, and detail', emoji: '🔢', weights: { accounting: 3, data: 1 } },
      { label: 'Languages, communication, and empathy', emoji: '💬', weights: { languages: 3 } },
    ],
  },
  {
    id: 6,
    question: 'Which learning activity do you enjoy most?',
    subtitle: 'How do you prefer to build new skills?',
    options: [
      { label: 'Coding exercises and building projects', emoji: '🖥️', weights: { it: 3 } },
      { label: 'Working with spreadsheets and charts', emoji: '📉', weights: { data: 2, accounting: 2 } },
      { label: 'Case studies and business simulations', emoji: '📚', weights: { business: 3 } },
      { label: 'Designing content and campaigns', emoji: '🎬', weights: { marketing: 3 } },
      { label: 'Solving financial puzzles and calculations', emoji: '🧮', weights: { accounting: 3 } },
      { label: 'Reading, writing, and conversation practice', emoji: '📖', weights: { languages: 3 } },
    ],
  },
];

export const careerResults: Record<CareerCategory, CareerResult> = {
  it: {
    category: 'it',
    title: 'Software & IT Development',
    tagline: 'You think in systems and build things that last.',
    description:
      'You have a logical, structured mind and a natural drive to build and problem-solve. A career in IT puts you at the centre of the digital economy — from software development and cybersecurity to networking and cloud systems. The demand for IT professionals is consistently high, and the field rewards continuous learning.',
    jobTitles: ['Software Developer', 'Web Developer', 'IT Support Specialist', 'Network Engineer', 'Cybersecurity Analyst'],
    courseIds: ['computer-networking', 'vibe-coding-basics', 'foundations-of-itil-4', 'diploma-software-testing'],
    categoryHref: '/category/it-courses',
    gradient: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  data: {
    category: 'data',
    title: 'Data Analytics & Business Intelligence',
    tagline: 'You turn raw numbers into decisions that matter.',
    description:
      'You are naturally analytical and curious — you see patterns where others see noise. A data career puts you in one of the fastest-growing fields in the world. From business intelligence dashboards to predictive analytics, companies rely on data professionals to drive every major decision.',
    jobTitles: ['Data Analyst', 'Business Intelligence Analyst', 'Reporting Analyst', 'Data Scientist', 'SQL Developer'],
    courseIds: ['microsoft-excel-data-analysis', 'intro-power-bi', 'python-for-beginners-data', 'intro-database-concepts'],
    categoryHref: '/category/data-analytics',
    gradient: 'from-violet-600 to-purple-600',
    badgeColor: 'bg-violet-100 text-violet-800 border-violet-200',
  },
  business: {
    category: 'business',
    title: 'Business Management & Strategy',
    tagline: 'You lead, organise, and make things happen.',
    description:
      'You are a natural organiser and strategic thinker who enjoys working with people to achieve goals. Business management opens doors across every industry — from project management and operations to entrepreneurship and executive leadership. Your skills are transferable and always in demand.',
    jobTitles: ['Business Analyst', 'Project Manager', 'Operations Manager', 'Entrepreneur', 'Management Consultant'],
    courseIds: ['diploma-project-management', 'agile-project-management', 'intro-ai-business', 'lean-six-sigma-yellow-belt'],
    categoryHref: '/category/business',
    gradient: 'from-emerald-600 to-teal-600',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  marketing: {
    category: 'marketing',
    title: 'Digital Marketing & Communications',
    tagline: 'You tell stories that move people to act.',
    description:
      'You are creative, strategic, and people-focused — a rare combination. Digital marketing is one of the most in-demand skill sets of the decade, covering everything from SEO and social media to content creation and paid advertising. If you can capture attention and convert it, you are invaluable.',
    jobTitles: ['Digital Marketer', 'Content Creator', 'Social Media Manager', 'SEO Specialist', 'Brand Strategist'],
    courseIds: ['digital-marketing', 'diploma-social-media-strategy', 'content-creation-strategy', 'growth-hacking-techniques-for-digital-marketing'],
    categoryHref: '/category/marketing',
    gradient: 'from-pink-600 to-rose-500',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
  },
  accounting: {
    category: 'accounting',
    title: 'Accounting & Finance',
    tagline: 'You bring order, accuracy, and clarity to numbers.',
    description:
      'You have a sharp eye for detail and a methodical approach to work — exactly what the accounting and finance world demands. From managing company books and processing payroll to financial analysis and auditing, accountants are trusted with the financial health of every organisation.',
    jobTitles: ['Accountant', 'Financial Analyst', 'Bookkeeper', 'Payroll Officer', 'Internal Auditor'],
    courseIds: ['financial-accounting', 'fundamentals-of-accounting', 'diploma-financial-management-managers', 'payroll-essentials-small-businesses'],
    categoryHref: '/category/accounting',
    gradient: 'from-amber-500 to-orange-500',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  languages: {
    category: 'languages',
    title: 'Languages & Communication',
    tagline: 'You connect people and bridge cultures.',
    description:
      'You thrive through words, connection, and cross-cultural communication. A languages career spans ESL teaching, translation, content writing, communications management, and international relations. In a globalised world, the ability to communicate across borders is a skill that never goes out of demand.',
    jobTitles: ['ESL Teacher', 'Translator / Interpreter', 'Communications Officer', 'Content Writer', 'Language Tutor'],
    courseIds: ['english-business-communication', 'diploma-basic-english-grammar', 'spanish-language-fundamentals', 'diploma-english-b2-level'],
    categoryHref: '/category/language-learning',
    gradient: 'from-cyan-600 to-sky-500',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
  },
};
