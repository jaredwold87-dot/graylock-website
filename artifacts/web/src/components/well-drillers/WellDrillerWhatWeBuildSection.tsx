import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import devicesCrop from "@/assets/rosenlund-devices-crop.webp";

/** Feature blocks in the spec's exact order and wording (spec §7). */
const BUILD_ITEMS = [
  {
    title: "Found When Local Customers Search",
    desc: "We structure the site around the drilling, pump, water-system, and service-area searches that matter in your market—so the right people can find the right services at the right time.",
  },
  {
    title: "Credibility That Holds Up Against Competitors",
    desc: "Real work, clear capabilities, service areas, reviews, and trust signals are placed where prospects decide whether to call you or keep looking.",
  },
  {
    title: "Built to Turn Problems Into Requests",
    desc: "Clear service paths, estimate-request forms, phone CTAs, and contact prompts guide visitors toward the next action instead of leaving them to figure it out.",
  },
  {
    title: "Leads Delivered Where You Need Them",
    desc: "Service and estimate requests are sent directly to your designated email inbox so your team can see new opportunities and respond quickly.",
  },
];

export function WellDrillerWhatWeBuildSection() {
  return (
    <section
      id="what-a-better-site-does"
      className="scroll-mt-[118px] bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-[#B23E16] text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] mb-4">
            What a Better Website Is Built to Do
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] mb-5">
            Get Found. Earn the Call. Make the Next Step Easy.
          </h2>
          <p className="font-display italic text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed">
            When someone needs drilling, pump work, or water-system help, your website should
            make three things clear: you serve their area, you do the work they need, and they
            know exactly how to reach you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Live-build visual — the Rosenlund site on real devices */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#17161B]">
              <img
                src={devicesCrop}
                alt="The Rosenlund Drilling website by Graylock Digital — clear service paths and quote requests shown on a laptop and phone"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="order-1 lg:order-2">
            <ul className="space-y-7">
              {BUILD_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <CheckCircle2
                    size={24}
                    strokeWidth={2}
                    className="text-[#E85D26] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-[#1A1A1A] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#1A1A1A]/70 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
