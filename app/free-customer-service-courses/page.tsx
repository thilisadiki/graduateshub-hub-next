import type { Metadata } from 'next';
import { Headset, Users, Award, Clock, Star, MessageSquare, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-customer-service-courses`;

export const metadata: Metadata = {
  title: 'Best Free Customer Service & Support Operations Courses (2026)',
  description:
    'Start your customer operations career. Free certified courses covering CRM platforms (Zendesk, Salesforce, HubSpot), SLA ticket management, customer empathy, and CSAT / NPS metrics.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free Customer Service & Support Operations Courses (2026) | Graduates Hub',
    description:
      'Master customer support communication, CRM ticketing workflows, conflict resolution, and SLA management with free certified courses.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Customer Support Communications & Empathy',
    slug: 'customer-ops',
    description: 'Master verbal and written communication techniques for customer-facing channels.',
    items: [
      {
        id: 'workplace-communication',
        customContent: 'Effective customer service begins with clear, empathetic communication. This course covers active listening, de-escalation strategies, tone management, and constructing positive email responses. You will learn how to handle difficult customer interactions professionally and turn negative experiences into positive brand loyalty.',
      },
    ],
  },
  {
    label: 'CRM Platforms & SLA Ticket Management',
    slug: 'customer-ops',
    description: 'Learn enterprise ticketing systems (Zendesk, Salesforce Service Cloud, HubSpot) and SLA compliance.',
    items: [
      {
        id: 'job-search-resume-cover-letter',
        customContent: 'Customer operations relies on structured ticketing systems to track customer issues. This course breaks down CRM workflow fundamentals, setting ticket priority matrices (P1–P4), managing First Response Time (FRT), and preventing Service Level Agreement (SLA) breaches.',
      },
    ],
  },
];

const benefits: BenefitItem[] = [
  { icon: Headset, title: 'CRM & Ticketing Mastery', body: 'Learn Zendesk, Salesforce, and HubSpot workflow principles to manage high ticket volumes.' },
  { icon: Award, title: 'CPD Accredited Credentials', body: 'Earn verifiable digital certificates to attach to your CV and showcase on LinkedIn.' },
  { icon: Clock, title: '100% Free & Self-Paced', body: 'Study on your own schedule. Build customer ops skills without paying for training programs.' },
  { icon: HeartHandshake, title: 'Conflict De-escalation', body: 'Master professional communication scripts for handling frustrated clients calmly.' },
  { icon: MessageSquare, title: 'Multi-Channel Support', body: 'Learn best practices for phone, email, live chat, and social media support channels.' },
  { icon: Star, title: 'CSAT & NPS Optimization', body: 'Understand key performance metrics: Customer Satisfaction (CSAT), Net Promoter Score (NPS), and FCR.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Customer Service Representative', category: 'Customer Ops', href: '/portfolio-tasks/customer-ops' },
  { role: 'Client Support Specialist', category: 'Support Desk', href: '/portfolio-tasks/customer-ops' },
  { role: 'Customer Success Associate', category: 'Client Operations', href: '/portfolio-tasks/customer-ops' },
  { role: 'Help Desk Coordinator', category: 'Operations', href: '/portfolio-tasks/customer-ops' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free IT Support Courses (2026)', desc: 'Master IT help desk troubleshooting, computer networking, Active Directory DS, and CompTIA A+.', href: '/free-it-courses-with-certificates' },
  { title: 'Free Business Courses (2026)', desc: 'Learn project management, Lean Six Sigma, and business operations.', href: '/free-business-courses' },
  { title: 'Free Digital Marketing Courses (2026)', desc: 'Learn SEO, social media management, and customer acquisition channels.', href: '/free-digital-marketing-courses' },
];

const faqs: FaqItem[] = [
  { q: 'What skills do top customer service employers look for?', a: 'Employers prioritize clear written/verbal communication, empathy, problem-solving, familiarity with CRM software (Zendesk, Salesforce, HubSpot), and the ability to maintain composure under pressure.' },
  { q: 'What is the difference between Customer Service and Customer Success?', a: 'Customer Service is reactive: resolving inbound tickets, issues, and inquiries as they happen. Customer Success is proactive: helping clients adopt products, achieve business goals, and renew subscriptions.' },
  { q: 'Are these customer service courses completely free?', a: 'Yes! All courses listed on Graduates Hub are 100% free to study. Upon completion, you can download a digital certificate to attach to your job applications.' },
];

const exploreCategories = [
  { label: 'Customer Operations', href: '/portfolio-tasks/customer-ops' },
  { label: 'IT Support', href: '/free-it-courses-with-certificates' },
  { label: 'Business Management', href: '/free-business-courses' },
];

export default function FreeCustomerServiceCoursesPage() {
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
        breadcrumb={[{ label: 'Free Customer Service Courses' }]}
        heading="Best Free Customer Service & Support Operations Courses (2026)"
        heroDescription="Start your customer operations career. Master CRM ticketing platforms, SLA management, conflict de-escalation, active listening, and CSAT / NPS optimization."
        heroBadges={[
          { icon: Headset, label: '100% Free to Study', iconClassName: 'text-primary' },
          { icon: Award, label: 'CPD Accredited Certificates', iconClassName: 'text-emerald-500' },
          { icon: Clock, label: 'Self-Paced Learning' },
        ]}
        authors={['ndulamiso']}
        benefitsSectionTitle="Why Focus on Customer Operations?"
        benefitsSectionSubtitle="Customer retention is the growth engine of modern companies. Skilled customer support specialists are essential for maintaining high brand reputation and user satisfaction."
        benefits={benefits}
        courseCategories={courseCategories}
        relatedCourses={relatedCourses}
        carouselTitle="Related Business & Operations Courses"
        carouselSubtitle="Expand your administrative and operational capabilities with free learning paths"
        careerPathsTitle="Where This Training Can Lead You"
        careerPathsSubtitle="These courses align directly with roles in high demand across customer operations teams."
        careerPaths={careerPaths}
        relatedGuides={relatedGuides}
        exploreCategories={exploreCategories}
        faqs={faqs}
        ctaHeading="Launch Your Customer Support Career"
        ctaBody="Build the communication and CRM ticketing skills that impress hiring managers. Gain verifiable certificates to back up your resume."
        ctaPrimaryLabel="Explore Customer Ops Tasks"
        ctaPrimaryHref="/portfolio-tasks/customer-ops"
        ctaSecondaryLabel="View Career Roadmaps"
        ctaSecondaryHref="/career-roadmaps"
      />
    </div>
  );
}
