import type { Metadata } from 'next';
import { Briefcase, Layout, Users, Target, Award, Clock, Star, FileText, CheckCircle2 } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-agile-project-management-courses`;

export const metadata: Metadata = {
  title: 'Best Free Agile & Project Management Courses with Certificates (2026)',
  description:
    'Start your project management career. Free certified courses covering Agile frameworks, Scrum roles, Sprint events, Jira/Asana workflows, RACI matrices, and CAPM alignment.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free Agile & Project Management Courses with Certificates (2026) | Graduates Hub',
    description:
      'Master Agile principles, Scrum events, project charters, risk matrices, and team coordination with free certified courses.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Foundations of Project Management',
    slug: 'business-analysis',
    description: 'Master project life cycle phases (Initiation, Planning, Execution, Closing), scope management, and project charters.',
    items: [
      {
        id: 'diploma-project-management',
        customContent: 'Successful project managers balance cost, time, and quality. This comprehensive diploma introduces project initiation, setting SMART goals, stakeholder power-interest grids, work breakdown structures (WBS), and risk management matrices.',
      },
      {
        id: 'agile-project-management',
        customContent: 'Modern tech and corporate teams use Agile methodologies to deliver value iteratively. This course breaks down the Agile Manifesto principles, Kanban workflow boards, Sprint Backlog management, and daily standups.',
      },
    ],
  },
  {
    label: 'Agile & Scrum Frameworks',
    slug: 'business-analysis',
    description: 'Learn Scrum roles (Product Owner, Scrum Master), Sprint Planning, Retrospectives, and Jira/Asana software.',
    items: [
      {
        id: 'agile-project-management',
        customContent: 'Scrum is the dominant framework in software development and product management. This module details Sprint events (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective), backlog refinement, and measuring velocity with burndown charts in Jira.',
      },
    ],
  },
  {
    label: 'Quality & Process Improvement',
    slug: 'business-analysis',
    description: 'Apply Lean Six Sigma methodologies, root cause analysis, and quality assurance standards.',
    items: [
      {
        id: 'lean-six-sigma-yellow-belt',
        customContent: 'Lean Six Sigma optimizes business processes by eliminating waste and reducing variation. This yellow belt course covers DMAIC (Define, Measure, Analyze, Improve, Control) frameworks, process mapping, and root cause analysis tools like 5 Whys and Fishbone diagrams.',
      },
    ],
  },
];

const benefits: BenefitItem[] = [
  { icon: Briefcase, title: 'Agile & Scrum Mastery', body: 'Learn sprint planning, daily standups, retrospectives, velocity tracking, and backlog grooming.' },
  { icon: Award, title: 'CPD Accredited Credentials', body: 'Earn verifiable digital certificates to attach to your CV and showcase on LinkedIn.' },
  { icon: Clock, title: '100% Free & Self-Paced', body: 'Study on your own schedule. Build PM skills without paying for expensive certification prep bootcamps.' },
  { icon: Layout, title: 'Jira & Asana Workflows', body: 'Understand Kanban boards, sprint backlogs, task estimation (story points), and burndown charts.' },
  { icon: FileText, title: 'Project Documentation', body: 'Craft real project charters, RACI responsibility matrices, scope statements, and RAID logs.' },
  { icon: Target, title: 'CAPM Educational Hours', body: 'Coursework aligns directly with PMI CAPM and PMP foundational educational requirements.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Project Coordinator', category: 'Project Management', href: '/portfolio-tasks/business-analysis' },
  { role: 'Junior Scrum Master', category: 'Agile Teams', href: '/portfolio-tasks/business-analysis' },
  { role: 'Associate Business Analyst', category: 'Business Analysis', href: '/portfolio-tasks/business-analysis' },
  { role: 'Operations Assistant', category: 'Operations', href: '/portfolio-tasks/business-analysis' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Google Project Management Certificate Guide (2026)', desc: 'Complete breakdown of Google PM certificate modules, Jira projects, and CAPM waiver.', href: '/google-project-management-certificate-guide' },
  { title: 'Free Business Courses (2026)', desc: 'Learn business management, Lean Six Sigma, and corporate strategy.', href: '/free-business-courses' },
  { title: 'Free Courses for Data Analysts (2026)', desc: 'Learn business metrics, KPIs, SQL, and executive reporting dashboards.', href: '/free-courses-for-data-analysts' },
];

const faqs: FaqItem[] = [
  { q: 'What is the difference between Agile and Waterfall project management?', a: 'Waterfall is a sequential, linear approach where planning happens upfront and testing occurs at the end. Agile is an iterative approach where projects are delivered in small, usable increments (Sprints) with continuous feedback.' },
  { q: 'Does this coursework qualify for PMI CAPM certification?', a: 'Yes! The project management diplomas cover the required educational hours and foundational concepts needed to sit for the PMI Certified Associate in Project Management (CAPM) exam.' },
  { q: 'Are these project management courses completely free?', a: 'Yes! All learning paths listed on Graduates Hub are 100% free to access and study. Upon passing the assessments, you can download a digital certificate of completion.' },
];

const exploreCategories = [
  { label: 'Business Analysis', href: '/portfolio-tasks/business-analysis' },
  { label: 'IT Support', href: '/free-it-courses-with-certificates' },
  { label: 'Digital Marketing', href: '/free-digital-marketing-courses' },
];

export default function FreeAgileProjectManagementCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });

  const relatedCourses = allCourses
    .filter((c) => c.category.includes('Business') && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideTemplate
        canonicalUrl={CANONICAL}
        breadcrumb={[{ label: 'Free Agile Project Management Courses' }]}
        heading="Best Free Agile & Project Management Courses with Certificates (2026)"
        heroDescription="Start your project management career. Master Agile principles, Scrum events, sprint backlogs, Jira/Asana workflows, RACI matrices, and CAPM exam concepts."
        heroBadges={[
          { icon: Briefcase, label: '100% Free to Study', iconClassName: 'text-primary' },
          { icon: Award, label: 'CPD Accredited Certificates', iconClassName: 'text-emerald-500' },
          { icon: Clock, label: 'Self-Paced Learning' },
        ]}
        authors={['ndulamiso']}
        benefitsSectionTitle="Why Master Project Management & Agile?"
        benefitsSectionSubtitle="Organizations across all sectors need skilled project coordinators to ensure deliverables hit deadlines within scope and budget constraints."
        benefits={benefits}
        courseCategories={courseCategories}
        relatedCourses={relatedCourses}
        carouselTitle="Related Business & Operations Courses"
        carouselSubtitle="Expand your business leadership and process optimization capabilities"
        careerPathsTitle="Where This PM Training Can Lead You"
        careerPathsSubtitle="These courses align directly with roles in high demand across corporate project teams."
        careerPaths={careerPaths}
        relatedGuides={relatedGuides}
        exploreCategories={exploreCategories}
        faqs={faqs}
        ctaHeading="Launch Your Project Management Career"
        ctaBody="Start with Diploma in Project Management or Agile Frameworks. Gain the credentials and project charter portfolio proof that hiring managers respect."
        ctaPrimaryLabel="Explore Business Analysis Tasks"
        ctaPrimaryHref="/portfolio-tasks/business-analysis"
        ctaSecondaryLabel="View Project Coordinator Roadmap"
        ctaSecondaryHref="/career-roadmaps/project-coordinator"
      />
    </div>
  );
}
