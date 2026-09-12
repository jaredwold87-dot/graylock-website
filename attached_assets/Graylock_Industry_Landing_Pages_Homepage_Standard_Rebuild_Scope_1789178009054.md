# Graylock Industry Landing Pages — Homepage-Standard Rebuild Scope

**Date:** 2026-09-11  
**Author:** Manus AI  
**Status:** Developer-ready implementation specification  
**Applies to:** The fourteen routes listed in this document, and no others

## Executive Directive

Rebuild the **page body only** for the fourteen Graylock industry landing pages named in this specification. Each body must adopt the current Graylock homepage standard: a clear industry hero, the Free Homepage Direction risk reversal, evidence that can be traced to a real source, one real project, industry-specific problems and delivery mechanisms, a four-step path to launch, concise questions and answers, the existing shared team/accountability component, and a final conversion panel.

The implementation must remove legacy outcome promises, local promotions, generic trust language, unqualified schedule claims, oversized regulatory sales content, duplicated heroes, page-local pricing grids, and any suggestion that Graylock is providing a free website. The approved conversion offer is **Free Homepage Direction**. The primary action is **Get Your Free Homepage Direction**. Every testimonial quotation must be verified against its visible source immediately before release.

> **Release principle:** if evidence cannot be verified exactly, omit the dependent proof block. Never fill a proof gap with an invented quotation, source-free rating, generic “Trusted by” claim, fabricated metric, stock-project label, or implied client outcome.

## Strict Scope Boundary

The work is limited to the body composition, route-specific copy, and route-specific imagery for these routes:

1. `/websites-for-realtors`
2. `/websites-for-well-drillers`
3. `/websites-for-cabinet-makers`
4. `/websites-for-auctioneers`
5. `/websites-for-home-builders`
6. `/websites-for-industrial-construction`
7. `/websites-for-accountants`
8. `/other-service-businesses`
9. `/websites-for-psychologists`
10. `/websites-for-optometrists`
11. `/websites-for-physical-therapists`
12. `/websites-for-dentists`
13. `/websites-for-chiropractors`
14. `/websites-for-physicians`

The following assets and behaviors are **out of scope and must remain unchanged**:

- Global header, footer, navigation, footer links, phone links, and global CTA.
- Existing global Get Started form, field set, validation, confirmation state, route, and analytics behavior.
- Resend submission flow, email delivery, automations, and recipient routing.
- Dashboard, client portal, authentication, and account behavior.
- Pricing pages, Terms of Service, Privacy Policy, Acceptable Use Policy, Compliance page, ownership terms, cancellation terms, and guarantee terms.
- Global shared components, including the team/accountability component, buttons, accordion behavior, external-link treatment, focus treatment, and sitewide tracking.
- The sitewide September popup experiment. Do not reproduce, move, restyle, target, suppress, or otherwise alter it from an industry-page body.
- All routes, metadata, content, components, and behavior not expressly named in this document.

No page may introduce a local form, CRM workflow, scheduling workflow, new API integration, pricing calculator, consent flow, review widget, social feed, popup, countdown, discount, fee waiver, or page-local policy.

## Source and Decision Hierarchy

When implementation details appear to conflict, apply this hierarchy:

1. **The page-specific scope in this document.**
2. **The shared standards in this document.**
3. **The existing production global component behavior.**
4. **The current Pricing, Terms, Privacy, Acceptable Use, and Compliance destinations.**

If a global term changes before release, remove or link away from conflicting local copy. Do not reinterpret or rewrite the global policy inside an industry page. Graylock’s homepage supplies the present offer, review, featured-project, process, team, and client-perspective patterns.[1] The Featured Projects route remains the portfolio destination, although its text extraction does not expose every project record.[2] Current pricing and governing terms remain authoritative at their unchanged destinations.[4] [5]

# Shared Homepage-Standard Blueprint

## Required Body Order

Use this sequence for every route. A proof slot is conditional, but its position is fixed. If a gate fails, collapse the section completely and close the spacing.

| Position | Section | Requirement |
|---:|---|---|
| 1 | Industry hero | Exact page-specific eyebrow, H1, supporting copy, primary CTA, secondary CTA, and microcopy. |
| 2 | Free Homepage Direction offer and risk reversal | Use the shared offer structure and page-specific exact copy. No promotion, fee waiver, or countdown. |
| 3 | Verified review proof | Render only when the exact quotation, attribution, and source label can be verified at release. |
| 4 | One featured project | Exactly one actual Graylock project or a truthful project-only portfolio treatment. |
| 5 | Three industry-specific website problems | Exactly three page-specific cards, in the listed order. |
| 6 | Four delivery mechanisms | Exactly four page-specific cards, in the listed order. |
| 7 | Four-step process | Use the shared How It Works component and page-specific approved nouns or caveats only. |
| 8 | Final client/process proof | Render only when the page scope supplies exact verified evidence or an approved process-only block. |
| 9 | Plain FAQ | Exactly five page-specific question-and-answer pairs in this specification. |
| 10 | Shared team/accountability section | Reuse the current component and copy unchanged. |
| 11 | Final CTA | Exact page-specific final CTA copy. Primary CTA uses the required label and existing flow. |

**Documented exception:** the Psychologists record places its final client-perspective block after the shared team section and immediately before the final CTA. Preserve that placement for that route only. No other route receives a sequence exception.

No section may be inserted before the hero, between the offer and review slot, between review and project, between process and its proof slot, or after the final CTA other than the unchanged global footer.

## Shared CTA and Offer Rules

Every primary page-body button in the hero, offer, any permitted process-adjacent conversion point, and final CTA must display exactly:

> **Get Your Free Homepage Direction**

These buttons must invoke the existing global Get Started/form behavior. A page scope may name `/get-started` explicitly; this is the existing destination, not permission to create another route or flow.

The approved offer qualification is:

> **A Free Homepage Direction is not a free website.**

The shared offer structure is:

- Eyebrow: **THE GRAYLOCK DIFFERENCE**
- Headline: **See the Direction Before the Build Fee Is Due.**
- Core promise: the prospect starts with a **15-minute fit call**, and if Graylock is the right fit, Graylock prepares a custom Homepage Direction before any build fee is due.
- Decision boundary: the prospect reviews the direction, scope, price, and next steps before deciding whether to approve a paid build.
- CTA: **Get Your Free Homepage Direction**
- Clarification: **A Free Homepage Direction is not a free website.**

Never call the offer a free website, free build, free redesign, free custom website, free homepage, free demo, waived website, or fee-waiver campaign.

## Shared Timing Language

The default approved sentence is:

> **After the Homepage Direction, required materials, and approvals are confirmed, standard sites are typically built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.**

A page-specific scope may use **websites** instead of **sites**, **Once** instead of **After**, or **can** instead of **may** only where that exact variant is supplied below. Do not normalize a page-specific sentence after approval. Every allowed variant must retain all three dependencies in the same sentence: **Homepage Direction, required materials, and approvals**. Do not use “7–10 days,” “live in 7–10 days,” “under two weeks,” an average-time badge, or an unqualified schedule claim. MLS, brokerage, provider, licensing, portal, data, or other third-party approval time is never included in the standard build timeline.

## Shared How It Works Component

Use the current shared visual component and the following canonical content unless a page section below supplies an exact route-specific version.

**Eyebrow:** HOW IT WORKS  
**Heading:** A Clear Path From First Call to Launch.  
**Intro:** Start with a short fit call. If Graylock is the right fit, you see a custom Homepage Direction before any build fee is due. You review the direction and scope, then Graylock builds and launches the website.

| Step | Title | Copy |
|---:|---|---|
| 01 | 15-Minute Fit Call | We learn about your business, your current website, and what you need your online presence to make clearer. Then we determine whether Graylock is the right fit. |
| 02 | Homepage Direction | If the work is a fit, we create a custom Homepage Direction around your business before any build fee is due. |
| 03 | Review the Direction and Scope | You review the direction, scope, and next steps. If it feels right, you approve the paid build and move forward with clarity. |
| 04 | Build, Test, and Launch | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are typically built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |

For practice pages, replacing **business** with **practice** is allowed only where the exact page scope does so. Do not rename the first step “Discovery Call.”

## Shared Team and Accountability Component

Reuse the current shared homepage component without a local fork, new biography, new portrait, new title, industry credential, or rewritten claim.[1]

**Eyebrow:** THE PEOPLE BEHIND THE WORK  
**Heading:** The People Behind the Work  
**Body:** Graylock is led by Tim and Jared. From your Homepage Direction through design, development, launch, and ongoing support, your website is handled by a real U.S.-based team that stays involved after it goes live.

| Person | Role | Description |
|---|---|---|
| Tim | Co-Founder · Client Strategy & Experience | Guides the strategy, communication, and client experience from the first conversation through launch. |
| Jared | Co-Founder · Design & Development | Leads the design and development work that turns the strategy into a polished, high-performing website. |

Where the deployed shared component uses lowercase **homepage direction**, preserve the deployed component rather than forking it only to change capitalization.

## Proof Standards and Release Gates

Proof is a release gate, not decorative content. Each rendered proof item must have an identifiable source, exact quotation or factual project record, correct attribution, and an approved image or live capture.

| Evidence type | Required treatment | Prohibited treatment |
|---|---|---|
| Client review | Exact visible quotation, exact reviewer name, exact source label, and any required qualifier. | Paraphrase, composite quotation, anonymous review, invented stars, source-free rating, or outcome extrapolation. |
| Featured project | Actual Graylock client/project identity, accurate industry and location, approved screenshot or portfolio asset, and verified destination. | Mock project, stock image presented as work, second project, invented metrics, or fabricated case-study narrative. |
| Adjacent-industry project | Label its actual industry clearly and state only that it is a real Graylock project. | Presenting it as an industry match or implying an outcome for the current page’s audience. |
| Process proof | Current documented Graylock process fact or exact client quotation. | Converting process language into a guarantee of performance, approval, compliance, leads, rankings, or revenue. |
| Missing evidence | Omit the complete dependent section and collapse spacing. | Placeholder, “coming soon,” logo wall, generic “Trusted by,” substitute testimonial, or empty wrapper. |

**All quotations in this specification require source verification before release.** Check spelling, punctuation, reviewer name, affiliation, source label, and visible availability. If any required element cannot be maintained, suppress the complete quotation block.

## Portfolio Evidence Matrix

The following matrix contains only actual Graylock projects identified in the supplied page records, current Graylock homepage, current industry pages, or current portfolio records. It is the complete approved project pool for these fourteen rebuilds. Do not add a project without a new documented approval.

| Project | Actual category/location | Approved use in this scope | Destination | Proof limit |
|---|---|---|---|---|
| Willow Realty Group | Southern Idaho Real Estate · Serving the Magic Valley | Realtors only | `https://www.willowrealestategroup.com/` | One real-estate project; no lead or conversion claim. |
| JC's Well Services | Well Pumps & Water Systems · Eugene & Lane County, OR | Well Drillers only | `https://jcswellservices.com/` | Project/service structure only; no ranking, lead, or water-quality outcome. |
| Interior Finishes Cabinets and Design | Cabinets & Design · Northern Nevada & Northern California | Cabinet Makers; adjacent proof for Accounting Firms, Psychologists, and Physical Therapists | `https://www.interiorfinishesreno.com/` or `/featured-projects` where specified | State the real category; never imply it is accounting or healthcare work. |
| Benevolent Auctions | Fundraising Auction Partners · Southwest Florida · Serving Nationwide | Auctioneers only | `https://benevolentauctions.com/` | Project-only in this release; no Jill Baugh quotation without a public exact source. |
| Meagher Builders | Home Builder · Carson Valley & Lake Tahoe | Home Builders only | `/featured-projects` | Project-only; visible portfolio record has no client quotation. |
| L.A. Perks Petroleum Specialists | Petroleum Infrastructure, Fueling Systems & Service | Industrial Construction; exact client-perspective proof on certain adjacent pages | `/featured-projects` or approved existing project destination | Exact quotation only; no performance or regulatory outcome. |
| Wicks Land & Yard Management | Land Management & Excavation · Godfrey, IL · Owner-Operated | Other Local Service Businesses only | `https://wicklandandyard.com/` | Exact portfolio quotation only while visible; no Google-rating claim. |
| West Coast Eye Institute | Ophthalmology & Eye Care · Citrus County, FL | Optometrists and Physicians | `https://westcoasteye.com/` | Project-only; do not call it optometry or invent a testimonial. |
| Bluegrass Dental Anesthesia Solutions | Mobile Dental Anesthesia · Northern Kentucky, Lexington, and Georgetown | Dentists only | `https://bluegrassanes.com/` | Project-only; no patient or business outcome. |
| Kingsbury Chiropractic | Chiropractic Care | Chiropractors only | `https://kingsburychiropractictahoe.com/` | Project-only; no performance metric or invented narrative. |

The current homepage visibly supports exact review proof from Francisca Rangel and Mark Nelson and exact client-perspective proof from Kylen and Keith Perks.[1] The Realtors, Well Drillers, Cabinet Makers, and Auctioneers pages visibly identify Willow Realty Group, JC’s Well Services, Interior Finishes, and Benevolent Auctions respectively.[6] [7] [8] [9] Where the Featured Projects extractor omits card data, implementation must use the documented production asset record and manually verify the visible page or live client destination before release.[2]

## Shared Visual and Responsive Behavior

Use the current homepage’s visual system rather than introducing an industry microsite design. The standard consists of dark charcoal or near-black fields, warm off-white surfaces, restrained Graylock orange, large concise display headings, readable sans-serif body text, generous vertical spacing, rounded editorial cards, subtle borders, and the existing button and motion conventions.

- **Hero:** Keep the headline, supporting copy, two actions, and microcopy in a clear first-screen hierarchy. Use one licensed, client-approved, or existing Graylock asset. A decorative image must not be presented as client work.
- **Offer:** Use a high-contrast editorial band. It must read as process clarity and risk reversal, not a coupon, promotion, price waiver, or urgency device.
- **Proof:** Use text-first quotation cards and one wide project panel. Do not use logo walls, star clusters, performance counters, ranking screenshots, or stock testimonial portraits.
- **Problems and delivery:** Use separate three-card and four-card grids. Cards must stack in reading order on narrow screens.
- **Process:** Use four numbered items, 01–04. A horizontal desktop treatment may collapse to a vertical sequence on mobile. Preserve copy order.
- **FAQ:** Use plain stacked Q&A or the existing accessible accordion. Do not place promotional cards, legal illustrations, or secondary offers inside the FAQ.
- **Team and final CTA:** Reuse the shared components. Do not create industry-specific variants.
- **Motion:** Preserve existing reduced-motion behavior. Animation must not delay content access, trap focus, or obscure copy.

At common narrow widths, buttons may become full width, project layouts must become single column, cards must stack without reordering, headings must wrap without clipping, external-link labels must remain visible, and FAQ controls must remain operable without horizontal scrolling.

## Shared Accessibility Requirements

- Preserve one H1 per route and a logical H2/H3 hierarchy.
- Use semantic buttons for actions and links for navigation.
- Preserve visible keyboard focus and keyboard-operable accordion controls.
- Keep sufficient text/background contrast under the existing design tokens.
- Give meaningful project images concise descriptive alt text. Decorative images use empty alt text.
- Do not place material copy only in an image.
- External project links must use the existing external-link affordance and safe new-tab handling where specified.
- Keep touch targets usable on small screens and prevent overlap with global UI.
- Maintain `aria-expanded`, `aria-controls`, and programmatic labels for FAQ controls.
- Do not claim accessibility certification or legal compliance because these implementation requirements are followed.

## Shared Regulatory and Terms Boundary

Regulated-industry detail belongs in the page’s five approved FAQs and links to the unchanged policies. Graylock may organize client-approved information, but the client remains responsible for the accuracy, permissions, licenses, credentials, claims, disclosures, and required professional review. Graylock is not a law firm, healthcare provider, licensing board, accounting firm, privacy officer, engineering firm, environmental consultant, or approval authority. Current Graylock compliance material itself states that compliance is a property of the business and that final responsibility remains with the client and appropriate advisors.[3]

Never state or imply guaranteed rankings, traffic, search placement, leads, inquiries, bookings, appointments, fundraising results, customers, revenue, conversion, project awards, permits, financing, insurance coverage, MLS/IDX access, regulatory compliance, licensing status, legal approval, healthcare outcome, patient volume, or approval by a third party.

---

# Page Scopes

## 1. Realtors

**Route:** `/websites-for-realtors`  
**Release model:** One verified review, one real project, and one conditional repeated client-perspective proof.  
**Body order:** Apply the shared eleven-position order exactly.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR REAL ESTATE AGENTS** |
| H1 | **A Real Estate Website Built Around How Your Market Decides.** |
| Supporting copy | Give buyers a clear way to explore properties, give sellers a focused path to start a valuation conversation, and make your local expertise easy to understand—while confirming the MLS and IDX path before it becomes a late-stage surprise. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global form/flow. |
| Secondary CTA | **See the Willow Realty Group Project** → scroll to the single project section. |
| Microcopy | Start with a 15-minute fit call. If Graylock is the right fit, you receive a Free Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the Direction Before the Build Fee Is Due.  
**Body:** A real-estate website should not feel like a leap of faith. Graylock creates a custom Homepage Direction around your market, business, buyer and seller paths, and approved scope before you decide whether to move forward.  
**CTA:** Get Your Free Homepage Direction  
**Microcopy:** Start with a 15-minute fit call. No build fee is due before you approve the direction.

Render exactly four compact points:

1. **01** We create a Homepage Direction around your business, market, services, proof, and desired next step before any build fee is due.
2. **02** Once you approve the direction and the required materials and approvals are confirmed, standard sites are built and launched in 7–10 business days.
3. **03** After launch, if the site is not right for your business, you are covered by the current shared 30-day money-back guarantee.
4. **04** Your monthly plan includes the current shared hosting, maintenance, ongoing support, and two-year website-refresh terms while you remain an active client.

Link to current shared cancellation terms without expanding them here. Whenever the offer is explained, retain: **A Free Homepage Direction is not a free website. It is a custom homepage direction to review before deciding whether to approve a paid build.**

### Review and Project Proof

**Section 3 eyebrow:** CLIENT REVIEWS  
**Heading:** Feedback From a Real-Estate Client.  
**Body:** The following is an exact, source-labeled Google review from Mark Nelson of Willow Realty Group.

> “I have been extremely impressed Graylock digital, from the first meeting we had to the launch of our new website and beyond. This company is so professional, well organized, and well informed. The communication was excellent, they listened to my needs and answered my questions.”
>
> **CLIENT REVIEW · MARK NELSON · WILLOW REALTY GROUP · 5-STAR GOOGLE REVIEW**  
> Individual client feedback; not a promise of results.

Do not quote or paraphrase the later lead-generation or conversion sentence. If the exact visible quotation, attribution, and Google-review source label cannot remain, omit Section 3 and every final-proof section that depends on it.

**Section 4 label:** FEATURED REAL ESTATE PROJECT  
**Project:** Willow Realty Group  
**Descriptor:** Southern Idaho Real Estate · Serving the Magic Valley  
**Body:** Graylock created a landscape-led real-estate website that brings together Willow Realty Group's local perspective, featured-property exploration, and clear buyer and seller paths. The live website visibly includes Southern Idaho property exploration, the team, and IDX attribution and consumer-use disclosures.  
**CTA:** **Visit the Live Site** → `https://www.willowrealestategroup.com/`, new tab, existing external-link handling.

Use one supplied Willow image or current live-site capture. Do not add another project, logo wall, metric, or unnamed mockup.

### Three Exact Problem Blocks

**Wrapper:** THE PROBLEM WITH MOST REAL-ESTATE WEBSITES  
**Heading:** A Stronger Local Presence Starts With a Clearer Experience.  
**Lead:** Before someone reaches out, they are deciding whether your business feels local, credible, and easy to understand.

1. **Buyers and sellers arrive with different questions.** A buyer needs a simple route to explore available properties and ask about a specific home. A seller needs to understand your local point of view and find a clear way to begin a valuation conversation. One generic contact path makes both decisions harder to navigate.
2. **MLS and IDX details are often discovered too late.** Property-search availability, data fields, disclosures, brokerage requirements, and third-party costs can vary by market. Treating IDX as a last-minute add-on can create avoidable scope changes after the website direction is already set.
3. **Local expertise can be hard to recognize on a generic site.** When market knowledge, service area, team details, and next steps are scattered, visitors must do the work of figuring out why the business is relevant to their move. The website should organize that information before they decide whether to contact you.

### Four Exact Delivery Blocks

**Wrapper:** WHAT WE DELIVER  
**Heading:** The Parts of a Real-Estate Website That Need to Work Together.  
**Lead:** The website direction brings message, market context, technical planning, and the path to contact into one approved scope.

1. **Separate paths for buyer and seller decisions.** Build distinct, plainly labeled routes for property exploration and property-specific inquiries on one side, and valuation, listing, or consultation requests on the other. The exact forms and fields are confirmed in the approved scope.
2. **Local-market website structure.** Organize the homepage, service, market, community, team, and contact content around the places, services, and business details that matter to the agent, team, or brokerage. Page count and final content are confirmed before the build begins.
3. **MLS and IDX planning before build.** Review the local MLS, brokerage, chosen provider, eligibility, data, disclosure, and cost path before committing to any property-search implementation. Where access is available and in scope, configure the approved website experience; where it is not, set the website scope accordingly.
4. **Managed website foundation.** Include the current shared foundation of hosting, SSL, backups, maintenance, support, and the website-refresh benefit while the client remains active, subject to the applicable plan and terms.

### How It Works and Final Proof

Use the shared component with these exact route-specific steps:

1. **15-Minute Fit Call.** We learn about your business, market, current website, buyer and seller priorities, and MLS or brokerage context. Then we determine whether Graylock is the right fit.
2. **Free Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your business before any build fee is due.
3. **Approve Direction and Scope.** You review the direction, scope, price, and next steps. If it feels right, you approve the paid build and move forward with clarity.
4. **Build, Review, and Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard sites are typically built, tested, and launched in 7–10 business days. Any MLS, brokerage, provider, or other third-party timing remains outside Graylock's control.

For Section 8, use eyebrow **CLIENT PERSPECTIVE**, heading **A Client's View of the Process.**, and the same exact Mark Nelson quotation, source label, and qualifier above. Do not manufacture a second testimonial. If the evidence gate fails, omit the complete section.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is the first step? | The first step is a 15-minute fit call. We discuss your market, current website, business structure, buyer and seller priorities, and any MLS or brokerage context that affects the website. If Graylock is the right fit, Graylock prepares a Free Homepage Direction before any build fee is due. |
| Is the Free Homepage Direction a free website? | No. A Free Homepage Direction is not a free website. It is a custom homepage direction for you to review before deciding whether to approve a paid website build. The exact scope and price are confirmed before you commit. |
| Can my website include property search or IDX? | Possibly. Property-search and IDX availability depend on your local MLS, brokerage, provider, eligibility, available data, required disclosures, and applicable third-party fees. Graylock reviews that path before the build scope is confirmed. Final access and approval remain subject to the relevant MLS, brokerage, and provider requirements. |
| How quickly can a standard website be built? | After the Homepage Direction, required materials, and approvals are confirmed, standard websites are typically built, tested, and launched in 7–10 business days. Larger, more complex, or third-party-dependent work may take longer. |
| What should I provide for the website? | Required materials are confirmed with the approved scope and may include business and team details, service-area information, brand assets, approved photographs, property or integration information, copy inputs, domain access, and any MLS, brokerage, or provider items that require your involvement. |

### Relocation, Removal, Imagery, and Final CTA

Relocate real-estate decision detail into the delivery cards and five FAQs. Remove the buyer/seller outcome block, Elm Street IDX diagram, template comparison, package grids, local prices, IDX plan statements, duplicate FAQs, duplicate CTAs, September promotion content, rankings or lead claims, and generic practice trust proof.

Use a calm local-market hero composition with copy at left and one approved architectural or regional visual at right. Do not show active listings, sold labels, property prices, map pins, brokerage marks, MLS marks, REALTOR® marks, or portal-like UI as decoration. Use one wide Willow project capture.

**Final CTA:**  
Eyebrow: **YOUR NEXT STEP**  
Heading: **See What a Better Real-Estate Website Could Look Like for Your Business.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your business before any build fee is due.**  
CTA: **Get Your Free Homepage Direction**  
Microcopy: **No build fee to see the direction. No pressure. No obligation. A Free Homepage Direction is not a free website.**

### Acceptance Criteria

- Exactly one project: Willow Realty Group; its external URL opens correctly.
- The Mark Nelson excerpt appears only with its exact source label and qualifier, or all dependent proof is absent.
- Every primary CTA uses the required label and existing global flow.
- Every timeline reference contains all required conditions; IDX timing is separate.
- The process has four steps and begins with **15-Minute Fit Call**.
- No result promise, MLS/IDX approval promise, local promotion, local pricing grid, second project, or generic trust proof remains.

## 2. Well Drillers

**Route:** `/websites-for-well-drillers`  
**Release model:** Conditional Francisca Rangel review, one JC's Well Services project, and conditional L.A. Perks client-perspective proof.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR WELL DRILLERS** |
| H1 | **A Well-Drilling Website That Makes Your Work, Service Area, and Team Easy to Understand.** |
| Supporting copy | Graylock builds custom websites for well-drilling businesses that present services, service areas, experience, and the next step with clarity. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global flow. |
| Secondary CTA | **View JC's Well Services** → `https://jcswellservices.com/`. |
| Microcopy | Start with a 15-minute fit call. A Free Homepage Direction is not a free website, and no build fee is due before you approve the direction. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the direction before the build fee is due.  
**Body:** A Free Homepage Direction is a custom, business-specific homepage direction—not a free website. Start with a 15-minute fit call. If Graylock is the right fit, you review the direction before deciding whether to approve a paid build.  
**CTA:** Get Your Free Homepage Direction  
**Support:** No build fee is due before you approve the direction. If you move forward, scope and price are confirmed before work begins. After launch, the current 30-day money-back guarantee applies according to its published terms.

### Review and Project Proof

Render Section 3 only after verifying this exact homepage quotation:

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel · Google review**

Eyebrow: **CLIENT REVIEW**. Heading: **A client’s words about the process.** Do not add stars, rating count, client logo, outcome claim, or represent Francisca as a well-drilling client.

**Project label:** FEATURED GRAYLOCK PROJECT  
**Project:** JC's Well Services  
**Descriptor:** Well Pumps & Water Systems · Eugene & Lane County, OR  
**Body:** A Graylock project for a water-treatment and well-pump service business. The live website presents water treatment, pump repair, and real-estate flow-test information in distinct, client-specific service paths.  
**CTA:** **Visit JC's Well Services** → `https://jcswellservices.com/`  
**Caption:** Website shown: JC's Well Services.

Use one current approved desktop screenshot. Do not add Rosenlund Drilling, TekMark Industries, a project carousel, metrics, or a second project.

### Three Exact Problem Blocks

1. **The right service is hard to find.** When drilling, pump, water-treatment, testing, and repair work are grouped into vague or disconnected pages, a visitor has to work too hard to understand whether the company handles the job in front of them.
2. **Local capability is not explained clearly.** A well-drilling website should make its service area, types of work, equipment or experience, and practical next step easy to verify without asking visitors to piece the story together.
3. **Important trust details are scattered.** Licensing, crew experience, service information, project evidence, and approved customer feedback lose their value when they are missing, inconsistent, or buried away from the decision points on the page.

### Four Exact Delivery Blocks

1. **A Homepage Direction Built Around Your Business.** Before a build is approved, Graylock creates a business-specific homepage direction that organizes the work you do, the people you serve, the proof you can support, and the action you want a visitor to take.
2. **Clear Service and Service-Area Structure.** The website is organized so drilling, pumps, water systems, testing, repair, and other client-approved services can be understood alongside the locations the business actually serves.
3. **Responsible Proof and Detail.** Approved reviews, project material, licenses, certifications, and technical or transaction-related details are presented only when the client supplies or approves them, with concise context where it matters.
4. **A Mobile-First Path to Contact.** Responsive page layouts, readable service information, clear calls to action, and the existing Graylock contact form make the next step straightforward on phones and larger screens.

### How It Works and Final Proof

Use eyebrow **HOW IT WORKS**, heading **A Clear Path From First Call to Launch.**, and intro: **Start with a short fit call. If Graylock is the right fit, you see a custom homepage direction before any build fee is due. You approve the direction, then we build and launch your website.**

1. **15-Minute Fit Call.** We learn about your business, your current website, and what you need your online presence to explain more clearly. Then we determine whether Graylock is the right fit.
2. **Free Homepage Direction.** If the work is a fit, we create a custom homepage direction around your business before any build fee is due.
3. **Approve Scope and Direction.** You review the direction, scope, and next steps. If it feels right, you approve the paid build with clarity.
4. **Build, Test, and Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard websites are typically built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.

Render Section 8 only while the exact full homepage source remains visible:

> “Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish. The amount of time and effort they invested in researching our industry and truly understanding our vision for the new website was beyond impressive. Their attention to detail, communication, and dedication to delivering a product that reflected our goals exceeded all expectations. They consistently went above and beyond throughout the entire process. We highly recommend Tim and the Graylock Digital team to anyone looking for a professional, creative, and results-driven website partner.”
>
> **Kylen & Keith Perks · L.A. Perks Petroleum Specialists**

Use eyebrow **CLIENT PERSPECTIVE** and label **L.A. PERKS PETROLEUM SPECIALISTS**. Omit the section if the exact source is unavailable.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | It is a custom homepage direction prepared around your business, services, service area, available proof, and the action you want the right visitor to take. It is not a free website, and there is no cost or obligation to review the direction. |
| What happens on the first call? | The first step is a 15-minute fit call. We discuss your business, current website, the work you want your online presence to explain better, and whether Graylock is the right fit. |
| What happens if I approve the direction? | You review the direction, scope, and price before deciding whether to approve a paid build. No build fee is due before you approve the direction. |
| How long does a standard website take? | After the Homepage Direction, required materials, and approvals are confirmed, standard websites are typically built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |
| Can the website include licensing, water-quality, real-estate, or technical details? | Yes, when the business supplies or approves accurate supporting information. The client remains responsible for the accuracy of its licensing, service, water-quality, transaction, technical, and regulatory statements. Graylock does not provide legal, health, environmental, licensing, or transaction advice or approvals. |

### Relocation, Removal, Imagery, and Final CTA

Move licensing, privacy, water-quality, technical, and transaction boundaries into these FAQs or unchanged policy links. Remove duplicated heroes, local-market exclusivity, fee-waiver language, rankings/customer/lead promises, pricing-and-guarantee sales blocks, generic proof, and all page-body promotions.

Use a licensed or client-approved well-drilling visual only as editorial context. Do not use artificial imagery that could be mistaken for a client rig, crew, property, or completed work. JC's is the sole project visual. Supporting cues may reference ground, water, casing, pumps, or service maps without implying certification.

**Final CTA:** YOUR NEXT STEP · **See Your Homepage Direction Before You Decide.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we will prepare a custom direction around your business before any build fee is due.**  
CTA: **Get Your Free Homepage Direction**  
Microcopy: **No pressure. No obligation. A Free Homepage Direction is not a free website.**

### Acceptance Criteria

- JC's is the sole project and both project CTAs use the verified URL.
- Francisca and L.A. Perks proof render only when exact sources pass QA.
- The only timing copy is the fully qualified sentence.
- No discovery-call label, outcome promise, local exclusivity, fee waiver, promotion, or second project remains.
- Any license, water-quality, transaction, or regulatory statement is client-approved and confined to FAQ/terms scope.

## 3. Cabinet Makers

**Route:** `/websites-for-cabinet-makers`  
**Release model:** One verified review, one actual Interior Finishes project, and a process-proof block.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR CABINET MAKERS** |
| H1 | **Your Cabinets Are Custom. Your Website Should Be Too.** |
| Supporting copy | Graylock builds custom cabinet-maker websites that give your finished work, services, project geography, and process a clear place—so prospective homeowners, builders, and designers can understand your business before they start a conversation. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global flow. |
| Secondary CTA | **See the Featured Project** → Interior Finishes section anchor. |
| Microcopy | Start with a 15-minute fit call. If Graylock is the right fit, we create a Free Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the Direction Before the Build Fee Is Due.  
**Body:** A Free Homepage Direction lets you review a direction for your cabinet-making business before deciding whether to approve a build. It is a custom homepage direction, not a free website and not a generic template.  
**Button:** Get Your Free Homepage Direction  
**Microcopy:** Start with a 15-minute fit call. No build fee is due before you approve the direction. No pressure. No obligation to move forward after you review the direction.

### Review and Project Proof

**Review eyebrow:** CLIENT REVIEW  
**Heading:** A Verified Client Perspective.

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel, 5-star Google Review**

Use this sentence once. Do not add a rating aggregate, ellipsis, unverified profile link, second review, or performance claim.

**Project eyebrow:** FEATURED CLIENT WEBSITE  
**Heading:** Interior Finishes Cabinets and Design  
**Meta:** Cabinets & Design · Northern Nevada & Northern California  
**Body:** Graylock created a polished, design-forward website for Interior Finishes Cabinets and Design to present its cabinetry and interior work alongside clear service information. Use only the actual Interior Finishes project presentation and the live-site destination as project evidence.  
**CTA:** **Visit the Live Site** → `https://www.interiorfinishesreno.com/`, new tab, existing external-link handling.  
**Alt text:** Interior Finishes Cabinets and Design website shown on desktop and mobile devices.

### Three Exact Problem Blocks

**Wrapper:** THE PROBLEM WITH MOST CABINET-MAKER WEBSITES  
**Heading:** Before Someone Starts a Project, They Need to See the Work and Understand the Fit.

1. **Finished work is hard to explore.** A few unstructured images or a single gallery can make a cabinet shop’s range difficult to understand. Kitchens, built-ins, closets, vanities, millwork, and specialty work need an intentional project structure rather than a photo dump.
2. **Project fit is unclear before the first conversation.** Visitors need to see the kinds of work you take on, the places you serve, and how your process begins. When those essentials are scattered or absent, the website does not give them enough context to decide whether to reach out.
3. **The next step is vague.** A cabinet-maker website should make it simple to move from viewing craftsmanship to sharing the details that start a useful project conversation—without making visitors hunt for a phone number, form, or service information.

### Four Exact Delivery Blocks

**Wrapper:** WHAT WE DELIVER  
**Heading:** A Website Structure Built Around How Cabinet Work Is Chosen.

1. **Project Galleries With a Purpose.** We organize supplied, real project photography around the work you want people to understand, with useful project names, service context, and image groupings that are easy to explore.
2. **Clear Service + Service-Area Structure.** We give cabinetry services, project types, and service geography a clear page and navigation structure so visitors and search engines can understand what your business does and where it works.
3. **A Project-Start Path Built Around Real Details.** We structure calls to action and the existing form around the information a cabinet shop may need to begin a conversation, such as project type, location, plans, timing, and inspiration—only where the client elects to collect it.
4. **A Responsive, Maintainable Foundation.** We build a polished, responsive website with a consistent visual system, clear navigation, and the existing Graylock support model for keeping current work and business information up to date.

### How It Works and Process Proof

1. **15-Minute Fit Call.** We talk through your cabinetry work, ideal projects, service area, current website, and what you want your online presence to make clearer. We determine whether Graylock is the right fit.
2. **Free Homepage Direction.** If the work is a fit, Graylock creates a custom homepage direction around your business, services, supplied proof, and the action you want a visitor to take—before any build fee is due.
3. **Review the Direction and Scope.** You review the direction, scope, and next steps. If you choose to move forward, you approve the build with clarity on what comes next.
4. **Build, Test, and Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.

**Section 8:** CLIENT PROCESS · **Clarity Before You Commit.** Render only these facts:

- No build fee is due before you approve the Homepage Direction.
- After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.
- Your monthly plan includes hosting, maintenance, ongoing support, and a website refresh every two years while you remain an active client.

Add the quiet link **Review pricing and terms.** to the unchanged global destination. Do not turn this into a price card or testimonial carousel.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | A Free Homepage Direction is a custom homepage direction for your cabinet-making business, informed by your services, service area, supplied work, and the action you want a visitor to take. It is not a generic template preview, and it is not a free website. |
| What happens on the first call? | The first step is a 15-minute fit call. We discuss your cabinetry work, ideal projects, service area, current website, and what you want your online presence to make clearer. We also determine whether Graylock is the right fit. |
| When can a standard site launch? | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |
| What materials do you need from us? | Before the build begins, Graylock confirms the materials needed for the agreed scope. These can include approved business information, service details, service-area information, logo and brand assets, project photography, and any selected form details. You remain responsible for providing accurate, approved materials. |
| Can Graylock guarantee search placement or business results? | No. Graylock does not guarantee rankings, leads, bookings, revenue, compliance, approval, or any other business outcome. The work focuses on clear content, sound site structure, responsive presentation, and a straightforward path to start a conversation. |

### Relocation, Removal, Imagery, and Final CTA

Remove duplicated heroes, “Request My Free Custom Demo,” local pricing/guarantee sales treatment, selected-market and fee-waiver copy, outcome-forward language, generic practice trust, unsupported ratings, extra projects, and repeated review text. Link changing financial and legal terms to global destinations.

Keep the hero type-led. Any decorative material texture must be licensed and carry no project claim. Use the actual Interior Finishes device/site presentation as the sole project visual. Keep FAQ answers visible or readily disclosed with restrained dividers.

**Final CTA:** YOUR NEXT STEP · **See the Direction for Your Cabinet-Making Business.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, Graylock creates a Free Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website.**  
Button: **Get Your Free Homepage Direction**  
Microcopy: **No pressure. No obligation to move forward after you review the direction.**

### Acceptance Criteria

- Section order is exact; one review and one project only.
- Interior Finishes URL, image, category, and alt text are correct.
- All primary CTAs use the global flow and required label.
- Timing, risk-reversal, and FAQ wording are exact.
- No local pricing grid, fee waiver, September content, guarantee expansion, outcome claim, or second project remains.

## 4. Auctioneers

**Route:** `/websites-for-auctioneers`  
**Release model:** Project-only proof. Omit both review slots.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR AUCTIONEERS** |
| H1 | **Your Auction Expertise Should Be Clear Before the First Call.** |
| Supporting copy | Graylock builds custom websites for auctioneers serving benefit auctions, galas, fundraising events, and specialty sales—so nonprofit leaders, committees, and sellers can quickly understand your services, experience, and next step. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global form. |
| Secondary CTA | **See the Process** → four-step process anchor. |
| Microcopy | Start with a 15-minute fit call. A Free Homepage Direction is not a free website. No build fee is due before you approve the direction. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the Direction Before the Build Fee Is Due.  
**Body:** A website should not feel like a leap of faith. Graylock does the strategic work first, so you can see a homepage direction for your auction business before deciding whether to move forward.  
**Button:** Get Your Free Homepage Direction  
**Support:** Start with a 15-minute fit call. No build fee is due before you approve the direction.  
**Risk reversal:** If the direction does not feel right for your business, there is no obligation to move forward.

Retain the current guarantee line only if still active globally: **After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.**

### Proof and Project Treatment

Omit the Section 3 review slot entirely. Do not render an empty wrapper, star rating, Jill Baugh quotation, logo bar, or “Trusted by” treatment.

**Project label:** FEATURED CLIENT WEBSITE · Fundraising Auction Partners  
**Project:** Benevolent Auctions  
**Body:** Graylock created the live website for Benevolent Auctions, a Southwest Florida fundraising auction partner serving mission-led organizations nationwide. The project organizes pre-event strategy, live auctioneering, post-event debrief, and standalone service paths around a consultation action. Show one current desktop-and-mobile project capture and link the project card to `https://benevolentauctions.com/`. Do not state fundraising, traffic, inquiry, booking, ranking, or revenue outcomes that the client has not documented publicly.  
**CTA:** **View Benevolent Auctions**

Omit Section 8. There is no independently verified auctioneer-client review or documented outcome approved for a separate proof block.

### Three Exact Problem Blocks

**Wrapper:** THE PROBLEM WITH MOST AUCTIONEER WEBSITES  
**Heading:** Before a Committee Reaches Out, It Is Already Deciding Whether Your Practice Feels Relevant and Prepared.  
**Intro:** An outdated or generic site can make the quality and range of your work harder to recognize.

1. **Your services and specialties blend together.** An organization comparing auctioneers should not have to piece together the event types you serve, the role you play, or where your experience is strongest. A generic page can make a distinct practice look interchangeable.
2. **Committee questions are left unanswered.** Nonprofit boards and first-time gala committees may need to understand your planning role, auction format, preparation, and what happens next. If that information is scattered, confidence is harder to establish before a conversation.
3. **The next step is unclear.** When a visitor cannot quickly find the relevant service and a simple way to discuss an event or sale, the website creates friction at the moment they are evaluating options.

### Four Exact Delivery Blocks

**Wrapper:** WHAT WE DELIVER  
**Heading:** A Clear Presentation of Your Auction Business.  
**Intro:** Clear positioning, credible proof, a simple consultation path, and strong search and mobile foundations—built around how event organizers, committees, and sellers evaluate an auctioneer.

1. **Clear service and audience architecture.** We organize benefit auctions, galas, fundraising events, specialty sales, locations, and related services so visitors can identify the part of your work that applies to them.
2. **Evidence-led trust structure.** We make room for the real details a prospective client can assess: your experience, process, credentials, team, past-event material, and approved proof you provide.
3. **A direct consultation path.** Focused page-level calls to action and the existing global form give an event organizer or seller a straightforward way to share the details of an event or sale with your business.
4. **Search and mobile foundations.** Responsive page structure, clear headings, service context, location context where relevant, and sound technical foundations help people and search engines access and understand the site. No ranking outcome is promised.

### How It Works

Use the shared wrapper and these exact steps:

1. **15-Minute Fit Call.** We learn about your auction business, current website, audiences, and what your online presence needs to communicate. Then we determine whether Graylock is the right fit.
2. **Free Homepage Direction.** If the work is a fit, we create a custom homepage direction around your services, proof, and the action you want the right prospect to take before any build fee is due.
3. **Approve the Direction and Scope.** You review the direction, scope, price, and next steps. If it feels right, you approve the build and move forward with clarity.
4. **Build, Test, and Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard websites are typically built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | It is a no-cost, custom homepage direction for your auction business. It is based on your services, audience, proof, and the action you want a prospective client to take. It is not a free website, completed build, or obligation to purchase. |
| What happens in the first call? | The first step is a 15-minute fit call. We discuss your auction services, current website, the audiences you serve, and what you need your online presence to communicate. Graylock then determines whether the work is a fit. |
| When can a standard website launch? | After the Homepage Direction, required materials, and approvals are confirmed, standard websites are typically built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |
| Can the site cover benefit auctions, galas, fundraising events, or specialty sales? | Yes. The direction and eventual scope can organize the auction types, services, locations, and planning information that are relevant to your business. The final scope is confirmed before the build begins. |
| Do you guarantee rankings, leads, bookings, fundraising results, or revenue? | No. Graylock can build clear service information, proof placement, consultation paths, and search and mobile foundations, but it does not promise rankings, leads, bookings, fundraising results, or revenue. |

### Relocation, Removal, Imagery, and Final CTA

Remove duplicated legacy hero content, “free custom demo” terminology, local build-fee waiver, local campaign content, outcome promises, Jill Baugh quotations, stars, generic trust, local price cards, and component forks. Keep auction formats, committee questions, and consultation details in the problems, delivery, and FAQ.

Use one approved/licensed auctioneer or fundraising-event hero image only if rights are confirmed. Avoid gavels, paddles, crowds, venues, and client marks without rights. Use one current Benevolent desktop/mobile capture with alt text: **Benevolent Auctions website shown on desktop and mobile.**

**Final CTA:** YOUR NEXT STEP · **Start With a 15-Minute Fit Call.**  
Body: **Tell us about the auctions you run, the audiences you serve, and what your current website needs to communicate more clearly. If Graylock is the right fit, we will create a Free Homepage Direction for your business before any build fee is due.**  
Button: **Get Your Free Homepage Direction**  
Support: **No build fee to see the direction. No pressure. No obligation.**

### Acceptance Criteria

- Exactly one project: Benevolent Auctions.
- Zero reviews, stars, ratings, logo bars, final proof bands, or empty proof wrappers.
- Hero secondary action scrolls to process; the contextual project CTA opens the verified live project.
- Every timing reference contains the full conditions.
- No ranking, inquiry, booking, fundraising, revenue, compliance, promotion, waiver, or free-website promise remains.

## 5. Home Builders

**Route:** `/websites-for-home-builders`  
**Metadata:** Title **Websites for Home Builders | Graylock Digital**. Description **Custom websites for home builders that clearly present approved project work, process, service areas, and a straightforward next step.**  
**Release model:** Project-only proof; omit both review slots.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **WEBSITES FOR HOME BUILDERS** |
| H1 | **A Website That Shows the Care Behind Every Build.** |
| Supporting copy | For custom home builders, production builders, and design-build firms that need their work, process, and service area to be clear before a prospective client reaches out. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global flow. |
| Secondary CTA | **See Featured Projects** → existing `/featured-projects` route. |
| Microcopy | Start with a 15-minute fit call. If Graylock is the right fit, you receive a custom Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the direction before the build fee is due.  
**Body:** Start with a 15-minute fit call. If Graylock is the right fit, Graylock creates a custom Homepage Direction around your business before any build fee is due.  
**Risk reversal:** Review the direction, scope, and price before deciding whether to move forward. After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.  
**Clarification:** A Free Homepage Direction is not a free website.  
**Button:** Get Your Free Homepage Direction

### Project-Only Proof

Omit Section 3. Do not render a review, star score, rating count, testimonial placeholder, generic trust bar, or replacement proof.

**Label:** FEATURED GRAYLOCK PROJECT · HOME BUILDER  
**Project:** Meagher Builders — Carson Valley & Lake Tahoe  
**Body:** A real Graylock featured project for a home builder. Present the existing project image and link to the existing live project only. Use this project-only description: **A website organized to show the craftsmanship behind each project.**  
**What Graylock delivered:** Custom portfolio presentation; Project conversation flow; Craftsmanship-led visual design; Mobile-responsive build.  
**CTA:** **View Meagher Builders on Featured Projects** → `/featured-projects`.

Do not add performance, ranking, inquiry, sales, construction, licensing, or client-outcome claims. Omit Section 8 because the portfolio record contains a feedback placeholder rather than a testimonial.

### Three Exact Problem Blocks

**Wrapper:** THE PROBLEM WITH MOST HOME-BUILDER WEBSITES  
**Heading:** Before a prospective client reaches out, they are already deciding whether your work feels clear, credible, and relevant.

1. **Your work is stronger than the way it is being shown.** When completed homes, communities, and specialties are reduced to a thin gallery or generic copy, prospective clients cannot quickly understand the kind of builder you are.
2. **The path from interest to conversation is unclear.** A visitor needs to see the homes you build, the areas you serve, and what working with your team looks like before deciding whether to reach out. When those details are scattered, the website makes that decision harder.
3. **Critical business details are easy to miss or get wrong.** License or registration information, the registered business name, service areas, and project claims need a clear, consistent home. Small inconsistencies can create unnecessary questions about the business.

### Four Exact Delivery Blocks

**Wrapper:** WHAT WE DELIVER  
**Heading:** A Website Built Around How Homeowners Review a Builder.

1. **Clear Builder Positioning.** A homepage and page structure organized around the homes you build, the clients you serve, the locations you cover, and the next step you want a prospective client to take.
2. **Project, Plan, and Community Structure.** A flexible foundation for approved project stories, floor plans, model homes, and community or service-area information, with details presented in a way that is easy to review on any device.
3. **Proof and Business Details in the Right Places.** Approved photography, project details, memberships, awards, warranties, reviews, and licensing information can be placed where a prospective client is likely to look for context. Only substantiated, client-approved proof is used.
4. **Mobile-Ready, Maintainable Foundations.** Responsive layouts, accessible navigation patterns, clear contact paths, and a technical foundation designed for straightforward ongoing updates as projects, plans, and business details change.

### How It Works

1. **15-Minute Fit Call.** We learn about your business, your current website, your service area, and what you need your online presence to clarify. Then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your business before any build fee is due.
3. **Review Scope and Decide.** You review the direction, scope, and price. If it feels right, you approve the build and move forward with clarity.
4. **Build, Test, and Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard websites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | It is a custom direction for your homepage based on your business, services, approved proof, and the action you want a prospective client to take. You review it before any build fee is due. |
| Is a Free Homepage Direction a free website? | No. A Free Homepage Direction is not a free website. It lets you see the direction, scope, and price before deciding whether to move forward with a build. |
| What happens first? | The first step is a 15-minute fit call about your business, current website, service area, and what you need your online presence to clarify. If Graylock is the right fit, Graylock creates the Homepage Direction. |
| How long does a standard website take? | After the Homepage Direction, required materials, and approvals are confirmed, standard websites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |
| How are license, registration, and project claims handled? | Your contractor registration or license number, specialty trade licenses, registered business name, and project claims are published from the information you approve. You remain responsible for their accuracy and for obtaining any legal, regulatory, lender, HOA, client, or other third-party review your business requires. |

### Relocation, Removal, Imagery, and Final CTA

Relocate license and registered-name concepts into the FAQ. Remove ranking, map-pack, page-one, lead, booking, revenue, compliance, approval, unconditional timing, local campaign, related-pages block, pricing section, and testimonial content. Do not add unverified affiliations, awards, warranties, locations, or imagery rights.

Use a licensed or client-approved architectural/construction-detail hero image that is not an unverified Meagher image. Use the actual Meagher portfolio asset only in the project block. Do not add quote marks, rating, avatar, logo wall, or metric.

**Final CTA:** YOUR NEXT STEP · **See a clearer direction for your home-building website.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your home-building business before any build fee is due.**  
Pricing line: **Plans from $199/month. Build fees begin at $799 after you approve your Homepage Direction.**  
Reassurance: **No build fee to see the direction. No pressure. No obligation.**  
Button: **Get Your Free Homepage Direction**

### Acceptance Criteria

- Exactly one project, Meagher Builders, and zero displayed reviews or testimonials.
- Project copy contains only the approved description and four portfolio deliverables.
- All primary CTAs use the exact label and existing form flow.
- Every timing reference includes Homepage Direction, materials, and approvals.
- No rankings, leads, bookings, revenue, compliance, approval, free-website claim, or September body experiment remains.

## 6. Industrial Construction

**Route:** `/websites-for-industrial-construction`  
**Release model:** Verified Francisca review, one L.A. Perks project, and conditional exact L.A. Perks client-perspective proof.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **BUILT FOR INDUSTRIAL & CONSTRUCTION** |
| H1 | **A website direction for industrial construction businesses that need to make the work clear.** |
| Supporting copy | Show the services, capabilities, project experience, and contact path that matter to your business—without overstating licenses, certifications, safety records, or scope. Start by seeing a custom Homepage Direction before deciding whether to move forward. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global flow. |
| Secondary CTA | **See the Featured Project** → L.A. Perks section anchor. |
| Microcopy | Start with a 15-minute fit call. No build fee is due before you approve the direction. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the direction before the build fee is due.  
**Body:** A website should not feel like a leap of faith. Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction around your business before any build fee is due. A Free Homepage Direction is not a free website; it is the proposed direction you can review before deciding whether to move forward.  
**Button:** Get Your Free Homepage Direction  
**Support:** No build fee to see the direction. No pressure. No obligation.

Render four points:

1. We create a Homepage Direction around your business, services, proof, and the action you want the right prospect to take—before any build fee is due.
2. Once you approve the direction and provide the required materials and approvals, standard sites are built and launched in 7–10 business days.
3. After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.
4. Your monthly plan includes hosting, maintenance, ongoing support, and a website refresh every two years while you remain an active client.

### Review and Project Proof

**Review eyebrow:** REAL GOOGLE REVIEW

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel**  
> Google review, as displayed verbatim in Graylock’s current “Real Google reviews from clients who trusted us with their online presence” section.

Do not add a rating, paraphrase, outcome, second review, logo strip, or “Trusted by” treatment.

**Project label:** FEATURED CLIENT WEBSITE  
**Project:** L.A. Perks Petroleum Specialists  
**Descriptor:** Petroleum Infrastructure, Fueling Systems & Service  
**Body:** A real Graylock client website for a business serving petroleum infrastructure, fueling systems, and service. Present this as a featured example of industry-adjacent work only. Use the existing approved L.A. Perks project imagery and destination if they are already in the site library; do not invent a project gallery, project metrics, project scope, or before-and-after claims.  
**CTA:** **View Featured Projects**

### Three Exact Problem Blocks

1. **Your work is difficult to understand at a glance.** Industrial construction work can span specialized services, equipment, facilities, service areas, and project types. When the homepage does not organize that information quickly, visitors have to work too hard to understand what your business does.
2. **Credentials need careful context.** Contractor licenses, trade credentials, certifications, and safety-related statements should be presented only with accurate scope and support. A generic website can make important details unclear or overstate what a credential authorizes.
3. **Your site does not reflect the care behind the work.** When project evidence, service information, company details, and a clear way to get in touch are disconnected, the site can make a capable business feel harder to evaluate than it should.

### Four Exact Delivery Blocks

1. **A Homepage Direction Built Around Your Business.** Before any build fee is due, Graylock creates a custom Homepage Direction using the services, project evidence, credentials, and next step you want the right visitor to understand.
2. **A Clear Service and Capability Structure.** We organize your actual services, markets, service area, and relevant project context into a page structure that is easier to scan on desktop and mobile.
3. **Proof Presented With Source Discipline.** We place only approved project work, client-provided credentials, and verbatim reviews with an identifiable source. Claims that cannot be supported are omitted or rewritten for accuracy.
4. **A Practical Contact and Site Foundation.** We build a clear contact path alongside responsive layouts, meaningful image descriptions, semantic page structure, and the shared site form and privacy links already used across Graylock.

### How It Works and Final Proof

1. **15-Minute Fit Call.** We learn about your business, your current website, and what you need your online presence to improve. Then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your business before any build fee is due.
3. **Review the Direction.** You review the direction, scope, and next steps. If it feels right, you approve the build and move forward with clarity.
4. **Build and Launch.** Once the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.

Render Section 8 with eyebrow **CLIENT PERSPECTIVE** only while the exact source remains available:

> “Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish. The amount of time and effort they invested in researching our industry and truly understanding our vision for the new website was beyond impressive. Their attention to detail, communication, and dedication to delivering a product that reflected our goals exceeded all expectations. They consistently went above and beyond throughout the entire process. We highly recommend Tim and the Graylock Digital team to anyone looking for a professional, creative, and results-driven website partner.”
>
> **Kylen & Keith Perks · L.A. Perks Petroleum Specialists**

If the source fails, omit the entire section.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | A Free Homepage Direction is a custom proposed direction for your homepage, created after a 15-minute fit call if Graylock is the right fit. It shows how your business, services, proof, and next step could be organized before any build fee is due. A Free Homepage Direction is not a free website. |
| What happens on the first call? | The first step is a 15-minute fit call. We discuss your business, current website, the information your visitors need, and whether Graylock is the right fit. There is no build fee due for the call or for reviewing a Homepage Direction. |
| How long does a standard website take? | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |
| Can you publish our license, certification, safety, environmental, or project claims? | We can structure approved business information on the site, but you are responsible for providing accurate, current source material and for confirming that the final wording fits your licenses, contracts, governing rules, and actual scope of work. Graylock is not a law firm, licensing board, engineering firm, environmental consultant, or approval authority. |
| Do you guarantee search positions, inquiries, project awards, permits, financing, revenue, regulatory compliance, or approval? | No. Graylock does not promise rankings, leads, bookings, project awards, revenue, financing, compliance, permits, or approval. The work is to create an accurate, well-structured website around the information you provide and approve. |

### Relocation, Removal, Imagery, and Final CTA

Relocate license, certification, safety, environmental, privacy, and approval boundaries into the FAQs. Remove the current long license-focused hero, local promotions, pricing blocks, generic trust, extra projects, unverified reviews, aggregate ratings, and all regulatory or outcome promises.

Use a real approved industrial image with sufficient negative space. It must not imply unverified work, safety record, credential, or license. Use one full-width L.A. Perks treatment without counters, maps, dashboards, or comparisons.

**Final CTA:** YOUR NEXT STEP · **See what a clearer industrial construction homepage could look like.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your business before any build fee is due. A Free Homepage Direction is not a free website.**  
Pricing line: **Plans from $199/month. Build fees begin at $799 after you approve your Homepage Direction.**  
Reassurance: **No build fee to see the direction. No pressure. No obligation.**  
Button: **Get Your Free Homepage Direction**

### Acceptance Criteria

- L.A. Perks is the only project and is labeled industry-adjacent.
- Both quotations pass exact source QA or their complete blocks are absent.
- All credential and safety statements have client-approved sources and no regulatory conclusion.
- Timeline, price boundary, policy links, global form, and external/project links pass QA.
- No local tracking, popup, calculator, consent flow, review widget, promotion, or outcome claim is introduced.

## 7. Accounting Firms

**Route:** `/websites-for-accountants`  
**Release model:** Conditional Francisca review, adjacent Interior Finishes project, and conditional L.A. Perks client-perspective proof.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR ACCOUNTING FIRMS** |
| H1 | **A clearer website for the work your firm actually does.** |
| Supporting copy | Graylock creates custom websites for accounting firms, CPAs, bookkeepers, tax practices, and advisory teams—built around clear services, credible firm information, and a straightforward next step for prospective clients. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global form. |
| Secondary CTA | **See a Featured Project** → Interior Finishes section anchor. |
| Microcopy | Start with a 15-minute fit call. A Free Homepage Direction is not a free website, and no build fee is due before you decide whether to move forward with the direction. |

### Offer and Risk Reversal

**Heading:** See the direction before the build fee is due.  
**Body:** A website should not feel like a leap of faith. Graylock does the strategic work first, so you can see the direction for your firm before deciding whether to move forward.  
**CTA:** Get Your Free Homepage Direction

Use five steps:

1. **01** We create a Homepage Direction around your firm, services, proof, and the action you want the right prospect to take—before any build fee is due.
2. **02** After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.
3. **03** After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.
4. **04** Your monthly plan includes hosting, maintenance, ongoing support, and a website refresh every two years while you remain an active client.
5. **05** Stay because the service works for your business, not because you’re locked in. You can cancel your monthly plan at any time with no early-termination fee. Cancellation takes effect at the end of your current billing cycle.

### Review and Project Proof

**Review eyebrow:** CLIENT REVIEW  
**Heading:** Real feedback from a real Graylock client.

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel · Interior Finishes Cabinets & Design · Google Review**

If the exact shared review data is unavailable, omit the complete block.

**Project eyebrow:** FEATURED CLIENT WEBSITE  
**Project:** Interior Finishes  
**Descriptor:** Cabinets & Design · Northern Nevada & Northern California  
**Body:** Interior Finishes is a real Graylock client project. Graylock created an elevated, design-forward website for the cabinetry and interiors studio to showcase tailored spaces and make its services easier to explore. The client’s live site presents premium finishes, custom cabinetry, and design-build work across Northern Nevada and Northern California.  
**CTA:** **Visit the Live Site** → `https://www.interiorfinishesreno.com/`.

Label the actual industry. Do not characterize it as an accounting website or claim outcomes.

### Three Exact Problem Blocks

**Wrapper:** THE PROBLEM WITH MOST ACCOUNTING FIRM WEBSITES  
**Heading:** Before a prospective client contacts your firm, they are deciding whether the information feels clear, credible, and appropriate to their needs.

1. **Your services read like a list, not a decision.** When tax, accounting, bookkeeping, advisory, and client-service work appear as one undifferentiated list, a prospective client has to work out where to begin. The website should give each service and audience a clear place without overstating what the firm provides.
2. **Your firm’s credentials lack context.** Licenses, experience, affiliations, team expertise, and approved client proof can be meaningful, but not when they are scattered across a page or presented without the information a visitor needs to understand them.
3. **Privacy and disclosures arrive too late.** A marketing website should not invite visitors to submit sensitive financial information, and firm-specific disclosures should not be treated as decorative footer text. The right information belongs in a clear, concise structure that the firm can review.

### Four Exact Delivery Blocks

**Wrapper:** WHAT WE DELIVER  
**Heading:** A website built to make your firm easier to understand.  
**Support:** Clear service information, credible proof, an appropriate way to contact the firm, and strong mobile and technical foundations—built around how prospective clients evaluate professional services.

1. **Service architecture that reflects your firm.** Organize services, client types, industries, locations, and common questions so visitors can understand the work your firm offers without relying on broad, unsupported claims.
2. **Credibility with the right context.** Place firm biography details, licenses, credentials, associations, team information, and only firm-approved proof where a prospective client expects to find it.
3. **A measured path to contact.** Use clear contact paths and a short inquiry form for general business questions. Keep the form away from requests for tax returns, Social Security numbers, financial statements, or other sensitive information.
4. **A strong technical and mobile foundation.** Build responsive pages with clear page structure, accessible reading patterns, and search-ready technical fundamentals so the site is usable across screens and easier for search engines to interpret.

### How It Works and Final Proof

1. **15-minute fit call.** We learn about your firm, your current website, and what you need your online presence to make clearer. Then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your firm before any build fee is due.
3. **Review the direction.** You review the direction, scope, and next steps. If it feels right, you decide whether to move forward with the build.
4. **Build and launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.

Render Section 8 only if the exact homepage source remains present:

> “Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish. The amount of time and effort they invested in researching our industry and truly understanding our vision for the new website was beyond impressive. Their attention to detail, communication, and dedication to delivering a product that reflected our goals exceeded all expectations. They consistently went above and beyond throughout the entire process. We highly recommend Tim and the Graylock Digital team to anyone looking for a professional, creative, and results-driven website partner.”
>
> **Kylen & Keith Perks · L.A. Perks Petroleum Specialists**

Eyebrow: **CLIENT PERSPECTIVE**. Heading: **A client’s view of the process.** Do not present L.A. Perks as an accounting project.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | It is a custom homepage direction for your firm, informed by a 15-minute fit call about your services, audiences, current website, and the information prospective clients need. It is not a free website, and there is no build fee due before you decide whether to move forward with the direction. |
| What happens on the first call? | The first step is a 15-minute fit call. We discuss your firm, the services you want the website to explain, your current site, and what needs to be clearer online. Graylock then determines whether the work is a fit before preparing a Homepage Direction. |
| How quickly can a standard site launch? | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are typically built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |
| Can the website collect tax documents or sensitive financial information? | The standard marketing-site inquiry form should be limited to general contact information and a brief message. Do not use it to collect tax returns, Social Security numbers, account numbers, or other sensitive financial information. If the firm uses a secure client portal or document-exchange system, the website can direct clients to that system instead. |
| Can you include CPA licenses, designations, testimonials, or tax-service claims? | Yes, when the firm supplies accurate, current, approved information and the content is reviewed by the firm and, where appropriate, its professional or legal advisers. Graylock does not provide legal, tax, ethics, advertising-rule, privacy, licensing, or regulatory advice, and the firm remains responsible for the final accuracy and compliance of its website content. |

### Relocation, Removal, Imagery, and Final CTA

Remove the fear-led AICPA/state-board hero, license-defense language, September content, local promotion, build-fee waiver, “Trusted by,” accounting-logo wall, fabricated accounting review, lead/ranking/revenue language, and older CTA variants. Keep sensitive-data, licensing, professional advertising, and client-responsibility detail in the five FAQs and unchanged policies.

Use a calm editorial office visual without tax forms, currency, calculators, courthouse imagery, or staged chart-pointing. Use the actual Interior Finishes asset in a wide project panel and label its real industry.

**Final CTA:** YOUR NEXT STEP · **Start with a 15-minute fit call.**  
Body: **If Graylock is the right fit, we create a custom homepage direction for your accounting firm before any build fee is due.**  
Pricing line: **Plans from $199/month. Build fees begin at $799 after you decide to move forward with your homepage direction.**  
Reassurance: **No build fee to see the direction. No pressure. No obligation.**  
CTA: **Get Your Free Homepage Direction**

### Acceptance Criteria

- Review and final proof pass exact source verification or are fully absent.
- Interior Finishes is explicitly labeled Cabinets & Design, not accounting.
- The general inquiry form never requests sensitive financial documents or identifiers.
- Every CTA, timing sentence, and shared component matches this specification.
- No compliance assurance, state-board/AICPA approval implication, outcome promise, generic trust, local promotion, or second project remains.

## 8. Other Local Service Businesses

**Route:** `/other-service-businesses`  
**Release model:** One real Wicks project; its exact portfolio testimonial may support both proof positions while visible.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **FOR OTHER LOCAL SERVICE BUSINESSES** |
| H1 | **A Clearer Website for the Work Your Local Business Does.** |
| Supporting copy | Graylock builds custom websites for plumbers, electricians, HVAC companies, landscapers, repair teams, and other local service businesses. We organize your services, real proof, and next step so visitors can understand your business and contact you with confidence. |
| Primary CTA | **Get Your Free Homepage Direction** → `/get-started`. |
| Secondary CTA | **See a Real Local-Service Project** → verified Wicks project/live-site destination. |
| Microcopy | Start with a 15-minute fit call. If Graylock is a fit, we create a Free Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the Direction Before the Build Fee Is Due.  
**Body:** A website should not feel like a leap of faith. Graylock does the strategic work first, so you can see a homepage direction for your business before deciding whether to move forward.  
**CTA:** Get Your Free Homepage Direction  
**Microcopy:** Start with a 15-minute fit call. No build fee is due before you decide to move forward. A Free Homepage Direction is not a free website.

### Review and Project Proof

Use this exact quotation only while the Featured Projects source and attribution remain visible:

> “Tim was excellent throughout the entire process of creating the website. The whole team really exceeded my expectations. The process was efficient, straightforward, and thorough. Tim and his team did an exceptional job obtaining information regarding the desired direction of the website and executed it perfectly. Highly recommended!!!”
>
> **Wicks Land & Yard Management, Godfrey, IL**  
> Client perspective.

Do not label it a Google review or add stars, rating count, or generic badge.

**Project label:** FEATURED LOCAL-SERVICE WEBSITE  
**Project:** Wicks Land & Yard Management — Godfrey, IL · Owner-Operated  
**Body:** Wicks Land & Yard Management is a real Graylock project for an owner-operated land management and excavation company. The Featured Projects entry documents a bold, equipment-forward design, an estimate-request flow, service and coverage-area pages, and a mobile-responsive build. Use the existing Wicks transformation image from the Featured Projects record.  
**CTA:** **View the Wicks Land & Yard Management Project** → `https://wicklandandyard.com/`.

If the quotation gate fails, omit the quotation and Section 8 while retaining this project-only block.

### Three Exact Problem Blocks

1. **Your services are difficult to understand at a glance.** When emergency work, recurring maintenance, estimates, and specialty services are presented as one long list, visitors have to work too hard to tell whether you handle their job.
2. **A phone visitor cannot quickly find the right next step.** Local-service customers often visit from a phone. If calling, requesting an estimate, or asking a question is hard to find, the website creates friction when they are trying to act.
3. **Your service area and proof are disconnected from the work you do.** A website should clearly connect the services you provide, the places you serve, and the real work or customer proof you are permitted to show. Generic pages leave that picture incomplete.

### Four Exact Delivery Blocks

1. **Clear service and service-area structure.** We organize your core services and the locations you genuinely serve into a page structure that is straightforward for visitors and search engines to understand.
2. **Proof that reflects the business.** We place approved project work, customer feedback, credentials, and business details where they help a visitor evaluate the business. Only evidence you can substantiate belongs on the site.
3. **A practical path to contact.** Prominent phone, contact, estimate-request, or existing scheduling links are arranged around the action that fits your business. The page makes the route clear without making outcome claims.
4. **Mobile and technical foundations.** Responsive layouts, readable service pages, sensible page titles and descriptions, and clean technical structure give the site a solid foundation for people and search engines.

### How It Works and Final Proof

1. **15-Minute Fit Call.** We learn about your business, current website, services, service area, and what you need your online presence to make clearer. Then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your business before any build fee is due.
3. **Review the Direction.** You review the direction, scope, and next steps. If it feels right, you decide whether to move forward with clarity.
4. **Build and Launch.** Once the Homepage Direction, required materials, and approvals are confirmed, standard sites are typically built, tested, and launched in 7–10 business days. Larger or more complex work may take longer.

**Section 8 eyebrow:** CLIENT PERSPECTIVE  
**Heading:** A Real Project, Documented in the Work.  
**Body:** Wicks Land & Yard Management is an owner-operated land management and excavation company in Godfrey, Illinois. Its project record documents a bold, equipment-forward website with an estimate-request flow, service and coverage-area pages, and a mobile-responsive build.  
Then render the exact Wicks quotation and the CTA **View the Wicks Land & Yard Management Project.**

### Five Exact FAQs

| Question | Answer |
|---|---|
| What happens on the first call? | The first step is a 15-minute fit call. We learn about your business, current website, services, service area, and what you want the site to make clearer. We also decide whether Graylock is the right fit. |
| What is a Free Homepage Direction? | It is a custom strategic homepage direction built around your business, services, available proof, and the next step you want visitors to take. You see that direction before any build fee is due. A Free Homepage Direction is not a free website. |
| How long does a standard site take? | Once the Homepage Direction, required materials, and approvals are confirmed, standard sites are typically built, tested, and launched in 7–10 business days. Larger or more complex work may take longer. |
| Can the site include reviews, licenses, insurance, service areas, or scheduling? | Yes, when the information is accurate, permitted, and supplied or confirmed by your business. We can structure those details and link to an existing scheduling or intake tool where the scoped work supports it. We do not invent coverage, credentials, reviews, or claims. |
| What if my business has licensing, financial, healthcare, real-estate, privacy, or other regulated requirements? | Keep required notices and approved language concise on the relevant pages or in the FAQ and terms links. Your qualified legal, compliance, licensing, or privacy advisor remains responsible for identifying what applies to your business; Graylock does not provide legal, regulatory, financial, medical, or compliance advice or guarantees. |

### Relocation, Removal, Imagery, and Final CTA

Retain the audience list—plumbers, electricians, HVAC companies, landscapers, repair teams, and other local services—and the concepts of genuine service areas, mobile contact, project proof, and existing scheduling links. Remove free-review/demo copy, generic trust, hero statistics, six legacy problem cards, ranking and booked-job claims, local pricing cards, oversized regulated-profession content, page-local promotions, and countdowns.

Use one authentic or licensed local-service hero image with no performance graphic. Use the existing Wicks transformation asset only in the project/proof treatment. Alt text: **Local service professional at work** and **Wicks Land & Yard Management website project.**

**Final CTA:** YOUR NEXT STEP · **See What a Better Website Could Look Like for Your Business.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your business before any build fee is due.**  
CTA: **Get Your Free Homepage Direction**  
Support: **No build fee to see the direction. No pressure. No obligation. A Free Homepage Direction is not a free website.**

### Acceptance Criteria

- One Wicks project only; all project links resolve to the verified destination.
- Exact Wicks quotation and attribution render only while the portfolio evidence remains visible.
- All primary CTAs link to `/get-started`; no local form or workflow exists.
- Six legacy problem cards, local price cards, generic trust, outcomes, promotions, and regulated sales blocks are absent.
- Responsive order, alt text, keyboard focus, accordion state, and semantic headings match shared components.

## 9. Psychologists

**Route:** `/websites-for-psychologists`  
**Release model:** Conditional Francisca review, adjacent Interior Finishes project, and conditional L.A. Perks client perspective after the shared team section.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR PSYCHOLOGISTS** |
| H1 | **A psychology practice website that makes your care easier to understand.** |
| Supporting copy | Give prospective clients a calm, clear introduction to your practice, specialties, credentials, and next step. Graylock creates a custom Homepage Direction first; if you choose to proceed after reviewing it, we build a site around the information and approvals you provide. |
| Primary CTA | **Get Your Free Homepage Direction** → unchanged `/get-started` flow. |
| Secondary CTA | **See How It Works** → process anchor. |
| Microcopy | Start with a 15-minute fit call. No build fee is due before you approve the Homepage Direction. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the direction before the build fee is due.  
**Body:** Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction around your practice. No build fee is due before you approve the direction. A Free Homepage Direction is not a free website.  
**Button:** Get Your Free Homepage Direction

Do not add a fee waiver, coupon, 30-day promise, countdown, or additional risk-reversal claim.

### Review and Project Proof

Render this block only after exact source verification:

**Eyebrow:** CLIENT REVIEW  
**Heading:** A client’s words, exactly as published.

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel, Interior Finishes Cabinets and Design**  
> Google review, as displayed on the Graylock Digital homepage.

It is proof of work for Interior Finishes only, not a psychology-practice claim.

**Project label:** FEATURED GRAYLOCK PROJECT  
**Project:** Interior Finishes Cabinets and Design  
**Category:** Cabinets & Design  
**Body:** A real Graylock project featured in Graylock’s portfolio. Built around the client’s vision.  
**CTA:** **View Featured Projects** → `/featured-projects`.

Do not imply it is a psychology project, create a project-detail URL, add results, or display another project.

### Three Exact Problem Blocks

**Wrapper:** PSYCHOLOGY-SPECIFIC  
**Heading:** What can make a practice website harder to trust?  
**Intro:** A practice website should make the next step easier to understand without making claims it cannot support.

1. **A first impression that feels impersonal.** People looking for psychological care may be deciding whether a practice feels clear, credible, and approachable before they make contact. A dated or generic site can make it harder to understand the person and care behind the practice.
2. **Specialties and credentials are difficult to follow.** When testing, therapy, evaluation, provider background, licensure, telehealth availability, and practice information are scattered, a visitor has to work too hard to determine whether the practice may be relevant to them.
3. **The contact path asks for too much, or too little.** A general inquiry should be easy to find without turning a marketing website into a clinical-intake system. Visitors need a clear next step, while sensitive information belongs in the practice’s established patient portal or intake platform.

### Four Exact Delivery Blocks

**Wrapper:** WHAT WE BUILD  
**Heading:** A clear, careful foundation for your practice website.  
**Intro:** The work is shaped around the information your practice supplies and approves.

1. **Practice, provider, and specialty structure.** We organize the homepage and supporting pages around the practice, clinicians, specialties, credentials, service areas, and the questions a prospective client needs answered before deciding on a next step.
2. **A privacy-conscious inquiry path.** Website inquiry forms can ask for a name, contact details, and a general reason for inquiry—not symptoms, diagnoses, treatment history, insurance details, or other sensitive health information. Where clinical intake is needed, we link to the practice’s existing portal or intake platform.
3. **Careful content controls.** We give the practice a reviewable place for licensing states, credentials, telehealth boundaries, specialty descriptions, crisis or after-hours resources, and other practice-supplied details before launch.
4. **Mobile and technical foundations.** The site is designed to work clearly across screen sizes, with an accessible, readable content structure and sound search foundations that help people and search engines understand the practice without promising a ranking or a particular outcome.

### How It Works and Conditional Final Proof

1. **15-Minute Fit Call.** Start with a 15-minute fit call. We learn about your practice, your current site, the people you serve, and what you need the website to communicate; then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your practice before any build fee is due.
3. **Approve the Direction.** You review the direction, scope, price, and next steps. If you decide to move forward, you approve the direction before the build fee is due.
4. **Build, Review & Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.

After the FAQ and shared team component, render this final proof only while its exact homepage source remains visible:

**Eyebrow:** CLIENT PERSPECTIVE  
**Heading:** A documented client experience.

> “Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish. The amount of time and effort they invested in researching our industry and truly understanding our vision for the new website was beyond impressive. Their attention to detail, communication, and dedication to delivering a product that reflected our goals exceeded all expectations. They consistently went above and beyond throughout the entire process. We highly recommend Tim and the Graylock Digital team to anyone looking for a professional, creative, and results-driven website partner.”
>
> **Kylen & Keith Perks**  
> **L.A. Perks Petroleum Specialists**  
> Client testimonial, as displayed on the Graylock Digital homepage.

Do not imply L.A. Perks is a psychology practice or add a rating.

### Five Exact FAQs

| Question | Answer |
|---|---|
| Is the Free Homepage Direction a free website? | No. A Free Homepage Direction is not a free website. It is a custom homepage direction you can review after the fit call and before any build fee is due. If you approve the direction and decide to move forward, Graylock will show you the scope, price, and next steps for the website build. |
| What happens on the first call? | The first step is a 15-minute fit call. Graylock learns about your practice, current website, people you serve, and what you need the website to communicate, then determines whether the work is a fit. |
| When can a standard site be built and launched? | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex work may take longer. |
| What can a psychology website inquiry form collect? | The website inquiry form should collect only a name, a way to respond, and a general reason for inquiry. It should not collect symptoms, diagnoses, treatment history, insurance details, or other sensitive health information. Practices should direct clinical intake to their existing patient portal, EHR, or other intake platform. |
| Can psychology-client testimonials be added? | Not by default. Graylock will not use patient testimonials on this page. Before placing any client testimonial on a practice website, the practice should confirm the applicable ethical, licensing, privacy, and advertising requirements with its own qualified reviewer. |

### Relocation, Removal, Imagery, and Final CTA

Move privacy, clinical intake, portals, credentials, telehealth, testimonial restrictions, and practice responsibility into the FAQs and existing global policies. Remove the legacy fear/outcome hero, free review/demo, generic practice proof, metrics, local prices, ranking/inquiry claims, healthcare compliance sales blocks, unverified projects, and page-body campaign content.

Use a calm licensed practice-environment or abstract clarity image. Avoid staged patients, medical imagery, portraits presented as clinicians, badges, stats, or numerical proof. Use only approved Interior Finishes imagery and clearly label its actual category.

**Final CTA:** YOUR NEXT STEP · **See a Homepage Direction for your practice before deciding to build.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your practice before any build fee is due.**  
Support: **Plans start at $199 per month. Build fees begin at $799 after you approve the Homepage Direction.**  
Final line: **A Free Homepage Direction is not a free website. No pressure. No obligation.**  
Button: **Get Your Free Homepage Direction**

### Acceptance Criteria

- The page has one H1, one adjacent project labeled Cabinets & Design, and no psychology-client claim.
- Both quotation blocks render only after exact source verification; failed gates collapse completely.
- The general inquiry form asks for no PHI or clinical intake details.
- The final proof appears after the shared team section as the documented route exception.
- No rankings, leads, inquiries, compliance approval, free website, local pricing grid, promotion, or medical-outcome claim remains.

## 10. Optometrists

**Route:** `/websites-for-optometrists`  
**Release model:** Conditional Francisca review, one real eye-care-adjacent project, and conditional short L.A. Perks process quotation.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR OPTOMETRISTS** |
| H1 | **A Clearer Website for Your Optometry Practice.** |
| Supporting copy | Give prospective patients a clear view of your practice, services, providers, optical offering, and next step to contact you. Graylock creates custom websites for trust-based businesses with a structure shaped around how an optometry practice presents itself online. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global form. |
| Secondary CTA | **View West Coast Eye Institute** → `https://westcoasteye.com/`. |
| Microcopy | Start with a 15-minute fit call. If Graylock is the right fit, we create a Free Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the Direction Before the Build Fee Is Due.  
**Body:** A website should not feel like a leap of faith. Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction around your practice, services, proof, and the next action you want a visitor to take. No build fee is due before you review the direction.  
**Guarantee line:** After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.  
**Clarification:** A Free Homepage Direction is not a free website.  
**CTA:** Get Your Free Homepage Direction

### Review and Project Proof

Render only if the current homepage still shows the exact source:

**Eyebrow:** CLIENT REVIEW  
**Heading:** A Client’s Words, Exactly as Shared.

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel — Interior Finishes Cabinets and Design**  
> Google review, as quoted on Graylock’s homepage.

**Project eyebrow:** FEATURED CLIENT WEBSITE  
**Heading:** See a Real Eye-Care Project  
**Project:** West Coast Eye Institute  
**Actual category:** Ophthalmology & Eye Care  
**Body:** West Coast Eye Institute is a live Graylock project listed in the Graylock portfolio under Ophthalmology & Eye Care. Use this single project card to let visitors inspect a real eye-care website; do not attach unverified outcomes, performance metrics, or an implied optometry endorsement to it.  
**Asset:** `/assets/wce-transformation-Cv34Suuc.webp`  
**CTA:** **View West Coast Eye Institute** → `https://westcoasteye.com/`.

### Three Exact Problem Blocks

1. **Your services are difficult to understand at a glance.** Eye exams, contact lenses, dry-eye care, pediatric care, myopia management, and optical services can blur together when a site has no clear service structure. A visitor should be able to understand what your practice offers without sorting through a generic healthcare page.
2. **The practice behind the care is hard to see.** Patients are often looking for a provider, credentials, office details, eyewear options, and a sense of what to expect. When those details are scattered or dated, the website does not reflect the care and attention your practice provides in person.
3. **The path from a question to the right next step is unclear.** A website needs a straightforward way to contact the practice while keeping clinical information in the systems the practice already uses for it. A general inquiry, a patient portal, and service-specific information should have distinct, understandable roles.

### Four Exact Delivery Blocks

1. **Practice and service architecture.** We organize the homepage and supporting pages around your actual services, locations, optical offering, and the questions a prospective patient needs answered before contacting the practice.
2. **Provider, office, and proof modules.** We create space for practice-provided provider bios, credentials, office information, real reviews, and other substantiated trust details so visitors can evaluate the practice with context.
3. **Purposeful contact routing.** We design a simple general-inquiry path and, when applicable, clear links to the practice’s existing patient portal, EHR, or intake workflow for information that belongs there.
4. **Mobile and search-ready foundations.** Responsive layouts, accessible page structure, descriptive service content, and sound technical foundations help people and search engines access and understand the information on the site. They are not a promise of rankings or patient volume.

### How It Works and Final Proof

1. **15-Minute Fit Call.** We learn about your practice, current website, services, and what you need your online presence to improve. Then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your business before any build fee is due.
3. **Confirm Scope, Materials, and Approvals.** You review the direction, scope, required materials, and next steps before deciding whether to move forward.
4. **Build and Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects can take longer.

Render Section 8 only if the exact source remains visible:

**Eyebrow:** CLIENT PERSPECTIVE  
**Heading:** Careful Discovery Is Part of the Process.

> “The amount of time and effort they invested in researching our industry and truly understanding our vision for the new website was beyond impressive.”
>
> **Kylen & Keith Perks — L.A. Perks Petroleum Specialists**

This is process testimony, not an optometry outcome or second project.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | A Free Homepage Direction is a custom homepage-level direction for your business, created after a fit call if Graylock is the right fit. It shows the proposed direction before any build fee is due. It is not a free website and does not include a completed website, production-page buildout, hosting, or ongoing service. |
| What happens in the first step? | The first step is a 15-minute fit call. We learn about your practice, current website, services, audience, and what you want the online presence to improve, then determine whether Graylock is the right fit. |
| How long does a standard website take? | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects can take longer. |
| How should a practice handle clinical information submitted through the website? | General contact forms should ask only for a name, contact details, and a general reason for inquiry; they should not request symptoms, diagnoses, treatment history, insurance details, or other protected health information. When clinical information is needed, the site should direct people to the practice’s existing patient portal, EHR, or appropriate intake workflow. The practice and its appropriate advisors should confirm the setup for its circumstances. |
| Can the site include specialty care, co-management, an optical shop, or eyewear brands? | Yes, using practice-provided service details, credentials, scope-of-practice information, and brand permissions. Specialty claims, co-management language, and any promotional pricing should be reviewed by the practice against applicable state board, FTC, licensing, and disclosure requirements before publication. |

### Relocation, Removal, Imagery, and Final CTA

Move optometry services, providers, optical offerings, general inquiry versus clinical intake, co-management, specialty claims, and promotion disclosures into the problems, delivery, and FAQs. Remove free-practice-review/demo language, outcome promises, generic trust, metric cards, ranking/booking claims, local pricing table, oversized compliance sales blocks, and page-body September content.

Use a quiet licensed optometry-office or eyewear hero visual without a patient montage, badge wall, or metrics. Use the existing West Coast portfolio asset only in the project block. Do not call the ophthalmology project an optometry practice.

**Final CTA:** YOUR NEXT STEP · **See the Direction Before the Build Fee Is Due.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your business before any build fee is due.**  
CTA: **Get Your Free Homepage Direction**  
Closing: **No build fee to see the direction. No pressure. No obligation.**

### Acceptance Criteria

- West Coast Eye Institute is the only project and is labeled Ophthalmology & Eye Care.
- Exact source gates control both quotation blocks; failed blocks leave no visual gap.
- General inquiry forms collect no PHI; clinical information routes to existing practice systems.
- All timing appears only in the approved conditional sentence.
- No rating badge, generic trust, ranking, patient-volume, compliance approval, local pricing grid, or promotion remains.

## 11. Physical Therapists

**Route:** `/websites-for-physical-therapists`  
**Metadata:** Title **Websites for Physical Therapists | Graylock Digital**. Description **Custom website direction for physical therapy practices, starting with a 15-minute fit call and a Free Homepage Direction before any build fee is due.**  
**Release model:** Conditional Francisca review, adjacent Interior Finishes project, and conditional short L.A. Perks proof.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **CUSTOM WEBSITES FOR PHYSICAL THERAPY PRACTICES** |
| H1 | **A Website Direction That Reflects Your Physical Therapy Practice.** |
| Supporting copy | Make your services, credentials, locations, and next step easier to understand before you commit to a build fee. Graylock starts with a custom Homepage Direction shaped around your practice and the information a prospective patient or referral source needs to see. |
| Primary CTA | **Get Your Free Homepage Direction** → existing global form. |
| Secondary CTA | **View Featured Projects** → existing Featured Projects destination. |
| Microcopy | Start with a 15-minute fit call. No build fee is due before you approve the direction. A Free Homepage Direction is not a free website. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the direction before the build fee is due.  
**Body:** A website should not feel like a leap of faith. Graylock does the strategic work first, so you can see the direction for your practice before deciding whether to move forward.  
**Lines:** Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction around your practice, services, available proof, and the next step you want visitors to take. You review the direction before deciding whether to move forward; no build fee is due before you approve it.  
**Risk reversal:** After launch, if the site is not right for your business, you are covered by Graylock’s current 30-day money-back guarantee.  
**CTA:** Get Your Free Homepage Direction  
**Closing:** A Free Homepage Direction is not a free website.

### Review and Project Proof

Render Section 3 only when the exact source remains visible:

**Eyebrow:** CLIENT REVIEW  
**Heading:** What a Graylock client said about the process.

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel, Google review of Graylock Digital**  
> A client’s experience with Graylock; not a claim about physical-therapy outcomes.

**Project eyebrow:** FEATURED GRAYLOCK PROJECT  
**Heading:** Built around the client’s vision.  
**Project:** Interior Finishes Cabinets and Design  
**Category:** Cabinets & Design  
**Body:** Explore an actual Graylock client website created around the client’s vision and online presence. Do not add performance metrics, imply an industry match, or attach Francisca Rangel’s review to this project unless that association is visibly supported by the source record.  
**CTA:** **View Featured Projects**.

### Three Exact Problem Blocks

1. **Your practice is harder to understand than it should be.** When services, specialties, credentials, locations, and the first step are scattered or vague, visitors have to work to understand whether your practice is relevant to them. A website should make the practice you actually run clear without relying on a generic healthcare template.
2. **A general contact form can invite the wrong information.** A standard website form should not ask prospective patients for symptoms, diagnoses, treatment history, or insurance details. The site needs a concise contact path for general inquiries and a clear route to the practice’s existing patient portal, EHR, or intake system when medical information is needed.
3. **State-specific details are being described too broadly.** Direct-access rules, scope-of-practice language, services such as dry needling or pelvic floor therapy, and credential descriptions can vary by state and by clinician. Copy that is not confirmed for the practice can overstate what the website should say.

### Four Exact Delivery Blocks

1. **A Homepage Direction before the build fee.** Graylock first creates a tailored homepage direction around the practice, its services, its available proof, and the next step it wants visitors to take. You see that direction before deciding whether to approve a build.
2. **Practice information organized with care.** Service, specialty, clinician, credential, location, and referral information is organized around what the practice confirms. Language for state-specific services and credentials is kept measured rather than copied from a broad industry template.
3. **A general-inquiry path that keeps PHI off the website.** General website forms are designed to collect only a name, a way to respond, and a general reason for inquiry. When medical information is needed, the site directs people to the practice’s existing patient portal, EHR, or other intake system.
4. **A clear mobile and search foundation.** Responsive layouts, concise page structure, readable service information, and sound technical basics make the site easier for people and search systems to access and understand. This is a foundation, not a promise of rankings or patient volume.

### How It Works and Final Proof

1. **15-Minute Fit Call.** We learn about your practice, your current website, the services and details you need to present accurately, and what you need your online presence to make clearer. Then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your practice before any build fee is due.
3. **Review Scope and Prepare Inputs.** You review the direction, scope, and next steps. If you choose to move forward, you provide the required materials and confirm the approvals needed for the build.
4. **Build, Test, and Launch.** Once the Homepage Direction, required materials, and approvals are confirmed, standard websites are built, tested, and launched in 7–10 business days.

Render Section 8 only while source-visible:

**Eyebrow:** CLIENT PERSPECTIVE  
**Heading:** A documented client experience.

> “Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish.”
>
> **Kylen & Keith Perks, L.A. Perks Petroleum Specialists**  
> An actual client perspective on working with Graylock; not a claim about physical-therapy outcomes.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What happens on the first call? | The first step is a 15-minute fit call. We discuss your practice, current website, services, and what you need your online presence to make clearer. If Graylock is the right fit, we create a custom Homepage Direction for you to review before any build fee is due. |
| Is a Free Homepage Direction a free website? | No. A Free Homepage Direction is not a free website. It is a tailored direction for the homepage that you can review before deciding whether to move forward. A completed website is built only after you approve the direction and agree to the stated scope. |
| How long does a standard website take? | Once the Homepage Direction, required materials, and approvals are confirmed, standard websites are built, tested, and launched in 7–10 business days. Larger or more complex work may take longer. |
| How should a website handle patient information? | General website forms are designed not to collect Protected Health Information. They ask for a name, a way to respond, and a general reason for inquiry—not symptoms, diagnoses, treatment history, or insurance details. When medical information is needed, the site can direct people to your existing patient portal, EHR, or intake system. This website approach does not replace your own privacy, legal, or clinical review. |
| Can the website say that patients can start care directly or describe a specialty service? | Only after the practice confirms the applicable state-specific details. Direct-access status, scope-of-practice language, service descriptions, and credential claims vary. Graylock does not make legal, licensing, or clinical determinations for the practice. |

### Relocation, Removal, Imagery, and Final CTA

Remove booked-evaluation and patient-volume language, discovery-call labels, ranking and local-search promises, direct-access generalizations, referral claims, appointment claims, generic medical trust, pricing cards, specialty strips, oversized compliance sections, and all local campaigns. Keep state-specific service, privacy, PHI, ownership, and cancellation boundaries in the FAQs and linked global terms.

Use the current homepage topographic/abstract hero treatment rather than a generic practitioner image. Use one approved Interior Finishes project asset and label it Cabinets & Design. Do not fabricate a physical-therapy mockup.

**Final CTA:** YOUR NEXT STEP · **See the direction for your physical therapy practice before a build fee is due.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your practice before any build fee is due.**  
CTA: **Get Your Free Homepage Direction**  
Microcopy: **No build fee to see the direction. No pressure. No obligation.**

### Acceptance Criteria

- Interior Finishes is the only project and its real Cabinets & Design category is visible.
- The Francisca and L.A. Perks blocks are independently gated and collapse when unavailable.
- The form requests no PHI; state-specific services and direct access are published only after practice confirmation.
- All timing uses the exact **Once...** sentence and all primary CTAs use the required label.
- No ranking, referral, booking, patient-volume, compliance, approval, or free-website claim appears in body, metadata, alt text, or schema.

## 12. Dentists

**Route:** `/websites-for-dentists`  
**Release model:** Exact Francisca review, one Bluegrass project, and an approved process-proof block.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **WEBSITES FOR DENTISTS** |
| H1 | **Make It Easier for the Right Patient to Understand Your Practice.** |
| Supporting copy | Graylock creates custom dental-practice websites that present your services, providers, and next step with clarity—while keeping privacy and advertising details in view. |
| Primary CTA | **Get Your Free Homepage Direction** → existing `/get-started` route. |
| Secondary CTA | **See a Real Dental Project** → Bluegrass section anchor. |
| Microcopy | Start with a 15-minute fit call. A Free Homepage Direction is not a free website. No build fee is due before you decide whether to move forward. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the Direction Before the Build Fee Is Due.  
**Body:** A website should not feel like a leap of faith. Graylock does the strategic work first, so you can see the direction for your practice before deciding whether to move forward.  
**CTA:** Get Your Free Homepage Direction  
**Microcopy:** Start with a 15-minute fit call. No build fee is due before you decide whether to move forward.  
**Note:** A Free Homepage Direction is not a free website.

### Review and Project Proof

**Eyebrow:** CLIENT REVIEW  
**Heading:** A Client’s Words, Shown Exactly.

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel · Google review displayed on Graylock Digital’s homepage**  
> Client review; not a dental-practice performance claim.

Do not alter, shorten, combine, or embellish the quotation.

**Project label:** FEATURED GRAYLOCK PROJECT · MOBILE DENTAL ANESTHESIA  
**Project:** Bluegrass Dental Anesthesia Solutions  
**Body:** Graylock lists Bluegrass Dental Anesthesia Solutions in its Featured Projects. Its live website identifies the company as a mobile dental anesthesia service for dental practices serving Northern Kentucky, Lexington, and Georgetown.  
**Asset:** `/assets/bluegrass-transformation-TtKAZihV.webp`  
**CTA:** **View the Live Website →** → `https://bluegrassanes.com/`, new tab, existing external-link affordance.

Do not place a testimonial in the project card or claim patient, licensing, performance, ranking, revenue, or approval outcomes.

### Three Exact Problem Blocks

**Wrapper:** THE PROBLEM WITH MOST DENTAL WEBSITES  
**Heading:** A Dental Website Has to Make the Practice Easier to Understand.  
**Intro:** Before someone gets in touch, they are deciding whether the practice feels clear, credible, and straightforward to navigate.

1. **Your services are hard to scan.** When general, cosmetic, restorative, and specialty care are compressed into one vague page, a visitor has to work too hard to locate the information that matters to them.
2. **Your providers are not introducing the practice early enough.** Education, credentials, practice approach, and office details should be easy to find before a visitor decides whether to get in touch.
3. **The online next step may ask for the wrong information.** A healthcare marketing site needs a clear general-inquiry route without inviting symptoms, diagnoses, treatment history, insurance details, or other health information into the form.

### Four Exact Delivery Blocks

**Wrapper:** WHAT WE BUILD  
**Heading:** A Clearer Digital Front Door for Your Practice.  
**Intro:** The work centers on accurate information, an understandable next step, and content your practice can review before it is published.

1. **Service architecture that reflects the practice.** Organize services, locations, and provider information so visitors can understand the practice without forcing every question into one generic page. Describe services accurately without implying a specialty credential that the practice has not confirmed.
2. **Provider and practice proof that can be verified.** Place dentist bios, credentials, office details, and client-provided proof where visitors can review them. Use specialty designations only when the practice confirms that they are earned and appropriate to use.
3. **Privacy-aware inquiry routes.** Configure the general inquiry route for a name, a way to reach the visitor, and a non-clinical reason for inquiry. Send medical or intake detail to the practice’s existing patient portal, EHR, or HIPAA-compliant intake platform.
4. **Reviewable dental advertising details.** Keep insurance wording, promotions, outcome galleries, specialist titles, and local licensing disclosures in clear, editable content for practice review before publication.

### How It Works and Process Proof

1. **15-Minute Fit Call.** A 15-minute fit call about your practice, current website, services, and what you need your online presence to improve. We also determine whether Graylock is the right fit.
2. **Your Free Homepage Direction.** If the work is a fit, Graylock creates a custom Homepage Direction around your practice before any build fee is due.
3. **Confirm the Direction, Materials, and Approvals.** You review the direction, scope, and next steps, then confirm the materials and approvals needed to begin.
4. **Build, Test, and Launch.** After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.

**Section 8 eyebrow:** PROCESS PROOF  
**Heading:** See the Direction Before You Choose the Build.  
**Body:** Graylock’s current process starts with a 15-minute fit call and a Homepage Direction before a build fee is due. After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.  
**Note:** This is a process statement, not a promise of rankings, leads, bookings, revenue, compliance, approval, or a free website.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is a Free Homepage Direction? | It is a custom homepage direction created after a 15-minute fit call if Graylock is the right fit. A Free Homepage Direction is not a free website. It lets you review the direction, scope, and next steps before a build fee is due. |
| What does a dental website cost? | Plans start at $199/month. Build fees begin at $799 after you approve the Homepage Direction. See the existing Pricing page for current plan details and scope. |
| How long does a standard dental website take? | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex work may take longer. |
| Can the website use a general contact form? | Yes. The general inquiry form is for a name, a way to reach the visitor, and a general reason for inquiry—not symptoms, diagnoses, treatment history, insurance details, or other health information. Medical or intake information belongs in the practice’s existing patient portal, EHR, or HIPAA-compliant intake platform. |
| How are specialty titles, insurance language, and promotions handled? | Dental advertising rules vary by state. Before publication, the practice must confirm specialty designations, consent and disclosures for before-and-after images, insurance wording, promotional terms, and required licensing statements. |

### Relocation, Removal, Imagery, and Final CTA

Relocate privacy, specialty titles, patient imagery, insurance wording, promotions, licensing, and practice responsibility into the FAQs and global policy links. Remove patient-acquisition hero claims, search/ranking promises, free-demo language, generic trust and metrics, legacy problem and delivery claims, unconditional schedule claims, local pricing tiers, universal specialty strip, oversized compliance narrative, and all local promotions.

Use one calm licensed dental-practice hero visual with a dark overlay. Avoid before/after imagery, patient-result imagery, stock smiles, counters, and seals. Use only the actual Bluegrass transformation asset in the project block.

**Final CTA:** YOUR NEXT STEP · **See Your Homepage Direction Before the Build Fee Is Due.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your practice before any build fee is due.**  
Primary: **Get Your Free Homepage Direction**  
Secondary: **See a Real Dental Project** → Bluegrass anchor  
Pricing: **Plans from $199/month. Build fees begin at $799 after you approve your Homepage Direction.**  
Closing: **No build fee to see the direction. No pressure. No obligation.**

### Acceptance Criteria

- Bluegrass is the only project and uses the required asset, URL, and external-link treatment.
- Francisca review appears exactly once with source note; project card contains no review.
- Process proof contains no second client or outcome language.
- Inquiry routes do not collect clinical information; dental advertising details require practice approval.
- No rankings, patient acquisition, revenue, compliance approval, generic trust, local price grid, unconditional timing, or promotion remains.

## 13. Chiropractors

**Route:** `/websites-for-chiropractors`  
**Release model:** Conditional Francisca review, one Kingsbury project, and conditional full L.A. Perks client perspective.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **WEBSITES FOR CHIROPRACTORS** |
| H1 | **A Chiropractic Website That Helps the Right Patients Understand Your Practice.** |
| Supporting copy | A practice website should make it easy to understand your services, credentials, location, and next step—without treating healthcare privacy and advertising requirements as an afterthought. |
| Primary CTA | **Get Your Free Homepage Direction** → existing `/get-started`. |
| Secondary CTA | **View Kingsbury Chiropractic** → `https://kingsburychiropractictahoe.com/`. |
| Microcopy | Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction before any build fee is due. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the direction before the build fee is due.  
**Body:** A website should not feel like a leap of faith. Graylock does the strategic work first, so you can see the direction for your practice before deciding whether to move forward.  
**CTA:** Get Your Free Homepage Direction  
**Support:** Start with a 15-minute fit call. No build fee is due before you approve the direction.  
**Clarification:** A Free Homepage Direction is not a free website.

### Review and Project Proof

Render the review only when exact source-visible:

**Label:** CLIENT REVIEW

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel, Interior Finishes Cabinets and Design**  
> Presented as a Google review on Graylock’s current homepage.

Do not imply it is from a chiropractic client or add stars.

**Project label:** FEATURED CLIENT WEBSITE · Kingsbury Chiropractic · Chiropractic Care  
**Body:** Graylock built the live website for Kingsbury Chiropractic. Show the actual Kingsbury transformation image from the current Featured Projects card and link only to the live site. Do not add performance metrics, outcome claims, invented project narrative, or a second project card.  
**CTA:** **View Kingsbury Chiropractic** → `https://kingsburychiropractictahoe.com/`.

### Three Exact Problem Blocks

**Heading:** The Problem With Most Chiropractic Practice Websites.  
**Intro:** Before someone contacts a practice, they are already deciding whether the information feels clear, credible, and appropriate for their needs.

1. **Your practice is hard to understand at a glance.** When services, techniques, provider credentials, and practical details are scattered, a prospective patient cannot quickly tell whether your practice is relevant to their situation.
2. **Promotional copy can create avoidable review work.** Condition claims, testimonials, discounts, free-exam language, insurance statements, and required professional terminology need deliberate handling rather than a generic healthcare template.
3. **The next step is unclear or asks for the wrong information.** A practice website should make it easy to find contact details or an existing patient portal while keeping medical details out of a general website contact form.

### Four Exact Delivery Blocks

**Heading:** What We Deliver for Chiropractic Practices.  
**Intro:** Clear practice information, appropriate proof, a privacy-aware contact path, and durable website foundations—built around your services and review process.

1. **Practice positioning and service structure.** We organize the homepage, service pages, provider information, location details, and next steps around what your practice actually offers and the questions a visitor needs answered.
2. **Credibility details in the right places.** Credentials, professional biographies, practice information, and client-provided proof are placed where a visitor looks for context before deciding whether to contact the office.
3. **A privacy-aware contact path.** General contact forms request only a name, a way to respond, and a general reason for inquiry. When medical information is needed, the website can direct people to the practice’s existing patient portal, EHR, or intake platform.
4. **Mobile and technical foundations.** Responsive page structure, accessible controls, clear navigation, and straightforward service-page foundations make the site usable across devices and easier to maintain.

### How It Works and Final Proof

1. **15-Minute Fit Call.** We learn about your practice, current website, services, and what you need your online presence to improve. Then we determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your practice before any build fee is due.
3. **Review and Approval.** You review the direction, scope, and next steps. If it feels right, you approve the build and provide the required materials and approvals.
4. **Build, Test, and Launch.** After your Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.

**Section 8 heading:** Client Perspective.

> “Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish. The amount of time and effort they invested in researching our industry and truly understanding our vision for the new website was beyond impressive. Their attention to detail, communication, and dedication to delivering a product that reflected our goals exceeded all expectations. They consistently went above and beyond throughout the entire process. We highly recommend Tim and the Graylock Digital team to anyone looking for a professional, creative, and results-driven website partner.”
>
> **Kylen & Keith Perks, L.A. Perks Petroleum Specialists**

This is proof, not a second project. Omit the complete section if the exact source cannot be verified.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is the first step? | The first step is a 15-minute fit call about your practice, current website, services, and what you want your online presence to improve. If Graylock is the right fit, we create a custom Homepage Direction before any build fee is due. |
| Is a Free Homepage Direction a free website? | No. A Free Homepage Direction is a custom homepage direction for you to review before deciding whether to move forward. It is not a free website. Build fees begin only after you approve the direction, and the exact scope and price are shown before you decide. |
| How long does a standard chiropractic website take? | After your Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer. |
| How are privacy and patient information handled? | General website contact forms are designed not to collect symptoms, diagnoses, treatment history, insurance details, or other medical information. When a patient needs to share medical information, the site can direct them to your existing patient portal, EHR, or HIPAA-compliant intake platform. Your practice remains responsible for its own privacy, legal, and clinical obligations. |
| Can you use testimonials, discounts, insurance language, or condition claims? | We use only claims and materials your practice can substantiate and approve. Chiropractic advertising rules differ by state, including rules on professional terminology, testimonials, discounts, insurance, and clinical claims. Your practice is responsible for final review with its attorney, licensing board, compliance officer, or other appropriate professional. |

### Relocation, Removal, Imagery, and Final CTA

Keep state-specific advertising, credentials, testimonials, discounts, insurance, privacy, ownership, and cancellation boundaries in the five FAQs or global destinations. Remove Google/patient-volume hero claims, free review/demo language, discovery call, generic practice trust, counters, specialty strip, pricing cards, local SEO claims, appointment forms, oversized compliance narratives, and September promotions.

Use the existing practice-context hero only if licensed and visually suitable; otherwise use a non-diagnostic practice image with no patient records or treatment implication. Use the actual Kingsbury transformation asset as the only project visual.

**Final CTA:** YOUR NEXT STEP · **See the Direction Before the Build Fee Is Due.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your practice before any build fee is due.**  
Primary: **Get Your Free Homepage Direction**  
Support: **Plans from $199/month. Build fees begin at $799 after you approve your Homepage Direction.**  
Closing: **No build fee to see the direction. No pressure. No obligation.**

### Acceptance Criteria

- Kingsbury is the sole project and uses the live URL and actual transformation asset.
- Both proof blocks are exact-source gated and contain no chiropractic outcome implication.
- The first step is a 15-minute fit call everywhere.
- No form collects medical information; regulatory claims remain client-approved and concise.
- No rankings, patient volume, appointments, revenue, compliance, approval, insurance guarantee, free website, local promotion, or generic trust remains.

## 14. Physicians

**Route:** `/websites-for-physicians`  
**Release model:** Conditional adjacent Francisca review, one real West Coast Eye Institute project, and no final proof block.

### Exact Hero

| Element | Exact copy or behavior |
|---|---|
| Eyebrow | **FOR PHYSICIANS & MEDICAL PRACTICES** |
| H1 | **A Physician Website That Makes Your Practice Clear, Credible, and Easy to Contact.** |
| Supporting copy | Patients and referring professionals often look online before contacting an office. Graylock creates clear, professional websites that explain your practice, present your providers and services, and direct prospective patients to an appropriate next step. |
| Primary CTA | **Get Your Free Homepage Direction** → existing `/get-started`. |
| Secondary CTA | **View West Coast Eye Institute** → verified project/live-site destination. |
| Microcopy | For independent physicians, specialty practices, and multi-provider medical groups. Start with a 15-minute fit call. If Graylock is the right fit, you receive a custom Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website. |

### Offer and Risk Reversal

**Eyebrow:** THE GRAYLOCK DIFFERENCE  
**Heading:** See the direction before the build fee is due.  
**Body:** A physician website should not feel like a leap of faith. Graylock does the strategic work first, so you can review a custom Homepage Direction for your practice before deciding whether to move forward.  
**CTA:** Get Your Free Homepage Direction  
**Support:** Start with a 15-minute fit call. No build fee is due before you approve the direction.  
**Fine print:** A Free Homepage Direction is not a free website.

Use three offer steps:

1. We create a Homepage Direction around your practice, services, approved proof, and the appropriate next step—before any build fee is due.
2. If you approve the direction and the required materials and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.
3. Your applicable written agreement governs the build, subscription, cancellation, ownership, and any guarantee terms.

### Review and Project Proof

Render the review only when the exact quote, name, Google-review context, and source linkage remain available:

**Label:** CLIENT REVIEW | GOOGLE REVIEW

> “It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”
>
> **Francisca Rangel — Interior Finishes Cabinets and Design**

Do not imply physician-specific experience or include the broader outcome language.

**Project label:** FEATURED CLIENT WEBSITE | OPHTHALMOLOGY & EYE CARE  
**Project:** West Coast Eye Institute — Citrus County, FL  
**Body:** West Coast Eye Institute is a Graylock project for a five-specialist ophthalmology practice in Citrus County, Florida. Graylock’s portfolio identifies the delivered work as an appointment-request flow, services and conditions library, multi-location presentation, and mobile-responsive build.  
**CTA:** **View West Coast Eye Institute** → actual portfolio/live-site destination already used by the site.

Use no quote in this project block. Omit Section 8; there is no qualifying physician client/process proof in this release.

### Three Exact Problem Blocks

1. **Your Website Does Not Explain the Practice Quickly Enough.** A visitor should be able to see the specialty, providers, locations, and appropriate way to make contact without piecing the answer together from a generic homepage.
2. **Provider Credentials and Service Information Are Hard to Verify.** Weak provider bios and scattered service pages can make it harder to understand who provides care, where they practice, and which services are available. Credential, certification, and service claims need a source before they are published.
3. **The Contact Path Can Invite the Wrong Information.** A general inquiry form is not a clinical intake form. Asking for symptoms, diagnoses, treatment history, or insurance details on a marketing site can create avoidable privacy concerns; clinical information belongs in the practice’s existing portal or intake system.

### Four Exact Delivery Blocks

1. **Practice Positioning and Page Architecture.** The homepage direction establishes a clear practice overview, service hierarchy, provider path, location path, and contact path before the build fee is due.
2. **Provider, Service, and Location Pages.** The build can organize approved provider bios, specialty or service information, and location details so visitors can find the information relevant to them.
3. **Privacy-Aware Inquiry Paths.** General website inquiries request only contact details and a general reason for inquiry. Link patients to the practice’s existing portal, EHR, or intake platform when clinical information is required.
4. **Accessible, Mobile-Responsive Foundations.** Build the site with responsive layouts, meaningful image alternatives, readable contrast, keyboard-friendly navigation, and clear page structure. Final legal and regulatory review remains the practice’s responsibility.

### How It Works

1. **15-Minute Fit Call.** We learn about your practice, current website, and what must be clearer online, then determine whether Graylock is the right fit.
2. **Homepage Direction.** If the work is a fit, we create a custom Homepage Direction around your practice before any build fee is due.
3. **Review and Approval.** You review the direction, scope, and next steps. If it feels right, you approve the build and provide the required materials.
4. **Build, Review, and Launch.** Once the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.

### Five Exact FAQs

| Question | Answer |
|---|---|
| What is the Free Homepage Direction? | It is a custom homepage direction created after the 15-minute fit call if Graylock determines the work is a fit. You see the proposed page direction before any build fee is due. A Free Homepage Direction is not a free website and does not include a completed website build. |
| What happens on the first call? | The first step is a 15-minute fit call about your practice, current site, audiences, services, and the website information that needs to be clear. It is used to decide whether Graylock is the right fit. |
| When can a standard site launch? | After the Homepage Direction, required materials, and approvals are confirmed, standard sites are typically built, tested, and launched in 7–10 business days. Larger or more complex work can take longer. |
| Can the website collect patient health information? | The website’s general inquiry forms are designed not to collect protected health information. They request a name, a way to respond, and a general reason for inquiry. Direct patients to the practice’s existing portal, EHR, or intake platform when medical information is needed. |
| How are physician credentials, testimonials, and practice claims handled? | Publish only claims, certifications, testimonials, photographs, licenses, and other practice materials that the practice has reviewed and can support. The practice remains responsible for final legal, advertising, licensing, privacy, and regulatory compliance with its qualified advisors. |

### Relocation, Removal, Imagery, and Final CTA

Move PHI, provider credentials, testimonials, claims, licenses, privacy, pricing, ownership, cancellation, and guarantee terms into these FAQs or unchanged global destinations. Remove find/trust/book, appointment-calendar, ranking, search, inquiry, free-review/demo, generic practice trust, metric card, specialty cloud, pricing cards, healthcare/legal sales narratives, repeated compliance blocks, local promotions, and fabricated outcomes.

Use a calm authentic practice environment with a dark overlay. Do not imply that pictured people or offices are Graylock clients unless documented. Use the current West Coast transformation asset in a single project block. No carousel.

**Final CTA:** YOUR NEXT STEP · **See What a Better Website Could Look Like for Your Practice.**  
Body: **Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your practice before any build fee is due.**  
Button: **Get Your Free Homepage Direction**  
Microcopy: **No build fee to see the direction. No pressure. No obligation. A Free Homepage Direction is not a free website.**

### Acceptance Criteria

- West Coast Eye Institute is the sole project and has no testimonial.
- The Francisca review is exact-source gated and labeled as adjacent proof, or omitted.
- Section 8 is absent with no placeholder or repeated project.
- Provider, credential, license, image, and clinical claims require practice-approved source documentation.
- General inquiry forms do not collect PHI; no HIPAA, accessibility, board, licensing, or regulatory approval is claimed.
- All CTAs, schedule sentences, policy links, and global behaviors pass QA.

---

# Complete Global QA Checklist

The release owner must complete every applicable item for every one of the fourteen routes. A failed source gate requires omission of the dependent block, not a copy substitution.

## Scope and Component Integrity

- [ ] Only the fourteen listed page bodies changed.
- [ ] Global header, footer, navigation, footer links, phone links, and header CTA are unchanged.
- [ ] Global form fields, validation, route, confirmation state, Resend flow, recipients, automation, dashboard, analytics, consent, and tracking are unchanged.
- [ ] Pricing, Terms, Privacy, Acceptable Use, Compliance, ownership, cancellation, and guarantee pages are unchanged.
- [ ] Shared team, accordion, button, external-link, focus, and responsive components were reused rather than forked.
- [ ] The sitewide September popup experiment was neither reproduced in the body nor modified globally.
- [ ] No local form, popup, email capture, countdown, price calculator, review widget, scheduler, social feed, policy, or tracking pixel was added.

## Information Architecture and Copy

- [ ] Each page follows its exact ordered section list, including documented omissions and the Psychologists placement exception.
- [ ] Each page has exactly one H1 and a logical heading hierarchy.
- [ ] Every hero eyebrow, headline, supporting paragraph, primary CTA, secondary CTA, and microcopy matches its page specification.
- [ ] Every page has exactly three problem cards and four delivery cards in the listed order.
- [ ] Every page has exactly four process steps; Step 1 is **15-Minute Fit Call**.
- [ ] No page uses **Discovery Call**, **free demo**, **free custom demo**, **free website review**, **free build**, **waived build fee**, or equivalent language.
- [ ] Every primary conversion CTA reads exactly **Get Your Free Homepage Direction**.
- [ ] The sentence **A Free Homepage Direction is not a free website.** appears wherever required.
- [ ] Every occurrence of **7–10 business days** uses the exact approved page-specific conditional sentence and includes Homepage Direction, required materials, and approvals.
- [ ] No schedule appears in a badge, hero statistic, image, isolated line, or unconditional claim.
- [ ] Each page includes exactly the five specified FAQs and no additional local FAQ copy or unsupported FAQ schema.
- [ ] The shared team/accountability copy, roles, people, order, portraits, and styling remain unchanged.
- [ ] Final CTA copy, links, secondary actions, pricing line, and microcopy match the page specification.

## Proof, Projects, and Quotations

- [ ] Every project is in the approved portfolio evidence matrix.
- [ ] Every page displays exactly one featured project; no carousel, second card, mock project, or logo wall appears.
- [ ] Project name, actual industry, location, asset, body copy, CTA label, and destination were checked against the current source.
- [ ] Adjacent-industry projects are explicitly labeled with their actual category and never implied to be an industry match.
- [ ] Each project image is an approved production asset or current live-site capture, not stock imagery presented as client work.
- [ ] Each quotation was rechecked immediately before release for exact text, punctuation, reviewer, affiliation, source label, and visible availability.
- [ ] Mark Nelson proof excludes all lead-generation and conversion language and includes **Individual client feedback; not a promise of results.**
- [ ] Francisca Rangel proof uses only the approved sentence and does not become an industry-specific endorsement.
- [ ] Kylen and Keith Perks proof uses only the page-approved exact excerpt or full quotation and does not become an industry-outcome claim.
- [ ] Wicks proof is labeled **Client perspective**, not Google review.
- [ ] Auctioneers, Home Builders, and Physicians contain the required proof omissions and no placeholders.
- [ ] A failed quotation/source gate suppresses the entire dependent section and collapses its spacing.
- [ ] No source-free rating, star count, review aggregate, testimonial composite, anonymous quote, fabricated metric, invented case-study claim, generic “Trusted by,” or client logo strip remains.

## Claims, Pricing, Policies, and Regulated Content

- [ ] No copy, metadata, alt text, schema, or visual claims rankings, search placement, leads, inquiries, bookings, appointments, customers, patient volume, revenue, conversions, project awards, fundraising results, permits, financing, regulatory compliance, licensing approval, clinical outcome, or third-party approval.
- [ ] No page implies MLS/IDX eligibility, access, approval, data, or provider timing is guaranteed.
- [ ] No page implies a marketing form, portal link, technical choice, website, or content review makes a practice HIPAA compliant, legally compliant, accessible-certified, board-approved, or privacy-approved.
- [ ] Client responsibility for credentials, licenses, project claims, regulated statements, permissions, imagery, testimonials, and disclosures remains explicit where required.
- [ ] Healthcare general inquiry routes ask only for a name, response method, and general reason; they do not solicit symptoms, diagnoses, treatment history, insurance details, or other PHI.
- [ ] Accounting inquiry routes do not solicit tax returns, Social Security numbers, account numbers, statements, or sensitive financial records.
- [ ] Realtors keep MLS/IDX details concise and separate third-party approval timing from Graylock’s build timing.
- [ ] Industrial, builder, and well-drilling credential/safety/environmental/water statements are client-supplied and source-approved.
- [ ] Pricing appears only where expressly approved and links to the unchanged Pricing page.
- [ ] Ownership, cancellation, annual-plan, refund, guarantee, and policy details link to current global sources rather than being reinterpreted locally.
- [ ] Guarantee language was checked against current terms, including any annual-plan exclusion or applicable-agreement condition.

## Links and Behavior

- [ ] Every primary CTA opens the existing global Get Started/form flow.
- [ ] Every hero secondary CTA performs the exact specified action: anchor, process scroll, portfolio route, or live project.
- [ ] Every project/live-site URL was opened and verified.
- [ ] Links requiring a new tab use the existing external-link treatment, `rel` protections, and visible affordance.
- [ ] Anchor targets are unique, keyboard reachable, and do not hide headings behind sticky global navigation.
- [ ] FAQ controls update `aria-expanded` and `aria-controls` correctly.
- [ ] Form submission, validation, confirmation, Resend delivery, and existing analytics were regression-tested without modification.

## Visual, Responsive, and Accessibility QA

- [ ] Current homepage palette, typography, buttons, cards, spacing, borders, radii, and motion conventions are used.
- [ ] Hero imagery is licensed or approved and cannot be mistaken for unverified client work.
- [ ] No imagery implies an active listing, sold result, treatment outcome, professional credential, safety record, legal status, or approval without evidence.
- [ ] Project imagery has the exact page-specific alt text or an equally concise factual equivalent approved in the scope.
- [ ] Decorative images have empty alt text.
- [ ] Copy remains readable over imagery at all breakpoints.
- [ ] Cards stack in source order on mobile; no content is visually reordered away from the semantic order.
- [ ] Buttons and links meet existing touch-target, contrast, hover, focus, active, and disabled-state standards.
- [ ] FAQ, external links, project cards, and CTA groups are fully keyboard operable.
- [ ] No horizontal scrolling, clipped headline, overlapping global UI, orphaned divider, or empty proof-space remains at mobile, tablet, laptop, and wide desktop breakpoints.
- [ ] Reduced-motion preferences are honored.
- [ ] Accessibility implementation is not described as legal certification or guaranteed compliance.

## Final Content Audit

- [ ] Search the rendered route for: `demo`, `discovery`, `free website`, `waiv`, `September`, `rank`, `lead`, `booking`, `revenue`, `conversion`, `compliant`, `approval`, `Trusted by`, and unqualified `7–10`.
- [ ] Review each search result in context and remove every prohibited occurrence.
- [ ] Search for all client names and confirm only approved projects and quotations appear.
- [ ] Search for all CTA labels and confirm every primary instance is exact.
- [ ] Compare each rendered FAQ against this specification word for word.
- [ ] Confirm there are no hidden, off-canvas, schema-only, or metadata claims that violate the visible-copy rules.
- [ ] Record source-verification date and reviewer for every quotation and project asset in the release checklist.
- [ ] Obtain final content approval for regulated statements and any client-supplied credentials, imagery, project claims, or disclosures.

# References

[1]: https://graylockdigital.com/ "Graylock Digital — Custom Websites for Trust-Based Businesses"
[2]: https://graylockdigital.com/featured-projects "Featured Projects | Custom Websites We've Built"
[3]: https://graylockdigital.com/compliance "Graylock Digital Compliance"
[4]: https://graylockdigital.com/pricing "Graylock Digital Pricing"
[5]: https://graylockdigital.com/terms-of-service "Graylock Digital Terms of Service"
[6]: https://graylockdigital.com/websites-for-realtors "Graylock Digital Websites for Realtors"
[7]: https://graylockdigital.com/websites-for-well-drillers "Graylock Digital Websites for Well Drillers"
[8]: https://graylockdigital.com/websites-for-cabinet-makers "Graylock Digital Websites for Cabinet Makers"
[9]: https://graylockdigital.com/websites-for-auctioneers "Graylock Digital Websites for Auctioneers"
[10]: https://graylockdigital.com/websites-for-home-builders "Graylock Digital Websites for Home Builders"
[11]: https://graylockdigital.com/websites-for-industrial-construction "Graylock Digital Websites for Industrial Construction"
[12]: https://graylockdigital.com/websites-for-accountants "Graylock Digital Websites for Accounting Firms"
[13]: https://graylockdigital.com/other-service-businesses "Graylock Digital Other Local Service Businesses"
[14]: https://graylockdigital.com/websites-for-psychologists "Graylock Digital Websites for Psychologists"
[15]: https://graylockdigital.com/websites-for-optometrists "Graylock Digital Websites for Optometrists"
[16]: https://graylockdigital.com/websites-for-physical-therapists "Graylock Digital Websites for Physical Therapists"
[17]: https://graylockdigital.com/websites-for-dentists "Graylock Digital Websites for Dentists"
[18]: https://graylockdigital.com/websites-for-chiropractors "Graylock Digital Websites for Chiropractors"
[19]: https://graylockdigital.com/websites-for-physicians "Graylock Digital Websites for Physicians"
[20]: https://www.willowrealestategroup.com/ "Willow Realty Group"
[21]: https://jcswellservices.com/ "JC's Well Services"
[22]: https://www.interiorfinishesreno.com/ "Interior Finishes Cabinets and Design"
[23]: https://benevolentauctions.com/ "Benevolent Auctions"
[24]: https://wicklandandyard.com/ "Wicks Land & Yard Management"
[25]: https://westcoasteye.com/ "West Coast Eye Institute"
[26]: https://bluegrassanes.com/ "Bluegrass Dental Anesthesia Solutions"
[27]: https://kingsburychiropractictahoe.com/ "Kingsbury Chiropractic"
