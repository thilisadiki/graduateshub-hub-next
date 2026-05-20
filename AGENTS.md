<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Overview
Graduates Hub is a Next.js 16 (React 19) codebase containing career roadmaps, interview guides, and Gemini-powered interactive tools.

## Developer Quickstart & Documentation
All codebase architecture blueprints and security patterns are documented in the `/docs` directory. Before modifying or implementing features, you MUST review the appropriate guides:

1. **[Architecture Blueprint](docs/architecture.html)** — Project structure, dynamic routing patterns, dynamic metadata conventions, static-data setups, components organization, and database schema mappings.
2. **[Security Standards](docs/security.html)** — Rate limiting scopes, Cloudflare Turnstile CAPTCHA forms, Honeypot and Timing bot protection checks, HTTP security headers, input length validation parameters, HTML/WordPress sanitization processes, and client-side access guards.

## Development Commands
```bash
# Start development server
npm run dev

# Run type checker
npx tsc --noEmit

# Run production build compilation
npm run build
```

## Common Workflows
- **Add Career Roadmap:** Create template in `/data/roadmaps/` and export in index.
- **Add Interview Prep Guide:** Create entry in `/data/interviewPrep/` and export in index.
- **Add Gemini Endpoint:** Setup router in `/app/api/` applying security bounds, rate limits, and error handling as defined in `/docs/security.md`.
