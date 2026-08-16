import deviceEvent from "@/assets/auctioneer-device-event.webp";

/**
 * [AUCTIONEER_HERO_DEVICE_ASSET] / [AUCTIONEER_SQUARE_DEVICE_ASSET]
 * — temporary placeholder device mockup (spec §1 Hero + §4 What We Do,
 * repositioned per client direction Aug 2026).
 *
 * The devices show a believable auctioneer MARKETING site above the fold —
 * a services-led hero, a booking CTA for event organizers, a seller path,
 * and a service-category trust strip (no upcoming-auction calendar, dates,
 * or bidder-registration UI) — WITHOUT fabricating a real auction business,
 * results, testimonials, or credentials. Until the real featured auctioneer
 * project is supplied, the laptop and phone screens render a neutral,
 * unbranded sample layout as crisp vector UI (readable type, no garbled
 * fake-UI text, no invented company name — the wordmark is the service
 * category itself).
 *
 * SWAP-IN: when Graylock supplies the real project (live URL or approved
 * screenshots), replace this component's usages with the real device asset
 * exactly like the well-driller hero (`hero-well-drillers.webp` /
 * `rosenlund-devices-square.webp`) — the layout slots are identical, so no
 * structural changes are needed.
 */
export function AuctioneerDeviceMockup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 500"
      role="img"
      aria-label="Placeholder preview of a custom auctioneer website homepage shown on a laptop and phone — a services-led presentation with a booking call-to-action for event organizers, a seller path, and auction service categories"
      className={className}
    >
      <defs>
        <linearGradient id="aucHeroGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0A0908" stopOpacity="0.84" />
          <stop offset="0.55" stopColor="#0A0908" stopOpacity="0.44" />
          <stop offset="1" stopColor="#0A0908" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="aucPhoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A0908" stopOpacity="0" />
          <stop offset="1" stopColor="#0A0908" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id="aucBaseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E2E33" />
          <stop offset="1" stopColor="#1B1B1F" />
        </linearGradient>
        <clipPath id="aucLaptopScreen">
          <rect x="44" y="30" width="582" height="352" rx="4" />
        </clipPath>
        <clipPath id="aucPhoneScreen">
          <rect x="626" y="200" width="122" height="272" rx="14" />
        </clipPath>
        <filter id="aucDeviceShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* ── Laptop ─────────────────────────────────────────────────────── */}
      <g filter="url(#aucDeviceShadow)">
        <rect x="30" y="16" width="610" height="380" rx="16" fill="#17171A" stroke="#33333A" strokeWidth="1.5" />
        <rect x="0" y="396" width="670" height="17" rx="8.5" fill="url(#aucBaseGrad)" />
        <rect x="295" y="396" width="80" height="7" rx="3.5" fill="#0C0C0E" />
      </g>

      {/* Laptop screen: sample auctioneer homepage (582×352 at 44,30) */}
      <g clipPath="url(#aucLaptopScreen)">
        <rect x="44" y="30" width="582" height="352" fill="#101013" />
        <g transform="translate(44,30)">
          {/* nav */}
          <rect x="0" y="0" width="582" height="42" fill="#101013" />
          <rect x="22" y="13" width="16" height="16" rx="3" fill="#B08D57" />
          <text x="46" y="27.5" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="13" letterSpacing="1.8" fill="#FFFFFF">
            AUCTION SERVICES
          </text>
          <g fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="8" letterSpacing="1.2" fill="rgba(255,255,255,0.6)">
            <text x="270" y="25">SERVICES</text>
            <text x="330" y="25">BENEFIT EVENTS</text>
            <text x="427" y="25">SELLERS</text>
            <text x="478" y="25">ABOUT</text>
            <text x="517" y="25">CONTACT</text>
          </g>
          {/* event-venue visual + readability gradient */}
          <image href={deviceEvent} x="0" y="42" width="582" height="270" preserveAspectRatio="xMidYMid slice" />
          <rect x="0" y="42" width="582" height="270" fill="url(#aucHeroGrad)" />
          {/* hero copy: services-led hook, booking + seller CTAs */}
          <text x="28" y="112" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="2.4" fill="#D9B37C">
            PROFESSIONAL AUCTION SERVICES FOR EVENTS + SALES
          </text>
          <text x="27" y="148" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="32" letterSpacing="0.5" fill="#FFFFFF">
            AN AUCTIONEER YOUR
          </text>
          <text x="27" y="182" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="32" letterSpacing="0.5" fill="#FFFFFF">
            EVENT CAN COUNT ON.
          </text>
          <text x="28" y="206" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="10.5" fill="rgba(255,255,255,0.85)">
            The services, specialties, and process organizers
          </text>
          <text x="28" y="220" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="10.5" fill="rgba(255,255,255,0.85)">
            and sellers need to book with confidence.
          </text>
          <rect x="28" y="238" width="140" height="32" rx="3" fill="#B08D57" />
          <text x="98" y="258" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="9" letterSpacing="1.2" fill="#151009">
            BOOK YOUR EVENT
          </text>
          <rect x="178" y="238" width="140" height="32" rx="3" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
          <text x="248" y="258" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="9" letterSpacing="1.2" fill="#FFFFFF">
            PLAN A SALE WITH US
          </text>
          {/* trust bar: claim-free auction-category strip */}
          <rect x="0" y="312" width="582" height="40" fill="#0C0C0E" />
          <text x="291" y="336" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="9" letterSpacing="2" fill="rgba(255,255,255,0.55)">
            GENERAL &#183; BENEFIT &#183; LIVESTOCK &#183; EQUIPMENT &#183; ESTATE &#183; REAL ESTATE
          </text>
        </g>
      </g>

      {/* ── Phone (responsive version) ─────────────────────────────────── */}
      <g filter="url(#aucDeviceShadow)">
        <rect x="618" y="192" width="138" height="288" rx="22" fill="#17171A" stroke="#33333A" strokeWidth="1.5" />
      </g>
      <g clipPath="url(#aucPhoneScreen)">
        <rect x="626" y="200" width="122" height="272" fill="#101013" />
        <g transform="translate(626,200)">
          {/* mini nav */}
          <rect x="10" y="9" width="10" height="10" rx="2" fill="#B08D57" />
          <text x="25" y="17.5" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="8" letterSpacing="1" fill="#FFFFFF">
            AUCTION SERVICES
          </text>
          <g stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round">
            <line x1="102" y1="12" x2="114" y2="12" />
            <line x1="102" y1="16.5" x2="114" y2="16.5" />
          </g>
          {/* photo */}
          <image href={deviceEvent} x="0" y="28" width="122" height="128" preserveAspectRatio="xMidYMid slice" />
          <rect x="0" y="28" width="122" height="128" fill="url(#aucPhoneGrad)" />
          {/* stacked copy + CTA */}
          <text x="12" y="172" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="6" letterSpacing="1.1" fill="#D9B37C">
            FOR EVENTS + SALES
          </text>
          <text x="12" y="190" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="13" fill="#FFFFFF">
            AN AUCTIONEER YOUR
          </text>
          <text x="12" y="206" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="13" fill="#FFFFFF">
            EVENT CAN COUNT ON.
          </text>
          <rect x="12" y="220" width="98" height="24" rx="3" fill="#B08D57" />
          <text x="61" y="235.5" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.8" fill="#151009">
            BOOK YOUR EVENT
          </text>
          <text x="61" y="260" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="5.8" letterSpacing="1" fill="rgba(255,255,255,0.5)">
            GENERAL &#183; LIVESTOCK &#183; ESTATE
          </text>
        </g>
      </g>
      {/* phone notch */}
      <rect x="669" y="206" width="36" height="5" rx="2.5" fill="#0C0C0E" />
    </svg>
  );
}
