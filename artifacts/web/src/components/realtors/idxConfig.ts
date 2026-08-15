/**
 * IDX / MLS configuration placeholders (per the realtor landing page scope,
 * section 6). These are scoped per client engagement — no vendor is
 * hard-coded and nothing here promises MLS approval.
 */

export type IdxStatus = "not_configured" | "pending_approval" | "live";

export interface RealtorIdxConfig {
  /** IDX vendor chosen during scoping (e.g. set per client — never hard-coded). */
  idx_provider: string | null;
  /** Local MLS name once the client's market is confirmed. */
  mls_name: string | null;
  /** Market / coverage area for the MLS feed. */
  mls_market: string | null;
  /** Lifecycle of the IDX integration for this engagement. */
  idx_status: IdxStatus;
  /** Required MLS disclosure markup, supplied by the MLS/vendor when applicable. */
  idx_disclosure_html: string | null;
}

export const realtorIdxConfig: RealtorIdxConfig = {
  idx_provider: null,
  mls_name: null,
  mls_market: null,
  idx_status: "not_configured",
  idx_disclosure_html: null,
};
