# Overview

This project is a pnpm workspace monorepo utilizing TypeScript. It comprises a marketing website for Graylock Digital, a subscription-based website company, and an Express API server. The primary goal is to provide high-quality websites for private practices and accounting firms, offering various pricing tiers and features like a personalized business dashboard and an AI chat widget for lead generation. The project aims to expand its market reach within professional practices, excluding generic small businesses and law firms.

## User Preferences

The user prefers that the AI **DOES NOT** make changes to the folder `artifacts/web/public/` directly. Instead, any new images should be added to the source folder, and the image generation script will handle the variants.
The user prefers that the AI **DOES NOT** create or reference law firms or attorneys in any navigation or visible content.
The user prefers that the AI **DOES NOT** use the word "audit" in any content; instead, use "evaluate/evaluation".
The user prefers that the AI **DOES NOT** use the phrase "Unlimited Change Requests".
The user prefers that the AI refer to target businesses as "professional practices" not "small businesses".
The user prefers that the AI ensures forms are appointment inquiry only and do not collect PHI or integrate with EHR/EMR.
The user prefers that the AI ensures all CTAs link to `/get-started` and use the text "Book Your Free Website Review".
The user prefers that the AI **DOES NOT** re-introduce previously removed sections or testimonials (e.g., TestimonialSection, MissionBlurb, NicheExamplesSection, TrustStatsSection, SolutionSection).
The user prefers that the AI uses the existing `IndustryLandingPage` and `StrategyLandingPage` components for new industry and strategy pages, respectively.

## System Architecture

The project is structured as a pnpm monorepo with separate packages for applications (`artifacts/`) and shared libraries (`lib/`).

**Technology Stack:**
- **Monorepo Tool:** pnpm workspaces
- **Node.js:** 24
- **TypeScript:** 5.9
- **API Framework:** Express 5
- **Database:** PostgreSQL with Drizzle ORM
- **Validation:** Zod (v4) with `drizzle-zod`
- **API Codegen:** Orval (from OpenAPI spec)
- **Build Tool:** esbuild (CJS bundle)

**TypeScript & Composite Projects:**
- All packages extend `tsconfig.base.json` (`composite: true`).
- Root `tsconfig.json` lists all packages as project references for correct cross-package type resolution.
- `tsc --build --emitDeclarationOnly` is used for type checking, emitting only `.d.ts` files. JS bundling is handled by esbuild/Vite.

**UI/UX Decisions (`artifacts/web`):**
- **Framework:** React, Vite
- **Styling:** Tailwind CSS, Framer Motion for animations (scroll-reveal: fade up, 0.5s, 20px offset)
- **Routing:** wouter
- **SEO:** react-helmet-async
- **Brand Colors:** deep navy (#0F1E35), medium navy (#152847), gunmetal (#1E3554), stone (#8A8F9E), offwhite (#F2F3F5), steel blue (#2E7BB4)
- **Typography:** Barlow Condensed (700, headlines), Barlow (400/600, body)
- **Navigation:** Desktop uses two-column mega-menu for "Who We Help" and standard dropdown for "Our Strategy". Mobile uses scrollable accordion.
- **Onboarding Wizard (`/get-started`):** A 6-step multi-step form for lead capture, replacing the old contact page. Uses `WizardContext` for state and `WizardShell` for progress. Submits to Formspree and integrates with Calendly for booking.
- **AI Chat Widget:** A floating chat bubble (bottom-right) with a lead capture gate (name + email) before interaction. Features streaming AI responses via SSE and a dark theme with orange accents.
- **Image Variants:** An automated `prebuild` hook (`scripts/generate-image-variants.mjs` using `sharp`) generates `.webp` and mobile `.webp`/`.jpg` variants for images dropped into `public/`. This process is incremental and skips specific files (e.g., favicons, existing mobile variants).

**API Server (`artifacts/api-server`):**
- **Framework:** Express 5
- **Entry Point:** `src/index.ts`
- **App Setup:** `src/app.ts` handles CORS, JSON/urlencoded parsing, and mounts routes under `/api`. In production, it also serves the Vite build output as static files and handles SPA routing.
- **Routes:** `GET /api/health`, `POST /api/chat/conversations` (create), `POST /api/chat/conversations/:id/messages` (streaming SSE).
- **AI Chatbot Logic:** Uses OpenRouter API (`openai/gpt-4o-mini`) with a system prompt containing Graylock business knowledge. Includes rate limiting (10 msgs/min per IP), message length caps (1000 chars), and conversation length caps (30 exchanges). Summarizes conversations after 2+ user messages and POSTs to a GOS webhook for lead capture.

**Database Layer (`lib/db`):**
- Uses Drizzle ORM with PostgreSQL.
- Exports a Drizzle client and schema models.
- **Schema:** `chat_conversations` (id, visitorName, visitorEmail, createdAt) and `chat_messages` (id, conversationId, role, content, createdAt) for chatbot data.
- Migrations are handled by Replit in production; `pnpm --filter @workspace/db run push` or `push-force` in development.

**API Specification & Codegen (`lib/api-spec`, `lib/api-zod`, `lib/api-client-react`):**
- `lib/api-spec` contains the OpenAPI 3.1 spec (`openapi.yaml`) and Orval config.
- `lib/api-spec` runs codegen to produce:
    - Zod schemas into `lib/api-zod/src/generated/` for API validation.
    - React Query hooks and a fetch client into `lib/api-client-react/src/generated/` for frontend API interaction.

**Deployment:**
- Configured for Docker-based hosts (Sevalla).
- **Dockerfile:** Multi-stage build for web frontend and API server, resulting in a minimal production image.
- `nixpacks.toml` for Nixpacks-based hosts.
- Production build script: `pnpm run build:production`.
- Production start script: `pnpm run start`.
- The API server serves static files from `artifacts/web/dist/public/` and handles SPA routing in production.

## External Dependencies

- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **API Specification:** OpenAPI 3.1
- **API Codegen:** Orval
- **AI Model API:** OpenRouter (using `openai/gpt-4o-mini`)
- **AI SDK:** OpenAI SDK
- **Lead Capture Forms:** Formspree
- **Meeting Scheduling:** Calendly
- **Lead Webhook:** `https://graylock-os-ymwca.sevalla.app/api/webhook/chatbot-lead` (Graylock OS webhook)
- **Image Processing:** `sharp` (for image variant generation)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** wouter
- **SEO:** react-helmet-async