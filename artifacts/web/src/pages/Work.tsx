import { useState } from "react";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
    goal: "Replace their outdated WordPress site that was losing credibility with high-value clients",
    results: ["Mobile-friendly design", "Modern brand presence", "SEO-optimized for local search"],
  },
  {
    name: "Peaceful Minds Counseling",
    type: "Therapists",
    before: `${import.meta.env.BASE_URL}portfolio-before-2.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-2.png`,
    goal: "Create a warm, inviting web presence that builds trust with prospective clients",
    results: ["Online booking integration", "Warm, trust-building design", "Professional credibility"],
  },
  {
    name: "Summit Builders LLC",
    type: "Contractors",
    before: `${import.meta.env.BASE_URL}portfolio-before-3.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-3.png`,
    goal: "Modernize their early-2000s site to win larger residential projects",
    results: ["Project gallery showcase", "Built-in quote request form", "Local SEO optimization"],
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
            <img
              src={item.before}
              alt={`${item.name} - before redesign`}
              aria-hidden={showAfter}
              className={cn(
                "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500",
                showAfter ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            />
            <img
              src={item.after}
              alt={`${item.name} - after redesign by Graylock Digital`}
              aria-hidden={!showAfter}
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
          <p className="text-stone font-sans text-sm mb-5 leading-relaxed">{item.goal}</p>

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
      <SEO title="Our Work | Graylock Digital" />

      <section className="bg-charcoal pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display text-offwhite mb-6">Real Transformations</h1>
            <p className="text-xl font-sans text-stone mb-4">
              See the dramatic before-and-after results we deliver for small service businesses. Click "Before" and "After" to compare.
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
              Ready for Your Transformation?
            </h2>
            <p className="text-stone text-lg font-sans mb-8 max-w-2xl mx-auto">
              Every site we build follows the same proven process — clean design, fast performance, and a focus on converting visitors into paying clients.
            </p>
            <Link href="/get-started">
              <span className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-sans font-bold text-lg px-10 py-4 rounded-lg shadow-lg shadow-orange/20 transition-all duration-300 cursor-pointer">
                Get Your Free Evaluation <ArrowRight size={20} />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
