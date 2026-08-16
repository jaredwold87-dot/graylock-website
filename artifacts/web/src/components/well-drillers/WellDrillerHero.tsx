import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";
import heroDesktop from "@/assets/hero-well-drillers.webp";
import devicesCutout from "@/assets/rosenlund-devices-square.webp";

const PROOF_ITEMS = [
  "Built for local search visibility",
  "Service + estimate requests sent to your inbox",
  "Designed to win the first impression on mobile",
  "Free website refresh every two years while subscribed",
];

const HERO_ALT =
  "The Rosenlund Drilling website built by Graylock Digital, shown on a laptop and phone";

/** Single reassurance line (hero refinement spec) — the only microcopy in the hero. */
const REASSURANCE = "Free custom direction. No obligation. You decide after you see something real.";

function HeroCopy() {
  return (
    <>
      <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
        Lead Generating Websites for Well Drillers
      </p>
      {/* H1: direct question — qualifier → payoff; second line in Graylock orange */}
      {/* Cap tuned so each phrase holds a single line on desktop (≤ 2 lines total) */}
      <h1 className="font-display uppercase text-white leading-[1.05] mb-6 text-[clamp(34px,3.1vw,44px)]">
        <span className="block text-balance">Are You a Hard-Working Well-Driller</span>
        <span className="block text-balance">That Needs a Better Website?</span>
      </h1>
      <p className="text-stone text-lg font-sans leading-relaxed mb-7 max-w-[510px]">
        We build custom well-driller websites that make it easier to get found, earn trust
        fast, and turn service or estimate requests into real conversations.
      </p>
    </>
  );
}

/** One CTA only — the demo request. No secondary action in the first screen. */
function HeroCta({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <div className={fullWidth ? "flex flex-col items-stretch mb-5" : "mb-5"}>
      <CTAButton
        href={wellDrillerGetStartedHref("hero_cta")}
        variant="funnel"
        className={fullWidth ? "w-full" : undefined}
        onClick={() =>
          trackWellDrillerEvent("well_driller_demo_cta_click", {
            cta_placement: "hero_cta",
          })
        }
      >
        Request My Free Custom Demo
      </CTAButton>
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

export function WellDrillerHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      {/* ── Mobile / tablet / small desktop (<1280px): text first, then the device
             asset in a dedicated media container with no destructive crop ── */}
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

        {/* pt clears the fixed (transparent-at-top) global navbar */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-[96px] md:pt-[108px] pb-10">
          <ScrollReveal>
            <HeroCopy />
            {/* Transparent laptop + phone cutout (same asset as "What We Do") — sits
                above the CTA; replaces the old full-bleed photo container on mobile */}
            <img
              src={devicesCutout}
              alt={HERO_ALT}
              className="w-full max-w-[560px] mx-auto h-auto mb-7"
              loading="eager"
              decoding="async"
            />
            <HeroCta fullWidth />
            <p className="text-offwhite font-sans text-sm leading-snug text-center sm:text-left">
              {REASSURANCE}
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
             uncovered (no overlay or gradient over the device screens) ── */}
      <div className="hidden xl:block" style={{ backgroundColor: "#1B191F" }}>
        <div className="relative max-w-[1920px] mx-auto">
          {/* Full first screen: hero runs to the fold; proof bar starts below it */}
          <div className="relative h-screen min-h-[620px] overflow-hidden">
            {/* Device asset anchored bottom-right at its native aspect ratio so the
                laptop and phone screens are never cropped or covered */}
            <img
              src={heroDesktop}
              alt={HERO_ALT}
              fetchPriority="high"
              decoding="async"
              className="absolute bottom-0 right-0 h-[90%] max-h-[min(calc(50vw-90px),820px)] w-auto max-w-none"
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
            {/* Copy is bottom-anchored like the device image so the eyebrow line
                stays level with the top of the laptop across viewport sizes */}
            <div className="relative z-10 max-w-7xl h-full mx-auto px-6 md:px-12 flex items-end">
              <div className="w-[min(56%,640px)] pb-[min(calc(41vw-453px),293px)]">
                <ScrollReveal>
                  <HeroCopy />
                  <HeroCta />
                  <p className="text-stone/80 font-sans text-base max-w-[510px]">{REASSURANCE}</p>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Proof row: one horizontal row of four items */}
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
