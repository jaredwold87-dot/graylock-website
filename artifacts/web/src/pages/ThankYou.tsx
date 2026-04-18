import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle, Compass, Eye, Tag, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const WHILE_YOU_WAIT = [
  {
    icon: Compass,
    title: "Read our complete strategy",
    description: "How we get professional practices found, trusted, and booked — broken down into three connected layers.",
    href: "/our-strategy",
    cta: "See the strategy",
  },
  {
    icon: Eye,
    title: "See recent work",
    description: "Real practice websites we've built and the results they're delivering for the owners who trusted us.",
    href: "/work",
    cta: "View our work",
  },
  {
    icon: Tag,
    title: "Review the pricing",
    description: "Three flat monthly plans, one upfront setup fee, no long-term contracts. See exactly what's included on every plan.",
    href: "/pricing",
    cta: "See pricing",
  },
];

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank You | Graylock Digital" />

      <section className="bg-charcoal pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12">
        <ScrollReveal className="max-w-2xl w-full mx-auto text-center bg-navy p-10 md:p-16 rounded-3xl border border-gunmetal shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none"></div>

          <CheckCircle className="text-orange w-20 h-20 mx-auto mb-8 relative z-10" />

          <h1 className="text-5xl md:text-7xl font-display text-offwhite mb-6 relative z-10">
            You're All Set.
          </h1>

          <p className="text-stone font-sans text-xl mb-10 relative z-10 max-w-lg mx-auto">
            Tim will personally review your website and reach out within 1 business day to schedule your free evaluation call.
          </p>

          <div className="bg-charcoal rounded-xl p-6 text-left border border-gunmetal relative z-10">
            <h3 className="font-display text-offwhite text-xl mb-4 uppercase tracking-wide">What Happens Next:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-orange font-bold">1.</span>
                <span className="text-stone font-sans">Check your email for a confirmation message.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold">2.</span>
                <span className="text-stone font-sans">Look out for an email from Tim with calendar options for your call.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold">3.</span>
                <span className="text-stone font-sans">Hop on the 20-minute call and walk away with a clear, no-pressure plan for your practice.</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-charcoal py-16 md:py-24 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              While You Wait
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-3">
              Get a head start on your call
            </h2>
            <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              These three pages will tell you almost everything we'd cover with you in person — so the call itself can focus on your specific practice.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {WHILE_YOU_WAIT.map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.08}>
                <Link href={item.href} className="block h-full group">
                  <div className="bg-navy border border-gunmetal rounded-xl p-7 h-full flex flex-col hover:border-orange/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5 border border-orange/15">
                      <item.icon size={22} className="text-orange" />
                    </div>
                    <h3 className="font-display text-xl text-offwhite mb-3">{item.title}</h3>
                    <p className="text-stone font-sans text-sm leading-relaxed mb-5 flex-1">
                      {item.description}
                    </p>
                    <span className="text-orange font-sans font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      {item.cta} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone font-sans text-sm md:text-base">
            Need to update your inquiry or get in touch sooner?{" "}
            <a href="mailto:hello@graylockdigital.com" className="text-orange font-semibold hover:underline">
              hello@graylockdigital.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
