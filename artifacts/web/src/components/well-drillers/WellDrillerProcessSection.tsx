import { Phone, LayoutDashboard, Users, Network, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useSectionHalfViewEvent } from "@/lib/wellDrillerAnalytics";

/** Five connected steps — "conversation → custom demo → decision → build" (spec §9). */
const STEPS = [
  {
    icon: Phone,
    title: "Tell Us What You Want the Site to Do",
    desc: "In a short conversation, we learn your service area, priority work, current website frustrations, and what a real win would look like for the business.",
  },
  {
    icon: LayoutDashboard,
    title: "We Build Your Free Custom Demo",
    desc: "We turn that conversation into a homepage direction built around your company, not a generic theme or a slideshow of vague ideas.",
  },
  {
    icon: Users,
    title: "You Review It With a Founder",
    desc: "You meet with a founder to see the direction, ask direct questions, and decide whether it feels right for your business.",
  },
  {
    icon: Network,
    title: "We Build the Full Lead System",
    desc: "If you choose to move forward, we build service pages, local-search foundations, request paths, mobile experience, and trust proof.",
  },
  {
    icon: Rocket,
    title: "We Launch, Support, and Refresh It",
    desc: "We launch the finished site, route requests to your chosen inbox, maintain it, and provide the current two-year refresh benefit while you are subscribed.",
  },
];

/**
 * "How the Demo Becomes the Website" (spec §9).
 * Fires `well_driller_process_view` once at ~50% visibility.
 */
export function WellDrillerProcessSection() {
  const sectionRef = useSectionHalfViewEvent<HTMLElement>("well_driller_process_view");

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="scroll-mt-[118px] bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] mb-6">
            The First Step Is Simple. The Demo Makes It Real.
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg font-sans leading-relaxed">
            You keep running the crew. We learn what matters to the business, build a clear
            direction, and handle the website work if you decide the new site is worth moving
            forward with.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Desktop connector line running through the step markers */}
          <div
            className="hidden xl:block absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#E85D26]/40 to-transparent"
            aria-hidden="true"
          />
          {/* Mobile / tablet vertical connector */}
          <div
            className="xl:hidden absolute left-[23px] top-3 bottom-3 w-px bg-[#E85D26]/25"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 xl:grid-cols-5 gap-9 xl:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={i * 0.08}>
                  <div className="relative flex xl:block items-start gap-5">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border border-[#E85D26]/60 flex items-center justify-center xl:mb-5">
                      <span className="font-display text-[#B23E16] text-base font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="pt-1.5 xl:pt-0">
                      <div className="hidden xl:block text-[#E85D26] mb-3" aria-hidden="true">
                        <Icon size={19} strokeWidth={2.2} />
                      </div>
                      <h3 className="text-[#1A1A1A] font-sans font-semibold text-lg xl:text-base mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-[#1A1A1A]/70 font-sans text-base xl:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Timing statement (spec §9) — the 10–15 minutes is the conversation, never the demo build */}
        <ScrollReveal delay={0.1} className="mt-12 md:mt-16">
          <div className="max-w-3xl mx-auto rounded-xl border border-[#1A1A1A]/10 bg-white px-6 py-6 md:px-8 md:py-7 text-center">
            <p className="text-[#1A1A1A] font-sans text-base md:text-lg leading-relaxed">
              The demo begins with a short{" "}
              <span className="text-[#B23E16] font-semibold">10–15 minute conversation</span>.
              Most core full-site builds are ready in{" "}
              <span className="text-[#B23E16] font-semibold">7–10 business days</span> once the
              direction, materials, and required access are ready.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
