import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

function AnimatedStat({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const isNumber = /^\d+$/.test(value);
          if (isNumber) {
            const target = parseInt(value);
            const duration = 1500;
            const start = Date.now();
            const tick = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(target * eased).toString());
              if (progress < 1) requestAnimationFrame(tick);
            };
            tick();
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-display text-gradient stat-glow mb-2">
      {display}{suffix}
    </div>
  );
}

export function TrustStatsSection() {
  const testimonials = TESTIMONIALS.slice(3, 5);

  return (
    <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Built for Businesses Like Yours
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((test, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="card-glow gradient-border bg-charcoal/80 p-8 rounded-xl border border-gunmetal/50 flex flex-col justify-between">
              <div className="flex gap-1 text-orange mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-stone font-sans italic mb-8 text-lg leading-relaxed">
                "{test.quote}"
              </p>
              <div className="pt-4 border-t border-gunmetal/50">
                <h4 className="font-display text-offwhite text-lg">{test.name}</h4>
                <p className="text-stone text-sm">{test.title} • {test.location}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="bg-charcoal/60 rounded-2xl border border-gunmetal/50 p-8 md:p-12 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gunmetal/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-orange/3 pointer-events-none" />
            <div className="flex-1 text-center py-6 md:py-0 px-4 relative z-10">
              <div className="text-4xl md:text-6xl font-display text-gradient stat-glow mb-2">$0</div>
              <div className="text-stone font-display text-xl tracking-wide uppercase">Cost for Your Review</div>
            </div>
            <div className="flex-1 text-center py-6 md:py-0 px-4 relative z-10">
              <div className="text-4xl md:text-6xl font-display text-gradient stat-glow mb-2">3–5 Days</div>
              <div className="text-stone font-display text-xl tracking-wide uppercase">Average Build Time</div>
            </div>
            <div className="flex-1 text-center py-6 md:py-0 px-4 relative z-10">
              <AnimatedStat value="100" suffix="%" />
              <div className="text-stone font-display text-xl tracking-wide uppercase">Done-For-You Service</div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
