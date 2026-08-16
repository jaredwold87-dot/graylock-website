import deviceKitchen from "@/assets/cabinet-device-kitchen.webp";

/**
 * [CABINET_MAKER_HERO_DEVICE_ASSET] / [CABINET_MAKER_SQUARE_DEVICE_ASSET]
 * — temporary placeholder device mockup (spec §4, Hero + What We Do).
 *
 * The spec requires the hero devices to show a believable custom-cabinetry
 * site above the fold — premium kitchen, location/service hook, two CTAs,
 * and a trust bar — WITHOUT fabricating a client brand, testimonial, or
 * credential. Until the real featured cabinet-maker project is supplied,
 * the laptop and phone screens render a neutral, unbranded sample layout
 * as crisp vector UI (readable type, no garbled fake-UI text, no invented
 * company name — the wordmark is the service category itself).
 *
 * SWAP-IN: when Graylock supplies the real project (live URL or approved
 * screenshots), replace this component's usages with the real device asset
 * exactly like the well-driller hero (`hero-well-drillers.webp` /
 * `rosenlund-devices-square.webp`) — the layout slots are identical, so no
 * structural changes are needed.
 */
export function CabinetMakerDeviceMockup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 500"
      role="img"
      aria-label="Placeholder preview of a custom cabinet-maker website homepage shown on a laptop and phone — premium kitchen photography, a clear consultation call-to-action, and project-type navigation"
      className={className}
    >
      <defs>
        <linearGradient id="cmHeroGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0A0908" stopOpacity="0.82" />
          <stop offset="0.55" stopColor="#0A0908" stopOpacity="0.42" />
          <stop offset="1" stopColor="#0A0908" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="cmPhoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A0908" stopOpacity="0" />
          <stop offset="1" stopColor="#0A0908" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="cmBaseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E2E33" />
          <stop offset="1" stopColor="#1B1B1F" />
        </linearGradient>
        <clipPath id="cmLaptopScreen">
          <rect x="44" y="30" width="582" height="352" rx="4" />
        </clipPath>
        <clipPath id="cmPhoneScreen">
          <rect x="626" y="200" width="122" height="272" rx="14" />
        </clipPath>
        <filter id="cmDeviceShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* ── Laptop ─────────────────────────────────────────────────────── */}
      <g filter="url(#cmDeviceShadow)">
        <rect x="30" y="16" width="610" height="380" rx="16" fill="#17171A" stroke="#33333A" strokeWidth="1.5" />
        <rect x="0" y="396" width="670" height="17" rx="8.5" fill="url(#cmBaseGrad)" />
        <rect x="295" y="396" width="80" height="7" rx="3.5" fill="#0C0C0E" />
      </g>

      {/* Laptop screen: sample cabinetry homepage (582×352 at 44,30) */}
      <g clipPath="url(#cmLaptopScreen)">
        <rect x="44" y="30" width="582" height="352" fill="#101013" />
        <g transform="translate(44,30)">
          {/* nav */}
          <rect x="0" y="0" width="582" height="42" fill="#101013" />
          <rect x="22" y="13" width="16" height="16" rx="3" fill="#B08D57" />
          <text x="46" y="27.5" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="13" letterSpacing="1.8" fill="#FFFFFF">
            CUSTOM CABINETRY
          </text>
          <g fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="8" letterSpacing="1.2" fill="rgba(255,255,255,0.6)">
            <text x="292" y="25">KITCHENS</text>
            <text x="348" y="25">BUILT-INS</text>
            <text x="403" y="25">PROCESS</text>
            <text x="456" y="25">GALLERY</text>
            <text x="509" y="25">CONTACT</text>
          </g>
          {/* hero image + readability gradient */}
          <image href={deviceKitchen} x="0" y="42" width="582" height="270" preserveAspectRatio="xMidYMid slice" />
          <rect x="0" y="42" width="582" height="270" fill="url(#cmHeroGrad)" />
          {/* hero copy: service + local hook, two CTAs */}
          <text x="28" y="112" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="2.4" fill="#D9B37C">
            SERVING HOMEOWNERS, BUILDERS + DESIGNERS
          </text>
          <text x="27" y="148" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="32" letterSpacing="0.5" fill="#FFFFFF">
            CUSTOM CABINETRY,
          </text>
          <text x="27" y="182" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="32" letterSpacing="0.5" fill="#FFFFFF">
            BUILT AROUND YOUR HOME.
          </text>
          <text x="28" y="206" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="10.5" fill="rgba(255,255,255,0.85)">
            Handcrafted kitchens, built-ins &amp; millwork — designed,
          </text>
          <text x="28" y="220" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="10.5" fill="rgba(255,255,255,0.85)">
            built, and installed locally.
          </text>
          <rect x="28" y="238" width="158" height="32" rx="3" fill="#B08D57" />
          <text x="107" y="258" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="9" letterSpacing="1.2" fill="#151009">
            REQUEST A CONSULTATION
          </text>
          <rect x="196" y="238" width="118" height="32" rx="3" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
          <text x="255" y="258" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="9" letterSpacing="1.2" fill="#FFFFFF">
            VIEW OUR WORK
          </text>
          {/* trust bar: claim-free services strip */}
          <rect x="0" y="312" width="582" height="40" fill="#0C0C0E" />
          <text x="291" y="336" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="9" letterSpacing="2" fill="rgba(255,255,255,0.55)">
            KITCHENS &#183; BUILT-INS &#183; CLOSETS &#183; VANITIES &#183; COMMERCIAL MILLWORK
          </text>
        </g>
      </g>

      {/* ── Phone (responsive version) ─────────────────────────────────── */}
      <g filter="url(#cmDeviceShadow)">
        <rect x="618" y="192" width="138" height="288" rx="22" fill="#17171A" stroke="#33333A" strokeWidth="1.5" />
      </g>
      <g clipPath="url(#cmPhoneScreen)">
        <rect x="626" y="200" width="122" height="272" fill="#101013" />
        <g transform="translate(626,200)">
          {/* mini nav */}
          <rect x="10" y="9" width="10" height="10" rx="2" fill="#B08D57" />
          <text x="25" y="17.5" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="8" letterSpacing="1" fill="#FFFFFF">
            CUSTOM CABINETRY
          </text>
          <g stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round">
            <line x1="102" y1="12" x2="114" y2="12" />
            <line x1="102" y1="16.5" x2="114" y2="16.5" />
          </g>
          {/* photo */}
          <image href={deviceKitchen} x="0" y="28" width="122" height="128" preserveAspectRatio="xMidYMid slice" />
          <rect x="0" y="28" width="122" height="128" fill="url(#cmPhoneGrad)" />
          {/* stacked copy + CTA */}
          <text x="12" y="180" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="13" fill="#FFFFFF">
            CUSTOM CABINETRY,
          </text>
          <text x="12" y="196" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="13" fill="#FFFFFF">
            BUILT AROUND
          </text>
          <text x="12" y="212" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" fontSize="13" fill="#FFFFFF">
            YOUR HOME.
          </text>
          <rect x="12" y="224" width="98" height="24" rx="3" fill="#B08D57" />
          <text x="61" y="239.5" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.8" fill="#151009">
            REQUEST A CONSULTATION
          </text>
          <text x="61" y="262" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="5.8" letterSpacing="1" fill="rgba(255,255,255,0.5)">
            KITCHENS &#183; BUILT-INS &#183; MILLWORK
          </text>
        </g>
      </g>
      {/* phone notch */}
      <rect x="669" y="206" width="36" height="5" rx="2.5" fill="#0C0C0E" />
    </svg>
  );
}
