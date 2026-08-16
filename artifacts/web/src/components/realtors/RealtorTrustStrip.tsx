import { ShieldCheck, PencilRuler, Globe, RefreshCw } from "lucide-react";

/**
 * Immediate trust strip below the hero — answers "can I trust this process?"
 * before the proof modules. Matte black, four equal items, minimal orange
 * line icons (no logos), 2x2 on mobile.
 */
const TRUST_ITEMS = [
  { icon: ShieldCheck, text: "Elm Street IDX Broker Developer Partner" },
  { icon: PencilRuler, text: "Free Custom Direction Before Build Fee" },
  { icon: Globe, text: "Built on Your Domain" },
  { icon: RefreshCw, text: "Month-to-Month Support + Refreshes While Subscribed" },
];

export function RealtorTrustStrip() {
  return (
    <section className="bg-black border-t border-white/[0.08] px-6 md:px-12 py-7 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
        {TRUST_ITEMS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start md:items-center gap-3">
            <Icon
              size={20}
              strokeWidth={1.75}
              className="text-[#E85D26] flex-shrink-0 mt-0.5 md:mt-0"
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
