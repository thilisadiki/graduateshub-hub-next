import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import type { AuthorKey } from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses as allCourses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://www.graduateshub.co.za';

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface CourseCategory {
  label: string;
  description: string;
  ids: string[];
  /** Used for the "See all X courses" link. Falls back to /category/${slug} */
  categoryHref?: string;
  /** Label for the "See all" link. Falls back to cat.label */
  categoryLabel?: string;
  /** Used to build /category/${slug} fallback href */
  slug?: string;
}

export type CareerPathItem =
  | { role: string; detail: string; href?: undefined; category?: undefined }
  | { role: string; href: string; category: string; detail?: undefined };

export interface RelatedGuide {
  title: string;
  desc: string;
  href: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BreadcrumbSegment {
  label: string;
  href?: string;
}

export interface HeroBadge {
  icon: LucideIcon;
  label: string;
  iconClassName?: string;
}

export interface GuideTemplateProps {
  // Schema
  canonicalUrl: string;
  datePublished?: string;
  dateModified?: string;

  // Breadcrumb (UI)
  breadcrumb: BreadcrumbSegment[];

  // Hero
  heading: string;
  heroDescription: string;
  heroBadges: HeroBadge[];
  authors?: AuthorKey[];
  lastUpdated?: string;

  // Benefits section
  benefitsSectionTitle: string;
  benefitsSectionSubtitle: string;
  benefits: BenefitItem[];

  // Optional slot rendered between benefits and course sections
  preCoursesSection?: React.ReactNode;

  // Course sections
  courseCategories: CourseCategory[];

  // Optional slot rendered between course sections and the carousel
  preCarouselSection?: React.ReactNode;

  // Carousel
  relatedCourses: Course[];
  carouselTitle: string;
  carouselSubtitle: string;

  // Optional slot rendered between carousel and career paths
  postCarouselSection?: React.ReactNode;

  // Career paths
  careerPathsTitle: string;
  careerPathsSubtitle: string;
  careerPaths: CareerPathItem[];
  careerPathsBrowseHref?: string;
  careerPathsBrowseLabel?: string;

  // Related guides
  relatedGuides: RelatedGuide[];

  // Optional "Explore by category" pill links
  exploreCategories?: Array<{ label: string; href: string }>;

  // FAQ
  faqs: FaqItem[];

  // CTA
  ctaHeading: string;
  ctaBody: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
}

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function GuideTemplate({
  canonicalUrl,
  datePublished = '2025-01-01',
  dateModified = '2026-01-01',
  breadcrumb,
  heading,
  heroDescription,
  heroBadges,
  authors,
  lastUpdated,
  benefitsSectionTitle,
  benefitsSectionSubtitle,
  benefits,
  preCoursesSection,
  courseCategories,
  preCarouselSection,
  relatedCourses,
  carouselTitle,
  carouselSubtitle,
  postCarouselSection,
  careerPathsTitle,
  careerPathsSubtitle,
  careerPaths,
  careerPathsBrowseHref,
  careerPathsBrowseLabel,
  relatedGuides,
  exploreCategories,
  faqs,
  ctaHeading,
  ctaBody,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
}: GuideTemplateProps) {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: heading,
    itemListElement: allFeatured.slice(0, 12).map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: { '@type': 'Organization', name: 'Alison', sameAs: 'https://alison.com' },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          duration: `PT${parseInt(course.duration.split('-')[0])}H`,
        },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: heading,
    url: canonicalUrl,
    datePublished,
    dateModified,
    description: heroDescription,
    publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: heading, item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto w-full px-6 py-4 text-sm text-gray-500 flex items-center flex-wrap gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {breadcrumb.map((seg, i) => (
            <React.Fragment key={i}>
              <span className="text-gray-300">›</span>
              {seg.href ? (
                <Link href={seg.href} className="hover:text-primary transition-colors">{seg.label}</Link>
              ) : (
                <span className="text-gray-900 font-medium">{seg.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            {heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">{heroDescription}</p>
          <div className="flex flex-wrap gap-4">
            {heroBadges.map(({ icon: Icon, label, iconClassName }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
              >
                <Icon size={16} className={iconClassName ?? 'text-gray-500'} />
                {label}
              </div>
            ))}
          </div>
          {authors && lastUpdated && (
            <AuthorByline authors={authors} lastUpdated={lastUpdated} />
          )}
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{benefitsSectionTitle}</h2>
          <p className="text-gray-500 mb-10 text-lg">{benefitsSectionSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {preCoursesSection}

        {/* Course sections */}
        {courseCategories.map((cat, i) => {
          const catCourses = getCoursesByIds(cat.ids);
          if (catCourses.length === 0) return null;
          const allHref = cat.categoryHref ?? (cat.slug ? `/category/${cat.slug}` : null);
          const allLabel = cat.categoryLabel ?? cat.label;
          return (
            <section key={`${cat.label}-${i}`} className="mb-20">
              <div className="flex items-end justify-between mb-2 flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{cat.label}</h2>
                  <p className="text-gray-500 mt-1">{cat.description}</p>
                </div>
                {allHref && (
                  <Link
                    href={allHref}
                    className="text-primary font-bold hover:text-blue-800 transition-colors flex items-center gap-1 whitespace-nowrap text-sm"
                  >
                    See all {allLabel} courses <ChevronRight size={16} />
                  </Link>
                )}
              </div>
              <div className="w-12 h-1 bg-primary rounded-full mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          );
        })}

        {preCarouselSection}

        {/* Carousel */}
        {relatedCourses.length > 0 && (
          <div className="mb-20">
            <CourseCarousel courses={relatedCourses} title={carouselTitle} subtitle={carouselSubtitle} />
          </div>
        )}

        {postCarouselSection}

        {/* Career paths */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{careerPathsTitle}</h2>
          <p className="text-gray-500 mb-10 text-lg">{careerPathsSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {careerPaths.map((item) =>
              item.href ? (
                <Link
                  key={item.role}
                  href={item.href}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">{item.role}</p>
                      <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ) : (
                <div key={item.role} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <p className="font-bold text-gray-900 text-lg mb-1">{item.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                </div>
              )
            )}
          </div>
          {careerPathsBrowseHref && careerPathsBrowseLabel && (
            <Link
              href={careerPathsBrowseHref}
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors"
            >
              {careerPathsBrowseLabel} <ChevronRight size={16} />
            </Link>
          )}
        </section>

        {/* Related guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedGuides.map(({ title, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Explore by category (optional) */}
        {exploreCategories && exploreCategories.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Explore by Category</h2>
            <p className="text-gray-500 mb-8">Browse every free course we offer, organised by field.</p>
            <div className="flex flex-wrap gap-3">
              {exploreCategories.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8 bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{ctaHeading}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">{ctaBody}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaPrimaryHref} className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              {ctaPrimaryLabel}
            </Link>
            <Link href={ctaSecondaryHref} className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-bold hover:border-gray-300 transition-colors">
              {ctaSecondaryLabel}
            </Link>
          </div>
        </section>
      </main>

      <NewsletterBanner />
    </div>
  );
}
