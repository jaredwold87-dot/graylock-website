export function TrustBar() {
  return (
    <section className="relative bg-[#242323] py-6 px-6 border-t border-b border-[#AEA7A3]/10 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
        <span className="text-[#AEA7A3] font-sans text-sm tracking-wide">
          <span className="text-[#ECE8E4] font-semibold">7–10</span> Business Day Delivery
        </span>

        <div className="h-5 w-px bg-gradient-to-b from-transparent via-[#AEA7A3]/15 to-transparent hidden sm:block" />

        <span className="text-[#AEA7A3] font-sans text-sm tracking-wide">
          <span className="text-[#ECE8E4] font-semibold">3×</span> More Inquiries on Average
        </span>

        <div className="h-5 w-px bg-gradient-to-b from-transparent via-[#AEA7A3]/15 to-transparent hidden sm:block" />

        <span className="text-[#AEA7A3] font-sans text-sm tracking-wide">
          <span className="text-[#ECE8E4] font-semibold">30-Day</span> 100% Money-Back Guarantee
        </span>
      </div>
    </section>
  );
}
