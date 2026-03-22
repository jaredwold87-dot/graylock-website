import { Search, MessageSquare, Monitor } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <Search className="text-orange" size={28} />,
      title: "Full Website Evaluation",
      desc: "We audit your current site and identify every issue that's costing you leads — from design and messaging problems to mobile usability and SEO gaps. You'll see exactly what's broken and why.",
      value: "Most agencies charge $500+ for this alone"
    },
    {
      icon: <MessageSquare className="text-orange" size={28} />,
      title: "Live Strategy Walkthrough",
      desc: "We hop on a call with you and walk through the findings in plain English. No jargon, no fluff — just a clear explanation of what's hurting your site and what we'd do differently.",
      value: "Clarity you can act on, whether you hire us or not"
    },
    {
      icon: <Monitor className="text-orange" size={28} />,
      title: "Custom Homepage Demo",
      desc: "We design a custom homepage concept for your business showing exactly how we'd improve your messaging, layout, and brand presentation. You get to see what your site could become.",
      value: "A real design, not a generic mockup"
    }
  ];

  return (
    <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F2F3F5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Your Free Call Includes</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            See Exactly What We'd Fix — Before You Pay Us Anything
          </h2>
          <p className="text-stone text-lg font-sans">
            Most agencies ask for thousands upfront before showing you a single thing. We do real work for you first — so you can decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="bg-charcoal p-10 rounded-xl border-t-4 border-t-orange border-x border-b border-gunmetal shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-6">
                {offer.icon}
              </div>
              <h3 className="text-2xl font-display text-offwhite mb-4">{offer.title}</h3>
              <p className="text-stone font-sans leading-relaxed mb-6 flex-grow">{offer.desc}</p>
              <p className="text-orange/80 font-sans text-sm font-semibold border-t border-gunmetal pt-4">{offer.value}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-12">
          <CTAButton href="/get-started">
            Book Your Free Website Review
          </CTAButton>
          <p className="text-stone/60 text-sm font-sans mt-4">No credit card. No obligation. Just answers.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
