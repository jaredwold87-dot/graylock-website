# Industry source verification

**Verified:** 2026-09-12 UTC  
**Audit type:** Read-only public-source audit  
**Scope:** The fourteen routes and the ten approved projects in the Industry Landing Pages scope.  
**App changes:** None. No source images were generated or changed.

## Verification method and gate rule

I fetched the public Graylock homepage, Featured Projects page, `/pricing`, all
fourteen route URLs, and the ten approved client destinations with `webFetch`.
No settings, secrets, authenticated endpoints, or private data were requested.
The public client destinations were used only as identity/destination evidence.

The gate IDs below are the IDs the renderer should use:

- `review.<route-key>.<source-key>` is the Section 3 review slot.
- `finalProof.<route-key>.<source-key>` is the Section 8 client-perspective
  slot, or the approved process-only proof slot where noted.
- An **included** quote has the exact scoped candidate text, attribution, and
  a live source label. A longer live transcript may contain an approved
  contiguous excerpt; only the scoped excerpt is allowed.
- An **omitted** quote means the complete dependent block is omitted. It must
  not be replaced with a paraphrase, star count, generic trust label, or an
  empty wrapper.

## Canonical quote evidence

### Francisca Rangel

The scoped candidate is exact, including the curly apostrophe and final
period:

> “It’s clear that they took the time to understand our business and what we
> wanted to communicate to our clients.”

The current homepage exposes this as the highlighted quote under
“Real Google reviews from clients who trusted us with their online presence,”
with “Review from Francisca Rangel.” The current Cabinet Makers route also
exposes the complete transcript, the exact sentence, “Francisca Rangel,” and
“5-star Google Review.”

Evidence:

- <https://graylockdigital.com/>
- <https://graylockdigital.com/websites-for-cabinet-makers>

### Mark Nelson

The scoped candidate is the first paragraph of the live longer transcript:

> “I have been extremely impressed Graylock digital, from the first meeting we
> had to the launch of our new website and beyond. This company is so
> professional, well organized, and well informed. The communication was
> excellent, they listened to my needs and answered my questions.”

The live Realtor route pairs that exact excerpt with “Mark Nelson” and
“5-star Google Review.” The same exact paragraph is present in the homepage
full transcription. The later lead-generation/conversion paragraph is
**not** approved and must not be rendered.

Evidence:

- <https://graylockdigital.com/websites-for-realtors>
- <https://graylockdigital.com/>

### Kylen & Keith Perks

The full scoped client-perspective quote is present verbatim on the homepage
under “CLIENT PERSPECTIVE,” labeled “Client testimonial,” with
“Kylen & Keith Perks” and “L.A. Perks Petroleum Specialists.” The optometry and
physical-therapy short excerpts are contiguous, exact excerpts of that same
live quote and retain the same attribution.

Evidence:

- <https://graylockdigital.com/>

### Wicks Land & Yard Management

The scoped quotation beginning “Tim was excellent throughout the entire
process...” is **not visible** in the current Featured Projects text. The
Wicks project card and destination are visible, but the testimonial is not.
Both Wicks quote gates are therefore omitted.

Evidence:

- <https://graylockdigital.com/featured-projects>
- <https://wicklandandyard.com/>

### Jill Baugh and JC's Well Services

The current public Auctioneers route contains Jill Baugh review text, but the
scope explicitly requires a project-only Auctioneers release and forbids a Jill
Baugh quotation in that release. It is omitted despite being publicly visible.
No scoped Graylock testimonial for JC's Well Services is present; a rating or
review shown on the client destination would not establish a Graylock client
testimonial and is not accepted.

Evidence:

- <https://graylockdigital.com/websites-for-auctioneers>
- <https://graylockdigital.com/websites-for-well-drillers>
- <https://jcswellservices.com/>

## Route review/final-proof matrix

The reasons below are source-gate decisions, not copy substitutions.

| Route | Review gate | Final-proof gate | Evidence and precise reason |
|---|---|---|---|
| `/websites-for-realtors` | **INCLUDED** `review.realtors.mark-nelson` | **INCLUDED** `finalProof.realtors.mark-nelson` | Exact scoped Mark excerpt, attribution, Willow affiliation, and `5-star Google Review` are visible on the live Realtor route; homepage full transcription independently matches. Suppress the later lead-generation sentence. Sources: <https://graylockdigital.com/websites-for-realtors>, <https://graylockdigital.com/> |
| `/websites-for-well-drillers` | **INCLUDED** `review.well-drillers.francisca-rangel` | **INCLUDED** `finalProof.well-drillers.kylen-keith-perks` | Francisca exact sentence and Google-review context are live on the homepage. The complete L.A. Perks quote, attribution, and client-testimonial label are live on the homepage. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-well-drillers> |
| `/websites-for-cabinet-makers` | **INCLUDED** `review.cabinet-makers.francisca-rangel` | **OMITTED** `finalProof.cabinet-makers.process` | The current Cabinet Makers route shows the exact Francisca sentence, attribution, and `5-star Google Review`. The approved process block also contains a 30-day money-back statement that is not present on current `/pricing`; omit the complete block until that claim has a current authoritative source. Sources: <https://graylockdigital.com/websites-for-cabinet-makers>, <https://graylockdigital.com/pricing> |
| `/websites-for-auctioneers` | **OMITTED** `review.auctioneers.jill-baugh` | **OMITTED** `finalProof.auctioneers.none` | Scope release model is project-only: no review, stars, Jill Baugh quote, or final client-perspective proof. The live route’s public Jill text does not override that explicit omission. Source: <https://graylockdigital.com/websites-for-auctioneers> |
| `/websites-for-home-builders` | **OMITTED** `review.home-builders.none` | **OMITTED** `finalProof.home-builders.none` | Scope requires project-only Meagher proof and says the portfolio record has a feedback placeholder rather than a testimonial. The current route URL returned only the shared navigation and `Loading page…`, with no route content; no quote is accepted from the repository or scope prose. Sources: <https://graylockdigital.com/websites-for-home-builders>, <https://graylockdigital.com/featured-projects> |
| `/websites-for-industrial-construction` | **INCLUDED** `review.industrial-construction.francisca-rangel` | **INCLUDED** `finalProof.industrial-construction.kylen-keith-perks` | Francisca exact sentence is live with the homepage Google-review section. The full L.A. Perks quote, exact attribution, and client-testimonial label are live under the homepage client-perspective block. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-industrial-construction> |
| `/websites-for-accountants` | **INCLUDED** `review.accountants.francisca-rangel` | **INCLUDED** `finalProof.accountants.kylen-keith-perks` | The exact Francisca sentence is verified by the live homepage and the public Cabinet Makers source record, which supplies the Interior Finishes affiliation and Google-review label. The full L.A. Perks quote is exact on the homepage. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-cabinet-makers> |
| `/other-service-businesses` | **OMITTED** `review.other-service-businesses.wicks` | **OMITTED** `finalProof.other-service-businesses.wicks` | The Wicks project card and live destination are real and remain allowed, but the exact scoped Wicks quotation and attribution are absent from the current Featured Projects source. Source: <https://graylockdigital.com/featured-projects> |
| `/websites-for-psychologists` | **INCLUDED** `review.psychologists.francisca-rangel` | **INCLUDED** `finalProof.psychologists.kylen-keith-perks` | Homepage exposes the exact Francisca sentence in its Google-review section and the Interior Finishes reference in the transcript. The full L.A. Perks quote is exact and visibly labeled as client testimonial. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-psychologists> |
| `/websites-for-optometrists` | **INCLUDED** `review.optometrists.francisca-rangel` | **INCLUDED** `finalProof.optometrists.kylen-keith-perks-short` | Francisca exact sentence and homepage source are verified. The scoped L.A. Perks process excerpt is an exact contiguous substring of the live, attributed client testimonial; do not expand it or imply an eye-care outcome. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-optometrists> |
| `/websites-for-physical-therapists` | **INCLUDED** `review.physical-therapists.francisca-rangel` | **INCLUDED** `finalProof.physical-therapists.kylen-keith-perks-short` | Francisca exact sentence and homepage source are verified. The scoped opening L.A. Perks excerpt is an exact contiguous substring of the live, attributed client testimonial; it is process proof only. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-physical-therapists> |
| `/websites-for-dentists` | **INCLUDED** `review.dentists.francisca-rangel` | **INCLUDED** `finalProof.dentists.process` | Francisca exact sentence and Google-review context are verified on the homepage. The final proof is process-only, not a quote; the homepage supports the fit-call, direction-before-build-fee, and qualified launch-path facts. Source: <https://graylockdigital.com/> |
| `/websites-for-chiropractors` | **INCLUDED** `review.chiropractors.francisca-rangel` | **INCLUDED** `finalProof.chiropractors.kylen-keith-perks` | Francisca exact sentence and homepage source are verified. The full L.A. Perks quote and attribution are exact on the homepage; it is not chiropractic outcome proof. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-chiropractors> |
| `/websites-for-physicians` | **INCLUDED** `review.physicians.francisca-rangel` | **OMITTED** `finalProof.physicians.none` | Francisca exact sentence is verified as adjacent homepage Google-review proof. Scope explicitly provides no qualifying physician final-proof block. The current route URL returned only the shared navigation and `Loading page…`, so no route-local source is accepted. Sources: <https://graylockdigital.com/>, <https://graylockdigital.com/websites-for-physicians> |

## Ten approved project identities and destinations

Every row below was present as a real project card on the current [Featured
Projects page](https://graylockdigital.com/featured-projects) and its client
destination was fetched successfully. The local
asset is an existing production screenshot showing the client site UI/branding;
it is not a generated or AI mockup. Keep the actual industry/category label in
the project card. Do not infer results from the screenshots.

| Project key | Actual live category / location evidence | Existing screenshot asset | Verified destination |
|---|---|---|---|
| `willow` | Southern Idaho Real Estate; the client site identifies Southern Idaho and the Magic Valley | `artifacts/web/src/assets/work/willow-transformation.webp` | Scope canonical: <https://www.willowrealestategroup.com/>; current portfolio card: <https://willowrealestategroup.com/> |
| `jcs` | Water Treatment & Well Pump Services; Eugene & Lane County, Oregon | `artifacts/web/src/assets/work/jcs-well-services-transformation.webp` | <https://jcswellservices.com/> |
| `interior` | Cabinets & Design; Northern Nevada & Northern California | `artifacts/web/src/assets/work/interior-finishes-transformation.webp` | <https://www.interiorfinishesreno.com/> |
| `benevolent` | Fundraising Auction Partners; Southwest Florida, serving nationwide | `artifacts/web/src/assets/work/benevolent-transformation.webp` | <https://benevolentauctions.com/> |
| `meagher` | Custom Homes & Luxury Remodels; live site identifies Carson Valley and Lake Tahoe | `artifacts/web/src/assets/work/meagher-builders-transformation.webp` | Scope CTA: <https://graylockdigital.com/featured-projects>; current portfolio/client destination: <https://meagherbuilders.com/> |
| `perks` | Petroleum & Fueling Services on the portfolio; live destination title is Petroleum Infrastructure, Fueling Systems & Service | `artifacts/web/src/assets/work/perks-transformation.webp` | Current portfolio/client destination: <https://www.perkspetroleum.com/>; portfolio source: <https://graylockdigital.com/featured-projects> |
| `wicks` | Land Management & Excavation; Godfrey, Illinois; owner-operated evidence is visible on the client site | `artifacts/web/src/assets/work/wicks-transformation.webp` | <https://wicklandandyard.com/> |
| `west-coast-eye` | Ophthalmology & Eye Care; Citrus County, Florida | `artifacts/web/src/assets/work/wce-transformation.webp` | <https://westcoasteye.com/> |
| `bluegrass` | Mobile Dental Anesthesia; Northern Kentucky, Lexington, and Georgetown | `artifacts/web/src/assets/work/bluegrass-transformation.webp` | <https://bluegrassanes.com/> |
| `kingsbury` | Chiropractic Care; live site identifies Stateline, Nevada / Lake Tahoe | `artifacts/web/src/assets/work/kingsbury-transformation.webp` | <https://kingsburychiropractictahoe.com/> |

The ten project cards above are the complete approved pool. In particular:

- Interior Finishes is **Cabinets & Design**, not accounting or healthcare.
- L.A. Perks is **Petroleum & Fueling Services / Petroleum Infrastructure,
  Fueling Systems & Service**, and is industry-adjacent on the industrial page;
  it is not an industrial-construction client endorsement.
- West Coast Eye Institute is **Ophthalmology & Eye Care**, not optometry.
- Bluegrass is **Mobile Dental Anesthesia**, not a dentist practice.
- Meagher has a real portfolio screenshot but no qualifying client quotation.
- Wicks has a real project card and destination but no currently visible
  portfolio quotation.

## Pricing, guarantee, plan, and refresh audit

The current public Pricing page was fetched separately. These are the facts
that can and cannot be carried into the scope offer points and final support
lines:

| Scope claim | Current `/pricing` evidence | Release disposition |
|---|---|---|
| Plans from `$199/month` | Starter is `$199/mo`; Growth is `$299/mo`, Scale is `$449/mo`, Custom is quote-based | **Supported** as a “from” line. |
| Build fees begin at `$799` | Starter shows `$799 one-time build fee`; Growth `$999`; Scale `$1,499` | **Supported for the number.** The approved rebuild scope supplies the Homepage Direction terminology; do not copy the Pricing page’s legacy “free demo” label into these bodies. |
| Hosting, maintenance, and support | Pricing says the monthly rate includes hosting, maintenance, and support; all plans also list hosting/SSL and maintenance/support features | **Supported**, subject to the selected plan and current terms. |
| Free refresh every two years / Stay-Current Guarantee | Every plan lists “Free Website Refresh Every 2 Years (Stay-Current Guarantee).” The public page describes design refresh, new photos/copy, and performance retune while subscribed | **Supported** as a refresh benefit. Use the existing public anchor <https://graylockdigital.com/pricing#stay-current-guarantee>, not a Terms link, for this claim. |
| 30-day money-back guarantee | Current `/pricing` text has no “30-day money-back” or “money-back guarantee” text. The `#stay-current-guarantee` content is a refresh benefit, not a refund guarantee | **Not source-verified.** Omit any complete proof/offer block that requires this exact claim, or obtain a current authoritative public source before release. |
| No long-term lock-in / cancellation | Pricing says month-to-month, cancel with 30 days’ notice and no cancellation fees; it also says annual plans are prepaid and non-refundable after payment | **Supported only with the stated annual-plan limitation.** Do not rewrite this as an unconditional refund or cancellation promise. |

The scope’s `$199`/`$799` numbers are real current plan numbers. The public
Pricing page still uses legacy “free demo” terminology, which is not approved
for the fourteen rebuilt bodies. The user-approved scope supplies the new offer
name. The Pricing page itself is expressly out of scope and remains unchanged.

### Applied conflict decisions

Under the specification’s instruction to remove or link away from conflicting
global terms, unsupported refund promises are replaced with current-plan links
in the Realtor, Well Driller, Auctioneer, Home Builder, Industrial Construction,
Accountant, Optometrist, and Physical Therapist offer sections. The Accountant
offer’s unconditional cancellation statement is replaced with a current-terms
link. Unaffected approved copy remains intact.

The Cabinet Maker final process-proof block depends on an unverified refund
promise and is omitted in its entirety. The source gate also omits both Wicks
quotation blocks. No blank proof wrappers or replacement testimonials render.

## Inaccessible, incomplete, or limited evidence

- `https://graylockdigital.com/websites-for-home-builders` returned only the
  shared navigation and `Loading page…` during this audit. Meagher identity evidence is still available from
  Featured Projects and `https://meagherbuilders.com/`.
- `https://graylockdigital.com/websites-for-physicians` returned only the shared
  navigation and `Loading page…`. The adjacent Francisca quote is verified from
  the homepage; no physician final-proof quote is allowed by scope.
- The current Featured Projects text extraction exposes Wicks’ project card and
  destination but not the scoped Wicks testimonial. It is not accepted from
  repository content alone.
- The review decisions above rely on live page text and visible attribution
  records, not on a repository-only image. Existing review images are not
  treated as proof without that live source.
- The Featured Projects extractor exposes project card names, categories,
  image references, and destinations but not every project detail. The client
  destinations were fetched to confirm identity and category context.
- No source in this audit proves rankings, leads, bookings, revenue, clinical
  outcomes, regulatory approval, licensing approval, MLS/IDX eligibility, or
  other business outcomes. Those claims remain prohibited.

## Final release limits

The matrix is a source audit, not approval of legacy copy currently visible on
some route URLs. Several live route pages still contain old demo, promotion,
outcome, rating, or regulatory sales language; none of that is accepted as
scope copy. The only allowed quote evidence is the exact gated candidate
listed above, with the complete dependent section removed when its gate fails.
The project images are existing real client-site captures mapped to the
verified Featured Projects records; no new imagery or project identity was
introduced.