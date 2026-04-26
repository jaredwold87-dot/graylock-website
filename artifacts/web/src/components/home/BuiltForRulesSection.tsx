import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Landmark, MapPin, Briefcase } from "lucide-react";

const layers = [
  {
    icon: Landmark,
    label: "Federal floor",
    detail: "FTC · CAN-SPAM · TCPA · ADA / WCAG 2.1 AA",
    width: "w-full",
  },
  {
    icon: MapPin,
    label: "State layer",
    detail: "CCPA · MCDPA · 20+ state privacy laws",
    width: "w-[88%]",
  },
  {
    icon: Briefcase,
    label: "Industry layer",
    detail: "Licensing boards · professional associations · agency rules",
    width: "w-[76%]",
  },
];

export function BuiltForRulesSection() {
  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <ScrollReveal>
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
            Compliance, by design
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite mb-6 leading-tight">
            We build for the rules your industry plays by.
          </h2>
          <div className="space-y-5 text-stone font-sans text-base md:text-lg leading-relaxed mb-8">
            <p>
              A website is the first place a regulator, a competitor, or an unhappy customer goes looking for problems. Missing license numbers, unsupported claims, an inaccessible site, a tracking pixel where it doesn't belong — these are the small things that turn into big consequences in a regulated industry.
            </p>
            <p>
              Every Graylock site is built with three layers of compliance considerations baked in from day one. The federal floor — FTC truth-in-advertising, CAN-SPAM, the Telephone Consumer Protection Act, and ADA accessibility under WCAG 2.1 AA. The state layer — privacy laws like California's CCPA, Montana's MCDPA, and the twenty-plus other state privacy laws now in effect, plus state-specific advertising rules where they apply. And the industry layer — the licensing-board, professional-association, and federal-agency rules that govern your specific profession.
            </p>
            <p>
              We're not your attorney and we're not your compliance officer. We're the website partner who makes sure those rules shape your site from the start, instead of being something you have to retrofit after a demand letter shows up.
            </p>
          </div>
          <CTAButton href="/compliance">
            See how compliance is built into our process
          </CTAButton>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div
            className="relative rounded-2xl border border-gunmetal bg-navy/60 p-6 md:p-8"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.35]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(242,243,245,0.08) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-4">
              {layers.map(({ icon: Icon, label, detail, width }, i) => (
                <div
                  key={label}
                  className={`${width} rounded-xl border border-gunmetal bg-charcoal/80 px-5 py-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)]`}
                  style={{
                    transform: `translateY(${i * 2}px)`,
                  }}
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-offwhite font-display text-base md:text-lg leading-tight">
                      {label}
                    </p>
                    <p className="text-stone font-sans text-xs md:text-sm leading-snug mt-0.5 truncate">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-full mt-2 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
                <span className="text-stone/80 font-sans text-[11px] uppercase tracking-widest">
                  Your site
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
