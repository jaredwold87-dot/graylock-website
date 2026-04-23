import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const portfolioItems = [
  {
    name: "Johnson & Associates CPA",
    type: "Accountants",
    before: `${import.meta.env.BASE_URL}portfolio-before-1.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-1.png`,
    goal: "Their dated site was sending prospective business clients to competitors before the firm had a chance to compete.",
    outcome: "Inquiry form submissions roughly 3× higher in the first 90 days vs. the prior site.",
    results: ["Mobile-friendly design", "Modern brand presence", "Local SEO foundation"],
  },
  {
    name: "Peaceful Minds Counseling",
    type: "Therapists",
    before: `${import.meta.env.BASE_URL}portfolio-before-2.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-2.png`,
    goal: "A warm, inviting presence that builds trust quickly and routes prospective clients straight to scheduling.",
    outcome: "Bounce rate down ~40%, with new client inquiries now arriving directly through the site each week.",
    results: ["Linked scheduling portal", "Warm, trust-building design", "Clearer service messaging"],
  },
  {
    name: "Westlake Family Law",
    type: "Professional Services",
    before: `${import.meta.env.BASE_URL}portfolio-before-3.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-3.png`,
    goal: "Replace a generic template with a credible, custom practice website that ranks for the right local searches.",
    outcome: "Now ranking on the first page of Google for two priority service-area searches.",
    results: ["Service area pages", "24/7 intake form", "Local SEO optimization"],
  },
];

function BeforeAfterCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="bg-charcoal rounded-2xl border border-gunmetal overflow-hidden hover:border-orange/40 transition-colors duration-500">
        <div className="relative">
          <div className="flex border-b border-gunmetal">
            <button
              onClick={() => setShowAfter(false)}
              aria-pressed={!showAfter}
              className={cn(
                "flex-1 py-3 text-sm font-sans font-semibold uppercase tracking-widest transition-all duration-300",
                !showAfter
                  ? "bg-red-600/20 text-red-400 border-b-2 border-red-500"
                  : "text-stone hover:text-offwhite"
              )}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              aria-pressed={showAfter}
              className={cn(
                "flex-1 py-3 text-sm font-sans font-semibold uppercase tracking-widest transition-all duration-300",
                showAfter
                  ? "bg-green-600/20 text-green-400 border-b-2 border-green-500"
                  : "text-stone hover:text-offwhite"
              )}
            >
              After
            </button>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-navy">
            <ResponsiveImage
              src={item.before}
              alt={`${item.name} - before redesign`}
              aria-hidden={showAfter}
              loading="lazy"
              decoding="async"
              className={cn(
                "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500",
                showAfter ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            />
            <ResponsiveImage
              src={item.after}
              alt={`${item.name} - after redesign by Graylock Digital`}
              aria-hidden={!showAfter}
              loading="lazy"
              decoding="async"
              className={cn(
                "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500",
                showAfter ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            />

            <div className={cn(
              "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300",
              showAfter
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            )}>
              {showAfter ? "After" : "Before"}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <span className="text-orange text-xs font-bold uppercase tracking-widest mb-2 block">
            {item.type}
          </span>
          <h3 className="text-2xl font-display text-offwhite mb-3">{item.name}</h3>
          <p className="text-stone font-sans text-sm mb-4 leading-relaxed">{item.goal}</p>

          <div className="bg-orange/5 border border-orange/20 rounded-lg px-4 py-3 mb-5">
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange mb-1">Outcome</p>
            <p className="text-offwhite font-sans text-sm leading-snug">{item.outcome}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.results.map(r => (
              <span key={r} className="text-xs font-sans bg-navy text-stone px-3 py-1.5 rounded-full border border-gunmetal">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Work() {
  return (
    <>
      <SEO title="Our Work | Practice Website Examples | Graylock Digital" description="Real before-and-after website transformations for therapists, dentists, accountants, and other private practices. See the results our clients are getting." path="/work" />

      <section className="bg-charcoal pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto mb-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Our Work", path: "/work" },
            ]}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display text-offwhite mb-6">Real Transformations</h1>
            <p className="text-xl font-sans text-stone mb-3">
              See the dramatic before-and-after results we deliver for professional practices.
            </p>
            <p className="text-stone/70 font-sans text-sm">
              Tap the <span className="text-red-400 font-semibold">Before</span> / <span className="text-green-400 font-semibold">After</span> tabs on each card to compare.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy py-16 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <BeforeAfterCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
              See What Your Site Could Look Like — On Us
            </h2>
            <p className="text-stone text-lg font-sans mb-8 max-w-2xl mx-auto">
              Book a free homepage demo and we will show you exactly what your practice's site could look like — before you commit to anything.
            </p>
            <Link href="/get-started">
              <span className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-sans font-bold text-lg px-10 py-4 rounded-lg shadow-lg shadow-orange/20 transition-all duration-300 cursor-pointer">
                Get Your Free Homepage Demo <ArrowRight size={20} />
              </span>
            </Link>
            <p className="text-stone/60 text-sm font-sans mt-4">
              No pressure. No obligation. Just a clearer path forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
