import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

const pairs = [
  {
    before: `${import.meta.env.BASE_URL}portfolio-before-1.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-1.png`,
    label: "CPA Firm",
  },
  {
    before: `${import.meta.env.BASE_URL}portfolio-before-2.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-2.png`,
    label: "Therapist",
  },
  {
    before: `${import.meta.env.BASE_URL}portfolio-before-3.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-3.png`,
    label: "Contractor",
  },
];

export function BeforeAfterMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter(prev => {
        if (prev) {
          setActiveIndex(i => (i + 1) % pairs.length);
          return false;
        }
        return true;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const pair = pairs[activeIndex];

  return (
    <ScrollReveal delay={0.2} className="relative w-full max-w-lg mx-auto mt-12 lg:mt-0">
      <div className="relative rounded-xl overflow-hidden border border-gunmetal shadow-2xl shadow-black/50">
        <div className="bg-gunmetal p-2.5 flex gap-1.5 items-center border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="mx-auto flex gap-1">
            {pairs.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setShowAfter(false); }}
                aria-label={`Show ${pairs[i].label} preview`}
                aria-current={i === activeIndex ? "true" : undefined}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-orange scale-125' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] bg-navy">
          <ResponsiveImage
            src={pair.before}
            alt={`${pair.label} website before redesign`}
            aria-hidden={showAfter}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${showAfter ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          />
          <ResponsiveImage
            src={pair.after}
            alt={`${pair.label} website after redesign by Graylock Digital`}
            aria-hidden={!showAfter}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${showAfter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          />

          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-500 ${showAfter ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {showAfter ? 'After' : 'Before'}
          </div>

          <div className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-sm text-stone text-xs px-3 py-1 rounded-full font-sans">
            {pair.label}
          </div>
        </div>
      </div>

      <div className="absolute -inset-4 bg-orange/10 rounded-2xl blur-2xl -z-10"></div>
    </ScrollReveal>
  );
}
