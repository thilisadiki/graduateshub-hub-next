import type { Course } from '@/types';
import { categories } from '@/data/categories';

export type LengthBand = 'any' | 'short' | 'medium' | 'long';
export type FormatFilter = 'any' | 'certificate' | 'diploma';
export type SortKey = 'relevance' | 'rating' | 'shortest' | 'az';

export interface FilterState {
  q: string;
  category: string; // category id, or '' for any
  format: FormatFilter;
  length: LengthBand;
  sort: SortKey;
}

export const LENGTH_LABELS: Record<LengthBand, string> = {
  any: 'Any length',
  short: 'Under 5 hours',
  medium: '5 – 15 hours',
  long: '15+ hours',
};

export const FORMAT_LABELS: Record<FormatFilter, string> = {
  any: 'All formats',
  certificate: 'Certificate',
  diploma: 'Diploma',
};

export const SORT_LABELS: Record<SortKey, string> = {
  relevance: 'Best match',
  rating: 'Highest rated',
  shortest: 'Shortest first',
  az: 'A – Z',
};

function parseDurationUpperHours(duration: string): number {
  const match = duration.match(/(\d+)\s*(?:-|–|to)\s*(\d+)/i);
  if (match) return parseInt(match[2], 10);
  const single = duration.match(/(\d+)/);
  return single ? parseInt(single[1], 10) : 0;
}

export function getDurationBand(duration: string): Exclude<LengthBand, 'any'> {
  const upper = parseDurationUpperHours(duration);
  if (upper <= 5) return 'short';
  if (upper <= 15) return 'medium';
  return 'long';
}

export function matchesFormat(tag: string, format: FormatFilter): boolean {
  if (format === 'any') return true;
  const tags = tag.toLowerCase().split(',').map((t) => t.trim());
  return tags.includes(format);
}

export function matchesCategory(course: Course, categoryId: string): boolean {
  if (!categoryId) return true;
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return false;
  const normalizedName = cat.name.toLowerCase().replace(/ courses$/, '').trim();
  const courseCats = course.category
    .toLowerCase()
    .split(',')
    .map((s) => s.trim().replace(/ courses$/, ''));
  return courseCats.some((c) => c === categoryId || c === normalizedName);
}

function scoreAgainstQuery(course: Course, q: string): number {
  if (!q) return 0;
  const phrase = q.toLowerCase().trim();
  const words = phrase.split(/\s+/).filter(Boolean);

  const title = course.title.toLowerCase();
  const subCat = (course.subCategory ?? '').toLowerCase();
  const desc = course.description.toLowerCase();
  const longDesc = (course.longDescription ?? '').toLowerCase();
  const careerPath = (course.careerPath ?? '').toLowerCase();
  const targetAudience = (course.targetAudience ?? '').toLowerCase();
  const category = course.category.toLowerCase();

  const searchable = [title, subCat, desc, longDesc, careerPath, targetAudience, category].join(' ');
  if (!words.every((w) => searchable.includes(w))) return -1;

  let score = 0;
  if (title.includes(phrase)) score += 100;
  if (words.every((w) => title.includes(w))) score += 60;
  if (subCat.includes(phrase)) score += 40;
  if (words.every((w) => subCat.includes(w))) score += 25;
  if (desc.includes(phrase)) score += 20;
  if (words.every((w) => desc.includes(w))) score += 12;
  if (longDesc.includes(phrase)) score += 8;
  if (careerPath.includes(phrase)) score += 6;
  if (targetAudience.includes(phrase)) score += 4;
  words.forEach((w) => {
    if (title.includes(w)) score += 10;
  });
  return score;
}

export function applyFilters(allCourses: Course[], state: FilterState): Course[] {
  const filtered = allCourses
    .filter((c) => matchesCategory(c, state.category))
    .filter((c) => matchesFormat(c.tag, state.format))
    .filter((c) => state.length === 'any' || getDurationBand(c.duration) === state.length);

  const q = state.q.trim();

  if (q) {
    const scored = filtered
      .map((course) => ({ course, score: scoreAgainstQuery(course, q) }))
      .filter(({ score }) => score >= 0);

    switch (state.sort) {
      case 'rating':
        scored.sort((a, b) => b.course.rating - a.course.rating);
        break;
      case 'shortest':
        scored.sort(
          (a, b) => parseDurationUpperHours(a.course.duration) - parseDurationUpperHours(b.course.duration),
        );
        break;
      case 'az':
        scored.sort((a, b) => a.course.title.localeCompare(b.course.title));
        break;
      case 'relevance':
      default:
        scored.sort((a, b) => b.score - a.score);
    }
    return scored.map(({ course }) => course);
  }

  const sorted = [...filtered];
  switch (state.sort) {
    case 'shortest':
      sorted.sort((a, b) => parseDurationUpperHours(a.duration) - parseDurationUpperHours(b.duration));
      break;
    case 'az':
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'rating':
    case 'relevance':
    default:
      sorted.sort((a, b) => b.rating - a.rating);
  }
  return sorted;
}

export function countActiveFilters(state: FilterState): number {
  let n = 0;
  if (state.category) n++;
  if (state.format !== 'any') n++;
  if (state.length !== 'any') n++;
  return n;
}

export const EMPTY_FILTER_STATE: FilterState = {
  q: '',
  category: '',
  format: 'any',
  length: 'any',
  sort: 'relevance',
};
