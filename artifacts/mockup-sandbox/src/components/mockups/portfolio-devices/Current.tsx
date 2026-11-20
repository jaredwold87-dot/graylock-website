import { ExternalLink } from "lucide-react";
import './_group.css';
export function Current() {
  const project = {name:"The Kitchen Concierge",category:"Full Custom Kitchens",image:"/__mockup/images/portfolio-devices/desktop.webp",url:"https://spokanekitchenconcierge.com/"};
  return <main className="portfolio-study">
    <div className="group flex flex-col gap-5 md:gap-6">
      <button
        type="button"
        aria-label={`View details for ${project.name}`}
        className="relative block w-full text-left rounded-xl overflow-hidden bg-[#16161d] border border-white/[0.06] shadow-2xl cursor-pointer group-hover:border-white/[0.15] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
      >
        <div className="absolute inset-0 bg-[#0f0f0f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
          <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-black px-7 py-3.5 rounded-full font-sans font-semibold text-sm shadow-2xl flex items-center gap-2">View Details</div>
        </div>
        <div className="flex items-center px-4 py-3 bg-[#111116] border-b border-white/[0.04]">
          <span className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] group-hover:bg-[#ff5f57] transition-colors duration-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] group-hover:bg-[#febc2e] transition-colors duration-300 delay-75" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] group-hover:bg-[#28c840] transition-colors duration-300 delay-150" />
          </span>
        </div>
        <div className="overflow-hidden bg-[#0a0a0a] aspect-[1600/870] relative">
          <img src={project.image} alt={project.name} className="w-full h-full object-contain block transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
        </div>
      </button>
      <div className="flex justify-between items-start px-2 mt-1">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">{project.name}</h3>
          <p className="font-sans text-[#E85D26] font-medium text-[13px] md:text-sm mt-1.5 tracking-widest uppercase">{project.category}</p>
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors flex-shrink-0 ml-4" title="Visit live site"><ExternalLink size={18}/></a>
      </div>
    </div>
  </main>;
}
