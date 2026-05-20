import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free UI/UX & Product Design Courses with Certificates (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Free UI/UX Design Courses', ['User Research', 'Wireframing & Prototyping', 'Figma Essentials']);
}
