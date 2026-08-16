import { Search, MessageSquareText, BadgeDollarSign, MapPin, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import willowBg from "@/assets/realtor-willow-bg.webp";
import willowLiveHome from "@/assets/willow-live-home.webp";

const WILLOW_LIVE_URL = "https://willowrealestategroup.com/";

const FEATURES = [
  {
    icon: Search,
    title: "Buyer Search",
    desc: "Keep property exploration on your own branded experience when IDX eligibility allows.",
  },
  {
    icon: MessageSquareText,
    title: "Property Detail",
    desc: "Give high-intent visitors an easy way to ask a question while they are looking at a home.",
  },
  {
    icon: BadgeDollarSign,
    title: "Seller Valuation",
    desc: "Capture address, timing, and context before the listing conversation starts.",
  },
  {
    icon: MapPin,
    title: "Local-Market Pages",
    desc: "Show clients why you know their neighborhood\u2014not just how to search it.",
  },
];

/**
 * Willow Realty Group proof module — the differentiation engine of the page.
 * A real build the visitor can open, framed in browser chrome over an
 * atmospheric photo band. Flat feature rows, no cards.
 */
export function RealtorWillowProofSection() {
  return (
    <section
      id="willow-proof"
      className="relative bg-[#0f0f0f] overflow-hidden border-t border-white/5 py-20 md:py-28 px-6 md:px-12 scroll-mt-20"
    >
      <img
        src={willowBg}
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-[860px] mx-auto">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Built for Willow Realty Group
          </p>
          <h2 className="font-display text-white text-4xl md:text-[52px] leading-[1.08] mb-6">
            A Real-Estate Website That Keeps the Next Step on Your Brand.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed">
            Willow Realty Group needed more than a polished homepage. Graylock built a
            custom Southern Idaho experience with branded property search, property-detail
            pages, seller valuation capture, team content, and direct inquiry paths designed
            to move visitors toward a real conversation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 xl:gap-14 items-center mt-14 md:mt-16">
          {/* Feature rows — flat, no boxes */}
          <div className="space-y-8 max-w-[520px] xl:max-w-none mx-auto xl:mx-0">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className="text-[#E85D26] flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-white text-xl md:text-[22px] leading-snug mb-1.5">
                      {title}
                    </h3>
                    <p className="text-stone font-sans text-[15px] md:text-base leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Live-site screenshot in browser chrome */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <div className="bg-[#1C1C1E] h-9 flex items-center px-3.5 gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="hidden sm:block mx-auto bg-white/[0.07] rounded px-4 py-0.5 font-sans text-[11px] text-stone/90">
                  willowrealestategroup.com
                </span>
              </div>
              <img
                src={willowLiveHome}
                alt="Willow Realty Group website homepage with branded property search"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="text-center mt-12 md:mt-14">
          <a
            href={WILLOW_LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackRealtorEvent("realtor_willow_case_study_open", {
                cta_placement: "willow_case_study",
              })
            }
            className="inline-flex items-center gap-2 border-2 border-[#E85D26] text-[#E85D26] hover:bg-[#E85D26] hover:text-white transition-colors font-sans font-semibold uppercase tracking-wide text-sm px-7 py-3.5 rounded"
          >
            Explore the Willow Experience
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <p className="mt-9 font-hand font-semibold text-[28px] md:text-[38px] leading-snug text-[#E85D26]">
            Keep the search. Own the conversation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
