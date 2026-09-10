import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import desktopWebsite from "@/assets/work/interior-finishes-transformation.webp";
import mobileWebsite from "@/assets/interior-finishes-mobile.webp";

export function FeaturedWorkSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--home-dark-surface,#111111)] px-6 py-14 md:px-12 md:py-[4.5rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#E85D26]/[0.06] blur-[130px]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <ScrollReveal>
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#E85D26] md:text-sm">
            Featured Work
          </p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            A Custom Website Should Reflect the Quality of the Business Behind It.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-stone md:text-lg">
            Interior Finishes Cabinets and Design trusted Graylock to turn their vision into
            a custom website with a polished, professional online presence.
          </p>

          <div className="mt-8 border-l-2 border-[#E85D26] pl-5">
            <p className="font-sans text-lg font-semibold text-white">
              Interior Finishes Cabinets and Design
            </p>
            <p className="mt-1 font-sans text-sm text-offwhite/70">Cabinets &amp; Design</p>
            <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#E85D26]">
              Featured Graylock Project
            </p>
          </div>

          <p className="mt-7 hidden font-sans text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/80 lg:block">
            Built around the client’s vision.
          </p>

          <div className="mt-9 hidden flex-wrap items-center gap-x-7 gap-y-4 lg:flex">
            <a
              href="https://www.interiorfinishesreno.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shimmer inline-flex min-h-14 items-center justify-center gap-2 rounded bg-[#E85D26] px-7 py-4 font-sans font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d14d1a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]"
            >
              Visit the Live Website →
            </a>
            <Link
              href="/featured-projects"
              className="inline-flex min-h-12 items-center font-sans text-sm font-semibold text-offwhite underline decoration-[#E85D26]/60 underline-offset-4 transition-colors hover:text-[#E85D26] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26]"
            >
              Explore All Client Websites →
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <figure className="relative mx-auto w-full max-w-[760px] pb-[12%] pr-[7%]">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#090909] shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
              <div className="flex h-8 items-center gap-2 border-b border-white/[0.08] bg-[#171717] px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <img
                src={desktopWebsite}
                alt="Desktop view of the Interior Finishes Cabinets and Design website created by Graylock Digital"
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <img
              src={mobileWebsite}
              alt="Mobile view of the Interior Finishes Cabinets and Design website created by Graylock Digital"
              className="absolute bottom-0 right-0 h-auto w-[24%] min-w-[92px] drop-shadow-[0_20px_32px_rgba(0,0,0,0.55)]"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </ScrollReveal>

        <div className="lg:hidden">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/80">
            Built around the client’s vision.
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <a
              href="https://www.interiorfinishesreno.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shimmer inline-flex min-h-14 items-center justify-center gap-2 rounded bg-[#E85D26] px-7 py-4 text-center font-sans font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#d14d1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]"
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
        </div>
      </div>
    </section>
  );
}