import { useId } from "react";
import { ExternalLink } from "lucide-react";
import "./Premium.css";

const projects = [
  ["The Kitchen Concierge","Custom Kitchens","kitchen-concierge.webp","kitchen-mobile.webp"],
  ["Liquid Soul Hydration","IV Hydration & Wellness","liquid-soul-hydration.webp"],
  ["Legacy Outdoor Living","Outdoor Living","legacy-outdoor-living.webp"],
  ["Shane Camp","Comedy & Entertainment","shane-camp.webp"],
  ["Backroads Beauty","Hormone Care & Aesthetics","backroads-beauty.webp"],
  ["Willow Realty Group","Real Estate","willow-transformation.webp","willow-mobile.webp"],
  ["Meagher Builders","Custom Homes & Remodeling","meagher-builders-transformation.webp"],
  ["Benevolent Auctions","Charity Auctions","benevolent-transformation.webp"],
  ["Interior Finishes","Cabinetry & Interior Design","interior-finishes-transformation.webp"],
  ["L.A. Perks Petroleum Specialists","Fuel & Petroleum Services","perks-transformation.webp"],
  ["IANA PAC","Professional Association","iana-pac-transformation.webp"],
  ["Kingsbury Chiropractic","Chiropractic Care","kingsbury-transformation.webp"],
  ["Rosenlund Drilling","Water Well Drilling","rosenlund-drilling-transformation.webp"],
  ["West Coast Eye Institute","Ophthalmology & Eye Care","wce-transformation.webp"],
  ["Wicks Land & Yard Management","Land & Property Services","wicks-transformation.webp"],
  ["Camas Creek Lumber","Custom-Cut Lumber & Timbers","camas-creek-lumber.webp"],
  ["Bluegrass Dental Anesthesia","Dental Anesthesia","bluegrass-transformation.webp"],
  ["Emboxed","Online Retail","emboxed-transformation.webp"],
  ["Smart Tax CRNA","Tax Preparation","smart-tax-crna-transformation.webp"],
  ["Erin Sells 775","Real Estate","erin-sells-775-transformation.webp"],
  ["Olive Creek Nursery","Garden Nursery","olive-creek-transformation.webp"],
  ["TekMark Industries","Industrial Manufacturing","tekmark-transformation.webp"],
  ["Shooting Performance Institute","Firearms Training","spi-transformation.webp"],
  ["Bent on Education","Education","bent-on-education-transformation.webp"],
  ["JC’s Well Services","Well Services","jcs-well-services-transformation.webp"],
  ["Citrus Medical Marijuana Clinic","Medical Evaluations","citrus-medical-marijuana-clinic.webp"],
  ["CRNA Mentor","CRNA Admissions Mentorship","crna-mentor-transformation.webp"],
  ["Atlas Anesthesia","Anesthesia Services","atlas-anesthesia-transformation.webp"],
  ["Champion Water Well Service","Well Pump & Pressure-System Service","champion-water-well-service.webp"],
];

function DeviceMockup({ name, desktop, mobile }: { name: string; desktop: string; mobile?: string }) {
  const uid = useId().replace(/:/g, "");
  const laptopSrc = `/__mockup/images/portfolio-devices-${desktop}`;
  const phoneSrc = `/__mockup/images/portfolio-devices-${mobile ?? desktop}`;
  return <div className="device-stage">
    <svg viewBox="0 0 1000 562" role="img" aria-label={`${name} website displayed on a silver laptop`}>
      <defs>
        <linearGradient id={`rim-${uid}`} x2="1" y2="1"><stop stopColor="#b8b8b9"/><stop offset=".2" stopColor="#49494b"/><stop offset=".6" stopColor="#181819"/><stop offset="1" stopColor="#a6a6aa"/></linearGradient>
        <linearGradient id={`deck-${uid}`} x2=".1" y2="1"><stop stopColor="#4c4c4e"/><stop offset=".14" stopColor="#a2a2a5"/><stop offset=".55" stopColor="#757578"/><stop offset="1" stopColor="#c6c6c9"/></linearGradient>
        <linearGradient id={`edge-${uid}`} x2="0" y2="1"><stop stopColor="#dbdbdd"/><stop offset=".4" stopColor="#929296"/><stop offset="1" stopColor="#363639"/></linearGradient>
        <linearGradient id={`gloss-${uid}`} x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".06"/><stop offset=".5" stopColor="#fff" stopOpacity="0"/></linearGradient>
        <clipPath id={`display-${uid}`}><rect x="100" y="34" width="728" height="399" rx="3"/></clipPath>
      </defs>
      <ellipse cx="460" cy="538" rx="432" ry="15" fill="#000" opacity=".6"/>
      <rect x="81" y="12" width="766" height="450" rx="20" fill={`url(#rim-${uid})`} stroke="#bcbcbc" strokeOpacity=".5"/>
      <rect x="85" y="16" width="758" height="441" rx="17" fill="#080809"/>
      <image href={laptopSrc} x="100" y="34" width="728" height="399" clipPath={`url(#display-${uid})`} preserveAspectRatio="xMidYMin slice"/>
      <rect x="100" y="34" width="728" height="399" rx="3" fill={`url(#gloss-${uid})`}/>
      <circle cx="464" cy="25" r="3" fill="#202632"/><circle cx="464" cy="25" r="1" fill="#526074"/>
      <text x="464" y="448" textAnchor="middle" fill="#999" fontSize="8" fontFamily="Arial,sans-serif">MacBook Pro</text>
      <path d="M81 460H847L915 524Q919 531 905 535H24Q10 532 17 524Z" fill={`url(#deck-${uid})`} stroke="#bbb" strokeWidth=".7"/>
      <path d="M106 465H819L846 501H77Z" fill="#303033" stroke="#d3d3d3" strokeOpacity=".3"/>
      {Array.from({length:5},(_,row)=>Array.from({length:14},(_,col)=><rect key={`${row}-${col}`} x={105+col*50-row*3} y={468+row*6.2} width={43+row*.5} height="4.5" rx="1" fill="#171719" stroke="#777" strokeWidth=".35"/>))}
      <path d="M335 506H589L603 523H321Z" fill="#99999c" stroke="#505053" strokeWidth=".8"/>
      <path d="M17 527Q465 536 914 527L905 537Q464 547 24 537Z" fill={`url(#edge-${uid})`}/>
      <path d="M404 530H523L519 534H408Z" fill="#5e5e62"/>
    </svg>
    <div className="phone" aria-label={`${name} mobile website preview`}>
      <div className="phone-screen">
        <img src={phoneSrc} alt={`${name} website on a mobile phone`} loading="lazy"/>
        <span className="island"/><span className="home-line"/>
      </div>
    </div>
  </div>;
}

export function Premium() {
  return <main className="portfolio-gallery">
    <header className="gallery-heading">
      <span>GRAYLOCK DIGITAL <i/> SELECTED PROJECTS</span>
      <h1>Work, in the right frame.</h1>
      <p>Distinct businesses. Thoughtful websites. Built for every screen.</p>
    </header>
    <section className="premium-grid" aria-label="Featured website projects">
      {projects.map(([name, category, image, mobile])=><article className="premium-project" key={name}>
        <div className="premium-artwork"><DeviceMockup name={name} desktop={image} mobile={mobile}/></div>
        <div className="premium-meta">
          <div><h2>{name}</h2><p>{category}</p></div>
          <span className="project-mark" aria-hidden="true"><ExternalLink size={16}/></span>
        </div>
      </article>)}
    </section>
    <footer className="gallery-footer">Selected work <span>{String(projects.length).padStart(2,"0")} projects</span></footer>
  </main>;
}
