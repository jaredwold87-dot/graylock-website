import { ScrollReveal } from "@/components/ui/ScrollReveal";

function OldSite() {
  return (
    <div className="w-full h-full bg-white overflow-hidden font-serif">
      <div className="bg-[#336633] text-white px-1.5 py-1 flex items-center justify-between">
        <span className="font-bold text-[5px] sm:text-[6px] md:text-[7px]">Smith's Plumbing LLC</span>
        <div className="flex gap-1 text-[3px] sm:text-[3.5px]">
          <span>Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#8fbc8f] to-[#5a8f5a] px-2 py-3 sm:py-4 text-center">
        <div className="text-white font-bold text-[7px] sm:text-[9px] md:text-[11px] drop-shadow mb-1">Welcome To Our Website!</div>
        <div className="text-white/80 text-[3px] sm:text-[4px]">Serving Springfield Since 1995</div>
        <div className="text-yellow-300 text-[3px] sm:text-[4px] font-bold mt-1 animate-pulse">CALL NOW: (555) 123-4567</div>
      </div>

      <div className="px-1.5 py-1.5">
        <div className="flex gap-1 mb-1.5">
          <div className="flex-1 bg-[#f5f5dc] border-2 border-[#8b7355] p-1 text-center">
            <div className="bg-[#ddd] h-4 sm:h-5 mb-0.5 flex items-center justify-center text-[2px] text-gray-400">photo.jpg</div>
            <div className="font-bold text-[3.5px] sm:text-[4.5px] text-[#336633]">Repairs</div>
          </div>
          <div className="flex-1 bg-[#f5f5dc] border-2 border-[#8b7355] p-1 text-center">
            <div className="bg-[#ddd] h-4 sm:h-5 mb-0.5 flex items-center justify-center text-[2px] text-gray-400">photo.jpg</div>
            <div className="font-bold text-[3.5px] sm:text-[4.5px] text-[#336633]">Installation</div>
          </div>
          <div className="flex-1 bg-[#f5f5dc] border-2 border-[#8b7355] p-1 text-center">
            <div className="bg-[#ddd] h-4 sm:h-5 mb-0.5 flex items-center justify-center text-[2px] text-gray-400">photo.jpg</div>
            <div className="font-bold text-[3.5px] sm:text-[4.5px] text-[#336633]">Emergency</div>
          </div>
        </div>

        <div className="bg-[#ffffcc] border border-[#cc0000] p-1 text-center mb-1.5">
          <div className="text-red-700 font-bold text-[4px] sm:text-[5px]">SPRING SPECIAL - 10% OFF!</div>
          <div className="text-[2.5px] sm:text-[3px] text-gray-700">Mention this ad when you call!</div>
        </div>

        <div className="text-[2.5px] sm:text-[3px] text-gray-600 leading-relaxed">
          Welcome to Smith's Plumbing. We are a family owned business that has been providing quality plumbing services to the Springfield area for over 25 years. We do all types of plumbing work including residential and commercial...
        </div>
      </div>

      <div className="bg-[#336633] text-white text-center py-1 text-[2px] sm:text-[2.5px] mt-1">
        Copyright 2019 Smith's Plumbing LLC. All Rights Reserved.
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div className="w-full h-full bg-[#111827] overflow-hidden font-sans">
      <div className="flex items-center justify-between px-2 py-1 border-b border-white/10">
        <span className="font-bold text-white text-[5px] sm:text-[6px] md:text-[7px] tracking-wider">SMITH<span className="text-orange font-normal">plumbing</span></span>
        <div className="flex items-center gap-2 text-[3px] sm:text-[3.5px] text-gray-300">
          <span>Services</span>
          <span>About</span>
          <span>Reviews</span>
          <span className="bg-orange text-white px-1.5 py-0.5 rounded-sm font-semibold">Get a Quote</span>
        </div>
      </div>

      <div className="relative px-3 py-4 sm:py-6" style={{ background: 'linear-gradient(135deg, #111827, #1e293b)' }}>
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-orange/10 to-transparent" />
        <div className="relative z-10">
          <div className="font-bold text-white text-[8px] sm:text-[10px] md:text-[13px] leading-[1.15] mb-1.5">
            Springfield's Most<br/>Trusted Plumber
          </div>
          <div className="text-gray-400 text-[3px] sm:text-[4px] max-w-[55%] leading-relaxed mb-2">
            Fast, reliable plumbing for your home or business. Licensed, insured, and ready when you need us.
          </div>
          <div className="flex gap-1">
            <div className="bg-orange text-white px-2 py-0.5 rounded-sm text-[3px] sm:text-[4px] font-bold">Book Online</div>
            <div className="border border-white/30 text-white px-2 py-0.5 rounded-sm text-[3px] sm:text-[4px]">Our Work</div>
          </div>
        </div>
      </div>

      <div className="px-3 py-2 sm:py-3">
        <div className="text-center mb-2">
          <div className="text-orange text-[3px] sm:text-[3.5px] font-semibold uppercase tracking-widest mb-0.5">Our Services</div>
          <div className="text-white font-bold text-[5px] sm:text-[6px] md:text-[8px]">What We Do Best</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { title: "Repairs", color: "bg-blue-500/20" },
            { title: "New Install", color: "bg-green-500/20" },
            { title: "Emergency", color: "bg-red-500/20" },
          ].map((svc, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-1.5 rounded-sm text-center">
              <div className={`w-3 h-3 ${svc.color} rounded-full mx-auto mb-1`}></div>
              <div className="text-white font-bold text-[3.5px] sm:text-[4px]">{svc.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 py-2 bg-white/[0.03]">
        <div className="text-center">
          <div className="text-orange text-[3px] sm:text-[3.5px] font-semibold uppercase tracking-widest mb-0.5">Service Area</div>
          <div className="text-white font-bold text-[5px] sm:text-[6px] md:text-[8px] mb-1">Serving the Greater Metro Region</div>
          <div className="text-gray-400 text-[3px] sm:text-[3.5px]">Licensed, insured, and on call 24/7 for emergencies.</div>
        </div>
      </div>
    </div>
  );
}

function LaptopFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="bg-[#2a2a2a] rounded-t-[4px] sm:rounded-t-[6px] md:rounded-t-[8px] p-[2px] sm:p-[3px] md:p-1 pb-0 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-[2px] mb-[2px] sm:mb-[3px]">
          <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#ff5f57]"></div>
          <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#febc2e]"></div>
          <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-[1px]">
          {children}
        </div>
      </div>
      <div className="bg-[#1a1a1a] h-1 sm:h-1.5 md:h-2 rounded-b-sm mx-[10%]"></div>
      <div className="bg-[#2a2a2a] h-[2px] sm:h-1 rounded-b-sm mx-[20%]"></div>
    </div>
  );
}

export function HeroDeviceMockup() {
  return (
    <ScrollReveal className="relative w-full pb-[75%]">
      <div className="absolute top-0 left-0 w-[58%] z-10 transform -rotate-3 opacity-60">
        <LaptopFrame>
          <OldSite />
        </LaptopFrame>
      </div>

      <svg className="absolute top-[30%] left-[35%] z-20 w-[22%] h-auto text-orange drop-shadow-lg" viewBox="0 0 120 80" fill="none">
        <path d="M15 55 C35 60, 65 50, 95 22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M85 17 L98 22 L88 33" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <div className="absolute bottom-0 right-0 w-[75%] z-30">
        <LaptopFrame>
          <NewSite />
        </LaptopFrame>
      </div>
    </ScrollReveal>
  );
}
