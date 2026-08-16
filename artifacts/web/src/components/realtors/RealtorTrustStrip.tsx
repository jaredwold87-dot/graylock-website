import { ShieldCheck, Sparkles, Globe } from "lucide-react";

/**
 * Single quiet trust bar closing the hero — three short claims, matte black,
 * minimal orange line icons, no subtext or logos. Three columns on desktop,
 * one stacked column on mobile.
 */
const TRUST_ITEMS = [
  { icon: ShieldCheck, text: "One Brokerage Per Local Market" },
  { icon: Sparkles, text: "Free Custom Homepage Direction" },
  { icon: Globe, text: "Built on Your Domain. Yours to Keep." },
];

export function RealtorTrustStrip() {
  return (
    <section className="bg-black border-t border-white/[0.08] px-6 md:px-12 py-6 md:py-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-6">
        {TRUST_ITEMS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center md:justify-center gap-3">
            <Icon
              size={20}
              strokeWidth={1.75}
              className="text-[#E85D26] flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-offwhite/90 font-sans font-semibold uppercase tracking-wide text-[11px] md:text-xs leading-snug">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
