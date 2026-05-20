import type { Metadata } from 'next';
import { Code, Terminal, Database, Server, Award, Clock, Users, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-python-courses-with-certificates`;

export const metadata: Metadata = {
  title: 'Best Free Python Courses with Certificates (2026)',
  description:
    'Start coding in Python today. Free certified courses covering core programming syntax, file operations, CSV data processing, Flask backend APIs, and Docker containerization.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free Python Courses with Certificates (2026) | Graduates Hub',
    description:
      'Start coding in Python today. Free certified courses covering core programming syntax, file operations, CSV data processing, Flask backend APIs, and Docker containerization.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Core Python Programming Foundations',
    slug: 'data-analytics',
    description: 'Learn variables, loops, functions, file input/output, and error handling.',
    items: [
      {
        id: 'python-for-beginners-data',
        customContent: 'Python is the most popular, readable programming language for automation and development. This course teaches core syntax, variables, lists, conditional statements, and custom functions from scratch. You will learn to read and write files, handle basic data processing, and build an API-driven voice assistant project.'
      },
      {
        id: 'diploma-python-programming',
        customContent: 'Elevate your coding skills to build production-grade automation scripts. This course covers Visual Studio IDE setup, CSV library operations, and debugging patterns. You will place a strong emphasis on writing try-except exception blocks, ensuring your data processing scripts fail gracefully rather than crashing.'
      }
    ]
  },
  {
    label: 'Backend Web Development & APIs',
    slug: 'software-engineering',
    description: 'Build web applications, route HTTP traffic, and use database models with Flask.',
    items: [
      {
        id: 'diploma-scalable-python-flask',
        customContent: 'Move beyond local scripts and share your code through the web. This backend course covers URL routing, dynamic form processing, and SQLAlchemy database integration. You will learn how to connect Python logic to relational databases using Object-Relational Mapping (ORM) to build web interfaces.'
      },
      {
        id: 'python-flask-docker',
        customContent: 'Packaging applications correctly is vital to ensuring they run reliably in production. This course teaches you to build Flask REST APIs, write Dockerfiles, configure network routing, and run multi-container deployments using Docker Compose. This is a critical skill for modern backend development and DevOps pipelines.'
      }
    ]
  },
  {
    label: 'Data Layer & System Integration',
    slug: 'software-engineering',
    description: 'Master relational database designs and understand the business impact of data models.',
    items: [
      {
        id: 'intro-database-concepts',
        customContent: 'Python scripts and web apps must save information in structured, persistent storage. This course covers relational database designs, normalization, and primary/foreign keys. Understanding database structures helps you design better SQLAlchemy database tables for your Flask web apps.'
      },
      {
        id: 'intro-ai-business',
        customContent: 'AI features and LLM integrations are built and deployed using Python code. This course details the strategic applications of machine learning models, chatbots, and NLP systems in business. You will understand the data pipelines needed to connect your Python apps to modern AI interfaces.'
      }
    ]
  }
];

const benefits: BenefitItem[] = [
  { icon: Code, title: 'Clean Readable Syntax', body: 'Python is known for its highly readable, English-like syntax, making it the perfect first programming language.' },
  { icon: Award, title: 'Accredited Diplomas', body: 'Earn accredited certifications and diplomas to show local engineering teams that you are job-ready.' },
  { icon: Clock, title: 'Self-Paced Training', body: 'Study alongside your studies or current job. Move through modules and complete coding assessments at your own pace.' },
  { icon: Terminal, title: 'Automation & Scripting', body: 'Write scripts to automate repetitive computer tasks, parse documents, and process data directories.' },
  { icon: Server, title: 'Web App Engineering', body: 'Learn to build REST APIs and route web requests using the powerful, lightweight Flask framework.' },
  { icon: Star, title: 'DevOps & Containers', body: 'Learn industry-standard containerization tools like Docker to package and deploy applications.' }
];

const careerPaths: CareerPathItem[] = [
  { role: 'Junior Python Developer', category: 'Backend Dev', href: '/category/software-engineering' },
  { role: 'Automation Specialist', category: 'Scripting & Operations', href: '/category/data-analytics' },
  { role: 'Junior Backend Engineer', category: 'Web Infrastructure', href: '/category/software-engineering' },
  { role: 'Data Processing Analyst', category: 'Data Analysis', href: '/category/data-analytics' }
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free Courses for Software Developers (2026)', desc: 'Learn web development, clean coding practices, and core computer science concepts.', href: '/free-courses-for-software-developers' },
  { title: 'Free Courses for Data Analysts (2026)', desc: 'Combine Python with SQL, Power BI, and Excel to build an employer-ready data toolkit.', href: '/free-courses-for-data-analysts' },
  { title: 'Free AI Courses for Beginners (2026)', desc: 'Learn how machine learning models and large language models use Python under the hood.', href: '/free-ai-courses-for-beginners' }
];

const faqs: FaqItem[] = [
  { q: 'Is Python good for beginners?', a: 'Yes, Python is widely considered the best programming language for beginners. Its syntax is clean and readable, resembling plain English, which allows you to focus on learning core programming logic rather than fighting complex syntax rules.' },
  { q: 'What is Python Flask and why should I learn it?', a: 'Flask is a popular "micro-framework" for web development in Python. It provides the essential tools to handle web requests and URLs, but lets you choose your own database and extensions. It is highly valued by developers and startups because it is lightweight, fast, and simple to learn.' },
  { q: 'Can I get a software engineering job with just Python?', a: 'Python is highly sought after across backend engineering, data analysis, automation, and machine learning. To land a junior developer role, combine your Python certificates with a strong GitHub portfolio showing clean code, REST APIs, database integrations, and containerized projects.' }
];

const exploreCategories = [
  { label: 'Software Engineering', href: '/category/software-engineering' },
  { label: 'Data Analytics', href: '/category/data-analytics' },
  { label: 'Business & Management', href: '/category/business' }
];

export default function FreePythonCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });
  
  const relatedCourses = allCourses
    .filter((c) => (c.category.includes('Software Engineering') || c.category.includes('Data Analytics')) && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Python Courses' }]}
      heading="Best Free Python Courses with Certificates (2026)"
      heroDescription="Master core Python coding syntax, file handling, CSV data automation, web app routing with Flask, and containerization with Docker. Build high-demand engineering skills for free."
      heroBadges={[
        { icon: Code, label: '100% Free Coding', iconClassName: 'text-primary' },
        { icon: Award, label: 'Diplomas & Certificates', iconClassName: 'text-emerald-500' },
        { icon: Clock, label: 'Self-Paced Learning' }
      ]}
      authors={['jason']}
      lastUpdated="May 2026"
      benefitsSectionTitle="Why Start a Career in Python Development?"
      benefitsSectionSubtitle="Python is the world's most popular programming language. It is the core tool driving modern backend services, automation scripts, and machine learning applications."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Complementary Dev & Analytics Courses"
      carouselSubtitle="Broaden your skill set with these top-rated free learning paths"
      careerPathsTitle="Where This Training Can Lead You"
      careerPathsSubtitle="These courses align directly with roles in high demand across the software development market."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Write Your First Line of Python Today"
      ctaBody="Begin with Python for Beginners. Learn the foundational programming concepts that open the door to backend web development, scripting, and data science."
      ctaPrimaryLabel="View Software Courses"
      ctaPrimaryHref="/category/software-engineering"
      ctaSecondaryLabel="Explore Career Roadmaps"
      ctaSecondaryHref="/career-roadmaps"
    />
  );
}
