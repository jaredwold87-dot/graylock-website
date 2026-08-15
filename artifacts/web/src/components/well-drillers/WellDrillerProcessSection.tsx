import { Phone, LayoutDashboard, CheckCircle2, Network, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useSectionHalfViewEvent } from "@/lib/wellDrillerAnalytics";

const STEPS = [
  {
    icon: Phone,
    title: "15-Minute Discovery Call",
    desc: "We learn what you do, where you work, what your current site is missing, and what kinds of jobs you want more of.",
  },
  {
    icon: LayoutDashboard,
    title: "Free Custom Homepage Demo",
    desc: "We create a real homepage direction for your business so you can see how your company could look online before you spend a dollar.",
  },
  {
    icon: CheckCircle2,
    title: "You Approve the Direction",
    desc: "If the design and strategy feel right, you approve the direction. If not, there is no pressure and no obligation to continue.",
  },
  {
    icon: Network,
    title: "We Build Your Lead System",
    desc: "We build the pages, service paths, area coverage, request forms, local visibility foundation, and mobile experience around your actual business.",
  },
  {
    icon: Rocket,
    title: "We Launch + Keep It Current",
    desc: "We launch on your domain, route requests to your inbox, maintain the site, and refresh it every two years while you remain subscribed.",
  },
];

/**
 * Five connected steps on a dark background with orange connectors (spec §8).
 * Fires `well_driller_process_view` once at ~50% visibility.
 */
export function WellDrillerProcessSection() {
  const sectionRef = useSectionHalfViewEvent<HTMLElement>("well_driller_process_view");

  return (
    <section
      ref={sectionRef}
      className="bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            You Keep Running the Crew. We Handle the Website.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            No drawn-out agency process. No generic theme dropped on your business. We make the
            direction clear, build the site around your market, and launch a system designed to
            bring the right requests to your team.
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
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#0f0f0f] border border-[#E85D26]/50 flex items-center justify-center xl:mb-5">
                      <span className="font-display text-[#E85D26] text-base font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="pt-1.5 xl:pt-0">
                      <div className="hidden xl:block text-[#E85D26] mb-3" aria-hidden="true">
                        <Icon size={19} strokeWidth={2.2} />
                      </div>
                      <h3 className="text-white font-sans font-semibold text-lg xl:text-base mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-stone font-sans text-base xl:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Timing statement (spec §8) */}
        <ScrollReveal delay={0.1} className="mt-12 md:mt-16">
          <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-white/[0.03] px-6 py-6 md:px-8 md:py-7 text-center">
            <p className="text-white font-sans text-base md:text-lg leading-relaxed mb-3">
              Most core website builds are designed, built, and ready to launch in{" "}
              <span className="text-[#E85D26] font-semibold">7–10 business days</span> once the
              direction, needed materials, and approvals are ready.
            </p>
            <p className="text-stone/80 font-sans text-sm leading-relaxed">
              Real-world inputs such as client content, third-party services, or domain access can
              affect timing. Graylock will keep the path clear and moving.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
