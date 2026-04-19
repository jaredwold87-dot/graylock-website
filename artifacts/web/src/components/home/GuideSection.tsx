import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GuideSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="relative max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">A Trusted Guide</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-navy mb-6 leading-tight">
            You Do Not Need to Guess What Is Wrong With Your Website.
          </h2>
          <p className="text-charcoal/80 text-lg font-sans leading-relaxed">
            Most business owners know their website is holding them back, but they do not know exactly what to change or whether they can trust an agency to do it right. Graylock Digital helps you see the problems clearly, understand the right strategy, and move forward without the typical agency risk.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
