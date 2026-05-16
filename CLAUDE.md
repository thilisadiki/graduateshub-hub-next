# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Graduates Hub** is a Next.js 16 (React 19) web application providing free online courses and career guidance for learners worldwide. The site focuses on connecting learners with educational resources through curated course recommendations, interactive career roadmaps, interview preparation, and portfolio guidance.

**Tech Stack:**
- Next.js 16.2.4 with App Router (breaking changes from older versions—read `/node_modules/next/dist/docs/` before writing code)
- React 19.2.5
- TypeScript 5
- Tailwind CSS 4 with PostCSS
- Supabase (database & auth)
- Resend (email delivery)
- Google Gemini API (LLM features)
- OneSignal (push notifications)
- Vercel Analytics & Speed Insights

## Development Commands

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm build

# Run production build locally
npm start

# Type check (no emit)
npx tsc --noEmit

# (No test suite currently; validation is manual + TypeScript checking)
```

## Project Structure

```
app/                          # Next.js App Router pages & API routes
├── page.tsx                   # Home page
├── layout.tsx                 # Root layout with metadata, Navbar, Footer
├── api/                       # API routes (Gemini, Supabase, email handlers)
├── career-roadmaps/[slug]/    # Career roadmap detail pages
├── interview-prep/[slug]/     # Interview prep detail pages
├── course/[slug]/             # Course detail pages
├── category/[slug]/           # Course category pages
├── blog/                       # Blog & articles
├── portfolio/                 # Portfolio builder & showcase
└── [various static pages]     # /about, /contact, /terms, /privacy, etc.

components/                   # Reusable React components
├── home/                      # Home page specific components
├── course/                    # Course card & display
├── layout/                    # Navbar, Footer, CookieConsent, OneSignal init
├── modals/                    # Modal dialogs (mostly legacy)
├── shared/                    # Global UI: AuthorByline, NewsletterBanner
└── ui/                        # Basic UI primitives

data/                         # Content as TypeScript objects (no database calls)
├── roadmaps/                  # Career roadmap data (8 roles)
├── interviewPrep/             # Interview prep data (12 roles)
├── portfolioTasks/            # Portfolio task definitions
├── portfolioTopics/           # Portfolio topic structures
├── categories/                # Course categories (IT, Business, Languages, etc.)
├── courses.ts                 # Index of all courses
├── careerQuiz.ts              # Career discovery quiz questions
└── navigation.ts              # Site navigation structure

types/index.ts               # TypeScript interfaces
├── CareerRoadmap            # Roadmap with stages, FAQs, certifications
├── InterviewPrep            # Interview questions & CV tips
├── Course                   # Course metadata
├── PortfolioTask            # Portfolio project definitions
└── SalaryBenchmark          # Regional salary data

lib/                         # Utilities
├── seo.ts                   # SEO constants (SITE_URL, OG_IMAGE)
└── [no shared logic utilities currently]

utils/                       # Not heavily populated
public/                      # Static assets (logos, fonts, images)
```

## Key Architectural Patterns

### 1. **Data-Driven Content (No Database Queries in Components)**
All content lives in `/data` as TypeScript objects. Pages fetch data statically during build-time or render-time via `generateStaticParams()` and simple Array.find(). This keeps the site fast and eliminates N+1 queries.

**Example (Career Roadmap Page):**
```tsx
import { roadmaps } from '@/data/roadmaps';

export async function generateStaticParams() {
  return roadmaps.map((r) => ({ slug: r.id }));
}

// Then find the roadmap by slug in the page component
const roadmap = roadmaps.find((r) => r.id === slug);
```

### 2. **Routing Convention**
- Dynamic routes use `[slug]` pattern in folders (e.g., `/career-roadmaps/[slug]/page.tsx`)
- Static page generation via `generateStaticParams()` at build time
- Metadata generated dynamically via `generateMetadata()` for SEO (title, description, OG tags)

### 3. **Content Types & Interfaces**
Three core content types live in `/data` and `/types`:
- **CareerRoadmap:** Career paths with stages, certifications, FAQs, salary benchmarks by region
- **InterviewPrep:** Interview questions, CV tips, key skills for specific roles
- **Course:** Course metadata (title, duration, rating, provider, category, links)

Each has regional salary data in `salaryBenchmarks: SalaryBenchmark[]` (region + range, e.g., "United States: $55,000–$75,000/year").

### 4. **API Routes & External Services**
API routes in `/app/api` handle:
- `contact/` – Contact form (Resend email)
- `feedback/` – Feedback submission (Supabase)
- `cv-review/` – CV analysis (Google Gemini LLM)
- `recommendations/` – Course recommendations (Gemini)
- `learning-path/` – Custom learning path (Gemini)
- `interview-prep/` – Interview simulation (Gemini)
- `skills-gap/` – Skills gap analysis (Gemini)
- `jd-decoder/` – Job description analysis (Gemini)
- `articles/` – Blog post fetching from external API
- `cron/keepalive/` – Cron job for Supabase connection

### 5. **Component Organization**
- **Layout components** (`/components/layout`): Global UI (Navbar, Footer, CookieConsent, OneSignal init, ScrollToTop)
- **Feature components** (`/components/home`, `/components/course`): Feature-specific UI
- **Shared components** (`/components/shared`): Cross-cutting components (AuthorByline, NewsletterBanner)
- **UI components** (`/components/ui`): Basic reusable primitives

### 6. **Styling**
Tailwind CSS 4 with PostCSS. Global styles in `/app/globals.css`. No CSS-in-JS. Inline Tailwind classes throughout.

### 7. **SEO & Metadata**
- Metadata base URL: `https://www.graduateshub.org`
- OG image defined in `/lib/seo.ts`
- Each page has `generateMetadata()` for dynamic titles, descriptions, canonical URLs, OG tags
- Structured data (schema-dts) in place for rich snippets

### 8. **Next.js Configuration**
Key settings in `next.config.ts`:
- `trailingSlash: false` – No trailing slashes on URLs
- Security headers: X-Frame-Options, Strict-Transport-Security
- URL redirects for old route patterns (e.g., `/articles` → `/blog`)
- Remote image patterns: Unsplash, Gravatar
- Dev indicators disabled

## Content Curation & Structure

### Career Roadmaps (`/data/roadmaps`)
8 entry-level career paths (Junior Accountant, Business Analyst, Data Analyst, etc.). Each has:
- Overview & job titles
- 4–6 stages (each with courses, duration, milestone)
- Certifications (free & paid)
- Portfolio projects
- FAQs & common mistakes
- First 90 days on the job
- **Salary benchmarks by region** (US, UK, Canada, Australia, South Africa)

### Interview Prep (`/data/interviewPrep`)
12 junior-level roles with:
- Interview questions (why this matters + sample answer + red flag)
- CV tips & what to avoid
- Key skills required
- Related career roadmaps & interview prep guides
- **Regional salary benchmarks**

### Courses (`/data/courses.ts`)
Index of 500+ free online courses with metadata:
- Duration, rating, provider (Udemy, Coursera, Alison, LinkedIn Learning, etc.)
- Category & subcategory
- External link to course
- Curated from real course APIs

### Portfolio Tasks & Topics
Structured portfolio project templates organized by topic (Web Development, Data Analysis, etc.) with:
- Difficulty levels
- Skills built
- Time estimates
- Example outcomes

## Globalisation Notes

The platform has been transitioning from a **South African audience** to a **global audience**. Recent changes (May 2026):
- Salary benchmarks are now **location-based** (5 regions) instead of SA-only
- Language reframed to remove SA-specific qualifiers ("in SA", "SA roles", "SA norm")
- Rand (ZAR) references converted to multi-currency formats with USD/GBP/CAD/AUD
- Currency-specific cost references removed from certifications (kept generic "paid certification")
- Content now emphasizes global applicability while maintaining South Africa as a valid region

## Deployment & Hosting

- Hosted on **Vercel** (production: `https://www.graduateshub.org`)
- Environment variables in `.env.local` (Supabase URL/key, Google API key, OneSignal, etc.)
- Analytics via Vercel Analytics & Speed Insights
- Google AdSense integration via metadata

## Breaking Changes Note (IMPORTANT)

Next.js 16 introduces breaking changes from older versions:
- App Router conventions differ from Pages Router
- API route signatures may differ
- Metadata generation via `generateMetadata()` function
- Dynamic params via `generateStaticParams()`

**Always check `/node_modules/next/dist/docs/` before writing new code and heed deprecation notices.**

## Common Workflows

**Adding a new career roadmap:**
1. Create `/data/roadmaps/newRole.ts` with CareerRoadmap object
2. Add to `/data/roadmaps/index.ts` export
3. Page will auto-generate at `/career-roadmaps/[id]` via `generateStaticParams()`

**Adding a new interview prep guide:**
1. Create `/data/interviewPrep/newRole.ts` with InterviewPrep object
2. Add to `/data/interviewPrep/index.ts` export
3. Page will auto-generate at `/interview-prep/[id]`

**Adding a new course to recommendations:**
1. Add to `/data/courses.ts` with Course object
2. Reference by ID in roadmap stage `courseIds` array
3. Component renders via CourseCard

**Adding a new API endpoint (e.g., for Gemini calls):**
1. Create `/app/api/[feature]/route.ts` with POST/GET handlers
2. Use Google Gemini SDK (already configured)
3. Return JSON response
4. Call from client-side forms or next/server functions

## Security Patterns

Forms (contact, feedback, etc.) implement multi-layer bot protection:

### Cloudflare Turnstile (CAPTCHA)
- Verify token server-side via `https://challenges.cloudflare.com/turnstile/v0/siteverify`
- Gracefully degrades if `TURNSTILE_SECRET_KEY` not set
- Returns 400 if verification fails

### Honeypot Fields
- Hidden form fields (`_hp`) that bots fill, humans don't
- If filled, return 200 (appear successful to bot, silently discard)
- Prevents form spam while maintaining good UX

### Timing Checks
- Reject submissions under 3 seconds (minimum `MIN_SUBMIT_MS`)
- Bots submit instantly; humans take time to read and fill
- Return 200 to appear successful to bot

### Field Validation
- Email regex check: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Required field checks (name, email, subject, message)
- Character limits (e.g., message < 2000 chars)
- Return 400 with descriptive error on failure

**Example Flow (Contact Form):**
1. Parse request JSON
2. Check honeypot (`_hp`)
3. Check timing (`_t`, `_ts`)
4. Validate all fields
5. Verify Turnstile token
6. Send email via Resend
7. Return success or error with appropriate HTTP status

## Supabase Database & RLS

Supabase handles database and authentication. Key table:

### portfolio_proofs
Stores portfolio project submissions with:
- `id` (primary key, text)
- `task_id`, `task_title`, `task_field` (what was submitted)
- `graduate_name`, `submission`, `submission_links` (who submitted what)
- `evaluation` (JSONB - LLM evaluation results)
- `created_at` (timestamp with timezone)

**Indexes:** `created_at` (descending), `task_id`

**Row-Level Security (RLS):**
- Public read access via policy: `"Public read portfolio proofs"`
- Public cannot insert/update/delete
- Writes only via API route using service role key (`SUPABASE_SERVICE_ROLE_KEY`)
- This prevents direct user manipulation while allowing portfolio showcase

**Schema location:** `/supabase/schema.sql`

## API Error Handling Pattern

All API routes follow consistent error handling:

### Graceful Degradation
- If external service key missing (e.g., `RESEND_API_KEY`), log warning and return success
- Prevents app crashes when services aren't fully configured
- Useful for development and staging

### HTTP Status Codes
- `200` – Success OR bot-like submission (silently discard)
- `400` – Validation failure or security check failed (user-facing error)
- `500` – Unexpected server error

### Error Logging
- Use prefix for debugging: `[Feature Name]` (e.g., `[Contact Form]`)
- Log to console with context (name, email, error details)
- Example: `console.error('[Contact Form] Resend error:', error)`

### Response Format
```json
// Success
{ "success": true }

// Error
{ "error": "User-facing error message." }
```

## External Service Integrations

### Google Gemini API
**Purpose:** LLM calls for intelligent features
**Used in:**
- `/api/cv-review/` – Analyze user CV
- `/api/recommendations/` – Course recommendations
- `/api/learning-path/` – Custom learning path
- `/api/interview-prep/` – Interview simulation
- `/api/skills-gap/` – Skills gap analysis
- `/api/jd-decoder/` – Job description analysis

**Key:** `GEMINI_API_KEY`
**SDK:** `@google/genai`

### Resend
**Purpose:** Transactional email delivery
**Used in:**
- `/api/contact/` – Contact form submissions
- Any other email notifications

**Key:** `RESEND_API_KEY`
**From address:** `noreply@graduateshub.org`
**Reply-to:** User's email (allows direct replies)
**Template:** HTML emails with inline styling

### Cloudflare Turnstile
**Purpose:** Bot protection for forms
**Flow:**
1. Frontend sends CAPTCHA token with form
2. Backend verifies token against Cloudflare API
3. Return 400 if verification fails

**Keys:**
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (frontend)
- `TURNSTILE_SECRET_KEY` (backend/server-side)

### OneSignal
**Purpose:** Push notifications for user engagement
**Hardcoded app ID:** `ab8387b0-92e7-4da6-9596-ccef9aae0600`
**Initialization:** `/components/layout/OneSignalInit.tsx`
**Behavior:** Lazy-loaded client-side, enables notification opt-in button (bottom-left)
**Note:** App ID is not secret; it's safe to hardcode

### Supabase
**Purpose:** Database and authentication
**Keys:**
- `NEXT_PUBLIC_SUPABASE_URL` (frontend access)
- `SUPABASE_SERVICE_ROLE_KEY` (server-side, for API routes)

**Auth:** Used for portfolio submissions, feedback
**Database:** `portfolio_proofs` table with RLS

## No Test Suite

Currently, there are no automated tests (Jest, Vitest, etc.). Validation relies on:
- TypeScript strict mode (`strict: true`)
- Manual testing in dev server (`npm run dev`)
- Build-time errors caught during `npm run build`
- Type checking via `npx tsc --noEmit`
