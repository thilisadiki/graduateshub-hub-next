# System Architecture — Graduates Hub

This document details the system architecture, file structures, and data flow patterns in Graduates Hub.

---

## 1. Tech Stack Overview

Graduates Hub is built on a modern, highly optimized serverless web stack:

- **Framework:** Next.js 16.2.4 (App Router)
- **UI Library:** React 19.2.5
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x with PostCSS (global rules in `app/globals.css`)
- **Database & Auth:** Supabase (PostgreSQL with RLS)
- **Email Delivery:** Resend
- **AI Integrations:** Google Gemini SDK (`@google/genai` v1)
- **Push Notifications:** OneSignal
- **Analytics:** Vercel Analytics & Speed Insights

---

## 2. Directory Structure

```
graduateshub-hub-next/
├── app/                          # Next.js App Router (Pages & API endpoints)
│   ├── api/                      # Serverless API routes (Gemini, Supabase, Resend)
│   ├── blog/                     # Blog dynamic routes & listing page
│   ├── career-roadmaps/          # Career roadmaps static/dynamic pages
│   ├── interview-prep/           # Interview preparation guides
│   ├── portfolio/                # Portfolio builder and category listings
│   ├── proof/[id]/               # Public portfolio submission showcases
│   └── tools/                    # Interactive career tools (Gemini-powered)
├── components/                   # Reusable React components
│   ├── home/                     # Home page elements
│   ├── course/                   # Course display templates
│   ├── layout/                   # Global layout (Navbar, Footer, CookieConsent)
│   └── shared/                   # Common elements (Newsletter, Promos)
├── data/                         # Hardcoded site datasets (Fast static page builds)
│   ├── categories/               # Course category definitions
│   ├── roadmaps/                 # 8 Career roadmap data objects
│   ├── interviewPrep/            # 12 Interview preparation roles
│   └── courses.ts                # Master index of 500+ curated courses
├── lib/                          # Site-wide constants and SEO configuration
├── supabase/                     # SQL database schema and initialization scripts
├── types/                        # Main TypeScript interfaces (types/index.ts)
└── utils/                        # Utilities (rate limiter, safety guards, email escaping)
```

---

## 3. Key Architectural Patterns

### A. Data-Driven Static Content (Zero Database Overhead)
Rather than pulling career data or course listings from a database dynamically on every request, all primary site content is stored inside `/data` as TypeScript datasets. 

- **Benefits:** High speed, low database billing, zero N+1 query problems, and full caching.
- **Convention:** Pages fetch data during build-time using `generateStaticParams()` and select standard arrays.

*Example pattern:*
```tsx
import { roadmaps } from '@/data/roadmaps';

export async function generateStaticParams() {
  return roadmaps.map((r) => ({ slug: r.id }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const roadmap = roadmaps.find((r) => r.id === slug);
  if (!roadmap) return notFound();
  // ... render roadmap UI
}
```

### B. Routing & Metadata Generation
- Dynamic pages utilize the `[slug]` format.
- Every route is configured with `generateMetadata()` to automatically load canonical URLs, OpenGraph (OG) cards, Twitter card tags, and descriptive title tags for SEO.

### C. Component Organization
- **Layout components (`components/layout/`)**: Global templates (e.g., `Navbar`, `Footer`, `CookieConsent`).
- **Feature components (`components/home/`, `components/course/`)**: Elements tailored specifically to page domains.
- **Shared components (`components/shared/`)**: Highly reusable components imported in multiple separate pages (e.g., `NewsletterBanner`, `ToolsPromo`).
- **UI primitives (`components/ui/`)**: Basic visual blocks.

---

## 4. Database Schema & RLS

Supabase stores user-submitted portfolio projects to generate shareable competence pages.

### Table: `portfolio_proofs`
Tracks verified learning completions.
- **Columns:**
  - `id`: Text (Primary Key, unique hash string)
  - `task_id` & `task_title` & `task_field`: Text (Identity of completed project)
  - `graduate_name`: Text (Display name of creator)
  - `submission`: Text (Markdown description or textual proof)
  - `submission_links`: JSON (URLs referencing live sites, GitHub repositories, or files)
  - `evaluation`: JSONB (Gemini grading payload: score, code-review summary, milestone status)
  - `created_at`: Timestamptz (Submission timestamp)

### Row-Level Security (RLS)
The database enforces strict policies defined in [supabase/schema.sql](file:///Users/jasonsadiki/projects/graduateshub-hub-next/supabase/schema.sql):
- **Read:** Public select access is allowed (`Public read portfolio proofs`).
- **Write:** Denied to standard users. Insertions are performed strictly by serverless API routes using the private `SUPABASE_SERVICE_ROLE_KEY`.

---

## 5. Third-Party Integrations

- **Google Gemini API:** Orchestrated server-side via `@google/genai` to analyze resumes, evaluate code submissions, decode job descriptions, and recommend pathways.
- **Resend:** Delivers transactional email alerts (contact form queries and feedback notifications).
- **OneSignal:** Implements opt-in client-side push notification prompts via `components/layout/OneSignalInit.tsx`.
- **Cloudflare Turnstile:** Standard captcha form verification built directly into Next.js POST endpoints.
