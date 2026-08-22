import { useState } from "react";
import "./LandingIntroVariant.css";

type Route = {
  label: string;
  title: string;
  description: string;
};

const routes: Route[] = [
  {
    label: "I need a new website",
    title: "Start with a sharper first impression.",
    description: "A considered site for the moment your next customer decides whether to lean in.",
  },
  {
    label: "My site is underperforming",
    title: "Find the quiet leaks.",
    description: "We turn the places people hesitate into a clear, useful path forward.",
  },
  {
    label: "I want to talk",
    title: "Bring us the knot.",
    description: "No pitch deck required. Tell us what feels stuck and we will start there.",
  },
];

export function LandingIntroVariant() {
  const [selected, setSelected] = useState(0);
  const route = routes[selected];

  return (
    <section className="liv" aria-label="Graylock Digital entry experience">
      <header className="liv__topbar">
        <img
          className="liv__logo"
          src="/__mockup/images/graylock-logo-horizontal.png"
          alt="Graylock Digital"
        />
        <div className="liv__index"><b>01</b><span>/</span><span>03 — Choose your way in</span></div>
      </header>

      <div className="liv__body">
        <main className="liv__intro">
          <p className="liv__eyebrow">A better beginning</p>
          <h1>Good work deserves a <em>clearer</em> way in.</h1>
          <p className="liv__lead">
            Graylock makes digital places for businesses with something worth saying.
            Start with the part that sounds most like you.
          </p>
          <div className="liv__routes" role="group" aria-label="Choose an entry point">
            {routes.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={`liv__route ${selected === index ? "is-active" : ""}`}
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
              >
                {item.label}
              </button>
            ))}
          </div>
        </main>

        <aside className="liv__aside" aria-live="polite">
          <div className="liv__aside-label">Your next chapter</div>
          <div className="liv__card">
            <h2>{route.title}</h2>
            <p>{route.description}</p>
            <div className="liv__signal"><span aria-hidden="true" /> Path selected</div>
          </div>
        </aside>
      </div>

      <footer className="liv__bottom">
        <span><strong>Graylock Digital</strong> — websites with a point of view</span>
        <span>Scroll to continue <b aria-hidden="true">↓</b></span>
      </footer>
    </section>
  );
}