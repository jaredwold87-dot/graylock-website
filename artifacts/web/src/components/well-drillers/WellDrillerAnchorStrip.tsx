import { useEffect, useRef, useState } from "react";

/**
 * Conversation-flow anchor strip (spec §3): a compact public page navigator
 * pinned directly beneath the global header. Helps a prospect scan the story
 * (and lets Kim move to the next relevant section on a call) without ever
 * reading as a sales script. Desktop: slim centered row. Mobile: horizontal
 * scroll with edge fades and 44px tap targets.
 */
const ANCHORS = [
  { label: "Why We Called", id: "why-graylock-called" },
  { label: "What a Better Site Does", id: "what-a-better-site-does" },
  { label: "Your Free Demo", id: "free-custom-demo" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing + Guarantee", id: "pricing-guarantee" },
];

/** Height of the fixed global navbar once scrolled (py-3 + 40px content). */
const STICKY_TOP_CLASS = "top-[63px]";

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function WellDrillerAnchorStrip() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll-spy: the active section is the last one whose top has crossed the
  // upper 40% of the viewport. rAF-throttled; cheap enough for a scroll handler.
  useEffect(() => {
    let ticking = false;
    let frame = 0;
    const update = () => {
      ticking = false;
      const threshold = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const anchor of ANCHORS) {
        const el = document.getElementById(anchor.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = anchor.id;
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        frame = window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keep the active anchor visible inside the mobile horizontal scroller.
  useEffect(() => {
    if (!activeId) return;
    const link = linkRefs.current[activeId];
    if (!link) return;
    const scroller = link.closest("[data-anchor-scroller]");
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    link.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

  const handleClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return; // default anchor behavior still works
    event.preventDefault();
    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    // Preserve campaign query params (market/rep/source/utm) in the URL.
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#${id}`,
    );
  };

  return (
    <nav
      aria-label="Page sections"
      className={`sticky ${STICKY_TOP_CLASS} z-40 bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-white/10`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Mobile edge fades — signal that the row scrolls */}
        <div
          className="md:hidden absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0f0f0f] to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          className="md:hidden absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          data-anchor-scroller
          className="flex md:justify-center overflow-x-auto px-6 md:px-12 gap-7 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ANCHORS.map((anchor) => {
            const isActive = activeId === anchor.id;
            return (
              <a
                key={anchor.id}
                ref={(el) => {
                  linkRefs.current[anchor.id] = el;
                }}
                href={`#${anchor.id}`}
                onClick={handleClick(anchor.id)}
                aria-current={isActive ? "true" : undefined}
                className={`flex-shrink-0 inline-flex items-center min-h-[44px] border-b-2 whitespace-nowrap font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange ${
                  isActive
                    ? "text-white border-[#E85D26]"
                    : "text-stone border-transparent hover:text-white"
                }`}
              >
                {anchor.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
