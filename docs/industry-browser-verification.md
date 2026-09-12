# Industry browser verification

Completed: **42/42 viewport checks** and **42/42 body-scoped primary CTA
open/close checks**. No real lead was submitted.

## Coverage

Browser pass uses one reduced-motion browser context, one page, UTC, sessionStorage `graylock-landing-intro-seen=true`, promotion mocks, and aborted lead requests.

| route | 1440x1000 | 768x1024 | 390x844 |
|---|---|---|---|
| realtors | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow |
| well-drillers | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow |
| cabinet-makers | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow |
| auctioneers | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow | PASS: H1/route, 3 CTA, 5 FAQ, no overflow |
| home-builders | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| industrial-construction | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| accountants | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| psychologists | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| optometrists | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| physical-therapists | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| dentists | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| chiropractors | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| physicians | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |
| other-service-businesses | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow | PASS: H1/route, 5 CTA, 5 FAQ, no overflow |

## Notes

- The geometry pass's five-CTA counts include unchanged global links. The later
  body-scoped interaction sweep verified exactly three primary placements on
  every route.
- Batch 1 and batch 2 loaded successfully at all three requested viewport sizes.
- Images were not yet scrolled into view for the first batch; lazy-image status is therefore pending.
- Browser logs showed a resource-level 404; no in-app error was visible.
- Realtors interaction checks previously verified: FAQ Enter open/close and global CTA modal open/Escape close without form input.
- Realtors tablet/mobile completed: both passed H1/route, 3 CTA, 5 FAQ, and no overflow; remaining two desktop CTAs opened the expected real-estate dialog and closed with Escape.
- Other-service-businesses desktop markup: 9 ordered sections (`hero`, `offer`, `featured-project`, `problems`, `delivery`, `how-it-works`, `faq`, `team`, `final-cta`), 2 team articles, project target `_blank`, and 0 broken images after scrolling the project into view.
- All 42 route/viewport combinations are now covered for basic geometry/count checks. Resource-level 404s were logged during page loads; no in-app error was visible.

## Body-scoped CTA sweep

Body-scoped `hero`, `offer`, and `final-cta` CTAs were each opened and Escape-closed successfully:

| route | hero | offer | final-cta |
|---|---|---|---|
| realtors | PASS, existing real-estate dialog | PASS, existing real-estate dialog | PASS, existing real-estate dialog |
| other-service-businesses | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| well-drillers | PASS `/get-started?industry=well-drilling&intent=free_demo&utm_source=well_driller_landing&utm_medium=hero_cta` | PASS `/get-started?industry=well-drilling&intent=free_demo&utm_source=well_driller_landing&utm_medium=offer_cta` | PASS `/get-started?industry=well-drilling&intent=free_demo&utm_source=well_driller_landing&utm_medium=final_cta` |
| cabinet-makers | PASS `/get-started?industry=cabinet-making&intent=free_demo&utm_source=cabinet_maker_landing&utm_medium=site_cta&utm_content=hero` | PASS `/get-started?industry=cabinet-making&intent=free_demo&utm_source=cabinet_maker_landing&utm_medium=site_cta&utm_content=process` | PASS `/get-started?industry=cabinet-making&intent=free_demo&utm_source=cabinet_maker_landing&utm_medium=site_cta&utm_content=final_cta` |
| industrial-construction | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| accountants | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| auctioneers | PASS `/get-started?industry=auctioneering&intent=free_demo&utm_source=auctioneer_landing&utm_medium=site_cta&utm_content=hero` | PASS `/get-started?industry=auctioneering&intent=free_demo&utm_source=auctioneer_landing&utm_medium=site_cta&utm_content=process` | PASS `/get-started?industry=auctioneering&intent=free_demo&utm_source=auctioneer_landing&utm_medium=site_cta&utm_content=final_cta` |
| home-builders | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| psychologists | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| optometrists | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| physical-therapists | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| dentists | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| chiropractors | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |
| physicians | PASS `/get-started` | PASS `/get-started` | PASS `/get-started` |

All 14 routes now have all three body-scoped primary CTA checks completed (42/42): visible dialog open, expected href captured, Escape close verified, and no form input/submission.