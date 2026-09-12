import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import desktopWebsite from "@/assets/work/willow-transformation.webp";
import mobileWebsite from "@/assets/work/willow-mobile.webp";
import googleReview from "@/assets/reviews/mark_nelson_highlighted.webp";

// Verbatim testimonial published in the Willow portfolio entry.
const testimonial = [
  "I have been extremely impressed Graylock digital, from the first meeting we had to the launch of our new website and beyond. This company is so professional, well organized, and well informed. The communication was excellent, they listened to my needs and answered my questions.",
  "Not only do we have a state of the art, beautiful, easy to use website. The lead generation has been amazing, we have been converting leads into actual customers because of this website. My previous vendor I used for our website platform generated a lot of leads, but no conversions into actual customers. I highly recommend Graylock Digital.",
];

function ProjectLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? "mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center" : "mt-9 hidden flex-wrap items-center gap-x-7 gap-y-4 lg:flex"}>
      <a
        href="https://www.willowrealestategroup.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackRealtorEvent("realtor_featured_project_click", { cta_placement: "featured_project" })}
        className="cta-shimmer inline-flex min-h-14 items-center justify-center gap-2 rounded bg-[#E85D26] px-7 py-4 text-center font-sans font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d14d1a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-4 focus-visible:ring-offset-[#292B2E]"
      >
        Visit the Live Website →
      </a>
      <Link
        href="/featured-projects"
        className="inline-flex min-h-12 items-center justify-center font-sans text-sm font-semibold text-offwhite underline decoration-[#E85D26]/60 underline-offset-4 transition-colors hover:text-[#E85D26] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26]"
      >
        Explore All Client Websites →
      </Link>
    </div>
  );
}

export function RealtorFeaturedProject() {
  return (
    <section
      id="featured-project"
      data-section="featured-project"
      aria-labelledby="willow-project-heading"
      className="relative overflow-hidden bg-[#292B2E] px-6 py-14 md:px-12 md:py-[4.5rem] scroll-mt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#E85D26]/[0.06] blur-[130px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <ScrollReveal>
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#E85D26] md:text-sm">
            FEATURED CLIENT WEBSITE
          </p>
          <h2 id="willow-project-heading" className="font-display text-4xl leading-tight text-white md:text-5xl">
            The Website Behind Mark’s Review.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-stone md:text-lg">
            A polished, landscape-driven site for a Southern Idaho real estate group — built to pair full property search with the trust Willow has earned from hundreds of Magic Valley families.
          </p>
          <div className="mt-8 border-l-2 border-[#E85D26] pl-5">
            <p className="font-sans text-lg font-semibold text-white">Willow Realty Group</p>
            <p className="mt-1 font-sans text-sm text-offwhite/70">Southern Idaho Real Estate · Serving the Magic Valley</p>
            <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#E85D26]">Featured Graylock Project</p>
          </div>
          <p className="mt-7 hidden font-sans text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/80 lg:block">Built around the client’s vision.</p>
          <ProjectLinks />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <figure className="relative mx-auto w-full max-w-[760px] pb-[12%] pr-[7%]">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#090909] shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
              <div aria-hidden="true" className="flex h-8 items-center gap-2 border-b border-white/[0.08] bg-[#171717] px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <img src={desktopWebsite} alt="Desktop view of the Willow Realty Group website created by Graylock Digital" className="block h-auto w-full" width={1024} height={558} loading="lazy" decoding="async" />
            </div>
            <img src={mobileWebsite} alt="Mobile view of the Willow Realty Group website" className="absolute bottom-0 right-0 h-auto w-[24%] min-w-[92px] drop-shadow-[0_20px_32px_rgba(0,0,0,0.55)]" width={248} height={485} loading="lazy" decoding="async" />
          </figure>
        </ScrollReveal>
        <div className="lg:hidden">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/80">Built around the client’s vision.</p>
          <ProjectLinks mobile />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-7xl border-t border-white/10 pt-12 md:mt-16 md:pt-16">
        <ScrollReveal>
          <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <figure>
              <figcaption className="mb-6">
                <h3 className="font-display text-2xl text-white md:text-3xl">Mark Nelson’s Full Testimonial</h3>
                <p className="mt-2 font-sans text-sm text-stone">Willow Realty Group · 5-star Google Review</p>
              </figcaption>
              <blockquote className="space-y-5 font-sans text-base leading-relaxed text-stone md:text-lg">
                {testimonial.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </blockquote>
            </figure>
            <figure className="min-w-0">
              <img
                src={googleReview}
                alt="Mark Nelson’s five-star Google review of Graylock Digital; the complete review is transcribed alongside this image."
                className="block h-auto w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-3 font-sans text-sm text-offwhite/70">Original Google review shared on our homepage.</figcaption>
            </figure>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}