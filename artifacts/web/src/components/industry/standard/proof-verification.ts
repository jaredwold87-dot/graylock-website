// Public-source verification, 2026-09-12 UTC.
// Evidence and omitted-block reasons: docs/industry-source-verification.md.
// Both quotation and process-proof blocks must pass this gate.
const verified: Record<string, readonly ("review" | "finalProof")[]> = {
  "/websites-for-realtors": ["review", "finalProof"],
  "/websites-for-well-drillers": ["review", "finalProof"],
  "/websites-for-cabinet-makers": ["review"],
  "/websites-for-industrial-construction": ["review", "finalProof"],
  "/websites-for-accountants": ["review", "finalProof"],
  "/websites-for-psychologists": ["review", "finalProof"],
  "/websites-for-optometrists": ["review", "finalProof"],
  "/websites-for-physical-therapists": ["review", "finalProof"],
  "/websites-for-dentists": ["review", "finalProof"],
  "/websites-for-chiropractors": ["review", "finalProof"],
  "/websites-for-physicians": ["review"],
};

export function isProofVerified(route: string, slot: "review" | "finalProof"): boolean {
  return verified[route]?.includes(slot) ?? false;
}