import { ArrowDown, Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackAuctioneerEvent } from "@/lib/auctioneerAnalytics";
import { auctioneerGetStartedHref, AUCTIONEER_CTA_LABEL } from "@/lib/auctioneerLinks";
import benevolentDevices from "@/assets/benevolent-auctions-devices.webp";
import hallTexture from "@/assets/auctioneer-hero-hall.webp";

/**
 * Four proof items below the CTA — repositioned to the hiring audience
 * (client direction, Aug 2026): the site markets the auctioneer to the
 * nonprofits, committees, and organizers who hire them — not to
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

const HERO_ALT =
  "The Benevolent Auctions website built by Graylock Digital, shown on a laptop and phone with a fundraising auction consultation call to action";

function HeroCopy() {
  return (
    <>
      <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
        Custom Websites for Auctioneers
      </p>
      {/* H1 — second line in Graylock orange (spec). Cap tuned so the copy
          column clears the devices in the full-bleed composition on desktop. */}
      <h1 className="font-display uppercase text-white leading-[1.05] mb-6 text-[clamp(34px,3.1vw,46px)]">
        <span className="block text-balance">When an Organization Needs an Auctioneer,</span>
        <span className="block text-balance text-[#E85D26]">
          Your Website Should Reflect Your Skill and Expertise.
        </span>
      </h1>
      <p className="text-stone text-lg font-sans leading-relaxed mb-7 max-w-[540px]">
        We build custom auctioneer websites that showcase your services, establish
        trust with the nonprofits, committees, and sellers who hire you, and turn more
        of the right visitors into booking conversations.
      </p>
    </>
  );
}

function HeroCtas({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <div
      className={
        fullWidth
          ? "flex flex-col items-stretch gap-5 mb-5"
          : "flex flex-col sm:flex-row sm:items-center gap-5 mb-5"
      }
    >
      <CTAButton
        href={auctioneerGetStartedHref("hero")}
        variant="funnel"
        className={fullWidth ? "w-full" : "w-full sm:w-auto"}
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
        className={`inline-flex items-center gap-2 text-stone hover:text-[#E85D26] font-sans font-semibold text-[13px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
          fullWidth ? "justify-center" : "justify-center sm:justify-start"
        }`}
      >
        See How the Free Demo Works
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    </div>
  );
}

function ProofItem({ text }: { text: string }) {
  return (
    <div className="flex items-start md:items-center gap-2.5">
      <Check size={15} strokeWidth={2.5} className="text-[#E85D26] flex-shrink-0 mt-0.5 md:mt-0" />
      <span className="text-stone font-sans text-sm md:text-[15px] leading-snug">{text}</span>
    </div>
  );
}

/**
 * Hero (spec §1): copy left, device composition right, CTA above the fold,
 * proof items in a 2×2 grid on mobile.
 *
 * The real Benevolent Auctions website appears on a transparent laptop +
 * phone composition. Desktop places it over the auction-hall texture beside
 * the copy; smaller screens place it between the copy and CTA.
 */
export function AuctioneerHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      {/* ── Mobile / tablet / small desktop (<1280px) ── */}
      <div className="xl:hidden relative">
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
        {/* Layer 2: dim empty-auction-hall material detail */}
        <img
          src={hallTexture}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="absolute inset-y-0 right-0 w-full h-full object-cover opacity-[0.16] pointer-events-none"
          style={{
            maskImage: "linear-gradient(to left, black 45%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to left, black 45%, transparent 95%)",
          }}
        />
        {/* Layer 3: warm glow behind the devices */}
        <div
          className="absolute -right-32 top-1/3 w-[520px] h-[520px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle, rgba(176,141,87,0.14) 0%, rgba(232,93,38,0.05) 45%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-[96px] md:pt-[108px] pb-10">
          <ScrollReveal>
            <HeroCopy />
            {/* Transparent laptop + phone cutout (real Benevolent Auctions project) */}
            <img
              src={benevolentDevices}
              alt={HERO_ALT}
              className="w-full max-w-[560px] mx-auto h-auto mb-7"
              loading="eager"
              decoding="async"
            />
            <HeroCtas fullWidth />
            <p className="text-offwhite font-sans text-sm leading-snug text-center sm:text-left">
              {REASSURANCE}
            </p>
          </ScrollReveal>
        </div>

        {/* Proof row — 2×2 grid on mobile (spec responsive rules) */}
        <div className="relative z-10 bg-black border-t border-white/[0.08] px-6 md:px-12 py-6 md:py-5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {PROOF_ITEMS.map((text) => (
              <ProofItem key={text} text={text} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop (1280px+): copy left, real project devices right ── */}
      <div className="hidden xl:block">
        <div className="relative max-w-[1920px] mx-auto overflow-hidden">
          <div className="relative min-h-[720px]">
            <img
              src={hallTexture}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.24]"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,15,15,0.98) 0%, rgba(15,15,15,0.91) 36%, rgba(15,15,15,0.48) 68%, rgba(15,15,15,0.72) 100%)",
              }}
            />
            <div
              className="absolute right-[-2%] top-1/2 w-[60%] h-[76%] rounded-full pointer-events-none"
              aria-hidden="true"
              style={{
                transform: "translateY(-50%)",
                background:
                  "radial-gradient(circle, rgba(176,141,87,0.16) 0%, rgba(232,93,38,0.06) 45%, transparent 72%)",
              }}
            />
            <div className="relative z-10 max-w-7xl min-h-[720px] mx-auto px-12 grid grid-cols-[0.88fr_1.12fr] items-center gap-8">
              <div className="max-w-[540px]">
                <ScrollReveal>
                  <HeroCopy />
                  <HeroCtas />
                  <p className="text-stone/80 font-sans text-base max-w-[540px]">{REASSURANCE}</p>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.08}>
                <img
                  src={benevolentDevices}
                  alt={HERO_ALT}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full max-w-[760px] ml-auto h-auto"
                  style={{ filter: "drop-shadow(0 30px 38px rgba(0,0,0,0.48))" }}
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Proof row — one horizontal row of four items */}
          <div className="relative z-10 bg-black border-t border-white/[0.08] px-6 md:px-12 py-5">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-x-6 gap-y-4">
              {PROOF_ITEMS.map((text) => (
                <ProofItem key={text} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
