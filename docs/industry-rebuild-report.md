# Graylock industry landing-page rebuild

## Scope delivered

Rebuilt the bodies of the fourteen approved routes. Each uses the specified hero,
Homepage Direction offer, one real project, three problem blocks, four delivery
blocks, four process steps, five FAQs, the unchanged shared team section, and
the route-specific final CTA. Conditional proof follows the source gates below.
Psychologists alone places its final client-perspective block after the team.

### Routes, route components, and real projects

All route components below are in `artifacts/web/src/pages/industries/`.

| Route | Component | Single featured project |
|---|---|---|
| `/websites-for-realtors` | `Realtors.tsx` | Willow Realty Group |
| `/websites-for-well-drillers` | `WellDrillers.tsx` | JC's Well Services |
| `/websites-for-cabinet-makers` | `CabinetMakers.tsx` | Interior Finishes Cabinets and Design |
| `/websites-for-auctioneers` | `Auctioneers.tsx` | Benevolent Auctions |
| `/websites-for-home-builders` | `HomeBuilders.tsx` | Meagher Builders |
| `/websites-for-industrial-construction` | `IndustrialConstruction.tsx` | L.A. Perks Petroleum Specialists — explicitly industry-adjacent |
| `/websites-for-accountants` | `Accountants.tsx` | Interior Finishes — Cabinets & Design, not accounting |
| `/other-service-businesses` | `LocalServiceBusinesses.tsx` | Wicks Land & Yard Management |
| `/websites-for-psychologists` | `Psychologists.tsx` | Interior Finishes — Cabinets & Design, not healthcare |
| `/websites-for-optometrists` | `Optometrists.tsx` | West Coast Eye Institute — Ophthalmology & Eye Care, not optometry |
| `/websites-for-physical-therapists` | `PhysicalTherapists.tsx` | Interior Finishes — Cabinets & Design, not healthcare |
| `/websites-for-dentists` | `Dentists.tsx` | Bluegrass Dental Anesthesia Solutions — Mobile Dental Anesthesia |
| `/websites-for-chiropractors` | `Chiropractors.tsx` | Kingsbury Chiropractic |
| `/websites-for-physicians` | `Physicians.tsx` | West Coast Eye Institute — Ophthalmology & Eye Care |

## Components and assets

New, route-scoped implementation lives in
`artifacts/web/src/components/industry/standard/`:

- `StandardIndustryPage.tsx`: ordered sections, scoped CTA placements, accessible
  FAQ, project navigation, and proof-gated rendering.
- `IndustryHeroArt.tsx`: decorative abstract SVG compositions, not photographs
  or representations of completed client work.
- `RichText.tsx`: scoped inline links using existing internal/external conventions.
- `types.ts`: shared content contract.
- `project-assets.ts`: the ten existing, verified project screenshot assets.
- `proof-verification.ts`: explicit route/slot source gates.
- `content/*.ts`: fourteen route-specific modules containing approved copy.

Reused **without editing**: `FounderAccountabilitySection`, `CTAButton`,
`ScrollReveal`, the shared Radix-based accordion, `SEO`, the booking context and
form, and the existing industry URL/analytics helpers.

The existing process and final-CTA functions hard-code legacy wording. Rather
than change those global components or expose their outdated copy, the scoped
renderer uses their homepage visual conventions with the approved route copy.
The shared team component itself is rendered unchanged.

## Included proof

- **Mark Nelson:** exact approved Realtor excerpt in review and final proof.
  The later lead-generation/conversion paragraph is excluded.
- **Francisca Rangel:** approved exact excerpt on Well Drillers, Cabinet Makers,
  Industrial Construction, Accountants, Psychologists, Optometrists, Physical
  Therapists, Dentists, Chiropractors, and Physicians, with route-approved
  attribution/source treatment.
- **Kylen & Keith Perks / L.A. Perks:** approved full or short process-focused
  quotation on Well Drillers, Industrial Construction, Accountants,
  Psychologists, Optometrists, Physical Therapists, and Chiropractors.
- **Dentists:** the approved, documented process-only final proof.

See `industry-source-verification.md` for source URLs, the verification date,
actual project categories, and the route-by-route release gates.

## Intentionally omitted proof and policy conflicts

- Both Wicks quotation blocks: the scoped quotation could not be verified
  against the current public portfolio source. The real project remains.
- Cabinet Maker final process-proof block: it depends on an unsupported refund
  statement and is omitted as a complete section.
- Auctioneer review/final proof, Home Builder review/final proof, and Physician
  final proof: not authorized for this release by the supplied scope.
- No omitted block leaves an empty wrapper, placeholder, stars, substitute
  testimonial, or generic trust treatment.

The current Pricing page does not substantiate the scope's 30-day money-back
promise. Following the scope's explicit conflict rule, affected offer claims
link to current plan terms instead. The Accountant offer's unconditional
cancellation wording likewise links to current terms. Pricing, refund rules,
and policies themselves were not edited. Supported $199/month and $799 build-fee
figures remain only where the supplied page scope expressly allows them.

## Verification

- TypeScript checking passed.
- Production build passed.
- Automated specification comparison passed across all fourteen routes:
  exact heroes, all 70 FAQ answers, 42 problem blocks, 56 delivery blocks,
  required process counts, project pairings, and the two explicitly specified
  title/description pairs.
- All fourteen routes were viewed at **1440×1000**, **768×1024**, and
  **390×844**: **42/42 viewport checks**, with no horizontal overflow and five
  FAQ controls on every route.
- All three primary CTA placements on every route opened the existing dialog
  and closed successfully with Escape: **42/42 CTA checks**.
- Keyboard Enter opening/closing was verified on the shared FAQ implementation.
- Detailed interaction coverage and any test-environment limitations are
  recorded separately in `industry-browser-verification.md`.
- Real project destinations and quote sources were checked against public pages.
- No real lead was submitted and no test email was sent.

## Preserved boundaries

All primary page-body actions display **Get Your Free Homepage Direction** and
use the existing global Get Started dialog/flow. The four established campaign
pages retain their industry context, inbound parameters, placement-specific
URLs, and applicable analytics events. Existing global form terminology and
internal intent values are deliberately unchanged, as required by the scope.

No source changes were made to the homepage, global form or fields, validation,
confirmation state, Resend integration/delivery/recipients, API server,
dashboard, authentication, A/B experiment, sitewide September popup, pricing,
legal/policy pages, header, navigation, footer, shared buttons, shared accordion
behavior, shared team component, or any other route.

There are no missing client-project assets for the specified release. Reinstating
the intentionally omitted quotation or refund-dependent proof would require a
verifiable public source or authoritative terms, respectively; neither is
necessary for the scope's permitted conditional-proof release.

These workspace changes must be deployed to **Sevalla** to appear on the live site.