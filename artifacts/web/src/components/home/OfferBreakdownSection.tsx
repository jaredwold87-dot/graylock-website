import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, LayoutDashboard, CreditCard, Rocket } from "lucide-react";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <Phone size={24} strokeWidth={2.2} />,
      title: "15-Minute Discovery Call",
      desc: "A quick call to hear what you like and dislike about your current site, and what you want from a new one.",
    },
    {
      icon: <LayoutDashboard size={24} strokeWidth={2.2} />,
      title: "Free Custom Homepage Demo",
      desc: "We turn that input into a real, custom homepage concept for your business — no payment required to see it.",
    },
    {
      icon: <CreditCard size={24} strokeWidth={2.2} />,
      title: "You Approve, Then You Pay",
      desc: "If you like the direction, you pay the build fee at that point — after the demo, not before.",
    },
    {
      icon: <Rocket size={24} strokeWidth={2.2} />,
      title: "Built & Launched on Your Domain",
      desc: "We build out the full site in 7–10 business days, then launch it live on your own domain.",
    },
  ];

  return (
    <section className="relative bg-[#f5f5f4] py-16 md:py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">Your Free Website Audit &amp; Demo</p>
          <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-6 leading-tight">
            We Prove Our Value Before You Pay a Dollar.
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg font-sans leading-relaxed">
            We do real strategic work before asking you to commit, so you can see the direction clearly and decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-7 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-lg bg-[#E85D26]/10 border border-[#E85D26]/20 flex items-center justify-center mb-5 text-[#E85D26]">
                  {offer.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display text-[#1a202c] mb-3 leading-tight">{offer.title}</h3>
                <p className="text-[#4a5568] font-sans text-base leading-relaxed">{offer.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
