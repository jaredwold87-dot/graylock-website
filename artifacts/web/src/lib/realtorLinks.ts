export const REALTOR_LANDING_PATH = "/websites-for-realtors";

/**
 * utm_content placement vocabulary for the realtor funnel. `header` is the
 * campaign-aware navbar CTA; the rest are on-page placements.
 */
export type RealtorCtaPlacement =
  | "header"
  | "hero"
  | "package_scope"
  | "investment"
  | "final_cta"
  | "sticky_cta";

/**
 * Every booking CTA on the realtor landing page routes to the get-started
 * quick booking form (opened in the modal in place) with the industry +
 * intent context and per-placement UTM parameters.
 */
export function realtorGetStartedHref(placement: RealtorCtaPlacement): string {
  return `/get-started?industry=real-estate&intent=realtor_idx_fit&utm_source=realtor_landing&utm_medium=site_cta&utm_content=${placement}`;
}

/** The one CTA label used by every primary realtor booking CTA. */
export const REALTOR_CTA_LABEL = "Get Your Real Estate Website + IDX Plan";
