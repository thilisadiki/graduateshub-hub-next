import type { Metadata } from 'next';
import { Cloud, Server, Database, Activity, Award, Clock, Users, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-cloud-computing-courses`;

export const metadata: Metadata = {
  title: 'Best Free Cloud Computing Courses with Certificates (2026)',
  description:
    'Start your cloud career today. Free certified courses covering cloud-native app development, AWS serverless concepts, VPC networking, and DevOps ALM.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free Cloud Computing Courses with Certificates (2026) | Graduates Hub',
    description:
      'Start your cloud career today. Free certified courses covering cloud-native app development, AWS serverless concepts, VPC networking, and DevOps ALM.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Cloud Infrastructure & Networking',
    slug: 'it',
    description: 'Master the fundamental networking layer that binds cloud systems together.',
    items: [
      {
        id: 'computer-networking',
        customContent: 'Cloud infrastructure is built entirely on virtualized networking layers. This course details routers, switches, IP routing tables, and port configuration, which are directly applicable when configuring Virtual Private Clouds (VPCs) in AWS or Azure. You will learn to configure subnetting and secure access gateways to keep cloud applications isolated and secure.'
      }
    ]
  },
  {
    label: 'DevOps & CI/CD Pipelines',
    slug: 'software-engineering',
    description: 'Learn how to automate infrastructure deployments and manage code delivery in the cloud.',
    items: [
      {
        id: 'devops-alm',
        customContent: 'Modern cloud development relies on automated delivery pipelines rather than manual server configurations. This course covers Application Lifecycle Management (ALM), version control integration, automated build triggers, and continuous deployment (CI/CD) environments. You will learn how to automate deployments and track software changes, a core requirement for platform and DevOps roles.'
      },
      {
        id: 'devops-fundamentals',
        customContent: 'Infrastructure is only as reliable as the practices used to deploy it. This course introduces DevOps culture, container lifecycle automation, and continuous delivery loops. You will understand how breaking down traditional silos between developers and operations reduces cloud hosting costs, increases deployment frequency, and ensures high availability.'
      }
    ]
  },
  {
    label: 'Cloud App Development & Databases',
    slug: 'software-engineering',
    description: 'Build serverless web applications and model highly scalable cloud-native databases.',
    items: [
      {
        id: 'advanced-diploma-in-modern-application-development',
        customContent: 'Building for the cloud requires a shift from monolithic frameworks to distributed, serverless codebases. This intensive diploma covers SPA architecture, serverless backend functions, including AWS Lambda or Google Cloud Functions, and client authentication. You will learn how to design scalable backend APIs that handle high user volumes efficiently.'
      },
      {
        id: 'diploma-in-firestore-development',
        customContent: 'Scalable cloud apps need globally distributed, high-performance database backends. This course covers Cloud Firestore, Google Cloud\'s serverless NoSQL database. You will learn how to design document structures, write queries, manage indices, and write security rules to prevent unauthorized direct client database access.'
      },
      {
        id: 'information-systems-technology-business-models',
        customContent: 'Cloud systems must be optimized to drive business value and efficiency. This course analyzes the business economics of SaaS architectures, digital platform models, and capital to operational expenditure transitions. You will learn how to design cloud solutions that fit organizational financial goals and support rapid business growth.'
      }
    ]
  }
];

const benefits: BenefitItem[] = [
  { icon: Cloud, title: 'Cloud-Native Practices', body: 'Learn modern serverless architectures, NoSQL databases, and SaaS business models.' },
  { icon: Award, title: 'Accredited Credentials', body: 'Earn CPD certificates and diplomas to prove your cloud readiness to local tech recruiters.' },
  { icon: Clock, title: 'Flexible & Self-Paced', body: 'Study on your own schedule. Build your cloud foundation while maintaining your current job or studies.' },
  { icon: Server, title: 'DevOps Automation', body: 'Understand CI/CD pipelines, containerization concepts, and Infrastructure as Code.' },
  { icon: Users, title: 'No Entry Prerequisites', body: 'Every course listed is free to access and assumes zero prior commercial cloud experience.' },
  { icon: Star, title: 'Highly-Rated Content', body: 'Carefully vetted for quality, structure, and direct relevance to South African junior developer roles.' }
];

const careerPaths: CareerPathItem[] = [
  { role: 'Cloud Support Engineer', category: 'Cloud Infrastructure', href: '/category/it' },
  { role: 'Junior DevOps Engineer', category: 'DevOps & Platform', href: '/category/software-engineering' },
  { role: 'Backend Cloud Developer', category: 'Software Development', href: '/category/software-engineering' },
  { role: 'Database Administrator', category: 'Cloud Databases', href: '/category/it' }
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free Courses for Software Developers (2026)', desc: 'Learn programming languages, clean code practices, and DevOps pipelines.', href: '/free-courses-for-software-developers' },
  { title: 'Free Cybersecurity Courses (2026)', desc: 'Master network security, security requirements, and CISSP principles.', href: '/free-cybersecurity-courses' },
  { title: 'Free Courses for Data Analysts (2026)', desc: 'Learn SQL, Excel, and data visualization tools to analyze cloud-scale datasets.', href: '/free-courses-for-data-analysts' }
];

const faqs: FaqItem[] = [
  { q: 'How do I start a career in cloud computing?', a: 'Start with a strong understanding of computer networking and operating systems. Next, learn coding (like Python or JavaScript) and web architectures. Finally, study cloud-specific platforms (AWS, Azure, GCP) and automation (Docker, DevOps). This guide provides the exact foundation you need.' },
  { q: 'Are AWS or Azure certificates better?', a: 'AWS is currently the global market leader in cloud market share, but Azure is heavily adopted in large enterprise environments. In South Africa, both are in extremely high demand. Understanding the core cloud concepts (compute, networking, storage) allows you to easily switch between platforms.' },
  { q: 'Are these cloud computing certificates completely free?', a: 'Yes, studying the courses and passing the assessments on Graduates Hub is 100% free. Once you finish a course, you can download a CPD-accredited digital certificate to attach to your CV and showcase on LinkedIn.' }
];

const exploreCategories = [
  { label: 'IT & Technology', href: '/category/it' },
  { label: 'Software Development', href: '/category/software-engineering' },
  { label: 'Business & Management', href: '/category/business' }
];

export default function FreeCloudComputingCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });
  
  const relatedCourses = allCourses
    .filter((c) => c.category.includes('Software Engineering') && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Cloud Computing Courses' }]}
      heading="Best Free Cloud Computing Courses with Certificates (2026)"
      heroDescription="Master cloud architecture, VPC configuration, serverless deployments, database scaling, and DevOps pipelines. Build job-ready infrastructure skills with structured, free accredited training."
      heroBadges={[
        { icon: Cloud, label: '100% Free to Study', iconClassName: 'text-primary' },
        { icon: Award, label: 'Diplomas & Certificates', iconClassName: 'text-emerald-500' },
        { icon: Clock, label: 'Self-Paced Learning' }
      ]}
      authors={['jason']}
      lastUpdated="May 2026"
      benefitsSectionTitle="Why Focus on Cloud & DevOps?"
      benefitsSectionSubtitle="Almost all modern enterprise systems are cloud-native. Understanding cloud architecture is a massive accelerator for software engineering careers."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Related Software Development Courses"
      carouselSubtitle="Broaden your development skillset with these top free learning paths"
      careerPathsTitle="Where This Training Can Lead You"
      careerPathsSubtitle="These courses align directly with roles in high demand across the South African cloud market."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Accelerate Your Cloud Career"
      ctaBody="Begin with Computer Networking or DevOps Fundamentals. Gain the credentials that prove you understand how modern cloud systems scale."
      ctaPrimaryLabel="View All Software Courses"
      ctaPrimaryHref="/category/software-engineering"
      ctaSecondaryLabel="Explore Career Roadmaps"
      ctaSecondaryHref="/career-roadmaps"
    />
  );
}
