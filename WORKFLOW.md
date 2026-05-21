# Development & Deployment Workflow

How our code moves from local to production, and how the environments are wired up. Read this before pushing.

## Environments

```
  LOCAL
  │
  │  git push
  ▼
  DEV branch  ──►  staging.graduateshub.org
  │                PRIVATE · HTTP 401 + noindex · ← test here
  │
  │  git merge dev   (once staging looks good)
  ▼
  MAIN branch ──►  www.graduateshub.org
                   PUBLIC · indexed by Google · ← live
```

> Bigger or risky work can start on a `feature/*` branch (its own noindexed
> preview URL), then merge into `dev`. See "Feature-branch loop" below.

- **`main`** auto-deploys to **production** `www.graduateshub.org` — the only host
  Google indexes.
- **`dev`** auto-deploys to **staging** `staging.graduateshub.org` — private (HTTP
  401 via Vercel Deployment Protection) and noindexed. This is your test surface.
- Every push to either branch triggers a Vercel build automatically. You never
  deploy manually.

## Day-to-day loop (small changes)

```bash
# 1. Start on dev, current
git switch dev && git pull

# 2. Run locally while you work
npm run dev                 # http://localhost:3000

# 3. Commit
git add -A
git commit -m "feat: add cybersecurity roadmap"

# 4. Push -> staging rebuilds automatically
git push
```

Test on staging at `https://staging.graduateshub.org` (you must be logged into
Vercel — see "Viewing staging"). Then promote:

```bash
# 5. Promote dev -> production
git switch main && git pull
git merge dev               # fast-forward
git push                    # www.graduateshub.org goes live

# 6. Back to dev for the next task
git switch dev
```

## Feature-branch loop (bigger or risky work)

```bash
git switch dev && git pull
git switch -c feature/ai-recommender
# ...work, commit...
git push -u origin feature/ai-recommender   # gets its own noindexed preview URL

git switch dev
git merge feature/ai-recommender
git push                                     # staging gets it
# test on staging, then promote dev -> main as above
git branch -d feature/ai-recommender
git push origin --delete feature/ai-recommender
```

Cleaner still: open a **Pull Request on GitHub** (`feature → dev`, then `dev →
main`) for a reviewable diff, a per-PR preview deploy, and clean history.

## Keep `dev` in sync with `main`

Any time `main` moves without going through `dev` (hotfix, teammate merge), pull
it back so they don't drift. Do this at the start of each session:

```bash
git switch dev && git merge main && git push
```

## Hotfixes (urgent production fix)

```bash
git switch main && git pull
git switch -c hotfix/contact-form
# ...fix, commit...
git switch main && git merge hotfix/contact-form && git push   # prod fix live
git switch dev && git merge main && git push                   # backport to dev
```

## Setup-specific notes

1. **Viewing staging (the 401).** `staging.graduateshub.org` is private. Open it
   while logged into Vercel, or generate a Share link in Vercel (Project →
   Deployments → the deploy → "Share"). Anonymous visitors and Googlebot get 401
   by design.
2. **`proxy.ts` is automatic.** It sets `X-Robots-Tag: noindex` on every host
   except `www.graduateshub.org`, so any new preview/staging URL is safe from
   indexing by default. Don't override robots on production.
3. **Canonicals are hardcoded to production.** `SITE_URL` in `lib/seo.ts` is
   always `www.graduateshub.org`; staging pages canonical to prod on purpose.
   Don't point canonicals at staging.
4. **`main` is the release line.** Never push experimental work straight to
   `main` — it goes live instantly. Everything earns its way in through staging.
5. **Don't disable Deployment Protection** unless you specifically want a public,
   shareable staging. If you ever do, the `proxy.ts` `noindex` is what then keeps
   it out of Google.

## Cheat sheet

| Goal | Command |
| --- | --- |
| Start working | `git switch dev && git pull` |
| Run locally | `npm run dev` |
| Type-check | `npx tsc --noEmit` |
| Save & deploy to staging | `git add -A && git commit -m "…" && git push` |
| Test | open `staging.graduateshub.org` (logged into Vercel) |
| Ship to production | `git switch main && git pull && git merge dev && git push` |
| Resync dev | `git switch dev && git merge main && git push` |
