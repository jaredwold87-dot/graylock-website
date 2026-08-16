import { useEffect, useRef } from "react";
import { Clock, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorIdxConfig } from "./idxConfig";
import idxBrokerLogo from "@/assets/elm-street-idx-broker-logo.webp";

const IDX_STEPS = [
  {
    title: "START WITH YOUR MARKET + GOALS",
    desc: "We learn your market, brokerage, local MLS, and the buyer and seller experience you want your new website to create.",
  },
  {
    title: "BEGIN IDX + MLS APPROVAL",
    desc: "We start your IDX Broker setup. Elm Street\u2019s approval team helps move the local MLS process forward while we guide you through any required client steps.",
  },
  {
    title: "BUILD YOUR SITE + INTEGRATE LISTINGS",
    desc: "While approval is underway, we build the complete custom site and connect branded property search, listing pages, and lead-capture paths.",
  },
  {
    title: "COMPLETE MLS REVIEW + FINAL TESTING",
    desc: "Once the MLS requirements are ready, we submit the website details needed for any required review, test the search experience, and address website-side requests.",
  },
  {
    title: "LAUNCH YOUR NEW REAL ESTATE WEBSITE",
    desc: "After required approvals and final testing are complete, we launch your site with live listings, clear buyer and seller paths, and a polished mobile experience.",
  },
];

/** Faint blueprint-grid backdrop behind the process cards (4-6% opacity). */
const BLUEPRINT_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

export function RealtorIdxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const firedRef = useRef(false);

  // Fire realtor_idx_process_view once the section reaches at least 50%
  // viewport visibility. Sections taller than the viewport can never hit a
  // 50% intersection ratio, so also count "intersection covers half the
  // viewport" as visible.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (firedRef.current) return;
          const coversHalfViewport =
            entry.intersectionRect.height >= window.innerHeight * 0.5;
          if (entry.isIntersecting && (entry.intersectionRatio >= 0.5 || coversHalfViewport)) {
            firedRef.current = true;
            trackRealtorEvent("realtor_idx_process_view");
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="idx-process"
      className="bg-[#0f0f0f] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      <ScrollReveal className="text-center max-w-[900px] mx-auto">
        <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
          Elm Street IDX Broker + MLS Integration
        </p>
        <h2 className="font-display uppercase text-white text-4xl md:text-6xl leading-[1.05] mb-6">
          <span className="block">From Property Search to Launch,</span>
          <span className="block text-[#E85D26]">We Make IDX Simple.</span>
        </h2>
        <p className="text-stone text-lg font-sans leading-relaxed">
          As an Elm Street IDX Broker Developer Partner, we handle the website integration
          and guide you through the setup. IDX Broker helps coordinate the local MLS
          approval path while we build a custom real estate website that keeps listings,
          search, and lead capture working together.
        </p>
      </ScrollReveal>

      {/* Compact partner / reassurance strip — outlined band, not a box */}
      <ScrollReveal delay={0.1} className="mt-8 text-center">
        {/* Partner logo badge — the Elm Street IDX Broker logo is navy/green and
            needs a light background, so it sits in its own white chip */}
        <div className="mb-5">
          <div className="inline-flex items-center rounded-lg bg-white px-6 py-3.5">
            <img
              src={idxBrokerLogo}
              alt="Elm Street IDX Broker"
              className="h-9 md:h-11 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="inline-flex items-start sm:items-center gap-3 rounded-lg border border-white/15 px-5 py-3.5 text-left sm:text-center max-w-[820px]">
          <ShieldCheck size={20} className="text-[#E85D26] shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-offwhite font-sans text-sm md:text-base leading-snug">
            You handle the few details only you can. We handle the strategy, design, IDX
            integration, testing, and launch.
          </p>
        </div>
        <p className="mt-3 text-stone/90 font-sans text-xs md:text-sm leading-relaxed max-w-[720px] mx-auto">
          Your local MLS or brokerage may ask you to complete market-specific paperwork or
          respond to an approval email. We will tell you exactly what is needed and keep
          the technical work moving.
        </p>
      </ScrollReveal>

      {/* Five-step process — connected timeline on desktop, vertical line on mobile */}
      <div className="relative max-w-[1280px] mx-auto mt-14 md:mt-16">
        <div
          aria-hidden="true"
          className="absolute -inset-x-6 -inset-y-8 pointer-events-none"
          style={BLUEPRINT_GRID_STYLE}
        />

        {/* Desktop connector: thin charcoal line with an orange dot per step */}
        <div aria-hidden="true" className="hidden xl:grid grid-cols-5 gap-5 relative mb-8">
          <div className="absolute inset-x-[10%] top-1/2 -translate-y-1/2 h-px bg-[#2b2b2b]" />
          {IDX_STEPS.map((step) => (
            <div key={step.title} className="flex justify-center relative">
              <span className="w-3 h-3 rounded-full bg-[#E85D26]" />
            </div>
          ))}
        </div>

        <div className="relative">
          {/* Mobile connector: thin vertical orange line linking the step numbers */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[7px] top-4 bottom-4 w-px bg-[#E85D26]/40"
          />
          <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 pl-6 md:pl-0 list-none">
            {IDX_STEPS.map((step, i) => (
              <li key={step.title} className="relative h-full">
                <span
                  aria-hidden="true"
                  className="md:hidden absolute -left-[21px] top-10 w-2.5 h-2.5 rounded-full bg-[#E85D26]"
                />
                <ScrollReveal delay={i * 0.08} className="h-full">
                  <div className="h-full xl:min-h-[210px] rounded-xl border border-[#2a2a2a] bg-[#141414] px-5 pt-8 pb-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#B23E16] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <span
                      aria-hidden="true"
                      className="block font-display text-[40px] font-bold leading-none text-[#E85D26]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-white uppercase tracking-wide text-[17px] leading-snug mt-3 mb-2">
                      <span className="sr-only">{`Step ${i + 1}: `}</span>
                      {step.title}
                    </h3>
                    <p className="text-stone font-sans text-sm leading-snug">{step.desc}</p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Timing statement */}
      <ScrollReveal delay={0.1} className="mt-12 text-center max-w-[760px] mx-auto">
        <Clock size={20} className="text-[#E85D26] mx-auto mb-3" aria-hidden="true" />
        <p className="text-offwhite font-sans text-lg leading-relaxed">
          Your custom site is typically designed, built, and ready for launch in 7&ndash;10
          business days.
        </p>
        <p className="mt-2 text-stone font-sans text-sm md:text-base leading-relaxed">
          Local MLS approval timelines and client paperwork can vary by market, but we keep
          the website and IDX work moving while those steps are completed.
        </p>
      </ScrollReveal>

      {/* Required footer note — always visible, real text in the page source */}
      <p className="mt-10 text-stone/90 font-sans text-xs leading-relaxed max-w-3xl mx-auto text-center">
        IDX availability, approval requirements, disclosures, and third-party fees vary by
        local MLS, brokerage, and data provider. Final access remains subject to their
        requirements.
      </p>

      {/* MLS-supplied disclosure markup renders here once an engagement provides
          it; nothing is shown until then (config placeholders only — no vendor
          is hard-coded). */}
      {realtorIdxConfig.idx_disclosure_html ? (
        <div
          className="mt-6 text-stone/90 font-sans text-xs leading-relaxed max-w-3xl mx-auto text-center"
          dangerouslySetInnerHTML={{ __html: realtorIdxConfig.idx_disclosure_html }}
        />
      ) : null}
    </section>
  );
}
