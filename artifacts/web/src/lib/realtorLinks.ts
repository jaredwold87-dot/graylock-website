export const REALTOR_LANDING_PATH = "/websites-for-realtors";

export type RealtorCtaPlacement =
  | "site_cta"
  | "hero_cta"
  | "process_cta"
  | "pricing_cta"
  | "final_cta";

/**
 * Every booking CTA on the realtor landing page routes to the get-started
 * quick booking form with the industry context plus per-placement UTM parameters.
 */
export function realtorGetStartedHref(placement: RealtorCtaPlacement): string {
  return `/get-started?industry=real-estate&utm_source=realtor_landing&utm_medium=${placement}`;
}
