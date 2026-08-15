import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorIdxConfig } from "./idxConfig";

const IDX_STEPS = [
  {
    title: "Confirm Your Market + MLS",
    desc: "We identify your market, brokerage details, local MLS, and the property-search experience you want buyers to have.",
  },
  {
    title: "Choose the Right IDX Path",
    desc: "We confirm the supported integration approach, required access, expected data fields, and the details your MLS or provider needs.",
  },
  {
    title: "Build + Test the Search Experience",
    desc: "We connect the approved search solution, format listing pages to match your brand, and test the buyer journey across desktop and mobile.",
  },
  {
    title: "Support the Approval Handoff",
    desc: "We provide the website information and technical coordination needed for your local MLS review, then address website-side revisions if they are requested.",
  },
];

export function RealtorIdxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const firedRef = useRef(false);

  // Fire realtor_idx_section_view once the section reaches at least 50%
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
            trackRealtorEvent("realtor_idx_section_view");
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
      className="bg-[#0f0f0f] py-24 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            IDX + MLS Integration, Made Clearer
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            Property Search Should Help You Keep the Conversation.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            An IDX-enabled property search can turn your website into more than an online
            brochure. When your MLS and brokerage eligibility allow it, we connect the right
            search experience to your site and help you work through the local MLS setup
            steps without making you figure out the website side alone.
          </p>
        </ScrollReveal>

        {/* Required reassurance statement */}
        <ScrollReveal delay={0.1} className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="rounded-xl border border-[#E85D26]/30 bg-[#E85D26]/[0.06] p-6 flex items-start gap-4">
            <ShieldCheck size={24} className="text-[#E85D26] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-offwhite font-sans text-base leading-relaxed">
              You stay in control of your MLS relationship. We handle the website work,
              coordinate the technical requirements, and help you move through the approval
              process with a clear checklist.
            </p>
          </div>
        </ScrollReveal>

        {/* Four-step IDX / MLS support sequence — stacked cards with visible step
            numbers on mobile, grid on larger screens, no horizontal scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {IDX_STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6 h-full">
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-bold text-[#E85D26] leading-none"
                  >
                    {i + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#E85D26]/40 to-transparent" />
                </div>
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2 leading-snug">
                  <span className="sr-only">{`Step ${i + 1}: `}</span>
                  {step.title}
                </h3>
                <p className="text-stone font-sans text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Required fine print below the four steps */}
        <ScrollReveal delay={0.1}>
          <p className="mt-8 text-stone/70 font-sans text-xs leading-relaxed max-w-3xl mx-auto text-center">
            IDX availability, required agreements, disclosures, data fields, approval
            procedures, and third-party fees vary by MLS and provider. Final data access and
            approval remain subject to your MLS, brokerage, and data-license requirements.
          </p>
        </ScrollReveal>

        {/* MLS-supplied disclosure markup renders here once an engagement provides
            it; nothing is shown until then (config placeholders only — no vendor
            is hard-coded). */}
        {realtorIdxConfig.idx_disclosure_html ? (
          <div
            className="mt-6 text-stone/70 font-sans text-xs leading-relaxed max-w-3xl mx-auto text-center"
            dangerouslySetInnerHTML={{ __html: realtorIdxConfig.idx_disclosure_html }}
          />
        ) : null}
      </div>
    </section>
  );
}
