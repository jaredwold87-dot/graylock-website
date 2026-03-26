# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── web/                # Graylock Digital marketing website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/web` (`@workspace/web`) — Graylock Digital Marketing Website

Frontend-only React + Vite marketing website for Graylock Digital, a subscription-based website company for small service businesses.

- **Tech**: React, Vite, Tailwind CSS, Framer Motion, wouter (routing), react-helmet-async (SEO)
- **Brand Colors**: charcoal (#0F1117), navy (#1A1F2E), gunmetal (#2C3140), stone (#8A8F9E), offwhite (#F2F3F5), orange (#E8631A)
- **Typography**: Barlow Condensed (700, headlines) + Barlow (400/600, body)
- **Pages**: / (homepage), /how-it-works, /pricing, /work, /about, /faq, /get-started (onboarding wizard), /contact (redirects to /get-started), /thank-you, /accountants (legacy funnel)
- **"Who We Help" Industry Pages** (7 pages, shared template): /websites-for-small-business-owners, /websites-for-contractors, /websites-for-solo-practitioners, /websites-for-group-practices, /websites-for-accountants, /websites-for-lawyers, /websites-for-house-cleaners — all use `IndustryLandingPage` component template at `src/components/industry/IndustryLandingPage.tsx`; individual page data + wrappers at `src/pages/industries/*.tsx`
- **Navbar**: "Who We Help" dropdown (hover on desktop, accordion on mobile) positioned between "How It Works" and "Pricing"
- **Footer**: Includes "WHO WE HELP" column linking to all 7 industry pages
- **Onboarding Wizard** (`/get-started`): 6-step multi-step form replacing old contact page. Step 1 (name/email), Step 2 (has website? yes/no branch), Path A (URL → goal → target customer), Path B (business type → stage → lead gen), Final step (referral + submit). Uses WizardContext for state, WizardShell for progress bar, BookingState for post-submit Calendly embed or email follow-up confirmation. Formspree submission (placeholder URL: `https://formspree.io/f/REPLACE`). Calendly URL configurable in BookingState.tsx (empty = email follow-up flow).
- **All CTAs**: Site-wide "Book Your Free Website Review" buttons link to `/get-started`
- **Assets in public/**: logo-horizontal.png (navbar), logo-stacked.png (footer), hero-bg.png (homepage hero background), devices-hero.png (device mockup), about-hero.png (about/how-it-works hero bg), portfolio-before-{1,2,3}.png & portfolio-after-{1,2,3}.png (before/after portfolio images for CPA, Therapist, Contractor)
- **Core Offer**: Free website review + free custom homepage demo (value-first, no obligation). Primary CTA: "Book Your Free Website Review"
- **Dashboard Feature**: Personalized business dashboard for Standard & Growth tiers — view website analytics, edit business info (hours, phone, address), post announcement banners, submit update requests. DashboardSection on homepage includes mock UI preview.
- **Key Components**: Navbar (sticky, mobile hamburger, includes Home link), Footer, BeforeAfterMockup (auto-cycling real portfolio images), OfferBreakdownSection (3-part free offer), ValueDifferentiationSection (agency comparison table + dashboard row), DashboardSection (mock dashboard preview + feature grid), PricingSection, FAQSection (offer + dashboard focused), NicheExamplesSection (AI-generated website screenshots)
- **Section Rhythm**: Hero (charcoal) → Offer Breakdown (navy) → Problem (offwhite) → How It Works (offwhite) → Value Differentiation (charcoal) → Solution (navy) → Dashboard (navy) → Testimonials (charcoal) → Mission Blurb (charcoal) → Niche Examples (navy) → Pricing (charcoal) → FAQ (offwhite) → Final CTA (orange) → Footer (charcoal)
- **Niche Images in public/**: niche-{accountant,therapist,contractor,consultant,dentist,lawyer}-{1,2,3}.png (18 AI-generated website mockup screenshots)
- **Animations**: Framer Motion scroll-reveal (fade up, 0.5s, 20px offset)
- `pnpm --filter @workspace/web run dev` — run the dev server

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT` (defaults to 3000), starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`. In production, also serves Vite build output as static files and has SPA catch-all route (Express 5 `{*path}` syntax)
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.mjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

## Deployment (Sevalla / Docker)

The project is configured for deployment to Sevalla or any Docker-based host:

- **Dockerfile**: Multi-stage build — installs deps, builds both web and API server, produces minimal production image
- **nixpacks.toml**: Alternative for Nixpacks-based hosts
- **Root scripts**:
  - `pnpm run build:production` — builds web frontend + API server (skips typecheck/dev tools)
  - `pnpm run start` — runs the production server (`NODE_ENV=production node artifacts/api-server/dist/index.mjs`)
- **Static file serving**: In production, the API server serves `artifacts/web/dist/public/` as static files and handles SPA routing with a catch-all
- **PORT**: Defaults to 3000 if not set; Sevalla can override via environment variable
- **BASE_PATH**: Defaults to `/` in production builds

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
