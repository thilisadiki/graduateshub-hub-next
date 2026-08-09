import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, BookOpen, ChevronRight, Sparkles, Clock, Compass, ShieldCheck, Zap, Award } from 'lucide-react';
import NewsletterBanner from '@/components/shared/NewsletterBanner';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const revalidate = 300;

const WP_API = 'https://articles.graduateshub.co.za/wp-json';
const PER_PAGE = 12;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  const pageNum = Math.max(1, parseInt(page ?? '1'));
  const url = `${SITE_URL}/blog`;
  const title =
    pageNum === 1
      ? 'Graduate Career Guides & Study Tips Blog (2026)'
      : `Graduate Career Guides & Study Tips Blog - Page ${pageNum}`;
  return {
    title,
    description:
      'Browse expert career guides, free certificate course breakdowns, career development strategies, and practical advice for graduates worldwide.',
    alternates: { canonical: url },
    openGraph: {
      siteName: SITE_NAME,
      title: `${title} | Graduates Hub`,
      description:
        'Browse expert career guides, free certificate course breakdowns, career development strategies, and practical advice for graduates worldwide.',
      url,
      images: [OG_IMAGE],
    },
    ...(pageNum > 1 && { robots: { index: false, follow: true } }),
  };
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
  ],
};

const ESSENTIAL_READS = [
  {
    title: 'YES Youth Program Guide 2026: Application, Stipends & Placement',
    desc: 'Everything job seekers need to know about joining the Youth Employment Service initiative, stipends, and work experience.',
    href: '/blog/yes-youth-program-guide-south-africa',
    badge: 'SA Youth Programs',
    readTime: '8 min read',
    accent: 'from-[#7A5900] to-[#FFDF9C]',
  },
  {
    title: 'Are Alison Certificates Recognized by Employers in 2026?',
    desc: 'An honest evaluation of Alison free online courses, accreditation status, CV listing best practices, and employer perception in SA.',
    href: '/blog/is-an-alison-certificate-recognised-by-employers-2026',
    badge: 'Certificates & CVs',
    readTime: '6 min read',
    accent: 'from-[#1F1B13] to-[#3D3325]',
  },
  {
    title: 'How to Get Coursera Certificates for Free (2026 Financial Aid)',
    desc: 'Step by step walkthrough to apply for 100% Coursera financial aid fee waivers for top university and Google professional certificates.',
    href: '/blog/how-to-get-coursera-certificates-for-free-2026-financial-aid-guide',
    badge: 'Free Learning',
    readTime: '7 min read',
    accent: 'from-[#1E3A8A] to-[#3B82F6]',
  },
];

const CATEGORY_TAGS = [
  { label: 'All Articles', href: '/blog' },
  { label: 'Free Courses & Certificates', href: '/free-courses-with-certificates' },
  { label: 'Grow with Google', href: '/google-ai-essentials-course-guide' },
  { label: 'Career Roadmaps', href: '/career-roadmaps' },
  { label: 'Interview Prep', href: '/interview-prep' },
  { label: 'Portfolio Briefs', href: '/portfolio-tasks' },
];

const LISTING_FIELDS = '_fields=id,slug,title,excerpt,date,_links&_embed=wp:featuredmedia';

async function fetchPosts(page: number) {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/posts?per_page=${PER_PAGE}&page=${page}&${LISTING_FIELDS}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return { posts: [], total: 0, totalPages: 1 };

    const posts = await res.json();
    const total = parseInt(res.headers.get('X-WP-Total') ?? '0');
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '1');
    return { posts, total, totalPages };
  } catch {
    return { posts: [], total: 0, totalPages: 1 };
  }
}

function formatPost(post: any) {
  const imageUrl =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ??
    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80';
  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '');
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: cleanExcerpt.substring(0, 150) + '...',
    date,
    imageUrl,
    readTime: '5 min read',
  };
}

type FormattedPost = ReturnType<typeof formatPost>;

function FeaturedCard({ post }: { post: FormattedPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl border border-[#D1C5B4] shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 mb-12"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative h-64 md:h-auto md:w-1/2 shrink-0 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute top-4 left-4 bg-[#1F1B13] text-[#FFDF9C] border border-[#FFDF9C]/30 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
            <Sparkles size={12} className="text-yellow-400" /> Latest Feature
          </div>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2 bg-white">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F1B13] leading-tight mb-4 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-[#4F4639] leading-relaxed mb-6 text-sm md:text-base">{post.excerpt}</p>
          <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary">
            Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const page = Math.max(1, parseInt(resolvedParams.page ?? '1'));
  const { posts, total, totalPages } = await fetchPosts(page);
  const formattedPosts = posts.map(formatPost);

  const featuredPost = page === 1 ? formattedPosts[0] : null;
  const gridPosts = page === 1 ? formattedPosts.slice(1) : formattedPosts;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Graduates Hub Blog',
    url: `${SITE_URL}/blog`,
    description: 'Career guides, study tips, and expert advice to help graduates navigate their career journey.',
    publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
    ...(formattedPosts.length > 0 && {
      blogPost: formattedPosts.slice(0, 6).map((post: FormattedPost) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.date,
        image: post.imageUrl,
      })),
    }),
  };

  return (
    <div className="min-h-screen bg-[#FFF8F1] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#D1C5B4]">
        <div className="max-w-6xl mx-auto px-6 py-3 text-sm text-[#4F4639] flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <span className="text-[#1F1B13] font-medium">Blog &amp; Career Guides</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#1F1B13] text-white border-b border-[#D1C5B4] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5900]/30 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <BookOpen size={14} className="text-yellow-400" /> Career Journal &amp; Advice
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Graduate Career Journal &amp; Advice
          </h1>
          <p className="text-[#D1C5B4] text-lg max-w-2xl leading-relaxed mb-8">
            Step-by-step program guides, financial aid application tips, interview strategies, and real-world career advice for graduates and job seekers.
          </p>

          {/* Quick Category Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#D1C5B4]/20">
            {CATEGORY_TAGS.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-[#2A241A] text-[#D1C5B4] hover:text-white hover:bg-primary border border-[#3D3325] transition-all"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
        {/* Page 1 Essential Reading Showcase */}
        {page === 1 && (
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Compass size={20} className="text-primary" />
              <h2 className="text-2xl font-extrabold text-[#1F1B13]">Essential Graduate Reading</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ESSENTIAL_READS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white rounded-2xl border border-[#D1C5B4] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-primary bg-[#FFDF9C]/20 border border-[#D1C5B4] px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{item.readTime}</span>
                    </div>
                    <h3 className="font-extrabold text-[#1F1B13] text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4F4639] leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary pt-3 border-t border-[#EBE3D5]">
                    Read Guide <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {total > 0 && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D1C5B4]">
            <h2 className="text-2xl font-extrabold text-[#1F1B13]">All Career Articles</h2>
            <p className="text-xs text-[#4F4639] font-medium">
              {total} articles &bull; Page {page} of {totalPages}
            </p>
          </div>
        )}

        {formattedPosts.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <BookOpen size={40} className="mx-auto mb-4 opacity-40" />
            <p className="font-semibold text-gray-700">No articles found.</p>
          </div>
        ) : (
          <>
            {/* Featured Post Card */}
            {featuredPost && <FeaturedCard post={featuredPost} />}

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
              {gridPosts.map((post: FormattedPost, idx: number) => (
                <div key={post.id} className="flex flex-col h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl shadow-sm border border-[#D1C5B4] overflow-hidden hover:shadow-md transition-all group flex flex-col h-full"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1 shadow-sm border border-[#D1C5B4]">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-lg font-extrabold text-[#1F1B13] leading-tight mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#4F4639] text-xs leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                      <div className="mt-auto pt-4 border-t border-[#EBE3D5] flex items-center justify-between text-xs font-bold text-primary">
                        <span>Read Article</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Interactive Career Tools Banner */}
            <section className="mb-14 bg-gradient-to-br from-[#1F1B13] to-[#2E281F] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#D1C5B4]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFDF9C] mb-2 block">Interactive Career Accelerators</span>
                <h3 className="text-2xl font-black mb-2">Build Your Proof of Work Portfolio</h3>
                <p className="text-sm text-[#D1C5B4] max-w-xl leading-relaxed">
                  Put reading into practice: complete graded portfolio tasks across IT, Web Dev, Data Analysis, Marketing, and Finance.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <Link
                  href="/portfolio-tasks"
                  className="bg-primary hover:bg-[#5a4000] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap shadow-sm border border-primary text-center flex-1 md:flex-initial"
                >
                  Explore Portfolio Briefs →
                </Link>
                <Link
                  href="/cv-builder"
                  className="bg-[#3D3325] hover:bg-[#4E4231] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap border border-[#5E503C] text-center flex-1 md:flex-initial"
                >
                  Free AI CV Reviewer →
                </Link>
              </div>
            </section>
          </>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3">
            {page > 1 && (
              <Link
                href={`/blog?page=${page - 1}`}
                className="px-5 py-2.5 bg-white border border-[#D1C5B4] text-[#1F1B13] font-bold rounded-xl hover:border-primary hover:text-primary transition-colors text-sm"
              >
                Previous
              </Link>
            )}
            <span className="text-sm text-[#4F4639] font-medium">
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/blog?page=${page + 1}`}
                className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-[#5a4000] transition-colors text-sm"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </main>

      <NewsletterBanner />
    </div>
  );
}
