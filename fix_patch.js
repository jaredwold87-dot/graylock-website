const fs = require('fs');
let content = fs.readFileSync('artifacts/web/src/components/booking/BookCallForm.tsx', 'utf8');

content = content.replace(': INPUT_BASE\n      : INPUT_BASE,', ': INPUT_BASE,');

const submitErrorFix = content.replace(
  `submitBtn: isPage\n      ? "mt-2 bg-[#E85D26] text-white font-sans font-bold tracking-widest uppercase text-base px-6 py-4 hover:bg-[#D94F1C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-full shadow-lg shadow-[#E85D26]/10"\n      : "mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full"\n      : "mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full",`,
  `submitBtn: isPage\n      ? "mt-2 bg-[#E85D26] text-white font-sans font-bold tracking-widest uppercase text-base px-6 py-4 hover:bg-[#D94F1C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-full shadow-lg shadow-[#E85D26]/10"\n      : "mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full",`
);

if (content !== submitErrorFix) {
  content = submitErrorFix;
} else {
  content = content.replace(
    /: "mt-6 bg-\[#0F0F0F\] text-\[#F4F1EC\] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-\[#E85D26\] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-\[#0F0F0F\] disabled:hover:text-\[#F4F1EC\] flex items-center justify-center gap-3 w-full"\n      : "mt-6 bg-\[#0F0F0F\] text-\[#F4F1EC\] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-\[#E85D26\] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-\[#0F0F0F\] disabled:hover:text-\[#F4F1EC\] flex items-center justify-center gap-3 w-full",/g,
    `: "mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full",`
  )
}

fs.writeFileSync('artifacts/web/src/components/booking/BookCallForm.tsx', content);
