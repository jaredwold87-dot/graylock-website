import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight, Clock, FileText, Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-sans text-sm font-semibold tracking-widest uppercase mb-4">
              Get Started in 20 Minutes
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal mb-6 leading-tight">
              Your Practice Deserves a<br className="hidden md:block" /> Website That Works as Hard as You Do
            </h2>
            <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
              Book a free 20-minute call. We'll walk through your current site, identify what's holding you back, and show you exactly what we'd build — before you spend a dime.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
            {[
              {
                icon: <FileText size={20} />,
                title: "Free Website Evaluation",
                desc: "A clear breakdown of what's working and what's not"
              },
              {
                icon: <Sparkles size={20} />,
                title: "Custom Homepage Mockup",
                desc: "See your new site before you commit to anything"
              },
              {
                icon: <Clock size={20} />,
                title: "Live in 7–10 Business Days",
                desc: "From sign-off to launch — we move fast"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-orange/40 hover:shadow-md transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-orange border border-orange/10">
                  {item.icon}
                </div>
                <h3 className="text-charcoal font-display text-sm mb-1">{item.title}</h3>
                <p className="text-stone font-sans text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-col items-center gap-3">
            <CTAButton href="/get-started" className="px-10 py-5 text-lg group">
              Book Your Free Website Review
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </CTAButton>
            <p className="text-stone/60 text-xs font-sans mt-2">
              No contracts. No obligation. Just a clear look at what's possible.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
