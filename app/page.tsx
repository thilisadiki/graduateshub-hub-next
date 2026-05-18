import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import LatestArticles from '@/components/home/LatestArticles';
import FAQ from '@/components/home/FAQ';
import AIToolsBanner from '@/components/home/AIToolsBanner';
import PortfolioBanner from '@/components/home/PortfolioBanner';
import { categories } from '@/data/categories';
import { popularGuides } from '@/data/navigation';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Free Learning Resources, Guides & Courses',
  description: 'Graduates Hub is your free learning resource centre. Browse career guides, study tips, and hundreds of free online courses across IT, Software Development, Business, Marketing, Accounting, and more.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Free Learning Resources, Guides & Courses | Graduates Hub',
    description: 'Graduates Hub is your free learning resource centre. Browse career guides, study tips, and hundreds of free online courses across IT, Software Development, Business, Marketing, Accounting, and more.',
    url: `${SITE_URL}/`,
    images: [OG_IMAGE],
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
  const homeArticles = await fetchHomeArticles(6);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <Hero />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="mt-0"><LatestArticles perPage={6} initialArticles={homeArticles} /></div>
        <div className="mt-24"><HowItWorks /></div>
        <div className="mt-16"><AIToolsBanner /></div>
        <div className="mt-16"><PortfolioBanner /></div>

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
            {popularGuides.map(({ title, desc, href, badge }) => (
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

        {/* Browse by Subject */}
        <div className="mt-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Browse by Subject</h2>
              <p className="text-gray-500 mt-2">Explore courses organised by field. Every subject is free to start.</p>
            </div>
            <Link href="/categories" className="text-primary font-bold hover:text-blue-800 transition-colors hidden sm:block">
              View All Subjects →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map(({ id, name, icon: Icon, description }) => (
              <Link
                key={id}
                href={`/category/${id}`}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-3"
              >
                <Icon size={28} className="text-primary" strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">{name}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors mt-auto self-end" />
              </Link>
            ))}
          </div>
        </div>

        {/* Curators */}
        <div className="mt-24 bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Curated by specialists</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Jason */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-blue-100">
                <Image src="/jason-sadiki.jpg" alt="Jason Sadiki" width={48} height={48} className="object-cover w-full h-full" />
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
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-teal-100">
                <Image src="/ndulamiso-mamburu.jpg" alt="Ndulamiso Mamburu" width={48} height={48} className="object-cover w-full h-full" />
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
