import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SearchCheck, Presentation, FileBarChart2, LayoutDashboard } from "lucide-react";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <SearchCheck size={26} strokeWidth={2.2} />,
      title: "Website Review",
      desc: "We identify the biggest issues hurting trust, clarity, and lead generation.",
    },
    {
      icon: <Presentation size={26} strokeWidth={2.2} />,
      title: "Strategy Walkthrough",
      desc: "We explain what we would change and why, in plain English.",
    },
    {
      icon: <FileBarChart2 size={26} strokeWidth={2.2} />,
      title: "Written Report",
      desc: "You receive a professional summary of findings and recommendations.",
    },
    {
      icon: <LayoutDashboard size={26} strokeWidth={2.2} />,
      title: "Custom Homepage Demo",
      desc: "You see a homepage concept tailored to your business before moving forward.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Your Free Website Audit & Demo</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            We Prove Our Value Before You Pay a Dollar.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            We do real strategic work before asking you to commit, so you can see the direction clearly and decide with confidence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="max-w-3xl mx-auto mb-12">
          <div className="bg-white border border-orange/30 rounded-2xl px-6 py-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
            <p className="text-charcoal font-sans text-base md:text-lg leading-relaxed">
              This is a <span className="font-bold text-orange">$500 strategic engagement</span> that we do <span className="font-semibold">completely free</span> for qualified practices.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="group bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-charcoal flex items-center justify-center mb-5 text-white shadow-md group-hover:shadow-lg group-hover:shadow-orange/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
                {offer.icon}
              </div>
              <h3 className="text-lg font-display text-charcoal mb-3">{offer.title}</h3>
              <p className="text-stone font-sans leading-relaxed text-sm">{offer.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
