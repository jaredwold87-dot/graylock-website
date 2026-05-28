import { useState } from "react";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { cn } from "@/lib/utils";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Link } from "wouter";
import spiTransformation from "@assets/image_1780012282187.png";
import perksTransformation from "@assets/image_1780012312407.png";

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
      <SEO title="Featured Projects | Real Website Transformations | Graylock Digital" description="Featured projects and real before-and-after website transformations we've delivered for trust-based local businesses. See the results our clients are getting." url="https://graylockdigital.com/featured-projects" />

      <section className="bg-charcoal pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-orange text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] mb-4 block">
              Featured Projects
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-offwhite mb-6">Real Transformations</h1>
            <p className="text-xl font-sans text-stone mb-3">
              See the dramatic before-and-after results we deliver for trust-based local businesses.
            </p>
            <p className="text-stone font-sans text-sm">
              Tap the <span className="text-red-400 font-semibold">Before</span> / <span className="text-green-400 font-semibold">After</span> tabs on each card to compare.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Transformation — Shooting Performance Institute */}
      <section className="bg-navy py-16 md:py-20 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-12">
            <span className="text-orange text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] mb-3 block">
              Featured Transformation
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-3">
              Shooting Performance Institute
            </h2>
            <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto">
              An outdated firearms-training site rebuilt into a bold, modern presence that
              matches the caliber of their work.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-gunmetal shadow-2xl mb-8 md:mb-10 bg-charcoal">
              <img
                src={spiTransformation}
                alt="New Shooting Performance Institute website homepage designed by Graylock Digital"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <figure className="relative bg-charcoal rounded-2xl border border-gunmetal p-8 md:p-12 max-w-4xl mx-auto">
              <Quote
                className="absolute -top-5 left-8 text-orange bg-navy rounded-full p-2"
                size={48}
                aria-hidden="true"
              />
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-orange fill-orange" />
                ))}
              </div>
              <blockquote className="text-offwhite font-sans text-lg md:text-xl leading-relaxed space-y-4">
                <p>
                  &ldquo;Graylock Digital reached out to ask if I was in the market for a
                  website upgrade. I wasn&rsquo;t happy with what I had &mdash; it felt
                  outdated. Tim and his team had a rough-draft site to me in a matter of days
                  that far exceeded what I had before.&rdquo;
                </p>
                <p>
                  &ldquo;They delivered at every point of the process: they explained why they
                  were doing things a certain way, showed me how to manage it on the back end,
                  and answered every text and random phone call with nothing but
                  professionalism and kindness. I now have a site that portrays exactly what we
                  do as a company and is easy to navigate.&rdquo;
                </p>
                <p>
                  &ldquo;10 out of 10, hands down. I actually enjoyed the process and the
                  conversations &mdash; and in the end I have an incredible website. If
                  you&rsquo;re even remotely considering a new website, do yourself a favor and
                  use Graylock Digital!&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-gunmetal">
                <p className="text-offwhite font-display text-xl">Jim Erwin</p>
                <p className="text-stone font-sans text-sm">
                  CEO &amp; Founder, Shooting Performance Institute
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy pb-16 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-7xl mx-auto pt-16">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display text-offwhite">
              More Transformations
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <BeforeAfterCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Transformation — L.A. Perks Petroleum Specialists */}
      <section className="bg-charcoal py-16 md:py-20 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-12">
            <span className="text-orange text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] mb-3 block">
              Featured Transformation
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-3">
              L.A. Perks Petroleum Specialists
            </h2>
            <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto">
              A bold, credible site for a third-generation fueling company &mdash; built to
              reflect the scale and trust behind their work across the West.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-gunmetal shadow-2xl mb-8 md:mb-10 bg-navy">
              <img
                src={perksTransformation}
                alt="New L.A. Perks Petroleum Specialists website homepage designed by Graylock Digital"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <figure className="relative bg-navy rounded-2xl border border-gunmetal p-8 md:p-12 max-w-4xl mx-auto">
              <Quote
                className="absolute -top-5 left-8 text-orange bg-charcoal rounded-full p-2"
                size={48}
                aria-hidden="true"
              />
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-orange fill-orange" />
                ))}
              </div>
              <blockquote className="text-offwhite font-sans text-lg md:text-xl leading-relaxed">
                &ldquo;Working with Tim Monahan and the team at Graylock Digital was an
                outstanding experience from start to finish. The amount of time and effort they
                invested in researching our industry and truly understanding our vision for the
                new website was beyond impressive. Their attention to detail, communication, and
                dedication to delivering a product that reflected our goals exceeded all
                expectations. They consistently went above and beyond throughout the entire
                process. We highly recommend Tim and the Graylock Digital team to anyone looking
                for a professional, creative, and results-driven website partner.&rdquo;
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-gunmetal">
                <p className="text-offwhite font-display text-xl">Kylen &amp; Keith Perks</p>
                <p className="text-stone font-sans text-sm">
                  L.A. Perks Petroleum Specialists
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
              See What Your Site Could Look Like — On Us
            </h2>
            <p className="text-stone text-lg font-sans mb-8 max-w-2xl mx-auto">
              Book a free 15-minute discovery call and we will show you a custom homepage demo for your practice before you commit to anything.
            </p>
            <Link href="/get-started">
              <span className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-sans font-bold text-lg px-10 py-4 rounded-lg shadow-lg shadow-orange/20 transition-all duration-300 cursor-pointer">
                Get Your Free Homepage Demo <ArrowRight size={20} />
              </span>
            </Link>
            <p className="text-stone text-sm font-sans mt-4">
              No pressure. No obligation. Just a clearer path forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
