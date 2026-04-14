import { cache } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, UserRound } from 'lucide-react';
import NewsletterBanner from '@/components/shared/NewsletterBanner';

export const revalidate = 3600;   // regenerate cached posts every hour
export const dynamicParams = true; // posts published after build still work

const WP_API = 'https://articles.graduateshub.co.za/wp-json';
const SITE_URL = 'https://www.graduateshub.co.za';

// React.cache deduplicates: generateMetadata and the page component
// both call this, it only hits the WP API once per request.
const fetchPostBySlug = cache(async (slug: string) => {
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
});

function cleanContent(html: string): string {
  return html
    // 1. Rewrite subdomain links to internal /blog/ paths
    .replace(/https:\/\/articles\.graduateshub\.co\.za\//g, '/blog/')
    // 2. Strip Gutenberg HTML comments (<!-- wp:paragraph --> etc.)
    .replace(/<!--\s*\/?wp:[^>]*-->/g, '')
    // 3. Strip inline style attributes
    .replace(/\s+style="[^"]*"/g, '')
    // 4. Strip data-* attributes (editor metadata)
    .replace(/\s+data-[\w-]+="[^"]*"/g, '')
    // 5. Strip wp-block-* classes but keep other classes (e.g. has-fixed-layout on tables)
    .replace(/\s+class="wp-block-[^"]*"/g, '')
    // 6. Unwrap bare <span> tags that have no remaining attributes (pure noise wrappers)
    .replace(/<span>([^<]*)<\/span>/g, '$1')
    // 7. Remove empty paragraphs: <p></p>, <p> </p>, <p>&nbsp;</p>, <p><br/></p>
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, '')
    // 8. Collapse 3+ consecutive blank lines left over after cleanup
    .replace(/(\s*\n){3,}/g, '\n\n')
    .trim();
}

async function fetchRelatedPosts(categoryIds: number[], excludeId: number) {
  if (categoryIds.length === 0) return [];
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/posts?per_page=3&categories=${categoryIds.join(',')}&exclude=${excludeId}&_fields=id,slug,title,excerpt,date,_links&_embed=wp:featuredmedia`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

// Pre-render all existing post slugs at build time.
// Fetches up to 100 posts per page; loops until all slugs are collected.
export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  let page = 1;

  while (true) {
    try {
      const res = await fetch(
        `${WP_API}/wp/v2/posts?per_page=100&page=${page}&_fields=slug`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) break;
      const posts: { slug: string }[] = await res.json();
      if (posts.length === 0) break;
      slugs.push(...posts.map((p) => ({ slug: p.slug })));
      const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '1');
      if (page >= totalPages) break;
      page++;
    } catch {
      break;
    }
  }

  return slugs;
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
  // Deduped, no second network request, uses the cached result from generateMetadata
  const post = await fetchPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const categories: any[] = post._embedded?.['wp:term']?.[0] ?? [];
  const categoryIds: number[] = categories.map((c: any) => c.id);
  const author = post._embedded?.author?.[0] ?? null;
  const [content, relatedRaw] = await Promise.all([
    Promise.resolve(cleanContent(post.content.rendered)),
    fetchRelatedPosts(categoryIds, post.id),
  ]);

  const related = relatedRaw.map((p: any) => ({
    slug: p.slug,
    title: p.title.rendered,
    excerpt: (p.excerpt.rendered as string).replace(/<[^>]+>/g, '').substring(0, 120) + '...',
    date: new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    imageUrl: p._embedded?.['wp:featuredmedia']?.[0]?.source_url ??
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
  }));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 160),
    datePublished: post.date,
    dateModified: post.modified,
    url: `${SITE_URL}/blog/${slug}`,
    author: author
      ? {
          '@type': 'Person',
          name: author.name,
          ...(author.description && { description: author.description }),
          url: SITE_URL,
        }
      : { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Graduates Hub',
      url: SITE_URL,
    },
    image: imageUrl ?? `${SITE_URL}/graduates-hub-logo.png`,
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

      {/* Hero image, next/image handles WebP conversion, sizing, and lazy load */}
      {imageUrl && (
        <div className="max-w-4xl mx-auto w-full px-6 pt-8">
          <div className="rounded-2xl overflow-hidden relative h-56 md:h-80">
            <Image
              src={imageUrl}
              alt={post.title.rendered}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
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
            {author && (
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <UserRound size={14} />
                {author.name}
              </span>
            )}
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

        {/* Author bio card */}
        {author && (
          <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-5 items-start">
            {author.avatar_urls?.['96'] ? (
              <Image
                src={author.avatar_urls['96']}
                alt={author.name}
                width={64}
                height={64}
                className="rounded-full shrink-0"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-blue-100 text-primary flex items-center justify-center shrink-0">
                <UserRound size={28} />
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Written by</p>
              <p className="font-bold text-gray-900 text-lg">{author.name}</p>
              {author.description && (
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{author.description}</p>
              )}
            </div>
          </div>
        )}

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r: { slug: string; title: string; excerpt: string; date: string; imageUrl: string }) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-primary transition-all group flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={r.imageUrl}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs text-gray-400 mb-2">{r.date}</p>
                    <p className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm leading-snug mb-2">{r.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed flex-grow">{r.excerpt}</p>
                    <span className="mt-4 text-xs font-bold text-primary">Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

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
