import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free Courses for Digital Marketing Careers (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Best Free Digital Marketing Courses', ['SEO & Social Media', 'Content Strategy', 'Free Certificate']);
}
