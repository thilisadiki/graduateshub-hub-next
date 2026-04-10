import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import NewsletterBanner from '@/components/NewsletterBanner';

export const revalidate = 300;

const WP_API = 'https://articles.graduateshub.co.za/wp-json';
const SITE_URL = 'https://graduateshub.co.za';
const PER_PAGE = 12;

export const metadata: Metadata = {
  title: 'Career Guides & Study Tips | Graduates Hub Blog',
  description:
    'Browse career guides, study tips, and expert advice to help you navigate your education and career journey.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Career Guides & Study Tips | Graduates Hub Blog',
    description:
      'Browse career guides, study tips, and expert advice to help you navigate your education and career journey.',
    url: `${SITE_URL}/blog`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
  ],
};

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
  };
}

const RELATED_GUIDES = [
  {
    title: 'Free Courses for Data Analysts',
    desc: 'Excel, SQL, Python, and Power BI in one structured path.',
    href: '/free-courses-for-data-analysts',
    badge: 'Data',
  },
  {
    title: 'Free Courses for Accounting & Finance',
    desc: 'Bookkeeping, payroll, and financial management from scratch.',
    href: '/free-courses-for-accounting-and-finance',
    badge: 'Finance',
  },
  {
    title: 'Free Digital Marketing Courses',
    desc: 'SEO, content strategy, and growth from the ground up.',
    href: '/free-digital-marketing-courses',
    badge: 'Marketing',
  },
];

type FormattedPost = ReturnType<typeof formatPost>;

function FeaturedCard({ post }: { post: FormattedPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all mb-12"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative h-56 md:h-auto md:w-2/5 shrink-0 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            Latest
          </div>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center md:w-3/5">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
            <Calendar size={12} />
            {post.date}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">{post.excerpt}</p>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
            Read Article <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </span>
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
    description: 'Career guides, study tips, and expert advice to help you navigate your education and career journey.',
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Blog</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="text-primary" size={28} />
            <p className="text-sm font-bold text-primary uppercase tracking-widest">Graduates Hub Blog</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight max-w-2xl leading-tight">
            Career Guides & Study Tips
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Expert advice, industry insights, and practical guides to help you navigate your career and
            education journey.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        {total > 0 && (
          <p className="text-gray-400 text-sm mb-8">
            {total} articles &middot; Page {page} of {totalPages}
          </p>
        )}

        {formattedPosts.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <BookOpen size={40} className="mx-auto mb-4 opacity-40" />
            <p className="font-semibold">No articles found.</p>
          </div>
        ) : (
          <>
            {/* Featured post — first article on page 1 only */}
            {featuredPost && <FeaturedCard post={featuredPost} />}

            {/* Article grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {gridPosts.map((post: FormattedPost) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1 shadow-sm">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-primary">
                      <span>Read Article</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Find a course strip */}
            <div className="mb-12 bg-blue-50 border border-blue-100 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Reading about careers? Find a free course to go with it.</p>
                <p className="text-sm text-gray-500">Browse 100+ free certified courses across IT, Business, Marketing, Accounting, and more.</p>
              </div>
              <Link
                href="/search"
                className="shrink-0 bg-primary hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
              >
                Browse Free Courses →
              </Link>
            </div>

            {/* Related guides */}
            <section className="mb-12">
              <h2 className="text-lg font-extrabold text-gray-900 mb-4">Popular Learning Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {RELATED_GUIDES.map(({ title, desc, href, badge }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-primary hover:shadow-md transition-all flex flex-col gap-2"
                  >
                    <span className="self-start text-xs font-bold text-primary bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                      {badge}
                    </span>
                    <p className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm leading-snug">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed flex-grow">{desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-1">
                      View Guide <ChevronRight size={12} />
                    </span>
                  </Link>
                ))}
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
                className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
              >
                Previous
              </Link>
            )}
            <span className="text-sm text-gray-500 font-medium">
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/blog?page=${page + 1}`}
                className="px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-sm"
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
