# Graduates Hub — Global Career & Course Directory

Graduates Hub is a Next.js web application designed to connect learners worldwide with free online courses and career guidance. The platform features structured, stage-by-stage career roadmaps, interactive interview prep guides, and a suite of AI-powered career tools built on Google Gemini.

---

## 🌟 Key Features

*   **Career Roadmaps:** Structured guides for entry-level roles (e.g. Junior Accountant, Business Analyst, Data Analyst) containing curated courses, durations, milestones, and regional salary benchmarks.
*   **Interview Prep Guides:** Curated questions, sample answers, red-flag advice, CV construction recommendations, and salary data across multiple regions (US, UK, Canada, Australia, South Africa).
*   **AI-Powered Career Tools:**
    *   *CV Review / Resume Analyzer:* Analyzes resumes and targets role alignment.
    *   *Interview Simulator:* Conducts realistic AI mock interview sessions.
    *   *Custom Learning Path Generator:* Builds tailored educational pathways.
    *   *Job Description Decoder:* Extracts key skills and gaps from job specifications.
*   **Portfolio Competency Badges:** Evaluates user-submitted course project files or descriptions using Gemini to reward shareable proof-of-competence badges stored on Supabase.

---

## 🛠 Tech Stack

*   **Framework:** Next.js 16 (App Router)
*   **Core:** React 19, TypeScript 5, Tailwind CSS 4
*   **Auth & Database:** Supabase (PostgreSQL with Row-Level Security)
*   **AI API:** Google Gemini SDK (`@google/genai`)
*   **Notifications:** OneSignal Push
*   **Mailing:** Resend API

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js 18+ installed on your system.

### 2. Install Dependencies
Clone the repository and install the project packages:
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the project root containing the following variables:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Email Sending (Resend)
RESEND_API_KEY=your_resend_api_key

# Cloudflare Turnstile CAPTCHA
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key

# Cron Job Secret (Keepalive)
CRON_SECRET=your_cron_secret_key
```

### 4. Run Development Server
Start the Next.js development server with hot-reload enabled:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Project Scripts

*   `npm run dev` — Launches the local Next.js development server.
*   `npm run build` — Generates a static-optimized production build of the project.
*   `npm start` — Boots the production server locally (must run `npm run build` first).
*   `npx tsc --noEmit` — Executes static TypeScript validation checks.

---

## 📖 System Documentation

Detailed structural blueprints and safety guidelines are located in the `/docs` directory:

1.  **[Architecture Blueprint](docs/architecture.html)** — Core routing conventions, layout design systems, static data configurations, and Supabase integration schemas.
2.  **[Security Standards](docs/security.html)** — Rate limiting configs, turnstile bot defenses, input size validations, HTTP headers, and client-side guards.
