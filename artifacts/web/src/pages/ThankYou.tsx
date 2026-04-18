import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle, Compass, Eye, Tag, ArrowRight, Clock, Home, Heart } from "lucide-react";
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

const SECONDARY_LINKS = [
  { icon: Home, label: "Back to homepage", href: "/" },
  { icon: Eye, label: "Browse our work", href: "/work" },
  { icon: Compass, label: "Our strategy", href: "/our-strategy" },
  { icon: Tag, label: "Service overview", href: "/how-it-works" },
];

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank You | Graylock Digital" description="Your inquiry has been received. Tim will reach out within one business day to schedule your free evaluation call." noindex />

      <section className="bg-charcoal pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12">
        <ScrollReveal className="max-w-2xl w-full mx-auto text-center bg-navy p-10 md:p-16 rounded-3xl border border-gunmetal shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none"></div>

          <CheckCircle className="text-orange w-20 h-20 mx-auto mb-8 relative z-10" />

          <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4 relative z-10">
            Inquiry received
          </p>

          <h1 className="text-5xl md:text-7xl font-display text-offwhite mb-6 relative z-10 leading-[1.05]">
            You're All Set.
          </h1>

          <p className="text-stone font-sans text-xl mb-10 relative z-10 max-w-lg mx-auto leading-relaxed">
            Tim will personally review your website and reach out within 1 business day to schedule your free evaluation call.
          </p>

          <div className="bg-charcoal rounded-2xl p-6 md:p-8 text-left border border-orange/30 relative z-10 ring-1 ring-orange/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center">
                <ArrowRight size={16} className="text-orange" />
              </div>
              <h3 className="font-display text-offwhite text-lg md:text-xl uppercase tracking-wide">Your Next Step</h3>
            </div>
            <ol className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-charcoal font-bold flex items-center justify-center text-sm">1</span>
                <div>
                  <p className="text-offwhite font-sans font-semibold mb-1">Check your inbox</p>
                  <p className="text-stone font-sans text-sm leading-relaxed">A confirmation email is on its way right now.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-charcoal font-bold flex items-center justify-center text-sm">2</span>
                <div>
                  <p className="text-offwhite font-sans font-semibold mb-1">Watch for Tim's email</p>
                  <p className="text-stone font-sans text-sm leading-relaxed">Within one business day, with calendar options for your call.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-charcoal font-bold flex items-center justify-center text-sm">3</span>
                <div>
                  <p className="text-offwhite font-sans font-semibold mb-1">Hop on the 20-minute call</p>
                  <p className="text-stone font-sans text-sm leading-relaxed">Walk away with a clear, no-pressure plan for your practice.</p>
                </div>
              </li>
            </ol>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-charcoal pb-16 md:pb-20 px-6 md:px-12">
        <ScrollReveal className="max-w-2xl mx-auto">
          <div className="bg-navy/50 border border-gunmetal rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center">
                <Heart size={18} className="text-orange" />
              </div>
              <div>
                <h3 className="font-display text-offwhite text-lg mb-2">A real person — not a chatbot.</h3>
                <p className="text-stone font-sans text-[15px] leading-relaxed mb-3">
                  Every inquiry goes straight to Tim. No support tickets, no auto-responders, no offshore handoffs. You'll hear back from the person who'll actually be working on your project.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-2 text-stone font-sans">
                    <Clock size={14} className="text-orange" /> Within 1 business day
                  </span>
                  <span className="inline-flex items-center gap-2 text-stone font-sans">
                    <CheckCircle size={14} className="text-orange" /> No sales pitch
                  </span>
                  <span className="inline-flex items-center gap-2 text-stone font-sans">
                    <CheckCircle size={14} className="text-orange" /> Zero obligation
                  </span>
                </div>
              </div>
            </div>
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

          <ScrollReveal className="mt-10">
            <div className="border-t border-gunmetal pt-8">
              <p className="text-center text-stone font-sans text-xs uppercase tracking-widest mb-5">
                Or jump back to
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {SECONDARY_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gunmetal bg-navy/40 text-stone hover:text-offwhite hover:border-orange/40 transition-colors font-sans text-sm"
                  >
                    <link.icon size={14} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
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
