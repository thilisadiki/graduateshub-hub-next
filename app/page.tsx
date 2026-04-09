import type { Metadata } from 'next';
import Link from 'next/link';
import { Unlock, Clock, Globe, ChevronRight, ExternalLink } from 'lucide-react';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import HowItWorks from '@/components/HowItWorks';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import LatestArticles from '@/components/LatestArticles';
import FAQ from '@/components/FAQ';
import AIToolsBanner from '@/components/AIToolsBanner';
import { courses } from '@/data/courses';

export const revalidate = 300;

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Free Learning Resources, Guides & Courses | Graduates Hub',
  description: 'Graduates Hub is your free learning resource centre. Browse career guides, study tips, and hundreds of free online courses across IT, Software Development, Business, Marketing, Accounting, and more.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'Free Learning Resources, Guides & Courses | Graduates Hub',
    description: 'Graduates Hub is your free learning resource centre. Browse career guides, study tips, and hundreds of free online courses across IT, Software Development, Business, Marketing, Accounting, and more.',
    url: `${SITE_URL}/`,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Graduates Hub',
  url: SITE_URL,
  logo: `${SITE_URL}/graduates-hub-logo.png`,
  description: 'Your free learning resource centre for career guides, study tips, and hundreds of free certified courses.',
  founder: {
    '@type': 'Person',
    name: 'Jason Sadiki',
    jobTitle: 'Technical SEO Specialist & Web Developer',
    sameAs: [
      'https://www.linkedin.com/in/jasonsadiki/',
      'https://thilisadiki.dev',
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Graduates Hub',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

async function fetchHomeArticles(perPage: number) {
  try {
    const response = await fetch(
      `https://articles.graduateshub.co.za/wp-json/wp/v2/posts?per_page=${perPage}&_embed`,
      { next: { revalidate: 300 } }
    );
    if (!response.ok) return undefined;

    const data = await response.json();
    return data.map((post: any) => {
      let imageUrl =
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80';
      if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
      }

      const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '');
      const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        excerpt: cleanExcerpt.substring(0, 120) + '...',
        link: post.link,
        date: formattedDate,
        imageUrl,
      };
    });
  } catch {
    return undefined;
  }
}

export default async function Home() {
  const featuredCourses = courses.filter(c => c.featured).slice(0, 6);
  const carouselCourses = courses.filter(c => !c.featured).slice(0, 10);
  const homeArticles = await fetchHomeArticles(6);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: featuredCourses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: { '@type': 'Organization', name: 'Graduates Hub', sameAs: SITE_URL },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          duration: `PT${parseInt(course.duration.split('-')[0])}H`,
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Hero />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="mt-0"><LatestArticles perPage={6} initialArticles={homeArticles} /></div>
        <div className="mt-24"><HowItWorks /></div>
        <div className="mt-16"><AIToolsBanner /></div>

        {/* Popular Guides */}
        <div className="mt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Popular Guides</h2>
              <p className="text-gray-500 mt-2">Curated learning paths for every goal. All free to start.</p>
            </div>
            <Link href="/guides" className="text-primary font-bold hover:text-blue-800 transition-colors hidden sm:block">
              View All Guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Free Courses for Beginners', desc: 'Zero experience needed. Start building real skills from scratch.', href: '/free-courses-for-beginners', badge: 'Beginner' },
              { title: 'Free Courses with Certificates', desc: 'Top-rated courses across IT, Business, Marketing, and Finance.', href: '/free-courses-with-certificates', badge: 'Popular' },
              { title: 'Best Alison Courses (2026)', desc: 'CPD-accredited diplomas and certificates. Free to study.', href: '/best-alison-courses-with-certificates', badge: 'Alison' },
              { title: 'Free Courses for Data Analysts', desc: 'Excel, SQL, Python, and Power BI: the full analyst learning path.', href: '/free-courses-for-data-analysts', badge: 'Data' },
              { title: 'Free AI Courses for Beginners', desc: 'Learn AI and Generative AI without any coding background.', href: '/free-ai-courses-for-beginners', badge: 'AI' },
              { title: 'Free Digital Marketing Courses', desc: 'SEO, content, growth hacking, and conversion. Build a marketing career from scratch.', href: '/free-digital-marketing-courses', badge: 'Marketing' },
              { title: 'Free Courses for Software Developers', desc: 'Web development, programming languages, DevOps, and software architecture. All free.', href: '/free-courses-for-software-developers', badge: 'Dev' },
              { title: 'Free Courses for Accounting & Finance', desc: 'Bookkeeping, financial management, payroll, and auditing. Curated by an accounting specialist.', href: '/free-courses-for-accounting-and-finance', badge: 'Finance' },
            ].map(({ title, desc, href, badge }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-3"
              >
                <span className="self-start text-xs font-bold text-primary bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">{badge}</span>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">{title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors mt-auto self-end" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Featured Learning Resources</h2>
              <p className="text-gray-500 mt-2">Hand-picked courses to help you grow your skills and advance your career.</p>
            </div>
            <Link href="/categories" className="text-primary font-bold hover:text-blue-800 transition-colors hidden sm:block">
              View All Categories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/categories" className="inline-block bg-white border-2 border-primary text-primary font-bold px-8 py-3 rounded-lg w-full hover:bg-blue-50 transition-colors">
              View All Categories
            </Link>
          </div>
        </div>

<div className="mt-16"><CourseCarousel courses={carouselCourses} /></div>
        <div className="mt-12"><NewsletterBanner /></div>

        <div className="mt-20 border-t border-gray-100 pt-12 pb-4 text-center">
          <h3 className="text-lg md:text-xl font-bold text-slate-600 mb-10">Access Curriculum from Top Global Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" loading="lazy" className="h-8 md:h-10 object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2b/University_of_Cambridge_logo.svg" alt="University of Cambridge" loading="lazy" className="h-10 md:h-12 object-contain" />
            <span className="text-3xl md:text-4xl tracking-tighter" style={{ fontFamily: 'Georgia, serif', color: '#8C1515', fontWeight: 'bold' }}>Stanford</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" loading="lazy" className="h-8 md:h-10 object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" loading="lazy" className="h-8 md:h-9 object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/MIT_logo_2003-2023.svg" alt="MIT" loading="lazy" className="h-8 md:h-10 object-contain" />
          </div>
        </div>

        <div className="mt-24 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between">
          <div className="lg:w-1/4 shrink-0">
            <h2 className="text-2xl font-extrabold text-gray-900">Why Learn with Graduates Hub?</h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col items-center text-center">
              <Unlock className="text-slate-400 mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-bold text-gray-800 mb-2">100% Free to Learn</h3>
              <p className="text-gray-500 text-sm">Top tier courses with unlimited access at no cost.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-slate-400 mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-bold text-gray-800 mb-2">Self-Paced</h3>
              <p className="text-gray-500 text-sm">Learn on your own schedule. Study anytime, anywhere.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="text-slate-400 mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-bold text-gray-800 mb-2">Global Recognition</h3>
              <p className="text-gray-500 text-sm">Earn certificates & diplomas recognized worldwide.</p>
            </div>
          </div>
        </div>

        {/* Curators */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Curated by specialists</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Jason */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-blue-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/jason-sadiki.jpg" alt="Jason Sadiki" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-extrabold text-gray-900 text-sm">Jason Sadiki</p>
                <p className="text-gray-500 text-xs mb-1.5">Technical SEO Specialist &amp; Web Dev · 7+ yrs</p>
                <p className="text-gray-400 text-xs leading-relaxed">IT, Software Engineering &amp; Marketing</p>
                <a href="https://www.linkedin.com/in/jasonsadiki/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors mt-1.5">
                  <ExternalLink size={11} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="hidden sm:block w-px bg-gray-100 self-stretch" />

            {/* Ndulamiso */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-teal-100 bg-teal-50 flex items-center justify-center">
                {/* Add /ndulamiso-mamburu.jpg to /public when available */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ndulamiso-mamburu.jpg" alt="Ndulamiso Mamburu" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-extrabold text-gray-900 text-sm">Ndulamiso Mamburu</p>
                <p className="text-gray-500 text-xs mb-1.5">Accounting Science Graduate · SARS</p>
                <p className="text-gray-400 text-xs leading-relaxed">Accounting, Finance &amp; Business</p>
                <a href="https://www.linkedin.com/in/ndulamiso-mamburu/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors mt-1.5">
                  <ExternalLink size={11} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 text-right">
            <Link href="/curation-policy" className="text-xs text-gray-400 hover:text-primary transition-colors font-medium">
              How we select courses →
            </Link>
          </div>
        </div>

        <div className="mt-16"><FAQ /></div>
      </main>
    </div>
  );
}
