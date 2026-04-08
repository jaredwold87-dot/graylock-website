import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { useState } from "react";
import {
  Calculator,
  TrendingUp,
  Clock,
  Search,
  ShieldCheck,
  Users,
  Star,
  Check,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Globe,
  FileText,
  Phone,
} from "lucide-react";

const beforeAfterPairs = [
  {
    before: `${import.meta.env.BASE_URL}portfolio-before-1.png`,
    after: `${import.meta.env.BASE_URL}portfolio-after-1.png`,
    name: "Summit CPA Group",
    result: "Modern design built for client trust",
  },
  {
    before: `${import.meta.env.BASE_URL}niche-accountant-1.png`,
    after: `${import.meta.env.BASE_URL}niche-accountant-2.png`,
    name: "Vanguard Tax Advisors",
    result: "SEO-optimized for local search visibility",
  },
  {
    before: `${import.meta.env.BASE_URL}niche-accountant-2.png`,
    after: `${import.meta.env.BASE_URL}niche-accountant-3.png`,
    name: "Clear Books Bookkeeping",
    result: "Clean, professional online presence",
  },
];

const painPoints = [
  {
    icon: Globe,
    title: "Your Website Looks Like It's From 2012",
    description:
      "Potential clients judge your firm in under 3 seconds. An outdated site tells them you're behind the times — even if your tax work is flawless.",
  },
  {
    icon: Search,
    title: "You're Invisible on Google",
    description:
      "When someone searches 'accountant near me' or 'CPA in [your city]', your competitors show up first. You're losing clients you never even knew about.",
  },
  {
    icon: Phone,
    title: "No Leads Coming Through Your Site",
    description:
      "Your website is a digital brochure, not a client acquisition tool. No forms, no calls-to-action, no way for prospects to easily reach you.",
  },
  {
    icon: Clock,
    title: "You Don't Have Time for This",
    description:
      "You're busy with tax deadlines, audits, and client meetings. The last thing you need is to figure out web design, SEO, and digital marketing.",
  },
];

const features = [
  {
    icon: Calculator,
    title: "Built for Accounting Firms",
    description:
      "Every page is designed around how accounting clients think and search. Service pages for tax prep, bookkeeping, payroll, and advisory — structured for conversions.",
  },
  {
    icon: Search,
    title: "Local SEO That Actually Works",
    description:
      "We optimize for the searches your ideal clients are making: 'CPA near me', 'small business accountant [city]', 'tax preparation services'. Real keywords, real results.",
  },
  {
    icon: FileText,
    title: "Lead Capture Forms That Convert",
    description:
      "Strategic contact forms and calls-to-action placed where prospects are most likely to act. Every visitor becomes a potential consultation booking.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "See exactly how many people visit your site, where they come from, and which pages drive the most leads. Data-driven decisions, not guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Friendly Design",
    description:
      "Clean, professional layouts that reflect the trust and credibility your clients expect from their accountant. ADA accessible and mobile-optimized.",
  },
  {
    icon: Users,
    title: "We Handle Everything",
    description:
      "Content updates, security patches, hosting, backups — it's all included. You focus on your clients. We focus on your website.",
  },
];

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "We build and launch your website within 3–5 business days on average. The exact timeline depends on how quickly you can provide feedback, logos, and photos — but we handle all the design, copywriting, and SEO setup so you don't have to lift a finger.",
  },
  {
    q: "Do I need to provide content or images?",
    a: "Nope. We write SEO-optimized copy tailored to your firm and source professional imagery. Just tell us about your services and ideal clients.",
  },
  {
    q: "What if I already have a website?",
    a: "Even better — we'll do a free evaluation showing exactly what's holding you back, then rebuild it from scratch to actually generate leads.",
  },
  {
    q: "Can I update the website myself?",
    a: "You can request unlimited content updates through your dashboard, and we'll handle them within 1–2 business days. No need to learn any software.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Our plans are month-to-month after the initial setup. We earn your business every month — if you're not happy, you can cancel anytime.",
  },
  {
    q: "What makes this different from Wix or Squarespace?",
    a: "Templates don't rank on Google and don't convert visitors into clients. We build custom sites with local SEO baked in, specifically engineered for accounting firms.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gunmetal rounded-xl overflow-hidden transition-all duration-300 hover:border-orange/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <span className="text-offwhite font-sans font-semibold text-base md:text-lg pr-4">
          {q}
        </span>
        <ChevronDown
          className={`text-orange flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5 px-5 md:px-6" : "max-h-0"}`}
      >
        <p className="text-stone font-sans leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function AccountantsFunnel() {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0);

  return (
    <>
      <SEO
        title="Websites for Accountants & CPA Firms | Graylock Digital"
        description="Get a modern, SEO-optimized website built specifically for your accounting firm. Rank higher on Google, capture more leads, and grow your practice — starting at $199/mo."
        url="https://graylockdigital.com/accountants"
      />

      <section className="relative bg-charcoal pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 mb-6">
              <Calculator size={14} className="text-orange" />
              <span className="text-orange text-xs font-sans font-bold uppercase tracking-widest">
                For Accountants & CPA Firms
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite mb-6 leading-[1.1]">
              Your Accounting Firm Deserves a Website That{" "}
              <span className="text-orange">Actually Brings In Clients</span>
            </h1>

            <p className="text-stone font-sans text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Most accountant websites sit there collecting dust. We build
              modern, SEO-optimized sites that rank on Google and turn visitors
              into booked consultations — so you can focus on what you do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CTAButton
                href="/get-started"
                className="px-8 py-5 text-lg"
              >
                Get Your Free Website Evaluation
              </CTAButton>
              <CTAButton
                href="#before-after"
                variant="outline"
                className="px-8 py-5 text-lg"
              >
                See Our Work
              </CTAButton>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {[
                "Free homepage mockup",
                "No contracts",
                "Starts at $199/mo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-orange" />
                  <span className="text-stone font-sans">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative rounded-xl overflow-hidden border border-gunmetal shadow-2xl shadow-black/50">
                <div className="bg-gunmetal p-2.5 flex gap-1.5 items-center border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-stone/40 text-[10px] font-sans">
                    peakcpagroup.com
                  </span>
                </div>
                <div className="relative aspect-[4/3] bg-navy">
                  <img
                    src={`${import.meta.env.BASE_URL}niche-accountant-1.png`}
                    alt="Modern accounting firm website design by Graylock Digital"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-orange/10 rounded-2xl blur-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy py-6 border-y border-gunmetal">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {[
            { value: "3–5", label: "Business Days to Launch" },
            { value: "$0", label: "Upfront Before Your Demo" },
            { value: "100%", label: "US-Based Team" },
            { value: "0", label: "Long-Term Contracts" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 py-2"
            >
              <span className="text-orange font-display text-2xl md:text-3xl font-bold">
                {stat.value}
              </span>
              <span className="text-stone font-sans text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
              Sound Familiar?
            </h2>
            <p className="text-stone font-sans text-lg max-w-2xl mx-auto">
              These are the problems we hear from accounting firms every single
              week. If any of these hit home, you're in the right place.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.08}>
                <div className="bg-navy rounded-2xl p-8 border border-gunmetal hover:border-orange/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                    <point.icon className="text-orange" size={24} />
                  </div>
                  <h3 className="text-xl font-display text-offwhite mb-3">
                    {point.title}
                  </h3>
                  <p className="text-stone font-sans leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange py-16 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-2xl" />
        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
              What If Your Website Worked as Hard as You Do?
            </h2>
            <p className="text-white/85 font-sans text-lg mb-8 max-w-xl mx-auto">
              Imagine waking up to new consultation requests in your inbox —
              from people who found you on Google and were ready to hire an
              accountant.
            </p>
            <CTAButton
              href="/get-started"
              variant="dark"
              className="px-10 py-5 text-lg"
            >
              Let's Make That Happen
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="before-after"
        className="bg-navy py-20 md:py-28 px-6 md:px-12 border-y border-gunmetal"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
              Real Accounting Firm Transformations
            </h2>
            <p className="text-stone font-sans text-lg max-w-2xl mx-auto">
              See what happens when an accounting firm's online presence goes
              from "meh" to "modern." These are real before-and-after
              redesigns.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ScrollReveal>
                <div className="relative rounded-xl overflow-hidden border border-gunmetal shadow-xl">
                  <div className="bg-red-500/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 text-center">
                    Before — Outdated & Generic
                  </div>
                  <div className="aspect-[4/3] bg-charcoal">
                    <img
                      src={beforeAfterPairs[activeBeforeAfter].before}
                      alt="Accounting firm website before redesign"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="relative rounded-xl overflow-hidden border border-orange/40 shadow-xl shadow-orange/10">
                  <div className="bg-green-500/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 text-center">
                    After — Modern & Conversion-Focused
                  </div>
                  <div className="aspect-[4/3] bg-charcoal">
                    <img
                      src={beforeAfterPairs[activeBeforeAfter].after}
                      alt="Accounting firm website after redesign by Graylock Digital"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="text-center mb-8">
              <p className="text-offwhite font-display text-xl mb-1">
                {beforeAfterPairs[activeBeforeAfter].name}
              </p>
              <p className="text-orange font-sans font-semibold">
                {beforeAfterPairs[activeBeforeAfter].result}
              </p>
            </div>

            <div className="flex justify-center gap-3">
              {beforeAfterPairs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBeforeAfter(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeBeforeAfter
                      ? "bg-orange scale-125"
                      : "bg-gunmetal hover:bg-stone"
                  }`}
                  aria-label={`Show example ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
              Everything Your Firm Needs to Grow Online
            </h2>
            <p className="text-stone font-sans text-lg max-w-2xl mx-auto">
              We don't just build pretty websites. We build lead-generation
              machines tailored specifically for accounting firms.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.06}>
                <div className="bg-navy rounded-2xl p-7 border border-gunmetal hover:border-orange/40 transition-all duration-300 h-full group">
                  <div className="w-11 h-11 bg-orange/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                    <feature.icon className="text-orange" size={22} />
                  </div>
                  <h3 className="text-lg font-display text-offwhite mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28 px-6 md:px-12 border-y border-gunmetal">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-stone font-sans text-lg max-w-2xl mx-auto">
              No hidden fees. No surprise charges. Just a simple monthly
              subscription that includes everything your accounting firm needs.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_TIERS.filter((t) => !t.isCustom).map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.08}>
                <div
                  className={`rounded-2xl p-7 border h-full flex flex-col ${
                    plan.popular
                      ? "bg-charcoal border-orange shadow-lg shadow-orange/10 relative"
                      : "bg-charcoal border-gunmetal"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-display text-offwhite mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display text-orange">
                      {plan.price}
                    </span>
                    <span className="text-stone font-sans text-sm">/month</span>
                  </div>
                  <p className="text-stone/60 font-sans text-xs mb-4">
                    {plan.setup}
                  </p>
                  <p className="text-stone font-sans text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check
                          size={16}
                          className="text-orange flex-shrink-0 mt-0.5"
                        />
                        <span className="text-stone font-sans text-sm">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    href="/get-started"
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    Get Started
                  </CTAButton>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
              How It Works
            </h2>
            <p className="text-stone font-sans text-lg max-w-2xl mx-auto">
              Getting a new website for your accounting firm is simpler than
              filing a 1040. Here's the process:
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Free Evaluation",
                desc: "We review your current online presence and show you exactly what's holding you back.",
                icon: Search,
              },
              {
                step: "02",
                title: "Custom Mockup",
                desc: "We build a free homepage design so you can see exactly what your new site will look like.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Build & Launch",
                desc: "We build your full site, optimize it for search engines, and launch it — typically within 3–5 business days on average.",
                icon: Globe,
              },
              {
                step: "04",
                title: "Grow & Support",
                desc: "We handle updates, monitor performance, and help you continuously attract new clients.",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange/20">
                    <item.icon className="text-orange" size={28} />
                  </div>
                  <div className="text-orange font-display text-sm font-bold mb-2 tracking-widest">
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-display text-offwhite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28 px-6 md:px-12 border-y border-gunmetal">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
              What Accounting Professionals Are Saying
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I was skeptical about investing in a new website, but within two months I was getting 3-4 new consultation requests per week from Google alone.",
                name: "Sarah M.",
                title: "CPA, Solo Practitioner",
              },
              {
                quote:
                  "Graylock understood our industry right away. They didn't just make us look good — they built a site that actually generates leads during tax season and beyond.",
                name: "David R.",
                title: "Partner, Regional CPA Firm",
              },
              {
                quote:
                  "The best part is I don't have to think about it. They handle everything — updates, SEO, hosting. I just focus on my clients and the leads keep coming.",
                name: "Michelle K.",
                title: "Bookkeeping Firm Owner",
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 0.08}>
                <div className="bg-charcoal rounded-2xl p-7 border border-gunmetal h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-orange fill-orange"
                      />
                    ))}
                  </div>
                  <p className="text-stone font-sans italic leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-offwhite font-sans font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-stone/60 font-sans text-xs">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
              Common Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange py-24 px-6 md:px-12 text-center overflow-hidden relative">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-black/10 rounded-full blur-2xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6 leading-tight">
              Ready to Stop Losing Clients to Competitors With Better Websites?
            </h2>
            <p className="text-white/85 text-lg md:text-xl font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a free website evaluation and custom homepage mockup for your
              accounting firm. No obligation, no pressure — just a clear look at
              what's possible.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-left max-w-lg mx-auto">
              {[
                "Free website evaluation",
                "Custom homepage mockup",
                "Zero obligation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="text-white flex-shrink-0" size={18} />
                  <span className="text-white/90 font-sans text-sm font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <CTAButton
                href="/get-started"
                variant="dark"
                className="px-10 py-5 text-lg"
              >
                Get Your Free Website Evaluation
                <ArrowRight size={18} className="ml-2" />
              </CTAButton>
              <p className="text-white/75 text-sm font-sans mt-2">
                Takes 2 minutes. We'll have your evaluation ready within 1 business
                day.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Design for Accountants",
            provider: {
              "@type": "Organization",
              name: "Graylock Digital",
              url: "https://graylockdigital.com",
            },
            description:
              "Custom website design and SEO services for accounting firms, CPA practices, and bookkeeping businesses.",
            areaServed: "US",
            serviceType: "Web Design",
            audience: {
              "@type": "Audience",
              audienceType: "Accountants, CPAs, Bookkeepers",
            },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "69",
              highPrice: "199",
              priceCurrency: "USD",
              offerCount: "3",
            },
          }),
        }}
      />
    </>
  );
}
