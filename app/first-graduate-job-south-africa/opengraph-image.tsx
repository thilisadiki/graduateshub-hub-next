import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'How to Get Your First Graduate Job in South Africa (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('How to Get Your First Graduate Job in SA', ['Graduate Jobs SA', 'CV & Interview Prep', 'Free Courses']);
}
