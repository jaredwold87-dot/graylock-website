import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank You | Graylock Digital" />
      
      <section className="bg-charcoal py-32 px-6 md:px-12 min-h-[80vh] flex items-center justify-center">
        <ScrollReveal className="max-w-2xl w-full text-center bg-navy p-10 md:p-16 rounded-3xl border border-gunmetal shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none"></div>

          <CheckCircle className="text-orange w-20 h-20 mx-auto mb-8 relative z-10" />
          
          <h1 className="text-5xl md:text-7xl font-display text-offwhite mb-6 relative z-10">
            You're All Set.
          </h1>
          
          <p className="text-stone font-sans text-xl mb-12 relative z-10 max-w-lg mx-auto">
            Tim will review your website and reach out within 1 business day to schedule your free evaluation call.
          </p>

          <div className="bg-charcoal rounded-xl p-6 text-left border border-gunmetal mb-12 relative z-10">
            <h3 className="font-display text-offwhite text-xl mb-4 uppercase tracking-wide">What Happens Next:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-orange font-bold">1.</span>
                <span className="text-stone font-sans">Check your email for a confirmation message.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold">2.</span>
                <span className="text-stone font-sans">Look out for an email from Tim with calendar options.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold">3.</span>
                <span className="text-stone font-sans">Hop on the call and get actionable advice for your business.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link href="/how-it-works" className="text-orange font-bold font-sans hover:underline underline-offset-4 decoration-2 transition-all">
              See how we build sites &rarr;
            </Link>
            <Link href="/about" className="text-orange font-bold font-sans hover:underline underline-offset-4 decoration-2 transition-all">
              Learn about our team &rarr;
            </Link>
          </div>

        </ScrollReveal>
      </section>
    </>
  );
}
