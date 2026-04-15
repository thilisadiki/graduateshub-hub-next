import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free Online Courses with Certificates (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Best Free Online Courses with Certificates', ['IT · Business · Finance', 'Certificates', 'Career-Focused']);
}
