import { CTAButton } from "@/components/ui/CTAButton";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorGetStartedHref, REALTOR_CTA_LABEL } from "@/lib/realtorLinks";
import willowDevices from "@/assets/willow-devices-crop.webp";
import listingThumb from "@/assets/realtor-seller-visual.webp";

/** Decorative dot-grid backdrop (same device as the other dark heroes). */
const DOT_GRID_STYLE: React.CSSProperties = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

/**
 * Illustrative listing-detail UI panel — gallery, property facts, inquiry CTA,
 * and an MLS attribution area. Purely decorative (aria-hidden); values are
 * generic mockup content, not a real listing.
 */
function ListingPanel({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-white rounded-lg shadow-2xl shadow-black/50 overflow-hidden select-none pointer-events-none ${className}`}
    >
      <div className="h-1 bg-[#E85D26]" />
      <div className="p-3.5">
        <img src={listingThumb} alt="" className="w-full h-[76px] object-cover rounded-[3px]" />
        <div className="flex gap-1.5 mt-1.5">
          <div className="h-6 flex-1 rounded-[2px] bg-[#E9E5DE]" />
          <div className="h-6 flex-1 rounded-[2px] bg-[#DFD9CF]" />
          <div className="h-6 flex-1 rounded-[2px] bg-[#E9E5DE]" />
        </div>
        <p className="font-display text-[#1A1A1A] text-[15px] leading-none mt-3">
          Listing Details
        </p>
        <div className="flex gap-3 mt-1.5 font-sans text-[10px] font-medium text-[#1A1A1A]/65">
          <span>4 Beds</span>
          <span>3 Baths</span>
          <span>2,400 Sq Ft</span>
        </div>
        <div className="mt-2.5 h-7 rounded-[3px] bg-[#E85D26] flex items-center justify-center">
          <span className="text-white font-sans font-semibold text-[10px] uppercase tracking-wider">
            Ask About This Home
          </span>
        </div>
        <p className="mt-2 font-sans text-[8px] leading-none text-[#1A1A1A]/45">
          Listing data · Local MLS attribution
        </p>
      </div>
    </div>
  );
}

/**
 * Illustrative seller home-valuation UI panel (aria-hidden, decorative).
 */
function ValuationPanel({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-white rounded-lg shadow-2xl shadow-black/50 overflow-hidden select-none pointer-events-none ${className}`}
    >
      <div className="h-1 bg-[#E85D26]" />
      <div className="p-3.5">
        <p className="font-display text-[#1A1A1A] text-[15px] leading-tight">
          What&rsquo;s Your Home Worth?
        </p>
        <div className="mt-2.5 h-8 rounded-[3px] border border-[#1A1A1A]/15 flex items-center px-2.5">
          <span className="font-sans text-[10px] text-[#1A1A1A]/45">Property address</span>
        </div>
        <div className="mt-1.5 h-8 rounded-[3px] border border-[#1A1A1A]/15 flex items-center justify-between px-2.5">
          <span className="font-sans text-[10px] text-[#1A1A1A]/45">
            When are you thinking of selling?
          </span>
          <span className="text-[#1A1A1A]/35 text-[9px]">▾</span>
        </div>
        <div className="mt-2.5 h-8 rounded-[3px] bg-[#E85D26] flex items-center justify-center">
          <span className="text-white font-sans font-semibold text-[10px] uppercase tracking-wider">
            Get My Valuation
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Realtor landing hero — outcome-first headline, one primary CTA, and a
 * product montage (Willow devices + listing / valuation UI panels) instead
 * of a stock lifestyle photo.
 */
export function RealtorHero() {
  return (
    <section className="relative bg-[#0F0F0F] overflow-hidden">
      {/* Backdrop: dot grid + soft orange glows */}
      <div aria-hidden="true" className="absolute inset-0" style={DOT_GRID_STYLE} />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 w-[560px] h-[560px] rounded-full bg-[#E85D26]/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-40 w-[480px] h-[480px] rounded-full bg-[#E85D26]/[0.05] blur-[110px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-36 xl:pt-40 pb-14 md:pb-16 xl:pb-20">
        <div className="flex flex-col xl:flex-row xl:items-center gap-12 xl:gap-16">
          {/* Copy + CTA */}
          <div className="xl:w-[46%] max-w-[640px]">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-5">
              Custom Real-Estate Websites + IDX Guidance
            </p>
            <h1 className="font-display text-white text-[40px] leading-[1.05] sm:text-5xl md:text-6xl xl:text-[62px] mb-6">
              Turn Local Property Searches Into{" "}
              <span className="text-[#E85D26]">Buyer + Seller Conversations.</span>
            </h1>
            <p className="text-stone font-sans text-lg leading-relaxed mb-8 max-w-[560px]">
              We build custom real-estate websites that make your local expertise easy to
              trust, give buyers a branded search experience when eligible, and give sellers
              a clear reason to start the conversation with you.
            </p>

            <CTAButton
              href={realtorGetStartedHref("hero")}
              variant="funnel"
              className="px-8 py-4 text-base"
              onClick={() =>
                trackRealtorEvent("realtor_hero_cta_click", { cta_placement: "hero" })
              }
            >
              {REALTOR_CTA_LABEL}
            </CTAButton>

            <p className="mt-6 text-stone/90 font-sans text-sm leading-relaxed max-w-[520px]">
              Free custom homepage direction. We confirm your MLS path and exact scope
              before you commit.
            </p>
          </div>

          {/* Product montage */}
          <div className="xl:w-[54%]">
            <div className="relative">
              <img
                src={willowDevices}
                alt="Custom real-estate website shown on desktop and mobile"
                className="w-full h-auto relative z-10"
                fetchPriority="high"
                decoding="async"
              />
              {/* Supporting UI panels — beside the devices on wide screens */}
              <ListingPanel className="hidden xl:block absolute z-20 w-[212px] -left-2 -bottom-4" />
              <ValuationPanel className="hidden xl:block absolute z-20 w-[228px] right-0 -top-8" />
            </div>

            {/* Mobile/tablet: panels in a swipeable row under the devices */}
            <div className="xl:hidden mt-6 -mx-6 px-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              <ListingPanel className="min-w-[232px] max-w-[232px] snap-start" />
              <ValuationPanel className="min-w-[244px] max-w-[244px] snap-start" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
