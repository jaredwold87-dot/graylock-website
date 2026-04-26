import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import {
  Landmark,
  MapPin,
  Briefcase,
  ShieldOff,
  Scale,
  ArrowRight,
} from "lucide-react";

const INDUSTRY_GROUPS: { title: string; body: string; links: { name: string; path: string }[] }[] = [
  {
    title: "Home Builders & Industrial Construction",
    body: "State contractor licensing display, scope-of-license accuracy, environmental and safety claim substantiation.",
    links: [
      { name: "Home Builders", path: "/websites-for-home-builders" },
      { name: "Industrial Construction", path: "/websites-for-industrial-construction" },
    ],
  },
  {
    title: "Accounting Firms",
    body: "AICPA Code of Professional Conduct, state board advertising rules, Treasury Circular 230 for tax practice.",
    links: [{ name: "Accounting Firms", path: "/websites-for-accountants" }],
  },
  {
    title: "Other Trust-Based Professionals (law, finance)",
    body: "State bar advertising rules, SEC Marketing Rule, FINRA rules, working alongside your compliance reviewer.",
    links: [{ name: "Other Local Service Businesses", path: "/other-service-businesses" }],
  },
  {
    title: "Healthcare Practices",
    body:
      "Privacy-first form design that keeps patient data outside the website, no advertising pixels on condition pages, and the specific advertising rules for psychologists, physical therapists, chiropractors, optometrists, dentists, and physicians.",
    links: [
      { name: "Psychologists", path: "/websites-for-psychologists" },
      { name: "Physical Therapists", path: "/websites-for-physical-therapists" },
      { name: "Chiropractors", path: "/websites-for-chiropractors" },
      { name: "Optometrists", path: "/websites-for-optometrists" },
      { name: "Dentists", path: "/websites-for-dentists" },
      { name: "Physicians", path: "/websites-for-physicians" },
    ],
  },
];

const WHAT_WE_DONT_DO = [
  {
    title: "We don\u2019t sell accessibility overlay widgets.",
    body:
      "The bolt-on bottom-right-corner buttons that promise \u201Cone-line ADA compliance\u201D don\u2019t fix the underlying code issues that cause accessibility failures. The FTC took enforcement action against an overlay vendor in 2025 for false compliance claims, and courts consistently treat overlays as inadequate. We build accessibility into the site itself.",
  },
  {
    title: "We don\u2019t put advertising pixels on healthcare condition pages.",
    body:
      "Meta Pixel, TikTok Pixel, and similar advertising trackers transmit data that \u2014 when combined with a page describing a specific medical condition \u2014 has been found to constitute Protected Health Information. The HHS Office for Civil Rights has been enforcing this since 2022. Our healthcare clients don\u2019t carry that risk on their sites.",
  },
  {
    title:
      "We don\u2019t write \u201Cwe accept all insurance,\u201D \u201Cwe guarantee results,\u201D or other language we know your state board will treat as misleading \u2014 even when a client asks for it.",
    body:
      "Instead, we explain why and propose language that says what they actually mean.",
  },
  {
    title: "We don\u2019t promise our clients that their websites are legally compliant.",
    body:
      "Compliance is a property of the entire business, not a property of the website. What we promise is that the website is built so the rules that apply to the client\u2019s industry shape it from the start.",
  },
];

function SectionShell({
  eyebrow,
  heading,
  children,
  bg = "bg-navy",
}: {
  eyebrow?: string;
  heading: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section className={`${bg} py-20 md:py-24 px-6 md:px-12 border-t border-gunmetal`}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="mb-10 md:mb-12">
          {eyebrow && (
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-xs md:text-sm mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite leading-[1.15]">
            {heading}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>{children}</ScrollReveal>
      </div>
    </section>
  );
}

export default function Compliance() {
  return (
    <>
      <SEO
        title="Compliance, Built Into the Website | Graylock Digital"
        description="How Graylock builds for federal, state, and industry-specific rules from day one — FTC, ADA/WCAG 2.1 AA, 20+ state privacy laws, and the licensing-board rules that govern your profession."
        url="https://graylockdigital.com/compliance"
      />

      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-about.png`} />
        <div className="absolute inset-0 bg-charcoal/90 md:bg-charcoal/80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
              Compliance, by design
            </p>
            <h1 className="text-4xl md:text-6xl font-display mb-6 leading-tight">
              Compliance, built into the website.
            </h1>
            <p className="text-lg md:text-2xl font-sans text-stone leading-snug mb-8">
              How Graylock builds for federal, state, and industry-specific rules from day one.
            </p>
            <p className="text-base md:text-lg font-sans text-stone leading-relaxed text-left md:text-center max-w-3xl mx-auto">
              A website is the public record of what your business says about itself. In regulated industries, that record is the first thing a regulator, a competitor, or an unhappy customer reaches for when something goes wrong. Graylock builds websites with that reality in mind. This page describes what &ldquo;compliance-aware&rdquo; means in our process &mdash; what we build to, what we don&rsquo;t, and where our role ends and yours begins.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionShell
        eyebrow="The federal floor"
        heading="The federal floor — what every Graylock site does."
      >
        <div className="bg-charcoal rounded-2xl border border-gunmetal p-7 md:p-10 space-y-5 text-stone font-sans text-base md:text-lg leading-relaxed">
          <p>
            Every site Graylock builds is structured against the federal marketing-law baseline. That means:
          </p>
          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange mt-0.5">
                <Landmark size={18} />
              </span>
              <p>
                <span className="text-offwhite font-semibold">FTC truth-in-advertising standards.</span>{" "}
                Every objective claim on your site has a substantiation source documented during the build. Testimonials are structured to meet the FTC&rsquo;s 2024 Reviews Rule &mdash; no fake reviews, material connections disclosed, and &ldquo;results not typical&rdquo; handled honestly.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange mt-0.5">
                <Landmark size={18} />
              </span>
              <p>
                <span className="text-offwhite font-semibold">CAN-SPAM Act compliance</span> for any commercial email sent from your site. Postal address present. Working unsubscribe link in every template. Opt-outs honored within ten business days. Suppression list maintained.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange mt-0.5">
                <Landmark size={18} />
              </span>
              <p>
                <span className="text-offwhite font-semibold">Telephone Consumer Protection Act</span> practices for any phone or text capture on your site. Express consent captured before automated calls or texts. Logs retained &mdash; IP, timestamp, page URL, language presented. Opt-out mechanisms honored across reasonable language. National Do Not Call Registry scrubbed when applicable.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange mt-0.5">
                <Landmark size={18} />
              </span>
              <p>
                <span className="text-offwhite font-semibold">ADA accessibility under WCAG 2.1 Level AA.</span>{" "}
                Semantic HTML. Alt text on every meaningful image. Color contrast minimums met. Keyboard navigation. Captioned video. Forms with proper labels. We build to the standard, instead of bolting on an overlay widget that doesn&rsquo;t actually fix accessibility issues.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="The state layer"
        heading="The state layer — privacy laws and advertising rules."
      >
        <div className="bg-charcoal rounded-2xl border border-gunmetal p-7 md:p-10 space-y-5 text-stone font-sans text-base md:text-lg leading-relaxed">
          <p>
            More than twenty states now have comprehensive consumer privacy laws &mdash; California, Virginia, Colorado, Connecticut, Texas, Montana, Oregon, Delaware, and growing. Each one defines &ldquo;covered businesses&rdquo; differently, but most require:
          </p>
          <ul className="space-y-4 pl-0">
            {[
              "A privacy notice that discloses what data the site collects, why, who it\u2019s shared with, and how a visitor can make a request about their data.",
              "A way for visitors to access, correct, delete, or port their personal information (a Data Subject Access Request workflow).",
              "Honoring of browser-level signals like Global Privacy Control \u2014 required by California, Colorado, Connecticut, Texas, Oregon, Montana, and others.",
              "Special handling of sensitive data \u2014 health information, biometric data, racial or religious data, sexual orientation, citizenship status. Most state laws require opt-in consent for these categories, not opt-out.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-1 text-orange"
                  strokeWidth={2}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Graylock configures every site for the strictest state law that applies to your business &mdash; not just the state your office is in. Your customers&rsquo; or patients&rsquo; location is what matters, not yours.
          </p>
          <p>
            On the advertising side, state licensing boards (medical, dental, contractor, accountancy, optometry, chiropractic, psychology, physical therapy) each have their own rules about what a licensed professional can say in advertising. We&rsquo;ve done the homework on the verticals we serve, and your site reflects what your specific licensing body requires.
          </p>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Industry-specific rules"
        heading="Your industry, specifically."
      >
        <div className="space-y-5">
          <p className="text-stone font-sans text-base md:text-lg leading-relaxed mb-2">
            Beyond the federal and state layers, every regulated profession has its own specific rules. We&rsquo;ve documented our approach for each of the verticals we serve:
          </p>
          {INDUSTRY_GROUPS.map((group) => (
            <article
              key={group.title}
              className="bg-charcoal rounded-2xl border border-gunmetal p-6 md:p-8 hover:border-orange/40 transition-colors"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange">
                  <Briefcase size={18} />
                </span>
                <h3 className="font-display text-offwhite text-lg md:text-xl leading-tight pt-1">
                  {group.title}
                </h3>
              </div>
              <p className="text-stone font-sans text-sm md:text-base leading-relaxed mb-4">
                {group.body}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pl-0 md:pl-14">
                {group.links.map((l) => (
                  <Link
                    key={l.path}
                    href={l.path}
                    className="inline-flex items-center gap-1 text-orange font-sans font-semibold text-sm hover:text-orange/80 transition-colors group"
                  >
                    {l.name}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="What we don't do" heading="What we don’t do.">
        <div className="space-y-5">
          <p className="text-stone font-sans text-base md:text-lg leading-relaxed mb-2">
            Some of the most important compliance choices we make are the things we refuse to do.
          </p>
          {WHAT_WE_DONT_DO.map((item, i) => (
            <article
              key={i}
              className="bg-charcoal rounded-2xl border border-gunmetal p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange">
                  <ShieldOff size={18} />
                </span>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-offwhite text-base md:text-lg leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone font-sans text-sm md:text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Where our role ends"
        heading="Where our role ends — and yours begins."
      >
        <div className="bg-charcoal rounded-2xl border border-gunmetal p-7 md:p-10 space-y-5 text-stone font-sans text-base md:text-lg leading-relaxed">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 border border-orange/30 flex items-center justify-center text-orange">
              <Scale size={18} />
            </span>
            <p>
              We are a website partner, not a law firm, a CPA firm, or a compliance consultancy. The compliance rules that govern your business are ultimately your responsibility to meet, working with your attorney, your state licensing board, and any compliance officer or reviewer your firm employs.
            </p>
          </div>
          <p>
            What we do is shape the website itself so that meeting those rules is straightforward instead of a moving target. We document the choices we make. We update sites as rules change. And we tell our clients when something material happens &mdash; a new state privacy law going into effect, a state board issuing new guidance, an HHS enforcement action setting a new precedent.
          </p>
          <p>
            If your attorney or compliance officer reviews this page and has questions about specifically how we implement any of it, we welcome the conversation. That review is part of how good websites get built.
          </p>
        </div>
      </SectionShell>

      <section className="bg-charcoal py-24 md:py-28 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-xs md:text-sm mb-4">
              Talk to us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite mb-6 leading-tight">
              Talk to us about your specific industry.
            </h2>
            <p className="text-stone font-sans text-base md:text-lg leading-relaxed mb-8">
              A website built to your industry&rsquo;s rules costs the same as a website that ignores them. The difference is whether your site is an asset or a liability.
            </p>
            <CTAButton href="/get-started">Schedule a conversation</CTAButton>
            <p className="text-stone/80 font-sans text-sm mt-5">
              Mention your industry and state when you reach out &mdash; we&rsquo;ll come prepared.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
