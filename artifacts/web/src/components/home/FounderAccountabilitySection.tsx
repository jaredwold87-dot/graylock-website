import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import founderTim from "@/assets/founder-tim.webp";
import founderJared from "@/assets/founder-jared.webp";

const FOUNDERS = [
  {
    name: "Tim",
    role: "Co-Founder · Client Strategy & Experience",
    description:
      "Guides the strategy, communication, and client experience from the first conversation through launch.",
    image: founderTim,
  },
  {
    name: "Jared",
    role: "Co-Founder · Design & Development",
    description:
      "Leads the design and development work that turns the strategy into a polished, high-performing website.",
    image: founderJared,
  },
] as const;

export function FounderAccountabilitySection() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E85D26] md:text-sm">
            The People Behind the Work
          </p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            You’ll Know Who Is Building Your Website.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-base leading-relaxed text-stone md:text-lg">
            Graylock is led by Tim and Jared. From strategy and messaging through design,
            development, launch, and ongoing support, your website is handled by a real
            U.S.-based team that stays involved after it goes live.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {FOUNDERS.map((founder, index) => (
            <ScrollReveal key={founder.name} delay={index * 0.1} className="h-full">
              <article className="grid h-full grid-cols-[112px_1fr] overflow-hidden rounded-xl border border-white/[0.09] bg-[#101010] shadow-xl sm:grid-cols-[150px_1fr]">
                <img
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role}`}
                  className="h-full min-h-[230px] w-full object-cover object-top grayscale"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <h3 className="font-display text-3xl text-white">{founder.name}</h3>
                  <p className="mt-2 font-sans text-[11px] font-bold uppercase leading-relaxed tracking-[0.13em] text-[#E85D26]">
                    {founder.role}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-stone">
                    {founder.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15} className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex min-h-12 items-center font-sans text-sm font-semibold text-offwhite underline decoration-[#E85D26]/60 underline-offset-4 transition-colors hover:text-[#E85D26] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26]"
          >
            Meet the Graylock Team →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}