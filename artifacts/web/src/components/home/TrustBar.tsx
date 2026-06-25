export function TrustBar() {
  return (
    <section className="relative bg-[#0f0f0f] py-6 px-6 border-t border-b border-white/[0.06] overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
        <span className="text-stone font-sans text-sm tracking-wide">
          <span className="text-white font-semibold">7–10</span> Business Day Delivery
        </span>

        <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent hidden sm:block" />

        <span className="text-stone font-sans text-sm tracking-wide">
          <span className="text-white font-semibold">Free</span> Website Refresh Every Two Years
        </span>

        <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent hidden sm:block" />

        <span className="text-stone font-sans text-sm tracking-wide">
          <span className="text-white font-semibold">30-Day</span> 100% Money-Back Guarantee
        </span>
      </div>
    </section>
  );
}
