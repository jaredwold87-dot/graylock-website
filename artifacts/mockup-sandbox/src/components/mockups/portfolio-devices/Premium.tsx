import { ExternalLink } from "lucide-react";
import './_group.css';
export function Premium(){
  return <main className="portfolio-study">
    <a href="https://spokanekitchenconcierge.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit The Kitchen Concierge website" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500">
      <div className="device-stage">
        <svg viewBox="0 0 1000 562" role="img" aria-label="The Kitchen Concierge website displayed on a silver MacBook">
          <defs>
            <linearGradient id="rim" x2="1" y2="1"><stop stopColor="#b8b8b9"/><stop offset=".2" stopColor="#49494b"/><stop offset=".6" stopColor="#181819"/><stop offset="1" stopColor="#a6a6aa"/></linearGradient>
            <linearGradient id="deck" x2=".1" y2="1"><stop stopColor="#4c4c4e"/><stop offset=".14" stopColor="#a2a2a5"/><stop offset=".55" stopColor="#757578"/><stop offset="1" stopColor="#c6c6c9"/></linearGradient>
            <linearGradient id="edge" x2="0" y2="1"><stop stopColor="#dbdbdd"/><stop offset=".4" stopColor="#929296"/><stop offset="1" stopColor="#363639"/></linearGradient>
            <linearGradient id="gloss" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".06"/><stop offset=".5" stopColor="#fff" stopOpacity="0"/></linearGradient>
            <clipPath id="display"><rect x="100" y="34" width="728" height="399" rx="3"/></clipPath>
          </defs>
          <ellipse cx="460" cy="538" rx="432" ry="15" fill="#000" opacity=".6"/>
          <rect x="81" y="12" width="766" height="450" rx="20" fill="url(#rim)" stroke="#bcbcbc" strokeOpacity=".5"/>
          <rect x="85" y="16" width="758" height="441" rx="17" fill="#080809"/>
          <image href="/__mockup/images/portfolio-devices/desktop.webp" x="100" y="34" width="728" height="399" clipPath="url(#display)" preserveAspectRatio="xMidYMid slice"/>
          <rect x="100" y="34" width="728" height="399" rx="3" fill="url(#gloss)"/>
          <circle cx="464" cy="25" r="3" fill="#202632"/><circle cx="464" cy="25" r="1" fill="#526074"/>
          <text x="464" y="448" textAnchor="middle" fill="#999" fontSize="8" fontFamily="Arial,sans-serif">MacBook Pro</text>
          <path d="M81 460H847L915 524Q919 531 905 535H24Q10 532 17 524Z" fill="url(#deck)" stroke="#bbb" strokeWidth=".7"/>
          <path d="M106 465H819L846 501H77Z" fill="#303033" stroke="#d3d3d3" strokeOpacity=".3"/>
          {Array.from({length:5},(_,row)=>Array.from({length:14},(_,col)=><rect key={`${row}-${col}`} x={105+col*50-row*3} y={468+row*6.2} width={43+row*.5} height="4.5" rx="1" fill="#171719" stroke="#777" strokeWidth=".35"/>))}
          <path d="M335 506H589L603 523H321Z" fill="#99999c" stroke="#505053" strokeWidth=".8"/>
          <path d="M17 527Q465 536 914 527L905 537Q464 547 24 537Z" fill="url(#edge)"/>
          <path d="M404 530H523L519 534H408Z" fill="#5e5e62"/>
        </svg>
        <div className="phone" aria-label="The Kitchen Concierge mobile website on an iPhone">
          <div className="phone-screen">
            <img src="/__mockup/images/portfolio-devices/mobile.webp" alt="Actual mobile homepage of The Kitchen Concierge"/>
            <span className="island"/><span className="home-line"/>
          </div>
        </div>
      </div>
    </a>
    <div className="caption"><div><h3>The Kitchen Concierge</h3><p>Full Custom Kitchens</p></div><a href="https://spokanekitchenconcierge.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit live website" className="p-3.5 rounded-full bg-white/5 hover:bg-white/10"><ExternalLink size={18}/></a></div>
  </main>;
}
