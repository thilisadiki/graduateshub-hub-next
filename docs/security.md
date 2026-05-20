# Security Standards & Patterns — Graduates Hub

This document defines the security policies, defenses, and architectural guards implemented in the Graduates Hub codebase.

---

## 1. Bot Protection Triad

All user-facing forms (e.g., Contact Form, Feedback Form, Portfolio submission) implement a multi-layered check in [utils/security.ts](file:///Users/jasonsadiki/projects/graduateshub-hub-next/utils/security.ts) via the `checkBotProtection()` helper.

### A. Cloudflare Turnstile
- Verified server-side via `https://challenges.cloudflare.com/turnstile/v0/siteverify`.
- If the token is missing or invalid, the API rejects the request with a `400 Bad Request`.
- If the `TURNSTILE_SECRET_KEY` environment variable is not defined, validation gracefully logs a warning but succeeds (supporting local dev environments).

### B. Honeypot Field
- Every form contains a hidden field named `_hp` that is styled to be invisible to screen readers and human users.
- Automated web scraping bots fill all fields by default. If `_hp` contains any text, the API silently discards the payload by returning a mock `200 OK` response to the bot without executing any server-side logic (e.g., email sending, DB writes).

### C. Submission Timing Check
- Evaluated via submission timestamps (`_t` and `_ts`).
- If the difference between the timestamp payload and the server execution time is less than 3 seconds (`MIN_SUBMIT_MS`), the request is discarded as a bot action. Like the honeypot, the server returns a fake success code (`200 OK`) to avoid tipping off attackers.

---

## 2. API Rate Limiting

To prevent API abuse and protect backend endpoints from Denial of Service (DoS) attacks, Graduates Hub runs a sliding-window rate limiter in [utils/rateLimit.ts](file:///Users/jasonsadiki/projects/graduateshub-hub-next/utils/rateLimit.ts).

- **Implementation:** Custom in-memory rate limiter utilizing a `Map` of client IP addresses and request timestamps. Stale entries are pruned every 60 seconds.
- **Client IP Resolution:** Evaluates `x-forwarded-for` (Vercel/Cloudflare Edge header) first, falling back to `x-real-ip` or `"unknown"`.
- **Response behavior:** Reaches limits trigger an immediate `429 Too Many Requests` response containing a `Retry-After` header.

### Endpoint Budgets
Stricter limits are placed on resource-heavy endpoints (like Gemini API integrations) compared to lighter proxy endpoints:

| Endpoint Route | Rate Limit Budget | Target Resource |
| :--- | :--- | :--- |
| `/api/cv-review` | 5 requests / minute / IP | Google Gemini API (Resume Parse) |
| `/api/interview-prep` | 5 requests / minute / IP | Google Gemini API (Interview Sim) |
| `/api/learning-path` | 5 requests / minute / IP | Google Gemini API (Custom Paths) |
| `/api/skills-gap` | 5 requests / minute / IP | Google Gemini API (Gap Analysis) |
| `/api/jd-decoder` | 5 requests / minute / IP | Google Gemini API (Job Decoder) |
| `/api/portfolio/submit` | 3 requests / minute / IP | Gemini Grading + Supabase Write |
| `/api/contact` | 3 requests / minute / IP | Resend Email Dispatch |
| `/api/feedback` | 3 requests / minute / IP | Resend Email Dispatch |
| `/api/recommendations` | 10 requests / minute / IP | Google Gemini API (Course Query) |
| `/api/articles` | 30 requests / minute / IP | WordPress API Proxy |

---

## 3. Gemini Input Size Limits

All Gemini endpoints enforce maximum character length constraints on input payloads before executing LLM requests. This prevents cost-abuse scenarios where attackers send massive documents to consume input tokens:

- **CV text (`cvText`):** Max 15,000 characters
- **Target Role (`targetRole`):** Max 200 characters
- **Job Title (`jobTitle`):** Max 200 characters
- **Experience Level (`experienceLevel`):** Max 50 characters
- **Goal description (`goal`):** Max 1,000 characters
- **Current Skills (`currentSkills`):** Max 2,000 characters
- **Job Description (`jobDescription`):** Max 15,000 characters
- **Portfolio submission (`submission`):** Max 20,000 characters
- **Search recommendations query (`query`):** Max 1,000 characters

---

## 4. HTTP Security Headers

HTTP headers are defined in [next.config.ts](file:///Users/jasonsadiki/projects/graduateshub-hub-next/next.config.ts) to instruct browsers to run the site under strict security guidelines:

- **`X-Frame-Options`:** Set to `SAMEORIGIN` to prevent clickjacking attacks in frames.
- **`Strict-Transport-Security` (HSTS):** Configured to `max-age=31536000; includeSubDomains` (forces HTTPS for 1 year).
- **`X-Content-Type-Options`:** Set to `nosniff` to block MIME sniffing exploits.
- **`Referrer-Policy`:** Set to `strict-origin-when-cross-origin` to avoid leaking URL structures to external domains.
- **`Permissions-Policy`:** Set to `camera=(), microphone=(), geolocation=()` to restrict access to unused device capabilities.

---

## 5. HTML Escaping & XSS Protection

### A. Email Template Sanitization
To prevent stored XSS and phishing inside admin/recipient email clients, all user-entered string values (such as name, email, subject, message) are HTML-escaped using the `escapeHtml` utility from [utils/security.ts](file:///Users/jasonsadiki/projects/graduateshub-hub-next/utils/security.ts) before insertion into HTML email templates.

### B. WordPress Content Sanitization
WordPress API blog post payloads containing HTML are cleaned dynamically on the client before being rendered with React's `dangerouslySetInnerHTML`:
- Cleaned using `DOMPurify` with an explicit allowlist of tags and attributes (script tags, inline style tags, data attributes, and Gutenberg block wrappers are stripped).
- Titles and metadata generated from post titles are processed using a regex/DOMPurify wrapper to discard HTML elements completely and output clean plain text.

### C. JSON-LD Script Breakout Guard
Any dynamic data stringified inside `<script type="application/ld+json">` tags is escaped by converting the `<` character to Unicode format (`\u003c`):
```ts
dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
```
This is applied in [blog/[slug]/page.tsx](file:///Users/jasonsadiki/projects/graduateshub-hub-next/app/blog/%5Bslug%5D/page.tsx) and [proof/[id]/page.tsx](file:///Users/jasonsadiki/projects/graduateshub-hub-next/app/proof/%5Bid%5D/page.tsx) to prevent malicious strings from prematurely closing the script block (e.g. `</script>`).

---

## 6. Error Handling Sanitization

To prevent leaking sensitive deployment parameters, SDK secrets, database schemas, or filesystem paths to the client:
- All API catch blocks log the detailed, raw error object to the server-side console (`console.error`) for tracking in Vercel logs.
- The client receives a generic, sanitized JSON response payload:
```json
{ "error": "An unexpected error occurred. Please try again later." }
```
- Stack traces or system-specific error strings (`error.message`) are **never** returned to the browser.

---

## 7. Supabase Client Guard

The Supabase initialization utility [utils/supabase.ts](file:///Users/jasonsadiki/projects/graduateshub-hub-next/utils/supabase.ts) uses the highly privileged `SUPABASE_SERVICE_ROLE_KEY` to override RLS. To prevent developers from accidentally importing this service-role instance in client-side components (`'use client'`), the client initialization script asserts a runtime guard:
```ts
if (typeof window !== 'undefined') {
  throw new Error('getSupabase must only be called server-side.');
}
```
If imported client-side, the browser execution crashes immediately, preventing service key leaks.
