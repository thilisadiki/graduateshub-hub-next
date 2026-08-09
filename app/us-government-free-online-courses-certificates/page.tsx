import type { Metadata } from 'next';
import { Landmark, Award, Clock, Lock, CheckCircle2 } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { usGovernmentCourses } from '@/data/categories/usGovernmentCourses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/us-government-free-online-courses-certificates`;

export const metadata: Metadata = {
  title: 'Free US Government Online Courses with Certificates (2026)',
  description:
    'Free official U.S. government online courses with verified completion certificates. Complete training modules from FEMA, CISA, CDC, NIH, SBA, and YALI Network at no cost.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Free US Government Online Courses with Certificates (2026) | Graduates Hub',
    description:
      'Explore official U.S. federal agency training portals offering free online certificates in emergency management, cybersecurity, public health, business leadership, and federal acquisition.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Emergency Preparedness & Incident Command',
    slug: 'business',
    description: 'Master public safety, disaster management, and community health frameworks with official federal certificates from FEMA.',
    ids: ['fema-is-100c', 'fema-is-700b'],
  },
  {
    label: 'Cybersecurity & Public Technology',
    slug: 'it',
    description: 'Gain technical cybersecurity skills through training modules developed by CISA and the Department of Homeland Security.',
    ids: ['cisa-fedvte-cybersecurity-foundations'],
  },
  {
    label: 'Public Health & Safety',
    slug: 'business',
    description: 'Earn public health, bioethics, and occupational safety credentials backed by premier federal healthcare institutions.',
    ids: ['cdc-public-health-101', 'nih-human-subjects-research', 'osha-10-hour-general-industry'],
  },
  {
    label: 'Business, Finance & Leadership',
    slug: 'business',
    description: 'Develop entrepreneurial, financial management, and civic leadership skills backed by U.S. government departments.',
    ids: ['sba-small-business-guide', 'yali-servant-leadership'],
  },
  {
    label: 'Federal Acquisition & Public Administration',
    slug: 'business',
    description: 'Understand government procurement, public sector contracting, and administrative project management.',
    ids: ['fai-federal-contracting-101'],
  },
];

const relatedCourses = usGovernmentCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: Landmark,
    title: 'Official Government Backing',
    body: 'Training modules are created directly by U.S. federal agencies like FEMA, CISA, CDC, SBA, and the U.S. Department of State.',
  },
  {
    icon: Award,
    title: 'Verifiable Completion Certificates',
    body: 'Passing final knowledge checks or exam modules grants digital certificates of completion directly from federal agency portals.',
  },
  {
    icon: Lock,
    title: '100% Free & Open Access',
    body: 'All courses listed are completely free to study, take exams, and download certificates without hidden paywalls or subscription fees.',
  },
  {
    icon: Clock,
    title: 'Self-Paced & Flexible',
    body: 'Modules can be completed at your own speed from anywhere in the world, making them ideal for professionals, students, and job seekers.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Emergency Management Specialist',
    detail: 'Coordinate disaster readiness, emergency operations, and community safety protocols for public and private organizations. Key modules: FEMA IS-100, IS-700 & OSHA Safety Standards.',
  },
  {
    role: 'Cybersecurity Analyst',
    detail: 'Protect critical IT infrastructure, analyze security threats, and implement incident response plans. Key modules: CISA FedVTE Cybersecurity Track & NICCS Threat Hunting.',
  },
  {
    role: 'Public Health Administrator',
    detail: 'Manage community health initiatives, bioethics compliance, and healthcare safety programs. Key modules: CDC Public Health & CEU Track, NIH Bioethics.',
  },
  {
    role: 'Small Business & Procurement Consultant',
    detail: 'Help entrepreneurs launch businesses, apply for funding, and navigate public sector contract opportunities. Key modules: SBA Business Planning & FAI Federal Contracting.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/free-courses-with-certificates',
    title: 'Free Online Courses with Free Certificates',
    desc: 'Explore the complete directory of free certified online courses across top global platforms.',
  },
  {
    href: '/google-cybersecurity-certificate-guide',
    title: 'Google Cybersecurity Professional Certificate Guide',
    desc: 'Learn SIEM tools, Python scripting, and Linux commands for entry-level SOC analyst roles.',
  },
  {
    href: '/free-it-courses-with-certificates',
    title: 'Free IT Support & Systems Admin Courses',
    desc: 'Master networking, Active Directory, help desk SLAs, and Windows/Linux server management.',
  },
  {
    href: '/free-business-courses',
    title: 'Free Online Business & Management Courses',
    desc: 'Develop financial management, operations, and leadership skills with accredited free diplomas.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Are these U.S. government online courses completely free?',
    a: 'Yes. Every learning portal highlighted in this guide (including FEMA EMI, CISA FedVTE, CDC Learning Connection, NIH, SBA, and YALI Network) is funded by U.S. federal agencies and provides 100% free course access, exams, and downloadable completion certificates without any fee.',
  },
  {
    q: 'Can non-U.S. citizens enroll and earn certificates?',
    a: 'Yes! Portals such as FEMA EMI (Independent Study), YALI Network (sponsored by the U.S. Department of State), CDC Learning Connection, and SBA Learning Center are open to international learners worldwide.',
  },
  {
    q: 'How do I receive my certificate after completing a course?',
    a: 'Upon passing the required online final exam or assessment module (usually requiring a score of 75% or 80%), the agency portal automatically generates an official digital certificate of completion (PDF format) sent directly to your registered email address or downloadable from your learner account.',
  },
  {
    q: 'Can I list these government certificates on my CV and LinkedIn profile?',
    a: 'Absolutely. Adding certificates from recognized federal agencies like FEMA, CISA, CDC, or the SBA demonstrates proactive professional development, attention to compliance, and specialized knowledge in safety, technology, and public administration.',
  },
];

export default function USGovernmentCoursesPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'US Government Free Online Courses' }]}
      heading="Free US Government Online Courses with Certificates (2026)"
      heroDescription="Several official U.S. government agencies offer free online learning portals where you can complete training modules and download verified certificates of completion at no cost across Emergency Management, Cybersecurity, Public Health, Business, and Federal Acquisition."
      heroBadges={[
        { icon: Landmark, label: 'Official Federal Agency Portals', iconClassName: 'text-amber-600' },
        { icon: Award, label: 'Verified Certificates', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: '100% Free & Open Access', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Learn with U.S. Government Agency Portals?"
      benefitsSectionSubtitle="Federal training portals provide authoritative, standardized instruction built by public sector policy experts, risk managers, and agency engineers."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Official Federal Agency Courses"
      carouselSubtitle="Direct links to free training modules and certification exams from U.S. government agencies"
      careerPathsTitle="Career Paths Powered by Government Training"
      careerPathsSubtitle="These free federal training modules prepare you for high-responsibility public and private sector roles."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Start Earning Official Government Certificates"
      ctaBody="Enhance your CV with credentials from FEMA, CISA, CDC, SBA, and the U.S. Department of State today."
      ctaPrimaryLabel="Explore All Course Guides"
      ctaPrimaryHref="/guides"
      ctaSecondaryLabel="View Free IT & Tech Courses"
      ctaSecondaryHref="/free-it-courses-with-certificates"
    />
  );
}
