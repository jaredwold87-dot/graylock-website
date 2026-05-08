import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, LayoutDashboard, CreditCard, Rocket } from "lucide-react";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <Phone size={26} strokeWidth={2.2} />,
      title: "15-Minute Discovery Call",
      desc: "A quick call to hear what you like and dislike about your current site, and what you want from a new one.",
    },
    {
      icon: <LayoutDashboard size={26} strokeWidth={2.2} />,
      title: "Free Custom Homepage Demo",
      desc: "We turn that input into a real, custom homepage concept for your business — no payment required to see it.",
    },
    {
      icon: <CreditCard size={26} strokeWidth={2.2} />,
      title: "You Approve, Then You Pay",
      desc: "If you like the direction, you pay the build fee at that point — after the demo, not before.",
    },
    {
      icon: <Rocket size={26} strokeWidth={2.2} />,
      title: "Built & Launched on Your Domain",
      desc: "We build out the full site in 7–10 business days, then launch it live on your own domain.",
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
