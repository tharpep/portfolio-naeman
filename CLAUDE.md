# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server with Turbopack
pnpm build      # Production build
pnpm lint       # ESLint check
pnpm start      # Run production server
```

No test suite is configured.

## Architecture

Next.js 15 App Router portfolio site with Tailwind CSS v4 and TypeScript. Deployed to Vercel with `@vercel/analytics`.

**Routing:** `src/app/` uses file-based routing — `page.tsx` (home), `about/page.tsx`, `projects/page.tsx`, `projects/[slug]/page.tsx`, `resume/page.tsx`. The `[slug]` route uses `generateStaticParams` for static generation.

**Project data:** All project data lives in `src/lib/getProjects.ts` as a hardcoded array. This is the single source of truth for everything displayed on `/projects`, `/projects/[slug]`, and the featured section on the homepage. To add or modify projects, edit only this file. The `getFeaturedProjects()` function returns a manually curated list by slug.

**Components:** Only two shared components — `src/components/Nav.tsx` (client component with mobile menu) and `src/components/Footer.tsx`. Everything else is inline in each page.

**Styling:** Dark theme using Tailwind's `neutral-900` background with `amber-400/500` accent color throughout. Uses CSS variables for fonts (`--font-geist-sans`, `--font-geist-mono`).

**Resume PDF:** The resume page links to `/public/Naeman_Khatib_Resume.pdf` which must be added manually to the `public/` directory.

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`).
