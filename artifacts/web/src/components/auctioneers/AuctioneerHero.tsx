import { ArrowDown, Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackAuctioneerEvent } from "@/lib/auctioneerAnalytics";
import { auctioneerGetStartedHref, AUCTIONEER_CTA_LABEL } from "@/lib/auctioneerLinks";
import { AuctioneerDeviceMockup } from "./AuctioneerDeviceMockup";
import hallTexture from "@/assets/auctioneer-hero-hall.webp";

/**
 * Four proof items below the CTA — repositioned to the hiring audience
 * (client direction, Aug 2026): the site markets the auctioneer to the
 * nonprofits, committees, estates, and sellers who hire them — not to
 * bidders or auction attendees.
 */
const PROOF_ITEMS = [
  "Service pages that showcase the auctions you actually run",
  "Clear paths for event organizers and sellers to hire you",
  "Booking inquiries delivered straight to your inbox",
  "Built to look exceptional on every screen",
];

const REASSURANCE =
  "Free custom direction. No generic template. No obligation after you see the demo.";

function ProofItem({ text }: { text: string }) {
  return (
    <div className="flex items-start xl:items-center gap-2.5">
      <Check size={15} strokeWidth={2.5} className="text-[#E85D26] flex-shrink-0 mt-0.5 xl:mt-0" />
      <span className="text-stone font-sans text-sm md:text-[15px] leading-snug">{text}</span>
    </div>
  );
}

/**
 * Hero (spec §1): copy left (52–58% on desktop), placeholder device mockup
 * right, CTA above the fold, proof items in a 2×2 grid on mobile. Dark
 * architectural background with a subtle dot texture and a dim auction-hall
 * material detail that stays behind the device visual.
 */
export function AuctioneerHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      {/* Layer 1: faint dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(242,243,245,0.05) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Layer 2: dim empty-auction-hall material detail, right side only */}
      <img
        src={hallTexture}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="absolute inset-y-0 right-0 w-full xl:w-[58%] h-full object-cover opacity-[0.16] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to left, black 45%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to left, black 45%, transparent 95%)",
        }}
      />
      {/* Layer 3: warm glow behind the devices */}
      <div
        className="absolute -right-40 top-1/3 w-[640px] h-[640px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(176,141,87,0.14) 0%, rgba(232,93,38,0.05) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-36 xl:pt-40 pb-14 md:pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] gap-12 xl:gap-8 items-center">
          {/* ── Copy ── */}
          <div>
            <ScrollReveal>
              <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
                Custom Websites for Auctioneers
              </p>
              {/* H1 — second line in Graylock orange (spec) */}
              <h1 className="font-display uppercase text-white leading-[1.05] mb-6 text-[clamp(36px,4.2vw,54px)]">
                <span className="block text-balance">When Someone Needs an Auctioneer,</span>
                <span className="block text-balance text-[#E85D26]">
                  Your Website Should Reflect Your Skill and Expertise.
                </span>
              </h1>
              <p className="text-stone text-lg font-sans leading-relaxed mb-7 max-w-[540px]">
                We build custom auctioneer websites that showcase your services, establish
                trust with the nonprofits, committees, and sellers who hire you, and turn more
                of the right visitors into booking conversations.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-5">
                <CTAButton
                  href={auctioneerGetStartedHref("hero")}
                  variant="funnel"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    trackAuctioneerEvent("auctioneer_hero_cta_click", {
                      cta_placement: "hero",
                    })
                  }
                >
                  {AUCTIONEER_CTA_LABEL}
                </CTAButton>
                <a
                  href="#free-demo-process"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-stone hover:text-[#E85D26] font-sans font-semibold text-[13px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  See How the Free Demo Works
                  <ArrowDown size={14} aria-hidden="true" />
                </a>
              </div>
              <p className="text-stone/80 font-sans text-base max-w-[540px]">{REASSURANCE}</p>
            </ScrollReveal>
          </div>

          {/* ── Device mockup (placeholder until the real project ships) ── */}
          <ScrollReveal delay={0.1}>
            <AuctioneerDeviceMockup className="w-full max-w-[760px] mx-auto xl:mx-0 h-auto" />
          </ScrollReveal>
        </div>
      </div>

      {/* Proof row — 2×2 on mobile (spec responsive rules), one row on desktop */}
      <div className="relative z-10 bg-black border-t border-white/[0.08] px-6 md:px-12 py-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-4">
          {PROOF_ITEMS.map((text) => (
            <ProofItem key={text} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
