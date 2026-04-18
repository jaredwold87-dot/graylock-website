import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GuideSection() {
  return (
    <section className="bg-navy py-20 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">A Trusted Guide</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite mb-6 leading-tight">
            You Do Not Need to Guess What Is Wrong With Your Website.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Most business owners know their website is holding them back, but they do not know exactly what to change or whether they can trust an agency to do it right. Graylock Digital helps you see the problems clearly, understand the right strategy, and move forward without the typical agency risk.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
