import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PROCESS_STEPS = [
  {
    title: "Start With a Short Discovery Call",
    copy: "Tell us what is working, what is not, and what you want your website to do for your business.",
  },
  {
    title: "See a Custom Homepage Direction",
    copy: "Graylock researches your business, audience, and market, then creates a homepage direction built around your specific business.",
  },
  {
    title: "Approve the Direction Before the Build Begins",
    copy: "If the direction feels right, approve the build and move forward with clarity. If it is not the right fit, there is no build fee.",
  },
  {
    title: "Launch With Ongoing Support",
    copy: "Your website is hosted, maintained, and supported after launch through a month-to-month plan.",
  },
] as const;

export function ValueDifferentiationSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[var(--home-dark-surface,#0f0f0f)] px-6 py-20 md:px-12 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E85D26] md:text-sm">
            A Clearer Way to Build
          </p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            See the Direction Before You Commit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone md:text-lg">
            Building a new website should not feel like a gamble. Graylock starts by
            understanding your business, creating a custom homepage direction, and giving
            you a clear path forward before any build fee is due.
          </p>
        </ScrollReveal>

        <ol className="relative mt-14 grid list-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-[#E85D26]/20 via-[#E85D26]/70 to-[#E85D26]/20 lg:block"
          />
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <ScrollReveal delay={index * 0.08} className="h-full">
                <article className="relative h-full border-l border-white/10 pl-7 lg:border-l-0 lg:pl-0 lg:pt-0">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#E85D26]/50 bg-[#161616] font-display text-xl text-[#E85D26] shadow-[0_0_24px_rgba(232,93,38,0.12)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone">
                    {step.copy}
                  </p>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        <ScrollReveal delay={0.15} className="mt-14 text-center">
          <CTAButton href="/get-started" variant="funnel" className="min-h-14 px-8">
            Request a 15-Minute Discovery Call
          </CTAButton>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-relaxed text-stone">
            Plans from $199/month. Build fees begin at $799 and are only paid after you
            approve your free homepage demo.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}