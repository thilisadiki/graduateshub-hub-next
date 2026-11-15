import { popularGuides } from '@/data/navigation';
import { roadmaps } from '@/data/roadmaps';
import { interviewPreps } from '@/data/interviewPrep';
import { portfolioTasks, getTaskUrl } from '@/data/portfolioTasks';

export type SearchCategory =
  | 'all'
  | 'guide'
  | 'blog'
  | 'task'
  | 'roadmap'
  | 'interview_prep'
  | 'tool';

export interface SearchResultItem {
  id: string;
  title: string;
  type: SearchCategory;
  typeLabel: string;
  description: string;
  href: string;
  badge?: string;
  category?: string;
  date?: string;
  imageUrl?: string;
  score?: number;
}

export interface SearchResponse {
  query: string;
  total: number;
  results: SearchResultItem[];
  counts: Record<SearchCategory, number>;
}

const STATIC_TOOLS: SearchResultItem[] = [
  {
    id: 'tool-cv-builder',
    title: 'Free CV Builder',
    type: 'tool',
    typeLabel: 'Interactive Tool',
    description: 'Build a modern, recruiter-approved CV tailored for Applicant Tracking Systems (ATS). 100% free with live PDF download.',
    href: '/cv-builder',
    badge: 'Free Tool',
    category: 'Careers',
  },
  {
    id: 'tool-ai-career-tools',
    title: 'AI Career Tools & CV Reviewer',
    type: 'tool',
    typeLabel: 'Interactive Tool',
    description: 'Suite of 7 free Gemini-powered career tools: CV keyword audits, job description decoders, skill gap analysis, and 90-day learning schedules.',
    href: '/free-ai-career-tools',
    badge: 'AI Powered',
    category: 'AI Tools',
  },
  {
    id: 'tool-portfolio-tasks',
    title: 'Proof of Work Portfolio Hub',
    type: 'tool',
    typeLabel: 'Portfolio',
    description: 'Practical, graded project briefs in Marketing, Tech, Data, Finance, and Design. Prove your skills and earn shareable LinkedIn badges.',
    href: '/portfolio-tasks',
    badge: 'Portfolio',
    category: 'Portfolio',
  },
  {
    id: 'tool-career-roadmaps',
    title: 'Career Roadmaps Directory',
    type: 'tool',
    typeLabel: 'Directory',
    description: 'Explore 17+ step-by-step career pathways with vetted free learning tracks and verified credentials.',
    href: '/career-roadmaps',
    badge: 'Roadmaps',
    category: 'Careers',
  },
  {
    id: 'tool-guides-directory',
    title: 'Certification Guides Directory',
    type: 'tool',
    typeLabel: 'Directory',
    description: 'Comprehensive directory of specialist-curated online course and verified certification guides.',
    href: '/guides',
    badge: 'Guides',
    category: 'Certifications',
  },
];

function cleanHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8212;/g, ' - ')
    .replace(/&hellip;/g, '...')
    .trim();
}

function computeRelevanceScore(
  itemTitle: string,
  itemDesc: string,
  extraKeywords: string,
  query: string,
  queryWords: string[]
): number {
  const titleLower = itemTitle.toLowerCase();
  const descLower = itemDesc.toLowerCase();
  const extraLower = extraKeywords.toLowerCase();
  const qLower = query.toLowerCase();

  let score = 0;

  // Exact phrase match in title
  if (titleLower === qLower) score += 120;
  else if (titleLower.startsWith(qLower)) score += 90;
  else if (titleLower.includes(qLower)) score += 70;

  // Title word coverage
  const allWordsInTitle = queryWords.every((w) => titleLower.includes(w));
  if (allWordsInTitle) score += 40;

  // Keywords / skills / category match
  if (extraLower.includes(qLower)) score += 30;
  const anyWordInKeywords = queryWords.some((w) => extraLower.includes(w));
  if (anyWordInKeywords) score += 15;

  // Description match
  if (descLower.includes(qLower)) score += 20;
  const anyWordInDesc = queryWords.some((w) => descLower.includes(w));
  if (anyWordInDesc) score += 10;

  return score;
}

/**
 * Searches in-memory static collections (Guides, Roadmaps, Interview Prep, Portfolio Tasks, Tools).
 */
export function searchStaticEntities(query: string): SearchResultItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const queryWords = trimmed.split(/\s+/).filter(Boolean);
  const results: SearchResultItem[] = [];

  // 1. Guides
  popularGuides.forEach((g) => {
    const score = computeRelevanceScore(g.title, g.desc, g.badge, trimmed, queryWords);
    if (score > 0) {
      results.push({
        id: `guide-${g.href}`,
        title: g.title,
        type: 'guide',
        typeLabel: 'Course Guide',
        description: g.desc,
        href: g.href,
        badge: g.badge,
        category: 'Guide',
        score,
      });
    }
  });

  // 2. Career Roadmaps
  roadmaps.forEach((r) => {
    const extra = [r.category, ...(r.jobTitles || []), ...(r.technicalSkills || [])].join(' ');
    const desc = r.tagline || r.description || '';
    const score = computeRelevanceScore(r.title, desc, extra, trimmed, queryWords);
    if (score > 0) {
      results.push({
        id: `roadmap-${r.id}`,
        title: r.title,
        type: 'roadmap',
        typeLabel: 'Career Roadmap',
        description: desc,
        href: `/career-roadmaps/${r.id}`,
        badge: r.demandLevel ? `${r.demandLevel} Demand` : 'Roadmap',
        category: r.category,
        score,
      });
    }
  });

  // 3. Interview Prep
  interviewPreps.forEach((p) => {
    const title = `${p.role} Interview Prep & CV Guide`;
    const extra = [p.category, ...(p.keySkills || []), ...(p.cvMustInclude || [])].join(' ');
    const desc = p.description || '';
    const score = computeRelevanceScore(title, desc, extra, trimmed, queryWords);
    if (score > 0) {
      results.push({
        id: `interview-prep-${p.id}`,
        title,
        type: 'interview_prep',
        typeLabel: 'Interview Prep',
        description: desc,
        href: `/interview-prep/${p.id}`,
        badge: 'CV & Interview',
        category: p.category,
        score,
      });
    }
  });

  // 4. Portfolio Tasks
  portfolioTasks.forEach((t) => {
    const extra = [t.categoryId, t.topicId, t.level, ...(t.skillsProven || [])].join(' ');
    const desc = t.tagline || t.brief || t.scenario || '';
    const score = computeRelevanceScore(t.title, desc, extra, trimmed, queryWords);
    if (score > 0) {
      results.push({
        id: `task-${t.id}`,
        title: t.title,
        type: 'task',
        typeLabel: 'Portfolio Task',
        description: desc,
        href: getTaskUrl(t),
        badge: t.level ? `${t.level.charAt(0).toUpperCase() + t.level.slice(1)} Task` : 'Project Brief',
        category: t.categoryId,
        score,
      });
    }
  });

  // 5. Tools & Hubs
  STATIC_TOOLS.forEach((tool) => {
    const score = computeRelevanceScore(tool.title, tool.description, tool.category || '', trimmed, queryWords);
    if (score > 0) {
      results.push({
        ...tool,
        score,
      });
    }
  });

  return results;
}

/**
 * Searches WordPress articles via REST API with a safe timeout.
 */
export async function searchBlogArticles(query: string, maxResults: number = 8): Promise<SearchResultItem[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const url = `https://articles.graduateshub.co.za/wp-json/wp/v2/posts?search=${encodeURIComponent(trimmed)}&per_page=${maxResults}&_embed`;

  try {
    const res = await fetch(url, {
      headers: { Host: 'articles.graduateshub.co.za' },
      signal: AbortSignal.timeout(4000),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((post: any) => {
      const cleanTitle = cleanHtml(post.title?.rendered || '');
      const cleanExcerpt = cleanHtml(post.excerpt?.rendered || '');
      const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : undefined;

      const queryWords = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
      const score = computeRelevanceScore(cleanTitle, cleanExcerpt, 'blog article advice', trimmed, queryWords);

      return {
        id: `blog-${post.id}`,
        title: cleanTitle,
        type: 'blog' as SearchCategory,
        typeLabel: 'Article',
        description: cleanExcerpt.length > 160 ? cleanExcerpt.substring(0, 160) + '...' : cleanExcerpt,
        href: `/blog/${post.slug}`,
        badge: 'Article',
        category: 'Blog',
        date: formattedDate,
        imageUrl,
        score: score + 15, // boost relevant articles
      };
    });
  } catch {
    // Return empty on network timeout or upstream error
    return [];
  }
}

/**
 * Executes a full unified search across static collections and WordPress articles.
 */
export async function performUnifiedSearch(
  query: string,
  filterType: SearchCategory = 'all'
): Promise<SearchResponse> {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      query: '',
      total: 0,
      results: [],
      counts: {
        all: 0,
        guide: 0,
        blog: 0,
        task: 0,
        roadmap: 0,
        interview_prep: 0,
        tool: 0,
      },
    };
  }

  // 1. In-memory static search
  const staticResults = searchStaticEntities(trimmed);

  // 2. Asynchronous WordPress search
  const blogResults = await searchBlogArticles(trimmed, 8);

  // 3. Combine and sort by relevance score
  const allResults = [...staticResults, ...blogResults].sort((a, b) => (b.score || 0) - (a.score || 0));

  // 4. Compute counts
  const counts: Record<SearchCategory, number> = {
    all: allResults.length,
    guide: allResults.filter((r) => r.type === 'guide').length,
    blog: allResults.filter((r) => r.type === 'blog').length,
    task: allResults.filter((r) => r.type === 'task').length,
    roadmap: allResults.filter((r) => r.type === 'roadmap').length,
    interview_prep: allResults.filter((r) => r.type === 'interview_prep').length,
    tool: allResults.filter((r) => r.type === 'tool').length,
  };

  // 5. Filter if requested
  const filteredResults =
    filterType === 'all' ? allResults : allResults.filter((r) => r.type === filterType);

  return {
    query: trimmed,
    total: filteredResults.length,
    results: filteredResults,
    counts,
  };
}
