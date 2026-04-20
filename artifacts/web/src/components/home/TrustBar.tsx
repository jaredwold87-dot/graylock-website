export function TrustBar() {
  return (
    <section className="relative py-6 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/80 via-[#152847]/60 to-[#0c1a2e]/80 backdrop-blur-xl" />
      <div className="absolute inset-0 border-t border-b border-white/[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
        <span className="text-stone/90 font-sans text-sm tracking-wide">
          Includes <span className="text-offwhite font-semibold">$1,500</span> in Practice Growth Bonuses
        </span>

        <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent hidden sm:block" />

        <span className="text-stone/90 font-sans text-sm tracking-wide">
          <span className="text-offwhite font-semibold">7–10</span> Business Day Delivery
        </span>

        <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent hidden sm:block" />

        <span className="text-stone/90 font-sans text-sm tracking-wide">
          <span className="text-offwhite font-semibold">100%</span> U.S.-Based Team
        </span>

        <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent hidden sm:block" />

        <span className="text-stone/90 font-sans text-sm tracking-wide">
          <span className="text-offwhite font-semibold">30-Day</span> 100% Money-Back Guarantee
        </span>
      </div>
    </section>
  );
}
