import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free AI Courses for Beginners (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Best Free AI Courses for Beginners', ['AI & Machine Learning', 'Beginner-Friendly', 'Free Certificate']);
}
