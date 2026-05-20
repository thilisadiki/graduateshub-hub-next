import type { Metadata } from 'next';
import { Layout, Palette, PenTool, Eye, Award, Clock, Users, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-ui-ux-design-courses`;

export const metadata: Metadata = {
  title: 'Best Free UI/UX & Product Design Courses with Certificates (2026)',
  description:
    'Kickstart your design career. Free certified courses covering user research, wireframing, high-fidelity UI design in Figma, usability testing, and conversion-focused layouts.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free UI/UX & Product Design Courses with Certificates (2026) | Graduates Hub',
    description:
      'Kickstart your design career. Free certified courses covering user research, wireframing, high-fidelity UI design in Figma, usability testing, and conversion-focused layouts.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Foundational UI/UX Design Principles',
    slug: 'it',
    description: 'Learn the theories of user experience, interaction models, and brand design.',
    items: [
      {
        id: 'introduction-to-ui-ux-design',
        customContent: 'Every digital product must balance aesthetics with functional ease. This course covers sitemaps, information architecture, user persona development, and usability testing. Learning these fundamentals allows you to construct intuitive user journeys before diving into high-fidelity design tools.'
      },
      {
        id: 'diploma-user-experience-design-web-adobe-xd',
        customContent: 'To build websites that engage visitors, you must master the complete web design lifecycle. This comprehensive diploma details user profiles, sales funnel architectures, wireframes, and interactive prototyping using Adobe XD. It also covers branding, logo creation, and freelance client communication.'
      }
    ]
  },
  {
    label: 'Figma & Interactive Prototyping',
    slug: 'it',
    description: 'Master the industry-standard tools and front-end coding layouts used by product teams.',
    items: [
      {
        id: 'user-interface-design-with-figma',
        customContent: 'Figma is the industry-standard collaborative tool for modern design teams. This practical course covers layout grids, component states, vector networks, and interactive prototyping. You will learn to construct responsive interfaces and build high-fidelity interactive prototypes that look and feel like real applications.'
      },
      {
        id: 'html-css-web-dev',
        customContent: 'To design digital interfaces that are actually buildable, you must understand the underlying code. This course covers semantic HTML tags, CSS box models, and responsive layout systems like Flexbox and CSS Grid. Knowing these constraints lets you hand over pixel-perfect design assets to development teams.'
      }
    ]
  },
  {
    label: 'Conversion Design & Agile Collaboration',
    slug: 'marketing',
    description: 'Align your designs with business metrics and collaborate in Agile product sprints.',
    items: [
      {
        id: 'using-digital-marketing-to-convert-customers',
        customContent: 'Designers must align their layouts with business metrics to drive signups and sales. This conversion optimization course covers landing page visual hierarchies, user behavior psychology, and checkout flow design. You will learn how to identify design friction and design interfaces that convert.'
      },
      {
        id: 'growth-hacking-techniques-for-digital-marketing',
        customContent: 'Digital products must keep users engaged long after their first visit. This course covers user onboarding flow design, retention loops, and user activation strategies. You will learn how to analyze user behavior data and design engaging interfaces that keep users coming back.'
      },
      {
        id: 'intro-ai-business',
        customContent: 'AI tools are transforming how designers conduct user research and generate interface copy. This course explores how to use generative AI models to summarize user interviews, create placeholder text, and build fast concept mockups, allowing you to design and iterate much faster.'
      }
    ]
  }
];

const benefits: BenefitItem[] = [
  { icon: Layout, title: 'Visual Hierarchy', body: 'Learn how to structure layouts, apply grids, and establish strong visual hierarchies.' },
  { icon: Palette, title: 'Color & Typography', body: 'Master color theory, accessible contrast, and type systems for digital interfaces.' },
  { icon: PenTool, title: 'Figma & Prototyping', body: 'Translate research into interactive wireframes and high-fidelity clickable prototypes.' },
  { icon: Eye, title: 'Usability Vetting', body: 'Discover how to conduct user testing and analyze behavioral metrics to refine designs.' },
  { icon: Users, title: 'User-Centric Mindset', body: 'Put the user first by designing accessible, inclusive, and friction-free flows.' },
  { icon: Star, title: 'Job-Ready Portfolio', body: 'Create case studies detailing your research, wireframes, and final UI components.' }
];

const careerPaths: CareerPathItem[] = [
  { role: 'UI/UX Designer', category: 'Product Design', href: '/category/marketing' },
  { role: 'Product Designer', category: 'Product & Dev', href: '/category/software-engineering' },
  { role: 'UX Researcher', category: 'User Research', href: '/category/marketing' },
  { role: 'Front-End UI Developer', category: 'Web Development', href: '/category/software-engineering' }
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free Courses for Software Developers (2026)', desc: 'Learn programming languages, clean code practices, and front-end architectures.', href: '/free-courses-for-software-developers' },
  { title: 'Free Digital Marketing Courses (2026)', desc: 'Master conversion optimization, SEO, and copywriting to improve your designs.', href: '/free-digital-marketing-courses' },
  { title: 'Free AI Courses for Beginners (2026)', desc: 'Discover how AI models can accelerate your design research and prototyping.', href: '/free-ai-courses-for-beginners' }
];

const faqs: FaqItem[] = [
  { q: 'What is the difference between UI and UX design?', a: 'UI (User Interface) design focuses on the visual and interactive elements of a product, such as buttons, typography, colors, and layout. UX (User Experience) design focuses on the overall feel of the product, user research, and how easily a user can achieve their goals without friction.' },
  { q: 'Do I need to know how to code to be a UI/UX designer?', a: 'No, coding is not strictly required. However, understanding HTML, CSS, and how layouts are built makes you a far more effective designer because you can build designs that are technically feasible and communicate better with developers.' },
  { q: 'How do I build a UI/UX portfolio with these free courses?', a: 'Apply the concepts from these courses to redesign an existing app or build a new product concept. Document your process: show your user research, wireframes, user flows, and final high-fidelity Figma screens. Employers hire designers based on their portfolio case studies, not just certificates.' }
];

const exploreCategories = [
  { label: 'Software Engineering', href: '/category/software-engineering' },
  { label: 'Digital Marketing', href: '/category/marketing' },
  { label: 'Business & PM', href: '/category/business' }
];

export default function FreeUiUxDesignCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });
  
  const relatedCourses = allCourses
    .filter((c) => (c.category.includes('Marketing') || c.category.includes('Software Engineering') || c.category.includes('IT Courses')) && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free UI/UX Design Courses' }]}
      heading="Best Free UI/UX & Product Design Courses with Certificates (2026)"
      heroDescription="Master interface layouts, user psychology, responsive styling, conversion optimization, and agile workflow patterns. Build a professional, user-centric product design career for free."
      heroBadges={[
        { icon: Layout, label: '100% Free Design Path', iconClassName: 'text-primary' },
        { icon: Award, label: 'Verifiable Certificates', iconClassName: 'text-emerald-500' },
        { icon: Clock, label: 'Self-Paced Learning' }
      ]}
      authors={['jason']}
      lastUpdated="May 2026"
      benefitsSectionTitle="Why Learn UI/UX Design?"
      benefitsSectionSubtitle="Great design is the single biggest differentiator for digital products today. Understanding user needs and crafting visual systems is a highly valued skill."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Complementary Engineering & Marketing Paths"
      carouselSubtitle="Broaden your skill set with these top-rated free learning paths"
      careerPathsTitle="Where This Training Can Lead You"
      careerPathsSubtitle="These courses align directly with roles in high demand across the product design market."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Design the Future of Digital Products"
      ctaBody="Start with Web Development to learn layout logic, then proceed to Conversion Optimization to learn how to design for user action."
      ctaPrimaryLabel="View Marketing Courses"
      ctaPrimaryHref="/category/marketing"
      ctaSecondaryLabel="Browse Career Roadmaps"
      ctaSecondaryHref="/career-roadmaps"
    />
  );
}
