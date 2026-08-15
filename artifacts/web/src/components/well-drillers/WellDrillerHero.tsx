import { Check, ArrowDown } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";
import heroDesktop from "@/assets/hero-well-drillers.webp";
import heroMobile from "@/assets/hero-well-drillers-mobile.webp";

const PROOF_ITEMS = [
  "Built for local search visibility",
  "Service + estimate requests sent to your inbox",
  "Designed to win the first impression on mobile",
  "Free website refresh every two years while subscribed",
];

const HERO_ALT =
  "The Rosenlund Drilling website built by Graylock Digital, shown on a laptop and phone";

/** Hero proof line (spec §4). */
const REASSURANCE =
  "No upfront cost to see the direction. No obligation after the demo. You decide after you see something built for your business.";

function scrollToDemo(event: React.MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById("free-custom-demo");
  if (!target) return; // default anchor behavior still works
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

function HeroCopy() {
  return (
    <>
      <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
        For Well Drillers We Believe We Can Help
      </p>
      <h1 className="text-[2.5rem] md:text-5xl xl:text-[2.95rem] font-display text-white leading-[1.12] xl:leading-[1.08] mb-6">
        <span className="block text-balance">We Didn't Reach Out to Sell You</span>
        <span className="block text-balance text-[#E85D26]">A Generic Website.</span>
      </h1>
      <p className="text-stone text-lg md:text-xl font-sans mb-6 max-w-xl xl:max-w-[520px] leading-snug md:leading-relaxed">
        We reached out because we see an opportunity for your business to look stronger online,
        be easier to find locally, and turn more of the right visitors into real service and
        estimate requests. Before you decide anything, we build a custom homepage demo around
        your company—free and with no obligation.
      </p>
    </>
  );
}

function HeroCtas({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <div
      className={
        fullWidth ? "flex flex-col items-stretch gap-5 mb-5" : "flex flex-col items-start gap-5 mb-6"
      }
    >
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
      <a
        href="#free-custom-demo"
        onClick={scrollToDemo}
        className={
          "inline-flex items-center gap-2 text-stone hover:text-[#E85D26] font-sans font-semibold text-[13px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange" +
          (fullWidth ? " self-center" : "")
        }
      >
        See How the Demo Works
        <ArrowDown size={15} aria-hidden="true" />
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

export function WellDrillerHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      {/* ── Mobile / tablet / small desktop (<1280px): two-part hero — text block
             first, then the device asset in a dedicated media container with no
             destructive crop, so the device proof stays visible ── */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-12 pb-10">
          <ScrollReveal>
            <HeroCopy />
            <HeroCtas fullWidth />
            <p className="text-offwhite font-sans text-sm leading-snug text-center sm:text-left text-balance">
              {REASSURANCE}
            </p>
          </ScrollReveal>
        </div>

        {/* Dedicated full-width media container — object-fit: contain behavior via
            native aspect ratio (the asset is 16:9); no crop, screens stay visible */}
        <div className="relative z-10 w-full" style={{ backgroundColor: "#1B191F" }}>
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktop} />
            <img
              src={heroMobile}
              alt={HERO_ALT}
              className="w-full h-auto"
              style={{ aspectRatio: "16 / 9", objectFit: "contain" }}
              loading="eager"
              decoding="async"
            />
          </picture>
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
          <div className="relative h-[clamp(700px,82vh,820px)] overflow-hidden">
            {/* Device asset anchored bottom-right at its native aspect ratio so the
                laptop and phone screens are never cropped or covered; canvas color
                is sampled from the asset's own edges so it reads as one full-bleed
                background */}
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
              {/* Vertical centering biased to ~48% of hero height; copy column ≤ 610px */}
              <div className="w-[min(52%,610px)] pb-10">
                <ScrollReveal>
                  <HeroCopy />
                  <HeroCtas />
                  <p className="text-stone/80 font-sans text-base max-w-[500px]">{REASSURANCE}</p>
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
