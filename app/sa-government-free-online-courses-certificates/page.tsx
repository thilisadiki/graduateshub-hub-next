import type { Metadata } from 'next';
import { Landmark, Award, Clock, Lock, CheckCircle2 } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { saGovernmentCourses } from '@/data/categories/saGovernmentCourses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/sa-government-free-online-courses-certificates`;

export const metadata: Metadata = {
  title: 'Free SA Government & SETA Online Courses with Certificates (2026)',
  description:
    'Free official South African government online courses and SETA accredited training modules with completion certificates from NSG, NYDA, NEMISA, mLab, and SETA portals.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Free SA Government & SETA Online Courses with Certificates (2026) | Graduates Hub',
    description:
      'Explore official South African public sector learning portals offering free certificates in public administration, PFMA, youth entrepreneurship, digital literacy, and software development.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'National School of Government (NSG)',
    slug: 'business',
    description: 'Master public service ethics, Public Financial Management Act (PFMA) compliance, and Nyukela SMS pre-entry standards.',
    ids: ['nsg-public-service-ethics', 'nsg-pfma-financial-management', 'nsg-nyukela-sms-pre-entry'],
  },
  {
    label: 'Youth Entrepreneurship & Business Development',
    slug: 'business',
    description: 'Gain business planning, financial management, and funding application skills backed by NYDA and SAYouth.',
    ids: ['nyda-youth-entrepreneurship-fundamentals'],
  },
  {
    label: 'Digital Literacy & Technology Innovation',
    slug: 'it',
    description: 'Build essential computer literacy, data awareness, and software development skills funded by DCDT, NEMISA, and DSI.',
    ids: ['nemisa-digital-literacy-skills', 'mlab-mobile-app-development-bootcamp'],
  },
  {
    label: 'SETA Accredited Skills Programs',
    slug: 'business',
    description: 'Earn NQF-aligned foundation unit standard credentials from MICT SETA and FASSET for office administration and bookkeeping.',
    ids: ['mict-seta-end-user-computing', 'fasset-bookkeeping-financial-skills'],
  },
];

const relatedCourses = saGovernmentCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: Landmark,
    title: 'Official SA Public Sector Recognition',
    body: 'Courses are designed directly by the National School of Government, NYDA, NEMISA, and SETA sector authorities for South African career pathways.',
  },
  {
    icon: Award,
    title: 'NQF & Statutory Alignment',
    body: 'Modules align with statutory requirements such as Public Service Act regulations, PFMA financial standards, and NQF unit standards.',
  },
  {
    icon: Lock,
    title: '100% Free for SA Job Seekers',
    body: 'All listed government portals offer completely free course access, assessments, and downloadable completion certificates.',
  },
  {
    icon: Clock,
    title: 'Self-Paced Digital Learning',
    body: 'Study online at your convenience using desktop or mobile data via official state-sponsored eLearning portals.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Public Administration & Government Officer',
    detail: 'Manage public sector administrative operations, municipal governance, and departmental compliance. Key modules: NSG Public Service Ethics & PFMA Fundamentals.',
  },
  {
    role: 'Youth Business Founder & Enterprise Consultant',
    detail: 'Launch small businesses, prepare bankable business proposals, and access NYDA grant vouchers. Key modules: NYDA Entrepreneurship Track.',
  },
  {
    role: 'Junior Software & Mobile App Developer',
    detail: 'Build web and mobile software applications for commercial and public sector platforms. Key modules: mLab & DSI Mobile Development Bootcamp.',
  },
  {
    role: 'Administrative Support Specialist',
    detail: 'Perform data capture, office document formatting, and spreadsheet recordkeeping in corporate and government offices. Key modules: MICT SETA End-User Computing.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/us-government-free-online-courses-certificates',
    title: 'Free US Government Online Courses with Certificates',
    desc: 'Official free certificates from FEMA, CISA, CDC, NIH, SBA, and YALI Network portals.',
  },
  {
    href: '/first-graduate-job-south-africa',
    title: 'How to Get Your First Graduate Job in South Africa',
    desc: 'Step-by-step framework for SA graduates: CV formatting, closing skills gaps, and interview prep.',
  },
  {
    href: '/free-courses-with-certificates',
    title: 'Free Online Courses with Free Certificates',
    desc: 'Explore the complete directory of free certified online courses across top global platforms.',
  },
  {
    href: '/free-it-courses-with-certificates',
    title: 'Free IT Support & Systems Admin Courses',
    desc: 'Master computer networking, Active Directory, help desk SLAs, and Windows/Linux server management.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Are these South African government online courses completely free?',
    a: 'Yes. Learning portals operated by the National School of Government (NSG), NYDA, NEMISA, mLab Southern Africa, and SETA training initiatives offer free course modules, assessments, and downloadable certificates for South African citizens and job seekers.',
  },
  {
    q: 'What is the Nyukela pre-entry certificate for public service?',
    a: 'Nyukela is a mandatory pre-entry online course offered by the National School of Government (NSG) for individuals seeking Senior Management Service (SMS) positions (Director level and above) in South African national and provincial departments.',
  },
  {
    q: 'Are SETA accredited unit standard certificates recognized by employers?',
    a: 'Yes. SETA accredited unit standards and skills certificates align with the South African National Qualifications Framework (NQF) and provide verifiable proof of workplace competency for administrative, financial, and technical roles.',
  },
  {
    q: 'How do I access these courses?',
    a: 'Clicking any course card in this guide takes you directly to the official government portal (such as theNSG.gov.za, nyda.gov.za, or nemisa.co.za) where you can register a free account and start learning immediately.',
  },
];

export default function SAGovernmentCoursesPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'SA Government Free Online Courses' }]}
      heading="Free SA Government & SETA Online Courses with Certificates (2026)"
      heroDescription="Explore official South African public sector eLearning portals, SETA accredited training modules, and state-sponsored digital skills tracks offering free completion certificates in Public Administration, Ethics, Youth Entrepreneurship, Digital Literacy, and Software Engineering."
      heroBadges={[
        { icon: Landmark, label: 'Official SA Public Sector Portals', iconClassName: 'text-amber-600' },
        { icon: Award, label: 'SETA & NSG Accredited', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: '100% Free Access', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Complete South African Government Training Modules?"
      benefitsSectionSubtitle="State-sponsored learning portals provide recognized qualifications tailored specifically to South African statutory regulations, public service frameworks, and workplace needs."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Official SA Government Courses"
      carouselSubtitle="Direct links to free training portals from NSG, NYDA, NEMISA, mLab, and SETAs"
      careerPathsTitle="Career Opportunities in the SA Economy"
      careerPathsSubtitle="These free public sector training tracks prepare you for key roles across SA government departments, municipalities, and private enterprises."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Upgrade Your CV with Official SA Credentials"
      ctaBody="Start learning with the National School of Government, NYDA, NEMISA, and SETA accredited portals today."
      ctaPrimaryLabel="Explore All Course Guides"
      ctaPrimaryHref="/guides"
      ctaSecondaryLabel="View First Job in SA Guide"
      ctaSecondaryHref="/first-graduate-job-south-africa"
    />
  );
}
