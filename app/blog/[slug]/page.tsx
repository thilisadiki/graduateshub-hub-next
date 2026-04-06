import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import NewsletterBanner from '@/components/NewsletterBanner';

const WP_API = 'https://articles.graduateshub.co.za/wp-json';
const SITE_URL = 'https://graduateshub.co.za';

async function fetchPostBySlug(slug: string) {
  try {
    const res = await fetch(`${WP_API}/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return { title: 'Article Not Found | Graduates Hub' };

  const description = post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 160);
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return {
    title: `${post.title.rendered} | Graduates Hub`,
    description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title.rendered,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const categories: any[] = post._embedded?.['wp:term']?.[0] ?? [];

  // Rewrite WP subdomain links to internal /blog/ paths
  const content = (post.content.rendered as string).replace(
    /https:\/\/articles\.graduateshub\.co\.za\//g,
    '/blog/'
  );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 160),
    datePublished: post.date,
    dateModified: post.modified,
    url: `${SITE_URL}/blog/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Graduates Hub',
      url: SITE_URL,
    },
    ...(imageUrl && { image: imageUrl }),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto w-full px-6 py-4 text-sm text-gray-500 flex items-center flex-wrap gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium truncate max-w-xs"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>
      </div>

      {/* Hero image */}
      {imageUrl && (
        <div className="max-w-4xl mx-auto w-full px-6 pt-8">
          <div className="rounded-2xl overflow-hidden h-56 md:h-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={post.title.rendered}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Article card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-10 md:px-12 md:py-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <Calendar size={14} />
              {date}
            </span>
            {categories.map((cat: any) => (
              <span
                key={cat.id}
                className="text-xs font-bold text-primary bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Content */}
          <div className="wp-content max-w-[72ch]" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Footer nav */}
        {/* Footer nav */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors text-sm"
          >
            <ArrowLeft size={16} /> All Articles
          </Link>
          <Link
            href="/search"
            className="bg-primary hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-bold transition-colors text-sm"
          >
            Find a Free Course →
          </Link>
        </div>
      </main>

      <NewsletterBanner />
    </div>
  );
}
