import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import NewsletterBanner from '@/components/NewsletterBanner';

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

async function fetchPosts(page: number) {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/posts?per_page=${PER_PAGE}&page=${page}&_embed`,
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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const page = Math.max(1, parseInt(resolvedParams.page ?? '1'));
  const { posts, total, totalPages } = await fetchPosts(page);
  const formattedPosts = posts.map(formatPost);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {formattedPosts.map((post: ReturnType<typeof formatPost>) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3">
            {page > 1 && (
              <Link
                href={`/blog?page=${page - 1}`}
                className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
              >
                ← Previous
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
                Next →
              </Link>
            )}
          </div>
        )}
      </main>

      <NewsletterBanner />
    </div>
  );
}
