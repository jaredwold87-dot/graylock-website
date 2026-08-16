import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorGetStartedHref } from "@/lib/realtorLinks";
import heroDesktop from "@/assets/hero-realtors.webp";
import willowDevices from "@/assets/willow-devices-crop.webp";

const PROOF_ITEMS = [
  "Built to earn buyer and seller trust",
  "IDX property search when eligible",
  "Turn search traffic into conversations",
  "MLS setup guidance from start to launch",
];

const HERO_ALT =
  "The Willow Realty Group real estate website built by Graylock Digital, shown on a laptop and phone";

function HeroCopy() {
  return (
    <>
      <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
        Custom Websites for Real Estate Professionals
      </p>
      <h1 className="text-[2.5rem] md:text-5xl xl:text-[2.95rem] font-display text-white leading-[1.12] xl:leading-[1.08] mb-6">
        <span className="block text-balance">Your Next Client Is Searching.</span>
        <span className="block text-balance">Make Sure They Find You.</span>
      </h1>
      <p className="text-stone text-xl font-sans mb-6 md:mb-8 max-w-xl xl:max-w-[500px] leading-snug md:leading-relaxed">
        We build custom real estate websites that earn trust fast, showcase your market, and
        turn property searches into buyer and seller conversations.
      </p>
    </>
  );
}

function HeroCta({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <CTAButton
      href={realtorGetStartedHref("hero_cta")}
      variant="funnel"
      className={fullWidth ? "w-full" : undefined}
      onClick={() => trackRealtorEvent("realtor_hero_cta_click", { cta_placement: "hero_cta" })}
    >
      Book a Realtor Website Call
    </CTAButton>
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

export function RealtorHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      {/* ── Mobile / tablet / small desktop (<1280px): copy, then the transparent
             device cutout above the CTA — no full-photo hero background ── */}
      <div className="xl:hidden relative">
        {/* Layer 1: faint dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(242,243,245,0.06) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Layer 2: soft orange aurora upper-left */}
        <div
          className="absolute pointer-events-none rounded-full"
          aria-hidden="true"
          style={{
            top: "-120px",
            left: "-100px",
            width: "420px",
            height: "420px",
            background:
              "radial-gradient(circle, rgba(232,93,38,0.30) 0%, rgba(232,93,38,0.10) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Layer 3: orange accent glow upper-right */}
        <div
          className="absolute pointer-events-none rounded-full"
          aria-hidden="true"
          style={{
            top: "-60px",
            right: "-120px",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(232,93,38,0.22) 0%, rgba(232,93,38,0.08) 45%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-10">
          <ScrollReveal>
            <HeroCopy />
            <img
              src={willowDevices}
              alt={HERO_ALT}
              className="w-full max-w-[560px] mx-auto mb-7"
              loading="eager"
              decoding="async"
            />
            <div className="flex justify-center sm:justify-start mb-4">
              <div className="w-full sm:w-auto">
                <HeroCta fullWidth />
              </div>
            </div>
            <p className="text-offwhite font-sans text-sm leading-snug text-center sm:text-left text-balance">
              See a custom homepage direction for your brand before you spend a dollar.
            </p>
          </ScrollReveal>
        </div>

        {/* Proof row: two-by-two grid on mobile, one row from md up */}
        <div className="relative z-10 bg-black border-t border-white/[0.08] px-6 md:px-12 py-6 md:py-5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {PROOF_ITEMS.map((text) => (
              <ProofItem key={text} text={text} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop (1280px+): full-bleed hero — copy left, devices right and
             uncovered ── */}
      <div className="hidden xl:block" style={{ backgroundColor: "#17161B" }}>
        <div className="relative max-w-[1920px] mx-auto">
          <div className="relative h-[clamp(760px,88vh,860px)] overflow-hidden">
            {/* Device asset anchored bottom-right at its native aspect ratio so the
                screens are never cropped or covered; canvas color is sampled from
                the asset's own edges so it reads as one full-bleed background */}
            <img
              src={heroDesktop}
              alt={HERO_ALT}
              fetchPriority="high"
              decoding="async"
              className="absolute bottom-0 right-0 h-[90%] w-auto max-w-none"
            />
            {/* Subtle contrast gradient over the copy side only (≤ rgba(0,0,0,0.18));
                fades out well before the device side of the asset */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 28%, transparent 42%)",
              }}
            />
            <div className="relative z-10 max-w-7xl h-full mx-auto px-6 md:px-12 flex items-center">
              {/* Vertical centering biased downward so the eyebrow's top edge sits
                  level with the top of the laptop in the device asset */}
              <div className="w-[min(52%,620px)] pt-10">
                <ScrollReveal>
                  <HeroCopy />
                  <div className="flex flex-col items-start gap-4 mb-6">
                    <HeroCta />
                  </div>
                  <p className="text-stone/80 font-sans text-base max-w-[500px]">
                    See a custom homepage direction for your brand before you spend a dollar.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Proof row: one horizontal row of four items */}
          <div className="relative z-10 bg-black border-t border-white/[0.08] py-5 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-between gap-x-8 gap-y-2.5">
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
