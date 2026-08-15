import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import devicesCrop from "@/assets/rosenlund-devices-square.webp";

/** Feature blocks — what the build actually covers. */
const BUILD_ITEMS = [
  {
    title: "Found When Local Customers Search",
    desc: "Search engine optimization is built in from day one. The site is structured around the drilling, pump, water-system, and service-area searches your customers actually type into Google — so you show up when it counts.",
  },
  {
    title: "Credibility That Holds Up Against Competitors",
    desc: "A professional website design, services laid out clearly, and trust signals — experience, licensing, reviews, and real project work — placed exactly where a prospect decides whether to call you or keep looking.",
  },
  {
    title: "Lead Generation Optimization",
    desc: "The flow of the site and every call to action is aimed at your ideal client — guiding them from the problem they arrived with to a service request, quote request, or phone call.",
  },
  {
    title: "Leads Delivered Where You Need Them",
    desc: "Service and quote requests are delivered to your inbox or CRM 24/7, so new opportunities reach your team the moment they come in — not whenever someone remembers to check the website.",
  },
  {
    title: "A Website Viewable on Any Device",
    desc: "Most local searches happen on a phone now. Your site is built mobile-first — fast, readable, and tap-to-call easy — so the first impression holds up on every screen size.",
  },
];

export function WellDrillerWhatWeBuildSection() {
  return (
    <section
      id="what-a-better-site-does"
      className="scroll-mt-[118px] bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="text-[#B23E16] text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-[40px] font-display text-[#1A1A1A] leading-tight">
            When Someone Needs Drilling, Pump Work, or Water-System Help, Your Website Should
            Make Three Things Clear:
          </h2>
        </ScrollReveal>

        {/* The three things, spread across the section width in the handwritten accent style */}
        <ScrollReveal className="mb-14 md:mb-20">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-3 lg:gap-8 text-center">
            <p className="font-hand font-semibold text-[28px] md:text-[32px] xl:text-[36px] text-[#B23E16] leading-snug lg:whitespace-nowrap">
              You do the work they need.
            </p>
            <p className="font-hand font-semibold text-[28px] md:text-[32px] xl:text-[36px] text-[#B23E16] leading-snug lg:whitespace-nowrap">
              You serve their area.
            </p>
            <p className="font-hand font-semibold text-[28px] md:text-[32px] xl:text-[36px] text-[#B23E16] leading-snug lg:whitespace-nowrap">
              You're easy to contact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Live-build visual — the Rosenlund site on real devices (transparent cutout) */}
          <ScrollReveal className="order-2 lg:order-1">
            <div>
              <img
                src={devicesCrop}
                alt="The Rosenlund Drilling website by Graylock Digital — clear service paths and quote requests shown on a laptop and phone"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
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
