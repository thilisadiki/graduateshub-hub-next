import type { MetadataRoute } from 'next';
import { courses } from '@/data/courses';
import { categories } from '@/data/categories';
import { roadmaps } from '@/data/roadmaps';
import { interviewPreps } from '@/data/interviewPrep';

const SITE_URL = 'https://www.graduateshub.co.za';
const WP_API = 'https://articles.graduateshub.co.za/wp-json';

async function fetchAllBlogPosts(): Promise<{ slug: string; modified: string }[]> {
  const posts: { slug: string; modified: string }[] = [];
  let page = 1;
  while (true) {
    try {
      const res = await fetch(
        `${WP_API}/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) break;
      const batch = await res.json();
      if (!Array.isArray(batch) || batch.length === 0) break;
      posts.push(...batch);
      if (batch.length < 100) break;
      page++;
    } catch {
      break;
    }
  }
  return posts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${SITE_URL}/opengraph-image`],
    },
    {
      url: `${SITE_URL}/categories`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${SITE_URL}/opengraph-image`],
    },
    { url: `${SITE_URL}/guides`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/free-courses-with-certificates`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/free-ai-courses-for-beginners`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/free-courses-for-data-analysts`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/best-alison-courses-with-certificates`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/free-courses-for-beginners`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/free-digital-marketing-courses`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/free-courses-for-software-developers`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/free-courses-for-accounting-and-finance`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/free-business-courses`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/first-graduate-job-south-africa`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/tools`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/cv-builder`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/career-roadmaps`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/interview-prep`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/curation-policy`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/feedback`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/disclosure`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((category: { id: string }) => ({
    url: `${SITE_URL}/category/${category.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
    images: [`${SITE_URL}/opengraph-image`],
  }));

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${SITE_URL}/course/${course.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const roadmapPages: MetadataRoute.Sitemap = roadmaps.map((r) => ({
    url: `${SITE_URL}/career-roadmaps/${r.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const interviewPrepPages: MetadataRoute.Sitemap = interviewPreps.map((p) => ({
    url: `${SITE_URL}/interview-prep/${p.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const wpPosts = await fetchAllBlogPosts();
  const blogPostPages: MetadataRoute.Sitemap = wpPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...coursePages, ...roadmapPages, ...interviewPrepPages, ...blogPostPages];
}
