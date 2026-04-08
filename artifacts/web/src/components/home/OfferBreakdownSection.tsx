import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { SearchCheck, Presentation, FileBarChart2, LayoutDashboard } from "lucide-react";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <SearchCheck size={26} strokeWidth={2.2} />,
      title: "Full Website Evaluation",
      desc: "We evaluate your current site and identify every issue that's costing you leads — from design and messaging problems to mobile usability and SEO gaps.",
      value: "Most agencies charge $500+ for this alone",
      num: "01"
    },
    {
      icon: <Presentation size={26} strokeWidth={2.2} />,
      title: "Live Strategy Walkthrough",
      desc: "We hop on a 20-minute call with you and walk through the findings in plain English. No jargon, no fluff — just a clear explanation of what we'd do differently.",
      value: "Clarity you can act on, whether you hire us or not",
      num: "02"
    },
    {
      icon: <FileBarChart2 size={26} strokeWidth={2.2} />,
      title: "Comprehensive Written Report",
      desc: "You receive a full PDF report covering competitive analysis, audience insights, website performance, and strategic recommendations. Yours to keep forever.",
      value: "A professional-grade report — yours to keep",
      num: "03"
    },
    {
      icon: <LayoutDashboard size={26} strokeWidth={2.2} />,
      title: "Custom Homepage Demo",
      desc: "We design a custom homepage concept for your business showing exactly how we'd improve your messaging, layout, and brand presentation.",
      value: "A real design, not a generic mockup",
      num: "04"
    }
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Your Free Call Includes</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            See How We'd Elevate Your Site — Before You Pay Us Anything
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Most agencies ask for thousands upfront before showing you a single thing. We do real work for you first — so you can decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-charcoal flex items-center justify-center mb-6 text-white shadow-md group-hover:shadow-lg group-hover:shadow-orange/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
                {offer.icon}
              </div>
              <h3 className="text-xl font-display text-charcoal mb-4">{offer.title}</h3>
              <p className="text-stone font-sans leading-relaxed mb-6 flex-grow text-sm">{offer.desc}</p>
              <p className="text-orange font-sans text-sm font-semibold border-t border-gray-100 pt-4">{offer.value}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-14">
          <CTAButton href="/get-started">
            Book Your Free Website Review
          </CTAButton>
          <p className="text-stone/50 text-sm font-sans mt-4">No credit card. No obligation. Just answers.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
