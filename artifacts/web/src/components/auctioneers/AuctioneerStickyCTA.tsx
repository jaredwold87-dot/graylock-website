import { useEffect, useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackAuctioneerEvent } from "@/lib/auctioneerAnalytics";
import { auctioneerGetStartedHref, AUCTIONEER_CTA_LABEL } from "@/lib/auctioneerLinks";

/**
 * The single mobile sticky CTA (spec responsive rules) — one action,
 * appears once the visitor has scrolled past the hero so it never competes
 * with the hero CTA. No other competing mobile actions are exposed.
 */
export function AuctioneerStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lift the floating chat launcher above the bar while it is visible
  // (CSS hook in index.css) so the two never overlap on mobile.
  useEffect(() => {
    document.body.classList.toggle("auctioneer-sticky-visible", visible);
    return () => document.body.classList.remove("auctioneer-sticky-visible");
  }, [visible]);

  return (
    <div
      // `invisible` drops the off-screen bar from the a11y tree AND keyboard
      // focus order; visibility transitions discretely, so the slide-out
      // animation still completes before the bar becomes hidden.
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-[transform,visibility] duration-300 motion-reduce:transition-none ${
        visible ? "translate-y-0 visible" : "translate-y-full invisible"
      }`}
      aria-hidden={!visible}
    >
      <div
        className="bg-[#0F0F0F]/95 backdrop-blur border-t border-white/10 px-4 pt-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <CTAButton
          href={auctioneerGetStartedHref("sticky_cta")}
          variant="funnel"
          className="w-full px-4 py-3.5 text-[15px]"
          onClick={() =>
            trackAuctioneerEvent("auctioneer_hero_cta_click", {
              cta_placement: "sticky_cta",
            })
          }
        >
          {AUCTIONEER_CTA_LABEL}
        </CTAButton>
      </div>
    </div>
  );
}
