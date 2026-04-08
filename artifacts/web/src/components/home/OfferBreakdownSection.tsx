import { Search, MessageSquare, Monitor, FileText, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: Search,
      title: "Full Website Evaluation",
      desc: "We evaluate your current site and identify every issue that's costing you leads — from design and messaging problems to mobile usability and SEO gaps.",
      value: "Most agencies charge $500+ for this alone",
      highlight: "Find what's broken"
    },
    {
      icon: MessageSquare,
      title: "Live Strategy Walkthrough",
      desc: "We hop on a 20-minute call and walk through the findings in plain English. No jargon, no fluff — just a clear explanation of what's hurting your site.",
      value: "Clarity you can act on, whether you hire us or not",
      highlight: "Get real answers"
    },
    {
      icon: FileText,
      title: "Comprehensive Written Report",
      desc: "You receive a full PDF report covering competitive analysis, audience insights, website performance, and strategic recommendations. Yours to keep forever.",
      value: "A professional-grade report — yours to keep",
      highlight: "Take it with you"
    },
    {
      icon: Monitor,
      title: "Custom Homepage Demo",
      desc: "We design a custom homepage concept for your practice showing exactly how we'd improve your messaging, layout, and brand presentation.",
      value: "A real design, not a generic mockup",
      highlight: "See the transformation"
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-charcoal">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20V40L30 55L5 40V20L30 5Z' fill='none' stroke='%232E7BB4' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2E7BB4]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2E7BB4]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-[#2E7BB4]/10 border border-[#2E7BB4]/20 rounded-full px-5 py-2 mb-6">
            <CheckCircle2 size={16} className="text-[#2E7BB4]" />
            <span className="text-[#2E7BB4] font-sans font-semibold uppercase tracking-widest text-xs">100% Free — No Strings Attached</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6 leading-tight">
            See How We'd Elevate Your Site —{" "}
            <span className="text-[#2E7BB4]">Before You Pay a Dime</span>
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Most agencies ask for thousands upfront before showing you a single thing.
            We do the work first — so you can decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group relative h-full bg-gradient-to-b from-[#152847] to-[#0F1E35] rounded-2xl border border-[#2E7BB4]/10 hover:border-[#2E7BB4]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2E7BB4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-[#2E7BB4]/10 rounded-xl flex items-center justify-center border border-[#2E7BB4]/20 group-hover:bg-[#2E7BB4]/20 transition-colors duration-500">
                          <Icon size={22} className="text-[#2E7BB4]" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#2E7BB4] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-[#2E7BB4]/60 text-xs font-sans font-semibold uppercase tracking-wider">{offer.highlight}</span>
                    </div>

                    <h3 className="text-xl font-display text-offwhite mb-3">{offer.title}</h3>
                    <p className="text-stone/80 font-sans leading-relaxed text-sm mb-6 flex-grow">{offer.desc}</p>

                    <div className="border-t border-[#2E7BB4]/10 pt-4 mt-auto">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#2E7BB4] mt-0.5 flex-shrink-0" />
                        <p className="text-[#2E7BB4]/80 font-sans text-sm font-medium">{offer.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-14">
          <CTAButton href="/get-started">
            Get My Free Website Evaluation
          </CTAButton>
          <p className="text-stone/50 text-sm font-sans mt-4">No credit card. No obligation. Just answers.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
