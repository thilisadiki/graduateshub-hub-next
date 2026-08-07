import type { Metadata } from 'next';
import { Server, HardDrive, Wifi, ShieldCheck, Award, Clock, Users, Star, Settings } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-it-courses-with-certificates`;

export const metadata: Metadata = {
  title: 'Best Free IT Support & Systems Admin Courses with Certificates (2026)',
  description:
    'Start your IT support career. Free certified courses covering computer networking (TCP/IP), Active Directory DS, ITSM help desk SLAs, Windows/Linux server admin, and CompTIA A+ alignment.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free IT Support & Systems Admin Courses with Certificates (2026) | Graduates Hub',
    description:
      'Master IT help desk troubleshooting, computer networking, Active Directory DS, and OS administration with free certified courses. Prepare for entry-level IT roles.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Hardware & OS Administration',
    slug: 'information-technology',
    description: 'Master hardware diagnostics, computer assembly, and operating system administration across Windows and Linux.',
    items: [
      {
        id: 'computer-networking',
        customContent: 'Computer hardware and operating system administration form the foundation of corporate technical support. This course breaks down hardware components, BIOS/UEFI settings, disk partitioning, and dual-boot configurations. You will learn to troubleshoot startup errors, manage RAM allocations, and perform system recovery procedures for corporate end-user devices.',
      },
      {
        id: 'management-information-systems',
        customContent: 'Understanding how IT hardware integrates into corporate business goals is essential for IT specialists. This course covers enterprise software lifecycles, asset tracking, system development, and business continuity. You will learn how IT service desks support commercial business operations and prevent costly downtime.',
      },
    ],
  },
  {
    label: 'Enterprise Networking & Protocols',
    slug: 'information-technology',
    description: 'Learn the core TCP/IP protocols, DNS resolution, DHCP leasing, and router/switch configurations that keep corporate networks online.',
    items: [
      {
        id: 'computer-networking',
        customContent: 'Enterprise IT support requires a deep understanding of network architecture. This diploma covers the 7-layer OSI model, IPv4/IPv6 CIDR subnetting, DNS domain name resolution, DHCP IP address assignments, and VLAN isolation. You will learn how to diagnose network outages using ping, traceroute, and nslookup CLI tools.',
      },
    ],
  },
  {
    label: 'Active Directory & Identity Management',
    slug: 'information-technology',
    description: 'Configure corporate Directory Services (Active Directory DS), Group Policy Objects (GPOs), and single sign-on access.',
    items: [
      {
        id: 'foundations-of-itil-4',
        customContent: 'Corporate IT administration revolves around Identity and Access Management (IAM). This course guides you through Active Directory domain controller setup, provisioning Joiner-Mover-Leaver user accounts, configuring organizational units (OUs), and enforcing password security policies with Group Policy Objects (GPOs).',
      },
    ],
  },
];

const benefits: BenefitItem[] = [
  { icon: Server, title: 'Hands-on Systems Admin', body: 'Learn Active Directory DS, Group Policy Objects, PowerShell scripts, and dual OS administration.' },
  { icon: Award, title: 'CPD Accredited Certificates', body: 'Earn verifiable digital certificates to attach to your CV and showcase on LinkedIn.' },
  { icon: Clock, title: '100% Free & Self-Paced', body: 'Study on your own schedule. Build your IT foundation without spending on expensive bootcamps.' },
  { icon: Wifi, title: 'Networking Fundamentals', body: 'Master TCP/IP 5-layer model, IPv4 subnetting, DNS, DHCP, and Wireshark packet analysis.' },
  { icon: Users, title: 'Help Desk & ITSM SLAs', body: 'Understand ITIL v4 incident triage, ticket priority matrices (P1–P4), and SLA management.' },
  { icon: Star, title: 'Industry-Vetted Content', body: 'Curated to align with CompTIA A+, CompTIA Network+, and Google IT Support certifications.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'IT Support Specialist', category: 'IT Support', href: '/portfolio-tasks/information-technology' },
  { role: 'Help Desk Technician', category: 'Service Desk', href: '/portfolio-tasks/information-technology' },
  { role: 'Systems Administrator Associate', category: 'Systems Admin', href: '/portfolio-tasks/information-technology' },
  { role: 'Junior Network Technician', category: 'Networking', href: '/portfolio-tasks/information-technology' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Google IT Support Certificate Guide (2026)', desc: 'Complete breakdown of Google IT Support modules, labs, and CompTIA A+ voucher.', href: '/google-it-support-certificate-guide' },
  { title: 'Microsoft 365 Fundamentals Guide (2026)', desc: 'Master MS-900 Entra ID, Exchange Online, SharePoint permissions, and MFA.', href: '/microsoft-365-fundamentals-course-guide' },
  { title: 'Free Cybersecurity Courses (2026)', desc: 'Master network security, security requirement frameworks, and CISSP domains.', href: '/free-cybersecurity-courses' },
];

const faqs: FaqItem[] = [
  { q: 'How do I start an IT support career without a degree?', a: 'You do not need a 4-year computer science degree to land an entry-level IT support job. Employers prioritize practical knowledge of operating systems (Windows/Linux), computer networking (TCP/IP), Active Directory user management, and help desk troubleshooting. Studying these free courses and completing graded portfolio tasks provides tangible proof of your skills.' },
  { q: 'Which IT certifications are most recognized for beginners?', a: 'The most widely recognized entry-level IT certifications are CompTIA A+, Google IT Support Professional Certificate, CompTIA Network+, and Microsoft 365 Fundamentals (MS-900). Our free learning paths align directly with these exam objectives.' },
  { q: 'Are these IT support courses completely free?', a: 'Yes! All courses listed on Graduates Hub are 100% free to access. After completing a course and passing the final assessment, you can download a digital certificate of completion to include in your CV.' },
];

const exploreCategories = [
  { label: 'IT & Infrastructure', href: '/portfolio-tasks/information-technology' },
  { label: 'Cloud Computing', href: '/free-cloud-computing-courses' },
  { label: 'Cybersecurity', href: '/free-cybersecurity-courses' },
];

export default function FreeITCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });

  const relatedCourses = allCourses
    .filter((c) => c.category.includes('IT Courses') && !featuredIds.includes(c.id))
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
        breadcrumb={[{ label: 'Free IT Support Courses' }]}
        heading="Best Free IT Support & Systems Admin Courses with Certificates (2026)"
        heroDescription="Start your IT career today. Master computer networking, Active Directory DS, help desk SLA ticket triage, OS administration, and CompTIA A+ exam concepts."
        heroBadges={[
          { icon: Server, label: '100% Free to Study', iconClassName: 'text-primary' },
          { icon: Award, label: 'CPD Accredited Certificates', iconClassName: 'text-emerald-500' },
          { icon: Clock, label: 'Self-Paced Learning' },
        ]}
        authors={['jason']}
        benefitsSectionTitle="Why Build IT Support & Systems Admin Skills?"
        benefitsSectionSubtitle="Every enterprise relies on IT infrastructure. System administration and network troubleshooting skills are consistently in high demand across corporate environments."
        benefits={benefits}
        courseCategories={courseCategories}
        relatedCourses={relatedCourses}
        carouselTitle="Related IT & Infrastructure Courses"
        carouselSubtitle="Explore additional free learning paths to expand your technical support capabilities"
        careerPathsTitle="Where This IT Training Can Lead You"
        careerPathsSubtitle="These courses align directly with high-demand entry-level IT roles."
        careerPaths={careerPaths}
        relatedGuides={relatedGuides}
        exploreCategories={exploreCategories}
        faqs={faqs}
        ctaHeading="Launch Your IT Support Career"
        ctaBody="Start with Computer Networking or ITIL 4 Foundations. Gain the accredited credentials and practical portfolio proof that impress hiring managers."
        ctaPrimaryLabel="Explore IT Portfolio Briefs"
        ctaPrimaryHref="/portfolio-tasks/information-technology"
        ctaSecondaryLabel="View IT Career Roadmap"
        ctaSecondaryHref="/career-roadmaps/it-support-specialist"
      />
    </div>
  );
}
