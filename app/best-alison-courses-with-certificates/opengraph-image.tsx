import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Alison Courses with Certificates (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Best Alison Courses with Certificates', ['CPD Accredited', 'All Subjects', 'Free Certificate']);
}
