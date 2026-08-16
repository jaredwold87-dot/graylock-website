import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  BadgeCheck,
  Database,
  MonitorSmartphone,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorIdxConfig } from "./idxConfig";
import idxBrokerLogo from "@/assets/elm-street-idx-broker-logo.webp";
import idxBg from "@/assets/realtor-idx-bg.webp";

/**
 * Three-stage MLS/IDX explanation — reduces fear without legal overpromising.
 * Simplified from the old five-step timeline per the conversion scope.
 */
const IDX_STAGES = [
  {
    title: "Plan Your Market + Lead Flow",
    desc: "We learn your market, brokerage, MLS, current site, and the buyer/seller experience you want. Then we recommend the site structure, IDX approach, and scope.",
  },
  {
    title: "Confirm Eligibility While We Build",
    desc: "You complete only the market-specific brokerage or MLS items that require your involvement. Graylock builds the custom site, prepares the search and capture paths, and keeps the project moving.",
  },
  {
    title: "Test, Launch + Support",
    desc: "When the required approvals and technical requirements are ready, we test the search experience and disclosures, launch on your domain, and maintain the website after launch.",
  },
];

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
      className="relative bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      <img
        src={idxBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10,10,10,0.78)" }}
      />

      <div className="relative z-10">
        <ScrollReveal className="text-center max-w-[860px] mx-auto">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Elm Street IDX Broker + MLS Guidance
          </p>
          <h2 className="font-display text-white text-4xl md:text-[52px] leading-[1.08] mb-6">
            The MLS Process Should Not Hold Up Your Website.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed">
            You stay in control of your MLS relationship. Graylock manages the website work,
            guides the technical path, and helps keep approval steps moving without making
            you figure out the website side alone.
          </p>
        </ScrollReveal>

        {/* Plain-English IDX explainer + flat flow visual (MLS → IDX → your site) */}
        <ScrollReveal delay={0.05} className="mt-9 md:mt-10 text-center">
          <p className="text-stone font-sans text-base md:text-lg leading-relaxed max-w-[720px] mx-auto">
            <span className="text-white font-semibold">What is IDX?</span> IDX (Internet
            Data Exchange) is the approved connection that lets your website display live
            MLS listings &mdash; so buyers can search real homes right on your site
            instead of a big national portal.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col items-center w-[190px]">
              <Database size={24} strokeWidth={1.75} className="text-[#E85D26]" aria-hidden="true" />
              <p className="font-display text-white text-xl leading-none mt-3">Your Local MLS</p>
              <p className="text-stone font-sans text-xs mt-1.5">Where listings live</p>
            </div>
            <ArrowRight size={20} className="hidden sm:block text-[#E85D26] flex-shrink-0" aria-hidden="true" />
            <ArrowDown size={18} className="sm:hidden text-[#E85D26]" aria-hidden="true" />
            <div className="flex flex-col items-center w-[190px]">
              <ArrowLeftRight size={24} strokeWidth={1.75} className="text-[#E85D26]" aria-hidden="true" />
              <p className="font-display text-white text-xl leading-none mt-3">IDX</p>
              <p className="text-stone font-sans text-xs mt-1.5">The approved data feed</p>
            </div>
            <ArrowRight size={20} className="hidden sm:block text-[#E85D26] flex-shrink-0" aria-hidden="true" />
            <ArrowDown size={18} className="sm:hidden text-[#E85D26]" aria-hidden="true" />
            <div className="flex flex-col items-center w-[190px]">
              <MonitorSmartphone size={24} strokeWidth={1.75} className="text-[#E85D26]" aria-hidden="true" />
              <p className="font-display text-white text-xl leading-none mt-3">Your Website</p>
              <p className="text-stone font-sans text-xs mt-1.5">Branded local search</p>
            </div>
          </div>
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
          {/* Partner trust line */}
          <p className="mt-3.5 flex items-center justify-center gap-2 text-offwhite/90 font-sans font-bold uppercase tracking-[0.18em] text-xs">
            <BadgeCheck size={15} strokeWidth={2.25} className="text-[#E85D26] flex-shrink-0" aria-hidden="true" />
            IDX Broker Developer Partner
          </p>
        </ScrollReveal>

        {/* Three stages — flat editorial columns over the photo, no cards */}
        <ol className="max-w-5xl mx-auto mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 list-none">
          {IDX_STAGES.map((stage, i) => (
            <li key={stage.title}>
              <ScrollReveal delay={i * 0.08}>
                <span
                  aria-hidden="true"
                  className="block font-display text-[40px] font-bold leading-none text-[#E85D26]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div aria-hidden="true" className="h-[3px] w-9 bg-[#E85D26] mt-4 mb-4" />
                <h3 className="font-display text-white text-[22px] md:text-2xl leading-snug mb-2.5">
                  <span className="sr-only">{`Stage ${i + 1}: `}</span>
                  {stage.title}
                </h3>
                <p className="text-stone font-sans text-[15px] md:text-base leading-relaxed">
                  {stage.desc}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        {/* Timing qualification — honest split between what we control and
            what the MLS controls */}
        <ScrollReveal delay={0.1} className="mt-14 text-center">
          <p className="text-offwhite font-sans text-sm md:text-base leading-relaxed max-w-[780px] mx-auto">
            Website build: typically 7&ndash;10 business days after direction and content
            are ready.{" "}
            <span className="text-stone">
              MLS, brokerage, provider, and data-approval timing varies by market and
              remains outside Graylock&rsquo;s control.
            </span>
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
      </div>
    </section>
  );
}
