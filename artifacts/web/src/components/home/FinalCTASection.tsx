import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0f0f0f] px-6 py-20 md:px-12 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E85D26]/[0.07] blur-[130px]"
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E85D26] md:text-sm">
            Your Next Step
          </p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            See What a Better Website Could Look Like for Your Business.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-stone md:text-xl">
            Start with a 15-minute discovery call. Tell us what you want your website to do,
            and Graylock will create a custom homepage direction before any build fee is due.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <CTAButton
              href="/get-started"
              variant="funnel"
              className="min-h-14 px-8 text-base"
            >
              Request a 15-Minute Discovery Call
            </CTAButton>
            <CTAButton
              href="/featured-projects"
              variant="outline"
              className="min-h-14 px-8 text-base"
            >
              See Real Client Websites
            </CTAButton>
          </div>
          <p className="mt-6 font-sans text-sm leading-relaxed text-stone">
            Plans from $199/month. Build fees begin at $799 after demo approval.
          </p>
          <p className="mt-3 font-sans text-sm font-semibold text-offwhite">
            No pressure. No obligation. Just a clearer path forward.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}