# Overview

This is a pnpm workspace monorepo utilizing TypeScript for building a comprehensive digital marketing platform. The project aims to provide subscription-based website solutions for private practices and accounting firms through a marketing website and a robust API backend.

**Key Capabilities:**

*   **Marketing Website (`artifacts/web`):** A React + Vite frontend for Graylock Digital, showcasing services, pricing, industry-specific landing pages, and an onboarding wizard. It emphasizes lead generation through a "Free Website Review" offer and incorporates a personalized business dashboard preview.
*   **API Server (`artifacts/api-server`):** An Express 5 API backend that serves the frontend, handles AI chatbot interactions, manages database operations, and integrates with external services for lead capture.
*   **Shared Libraries (`lib/*`):** Contains OpenAPI specifications, generated API clients (React Query hooks and Zod schemas), and the Drizzle ORM database layer.

The project's vision is to streamline website creation and lead generation for professional practices, offering a high-value, low-effort solution with a focus on SEO and conversion.

# User Preferences

I want iterative development and detailed explanations of proposed changes. Ask before making major changes to the project structure or core architectural components. Do not make changes to the `lib/api-spec` or `lib/api-zod` directories unless specifically instructed, as these are generated.

# System Architecture

The project is structured as a pnpm monorepo with `artifacts` for deployable applications and `lib` for shared libraries. TypeScript is used throughout, leveraging composite projects for efficient type-checking across packages.

**Core Technologies:**

*   **Monorepo:** pnpm workspaces
*   **Backend:** Node.js 24, Express 5, PostgreSQL, Drizzle ORM
*   **Frontend:** React, Vite, Tailwind CSS, Framer Motion, wouter (routing), react-helmet-async (SEO)
*   **Typing & Validation:** TypeScript 5.9, Zod (`zod/v4`), `drizzle-zod`
*   **API Codegen:** Orval (from OpenAPI spec)
*   **Build:** esbuild (CJS bundle for API), Vite (frontend)
*   **Deployment:** Docker-based (optimized for Sevalla), supports Nixpacks

**UI/UX Decisions (artifacts/web):**

*   **Branding:** Deep navy, medium navy, gunmetal, stone, offwhite, steel blue color palette. Typography uses Barlow Condensed (headlines) and Barlow (body).
*   **Layout:** Responsive design with specific desktop mega-menus and mobile accordions for navigation. Footer uses a 6-column grid.
*   **Key Components:** Navbar, Footer, AI Chat Widget, Before/After Mockups, Offer Breakdown, Value Differentiation, Case Studies, Dashboard Preview, Pricing, FAQ.
*   **Animations:** Framer Motion for scroll-reveal effects.
*   **Image Handling:** Automated generation of WebP and mobile-optimized JPEG/WebP variants using `sharp` during prebuild.

**Technical Implementations:**

*   **Type-checking:** Root `tsconfig.json` references all packages, `tsc --build --emitDeclarationOnly` is used for full monorepo type-checking.
*   **API Design:** Express 5 routes, with request and response validation via Zod schemas generated from OpenAPI.
*   **Database:** Drizzle ORM for PostgreSQL, with schema defined in `lib/db`. Migrations are handled by Replit in production.
*   **AI Chatbot:** Integrates with OpenRouter API (using `openai/gpt-4o-mini`), rate-limited, message/conversation length capped. Includes AI-powered conversation summarization and lead extraction posted to a GOS webhook.
*   **Onboarding Wizard (`/get-started`):** A 6-step multi-step form for lead capture, replacing a simple contact page.
*   **Deployment:** Multi-stage Dockerfile for production build, API server serves static frontend assets in production.

**Feature Specifications:**

*   **Marketing Website:** Includes sections for "How It Works," "Pricing," "Work," "About," "FAQ," and dedicated industry landing pages for various private practices and accounting firms, plus educational "Our Strategy" pages. Site-wide CTAs link to the onboarding wizard.
*   **AI Chat Widget:** A floating chat bubble with lead capture (name + email) and streaming AI responses, designed in a dark theme with orange accents.
*   **Dashboard Feature:** Tiered dashboard functionality (basic, full with lead tracking, dedicated account management) hinted at on the homepage.
*   **Image Optimization:** Automated image variant generation for responsiveness and performance.

# External Dependencies

*   **PostgreSQL:** Relational database for persistence.
*   **OpenRouter API:** Used by the AI chatbot for generating responses (specifically `openai/gpt-4o-mini`).
*   **OpenAI SDK:** Node.js library for interacting with the OpenRouter API.
*   **Formspree:** Used as a placeholder for form submissions in the onboarding wizard.
*   **Calendly:** Optionally integrated for booking appointments after form submission.
*   **GOS Webhook:** An external Graylock Operating System webhook (`https://graylock-os-ymwca.sevalla.app/api/webhook/chatbot-lead`) for receiving chatbot lead data.
*   **Tailwind CSS:** Utility-first CSS framework for styling the frontend.
*   **Framer Motion:** Animation library for React.
*   **wouter:** Lightweight React routing library.
*   **react-helmet-async:** For managing document head tags in React.
*   **sharp:** Node.js image processing library used in `scripts/generate-image-variants.mjs`.