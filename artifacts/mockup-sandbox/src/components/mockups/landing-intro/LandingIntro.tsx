import "./_group.css";
import topographicBackground from "@/assets/hero-desktop-topographic.webp";

export function LandingIntro() {
  return (
    <section className="landing-intro-preview" aria-label="Graylock Digital landing introduction preview">
      <img
        src={topographicBackground}
        alt=""
        aria-hidden="true"
        className="landing-intro-preview__background"
      />
      <div className="landing-intro-preview__shade" aria-hidden="true" />
      <div className="landing-intro-preview__glow" aria-hidden="true" />

      <div className="landing-intro-preview__content">
        <img
          src="/__mockup/images/graylock-logo-horizontal.png"
          alt="Graylock Digital"
          className="landing-intro-preview__logo"
        />
        <div className="landing-intro-preview__rule" aria-hidden="true" />
        <p className="landing-intro-preview__statement">
          <span>Your Website.</span>
          <span>Your Reputation.</span>
          <span className="landing-intro-preview__statement-accent">Elevated.</span>
        </p>
      </div>

      <div className="landing-intro-preview__footer" aria-hidden="true">
        <span>GRAYLOCK DIGITAL</span>
        <span>ENTERING THE EXPERIENCE</span>
      </div>
      <div className="landing-intro-preview__progress" aria-hidden="true">
        <span />
      </div>
      <span className="landing-intro-preview__skip" aria-hidden="true">Skip intro</span>
    </section>
  );
}