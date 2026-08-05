import { useLayoutEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. Applied as transition-delay once in view. */
  delay?: number;
}

/**
 * Fail-visible, blink-free scroll reveal.
 *
 * WHY useLayoutEffect:
 *   useEffect runs after the first browser paint, so any hidden state it
 *   applies would cause a flash: element paints visible, then jumps to
 *   opacity:0, then fades in. useLayoutEffect is synchronous — it runs
 *   after the DOM is mutated but BEFORE the browser commits the first
 *   paint, so the prepared (hidden) state is set before anything is shown.
 *
 * FAIL-VISIBLE guarantee:
 *   The inline opacity/transform styles are only ever written by JS.
 *   SSR, prerendered markup, crawlers, and no-JS environments therefore
 *   see the element at its natural CSS state (fully visible).
 *
 * DELAY safety:
 *   Delay is applied as a CSS transition-delay at the moment intersection
 *   fires, NOT as an animation-delay on a keyframe class. During the delay
 *   period the element stays at opacity:0 (the "from" state), then fades
 *   in — no visible-to-hidden blink at any point.
 *
 * CLEANUP:
 *   The effect cleanup removes all inline styles so components cannot get
 *   stuck hidden on HMR hot-reloads or fast unmount/remount cycles.
 *
 * REDUCED-MOTION:
 *   Skips the effect entirely, leaving content fully visible with no
 *   hidden state or transitions applied.
 */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced-motion: leave content fully visible, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ── Prepare hidden state (synchronous, before first paint) ─────────────
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    // Suppress any transition while we're in the hidden state so there is
    // no inadvertent animation before intersection fires.
    el.style.transition = "none";

    // ── Reveal on intersection ─────────────────────────────────────────────
    const d = delay > 0 ? `${delay}s` : "0s";

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();

        // Element is now in view. Transition from the prepared hidden state
        // to fully visible. The delay holds it at opacity:0 during stagger,
        // then fades up — no blink because the transition-delay covers the
        // wait period at opacity:0 (same as the prepared state).
        el.style.transition = `opacity 0.55s ease ${d}, transform 0.55s ease ${d}`;
        el.style.opacity = "1";
        el.style.transform = "";
      },
      // Fire as soon as a single pixel enters the viewport.
      // Small negative bottom margin avoids triggering on elements that are
      // *just barely* clipping the edge during momentum scrolling.
      { rootMargin: "0px 0px -4% 0px", threshold: 0 },
    );

    observer.observe(el);

    // ── Cleanup: restore visibility on unmount / HMR so nothing sticks ─────
    return () => {
      observer.disconnect();
      el.style.opacity = "";
      el.style.transform = "";
      el.style.transition = "";
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
