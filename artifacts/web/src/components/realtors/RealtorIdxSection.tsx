import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorIdxConfig } from "./idxConfig";
import idxBrokerLogo from "@/assets/elm-street-idx-broker-logo.webp";

const IDX_STEPS = [
  {
    title: "START WITH YOUR MARKET + GOALS",
    desc: "We learn your market, brokerage, local MLS, and the experience you want your site to create.",
  },
  {
    title: "BEGIN IDX + MLS APPROVAL",
    desc: "We start your IDX Broker setup, and Elm Street\u2019s approval team helps move the local MLS process forward.",
  },
  {
    title: "BUILD YOUR SITE + INTEGRATE LISTINGS",
    desc: "While approval is underway, we build the custom site and connect branded search, listings, and lead capture.",
  },
  {
    title: "COMPLETE MLS REVIEW + FINAL TESTING",
    desc: "We submit the details your MLS requires, test the search experience, and handle any website-side requests.",
  },
  {
    title: "LAUNCH YOUR NEW REAL ESTATE WEBSITE",
    desc: "We launch with live listings, clear buyer and seller paths, and a polished mobile experience.",
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
          As an Elm Street IDX Broker Developer Partner, we handle the strategy, design,
          IDX integration, testing, and launch &mdash; and guide you through the few steps
          only you can take.
        </p>
      </ScrollReveal>

      {/* Partner logo badge — the Elm Street IDX Broker logo is navy/green and
          needs a light background, so it sits in its own white chip */}
      <ScrollReveal delay={0.1} className="mt-8 text-center">
        <div className="inline-flex items-center rounded-lg bg-white px-6 py-3.5">
          <img
            src={idxBrokerLogo}
            alt="Elm Street IDX Broker"
            className="h-9 md:h-11 w-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </ScrollReveal>

      {/* Five-step process — flat editorial timeline, no cards */}
      <div className="relative max-w-[1280px] mx-auto mt-14 md:mt-20">
        <div
          aria-hidden="true"
          className="absolute -inset-x-6 -inset-y-8 pointer-events-none"
          style={BLUEPRINT_GRID_STYLE}
        />

        <div className="relative">
          {/* Mobile connector: thin vertical orange line linking the step numbers */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[7px] top-4 bottom-4 w-px bg-[#E85D26]/40"
          />
          <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-10 pl-6 md:pl-0 list-none">
            {IDX_STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="md:hidden absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full bg-[#E85D26]"
                />
                <ScrollReveal delay={i * 0.08}>
                  <span
                    aria-hidden="true"
                    className="block font-display text-[40px] font-bold leading-none text-[#E85D26]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div aria-hidden="true" className="h-[3px] w-9 bg-[#E85D26] mt-4 mb-4" />
                  <h3 className="font-display text-white uppercase tracking-wide text-[17px] leading-snug mb-2">
                    <span className="sr-only">{`Step ${i + 1}: `}</span>
                    {step.title}
                  </h3>
                  <p className="text-stone font-sans text-sm leading-snug">{step.desc}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Timing closer — handwriting accent instead of an icon card */}
      <ScrollReveal delay={0.1} className="mt-14 md:mt-16 text-center">
        <p className="font-hand font-semibold text-[28px] md:text-[38px] leading-snug text-[#E85D26]">
          Designed, built, and ready to launch in 7&ndash;10 business days.
        </p>
        <p className="mt-4 text-stone font-sans text-sm md:text-base leading-relaxed max-w-[760px] mx-auto">
          Local MLS approval timelines and paperwork vary by market. We tell you exactly
          what is needed and keep the website and IDX work moving while those steps are
          completed.
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
