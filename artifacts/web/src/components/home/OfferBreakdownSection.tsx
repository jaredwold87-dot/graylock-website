import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function OfferBreakdownSection() {
  const steps = [
    {
      num: "01",
      title: "15-Minute Fit Call",
      desc: "We learn about your business, your current website, and what you need your online presence to improve. Then we determine whether Graylock is the right fit.",
      highlight: false
    },
    {
      num: "02",
      title: "Your Free Homepage Direction",
      desc: "If the work is a fit, we create a custom homepage direction around your business before any build fee is due.",
      highlight: false
    },
    {
      num: "03",
      title: "Approve the Direction",
      desc: "You review the direction, scope, and next steps. If it feels right, you approve the build and move forward with clarity.",
      highlight: false
    },
    {
      num: "04",
      title: "Built and Launched on Your Domain",
      desc: "Once the required materials and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days.",
      highlight: false
    }
  ];

  return (
    <section className="relative bg-[#f5f5f4] py-24 md:py-32 px-6 md:px-12 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-[#B23E16] font-sans font-semibold tracking-wider text-sm uppercase mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6 leading-tight">
            A Clear Path From First Call to Launch.
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg lg:text-xl font-sans leading-relaxed">
            Start with a short fit call. If Graylock is the right fit, you see a custom homepage direction before any build fee is due. You approve the direction, then we build and launch your website.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Mobile vertical connecting rule */}
          <div 
            className="block md:hidden absolute left-[20px] top-[20px] bottom-[40px] w-[1px] bg-[#d1d5db]" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-24 gap-x-8 lg:gap-x-12 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15} className="relative">
                {/* 
                  Horizontal Line for each item on tablet/desktop. 
                  Extends far to the right, hidden by the next item's number background. 
                */}
                <div 
                  className={`hidden absolute top-[20px] left-[50px] w-[calc(100%+2rem-50px)] lg:w-[calc(100%+3rem-50px)] h-[1px] bg-[#d1d5db] -z-10
                    ${i === 3 ? '!hidden' : ''} 
                    ${i === 1 ? 'lg:block md:hidden' : 'md:block'}
                  `}
                  aria-hidden="true"
                />

                <div className="relative flex flex-col md:block items-start text-left pl-16 md:pl-0">
                  {/* Number container - solid bg masks the horizontal line behind it */}
                  <div className="absolute md:relative top-0 left-0 md:inline-block bg-[#f5f5f4] md:pr-6 md:pb-6 z-10">
                    <span className={`text-4xl md:text-5xl font-display leading-none block ${
                      step.highlight ? 'text-[#E85D26]' : 'text-[#E85D26] opacity-90'
                    }`}>
                      {step.num}
                    </span>
                  </div>

                  <div className="md:mt-2">
                    {step.highlight && (
                      <div className="hidden md:block w-8 h-1 bg-[#E85D26] mb-4 opacity-80" aria-hidden="true" />
                    )}
                    <h3 className={`font-display mb-3 md:mb-4 leading-tight ${
                      step.highlight 
                        ? 'text-2xl md:text-3xl text-[#1a202c]' 
                        : 'text-xl md:text-2xl text-[#1a202c] opacity-90'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`font-sans leading-relaxed ${
                      step.highlight
                        ? 'text-[#1a202c] font-medium text-base md:text-lg'
                        : 'text-[#4a5568] text-base'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
