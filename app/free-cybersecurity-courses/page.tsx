import type { Metadata } from 'next';
import { Shield, Lock, Award, Clock, Users, Star, Server, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-cybersecurity-courses`;

export const metadata: Metadata = {
  title: 'Best Free Cybersecurity Courses with Certificates (2026)',
  description:
    'Curated path to master cybersecurity. Free certified training covering CISSP prep, secure software design, the CIA Triad, network security, and regulatory compliance.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free Cybersecurity Courses with Certificates (2026) | Graduates Hub',
    description:
      'Curated path to master cybersecurity. Free certified training covering CISSP prep, secure software design, the CIA Triad, network security, and regulatory compliance.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Cybersecurity Leadership & Management',
    slug: 'it',
    description: 'Prepare for senior governance roles and master corporate information security.',
    items: [
      {
        id: 'diploma-in-cissp-2024',
        customContent: 'This diploma provides a comprehensive survey of the eight core domains of the CISSP Body of Knowledge. You will study risk management, asset security, governance, identity access management, and security operations. It serves as an excellent preparation tool for the industry-standard CISSP credential, helping you build senior governance capabilities.'
      }
    ]
  },
  {
    label: 'Secure Software Development',
    slug: 'software-engineering',
    description: 'Learn the principles of proactive threat modeling and writing code resilient to exploitation.',
    items: [
      {
        id: 'secure-software-design',
        customContent: 'A highly technical course covering structural security and practical mitigation of the OWASP Top 10 vulnerabilities. You will learn input sanitization, secure password hashing, and how to defend against cross-site scripting (XSS) and SQL injection. This knowledge helps you design systems that are resilient to active cyber threats and injection attacks.'
      },
      {
        id: 'secure-software-concepts',
        customContent: 'Focuses on the foundational tenets of security by design. Understand the CIA Triad (Confidentiality, Integrity, and Availability), secure software architectures, and how to formulate non-functional security requirements during early software engineering phases. You will learn how to prevent vulnerabilities before the coding phase begins.'
      }
    ]
  },
  {
    label: 'Network Security & Compliance',
    slug: 'it',
    description: 'Understand the foundations of computer networking and regulatory frameworks.',
    items: [
      {
        id: 'computer-networking',
        customContent: 'You cannot defend a network without understanding how data moves through it. This foundational course covers the core protocols of the internet, including TCP/IP addressing, subnet mask allocation, routers, switches, and the OSI stack. By mastering how packets are routed, you will be prepared to configure firewalls, audit port security, and identify potential entry points for attackers in enterprise environments.'
      },
      {
        id: 'computer-networking-lan-osi',
        customContent: 'A focused certificate looking specifically at Local Area Network (LAN) structures and the OSI reference model. It teaches you how to map traffic flows and isolate troubleshooting steps to the correct layer of the network stack. This helps you build a solid understanding of how physical and logical components interact in a company network.'
      },
      {
        id: 'fundamentals-of-dora',
        customContent: 'Examines the Digital Operational Resilience Act (DORA), the strict regulatory framework governing information security in the European financial sector and its global supply chain. You will learn about ICT risk management, incident reporting protocols, and third-party risk assessments. This knowledge is a vital asset for IT compliance specialists working in global fintech and banking environments.'
      }
    ]
  }
];

const benefits: BenefitItem[] = [
  { icon: Shield, title: 'In-Demand Tech Skills', body: 'Cybersecurity has a global talent shortage. These courses cover critical skills needed by modern security teams.' },
  { icon: Award, title: 'Downloadable Certificates', body: 'Get a verifiable certificate on completion of each course to strengthen your CV.' },
  { icon: Clock, title: '100% Self-Paced', body: 'No rigid schedules or deadlines. Study at your own pace alongside other responsibilities.' },
  { icon: Server, title: 'Hands-on Concepts', body: 'Learn networking protocols, secure programming principles, and regulatory standards.' },
  { icon: Users, title: 'Accessible to Beginners', body: 'Start with fundamental computer networking and software concepts, then progress to advanced governance.' },
  { icon: Star, title: 'curator-Reviewed Content', body: 'Every course in this guide has been verified for accuracy, currency, and value for SA graduates.' }
];

const careerPaths: CareerPathItem[] = [
  { role: 'Security Analyst', category: 'IT Security', href: '/category/it' },
  { role: 'Secure Code Auditor', category: 'Software Engineering', href: '/category/software-engineering' },
  { role: 'Compliance Officer', category: 'Risk & Governance', href: '/category/business' },
  { role: 'Network Support Specialist', category: 'IT & Infrastructure', href: '/category/it' }
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free Courses for Software Developers (2026)', desc: 'Learn programming languages, clean code practices, and DevOps pipelines.', href: '/free-courses-for-software-developers' },
  { title: 'Free AI Courses for Beginners (2026)', desc: 'Discover how machine learning, LLMs, and prompt engineering are reshaping security.', href: '/free-ai-courses-for-beginners' },
  { title: 'Free Business Courses Online (2026)', desc: 'Develop project management, risk analysis, and corporate compliance skills.', href: '/free-business-courses' }
];

const faqs: FaqItem[] = [
  { q: 'Can I get a job in cybersecurity with just these free courses?', a: 'These courses provide a robust, structured foundation in network security, secure coding, and security policy. To land an entry-level security analyst job, combine these free certificates with a strong personal portfolio (e.g., proof of work projects showing home lab setups) and industry-recognized certifications like CompTIA Security+ or CISSP once you meet the experience requirements.' },
  { q: 'What is the best order to study these courses?', a: 'If you are new to IT, start with Computer Networking. Once you understand how computers communicate, proceed to the Software Concepts and Secure Software Design courses to learn code-level security. Finally, take the CISSP and DORA courses to understand enterprise security architecture and compliance frameworks.' },
  { q: 'Are these cybersecurity certificates recognized in South Africa?', a: 'Yes. The certificates are CPD-accredited and represent verifiable proof of your study hours and mastery of topics. While South African employers will evaluate your hands-on problem-solving skills in technical assessments, having structured courses on your CV is a strong positive signal.' }
];

const exploreCategories = [
  { label: 'IT & Technology', href: '/category/it' },
  { label: 'Software Development', href: '/category/software-engineering' },
  { label: 'Business & Management', href: '/category/business' }
];

export default function FreeCybersecurityCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });
  
  const relatedCourses = allCourses
    .filter((c) => c.category.includes('IT') && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Cybersecurity Courses' }]}
      heading="Best Free Cybersecurity Courses with Certificates (2026)"
      heroDescription="Master information security, secure application development, networking protocols, and governance. Build a career in one of tech's highest-paying, fastest-growing fields with free, structured training."
      heroBadges={[
        { icon: Shield, label: '100% Free Training', iconClassName: 'text-primary' },
        { icon: Award, label: 'CPD Certificates Included', iconClassName: 'text-emerald-500' },
        { icon: Clock, label: 'Learn at Your Own Pace' }
      ]}
      authors={['jason']}
      lastUpdated="May 2026"
      benefitsSectionTitle="Why Start a Career in Cybersecurity?"
      benefitsSectionSubtitle="As digital infrastructure scales globally, protecting data is the top priority for enterprises. Here is why you should learn security."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Complementary Free IT Courses"
      carouselSubtitle="Broaden your tech skills with these top-rated free learning paths"
      careerPathsTitle="Where This Training Can Lead You"
      careerPathsSubtitle="These courses align directly with roles in high demand across the South African tech market."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Start Securing Your Future"
      ctaBody="Pick your first course—we recommend starting with Networking if you are a beginner—and build a foundation in security today."
      ctaPrimaryLabel="View All IT Courses"
      ctaPrimaryHref="/category/it"
      ctaSecondaryLabel="Build Your Portfolio"
      ctaSecondaryHref="/portfolio"
    />
  );
}
