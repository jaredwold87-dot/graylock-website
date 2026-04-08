import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

function IconEvaluation() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eval-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E7BB4" />
          <stop offset="1" stopColor="#5BA3D9" />
        </linearGradient>
      </defs>
      <rect x="5" y="3" width="22" height="26" rx="3" stroke="url(#eval-grad)" strokeWidth="2" fill="none" />
      <path d="M10 10h12M10 15h8M10 20h10" stroke="url(#eval-grad)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="24" cy="22" r="5" stroke="url(#eval-grad)" strokeWidth="2" fill="rgba(46,123,180,0.08)" />
      <path d="M22.5 22l1 1 2-2.5" stroke="url(#eval-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="strat-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E7BB4" />
          <stop offset="1" stopColor="#5BA3D9" />
        </linearGradient>
      </defs>
      <path d="M6 24V10a2 2 0 012-2h16a2 2 0 012 2v14" stroke="url(#strat-grad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 24h26" stroke="url(#strat-grad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16" r="3" stroke="url(#strat-grad)" strokeWidth="1.8" fill="rgba(46,123,180,0.08)" />
      <circle cx="20" cy="14" r="3" stroke="url(#strat-grad)" strokeWidth="1.8" fill="rgba(46,123,180,0.08)" />
      <path d="M14.5 15l3-1.5" stroke="url(#strat-grad)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 19v3M20 17v5" stroke="url(#strat-grad)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="report-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E7BB4" />
          <stop offset="1" stopColor="#5BA3D9" />
        </linearGradient>
      </defs>
      <path d="M8 3h10l8 8v18a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="url(#report-grad)" strokeWidth="2" fill="none" />
      <path d="M18 3v6a2 2 0 002 2h6" stroke="url(#report-grad)" strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="16" width="3" height="8" rx="1" fill="rgba(46,123,180,0.15)" stroke="url(#report-grad)" strokeWidth="1.2" />
      <rect x="15" y="13" width="3" height="11" rx="1" fill="rgba(46,123,180,0.15)" stroke="url(#report-grad)" strokeWidth="1.2" />
      <rect x="20" y="18" width="3" height="6" rx="1" fill="rgba(46,123,180,0.15)" stroke="url(#report-grad)" strokeWidth="1.2" />
    </svg>
  );
}

function IconDemo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="demo-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E7BB4" />
          <stop offset="1" stopColor="#5BA3D9" />
        </linearGradient>
      </defs>
      <rect x="3" y="4" width="26" height="18" rx="3" stroke="url(#demo-grad)" strokeWidth="2" fill="none" />
      <path d="M3 18h26" stroke="url(#demo-grad)" strokeWidth="1.5" />
      <path d="M13 26h6M16 22v4" stroke="url(#demo-grad)" strokeWidth="2" strokeLinecap="round" />
      <rect x="7" y="8" width="8" height="6" rx="1" fill="rgba(46,123,180,0.12)" stroke="url(#demo-grad)" strokeWidth="1" />
      <path d="M18 8h7M18 10.5h5M18 13h6" stroke="url(#demo-grad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <circle cx="9.5" cy="10" r="1" fill="url(#demo-grad)" />
      <path d="M8 12.5h4" stroke="url(#demo-grad)" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <IconEvaluation />,
      title: "Full Website Evaluation",
      desc: "We evaluate your current site and identify every issue that's costing you leads — from design and messaging problems to mobile usability and SEO gaps.",
      value: "Most agencies charge $500+ for this alone"
    },
    {
      icon: <IconStrategy />,
      title: "Live Strategy Walkthrough",
      desc: "We hop on a 20-minute call with you and walk through the findings in plain English. No jargon, no fluff — just a clear explanation of what we'd do differently.",
      value: "Clarity you can act on, whether you hire us or not"
    },
    {
      icon: <IconReport />,
      title: "Comprehensive Written Report",
      desc: "You receive a full PDF report covering competitive analysis, audience insights, website performance, and strategic recommendations. Yours to keep forever.",
      value: "A professional-grade report — yours to keep"
    },
    {
      icon: <IconDemo />,
      title: "Custom Homepage Demo",
      desc: "We design a custom homepage concept for your business showing exactly how we'd improve your messaging, layout, and brand presentation.",
      value: "A real design, not a generic mockup"
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E7BB4]/[0.08] via-[#2E7BB4]/[0.04] to-transparent rounded-2xl flex items-center justify-center mb-6 border border-[#2E7BB4]/[0.12] group-hover:border-[#2E7BB4]/[0.25] group-hover:shadow-[0_0_20px_rgba(46,123,180,0.08)] transition-all duration-500">
                {offer.icon}
              </div>
              <h3 className="text-xl font-display text-charcoal mb-4">{offer.title}</h3>
              <p className="text-stone font-sans leading-relaxed mb-6 flex-grow text-sm">{offer.desc}</p>
              <p className="text-orange/80 font-sans text-sm font-semibold border-t border-gray-100 pt-4">{offer.value}</p>
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
