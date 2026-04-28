import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const H2 = "text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug";
const H3 = "text-lg md:text-xl font-display text-offwhite mb-3 mt-2 leading-snug";
const P = "text-stone font-sans text-base md:text-[17px] leading-[1.85]";
const UL = "text-stone font-sans text-base md:text-[17px] leading-[1.85] space-y-2.5 list-disc list-outside ml-6";
const EMAIL = "text-orange font-semibold hover:underline";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Master Services Agreement | Graylock Digital"
        description="The Graylock Digital Master Services Agreement \u2014 the binding subscription contract that governs every Graylock Subscription, including pricing, cancellation, ownership, and dispute resolution."
        url="https://graylockdigital.com/terms"
      />

      <section className="bg-offwhite pt-28 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 text-charcoal">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-5 leading-tight">
              Master Services Agreement
            </h1>
            <p className="text-gray-600 font-sans text-sm">
              Effective: April 28, 2026 · Last updated: April 28, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12">

          <ScrollReveal>
            <p className={`${P} mb-4`}>
              This Master Services Agreement (&ldquo;Agreement&rdquo;) is between Graylock Digital, LLC, a Montana limited liability company with its principal place of business at 245 Gilbert Lake Drive, Kalispell, Montana 59901 (&ldquo;Graylock,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), and the customer identified at checkout (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;). This Agreement is effective on the date you complete checkout and accept these terms (the &ldquo;Effective Date&rdquo;).
            </p>
            <p className={P}>
              By checking the agreement box at checkout and completing payment, you represent that you are at least 18 years old, that you are the authorized representative of the business identified at checkout, that you have read and understood this Agreement in full, and that you agree to be bound by it.
            </p>
            <div className="mt-6 border border-orange/30 bg-orange/5 rounded-lg px-5 py-4">
              <p className="text-offwhite font-sans font-semibold text-sm uppercase tracking-wider mb-2">
                Notice to readers
              </p>
              <p className="text-stone font-sans text-base leading-[1.75]">
                This Agreement contains important provisions about your obligations, our limited liability, mandatory mediation and arbitration, a class-action waiver, and Montana governing law. Please read it carefully before agreeing.
              </p>
            </div>
          </ScrollReveal>

          {/* 1. Definitions */}
          <ScrollReveal>
            <h2 className={H2}>1. Definitions</h2>
            <div className="space-y-4">
              <p className={P}><span className="text-offwhite">&ldquo;Build Phase&rdquo;</span> means the period beginning when you pay your initial setup fee and ending when your Subscription begins.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Build Agreement&rdquo;</span> means a separate agreement governing the Build Phase, presented and accepted at the time of setup-fee payment.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Content&rdquo;</span> means all text, copy, images, photographs, video, audio, logos, brand assets, testimonials, and other materials displayed on or made available through your Website.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Customer Content&rdquo;</span> means Content you provide to us, including any Content you direct us to use.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Graylock OS&rdquo;</span> means the proprietary software platform, codebase, AI workflows, prompts, components, design systems, client portal, dashboards, and other tools that we use to build, host, deploy, maintain, and operate Websites, together with all updates, modifications, and derivative works.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Initial Term&rdquo;</span> has the meaning given in Section 4.2.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Services&rdquo;</span> means all services we provide under this Agreement, including the design, development, hosting, maintenance, support, and ongoing operation of your Website.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Subscription&rdquo;</span> means your recurring monthly subscription to the Services at the Tier you selected at checkout.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Subscription Tier&rdquo;</span> means the specific Graylock subscription plan you selected at checkout (currently Starter, Growth, Scale, or Custom), each as described on graylockdigital.com/pricing as of the Effective Date.</p>
              <p className={P}><span className="text-offwhite">&ldquo;Website&rdquo;</span> means the website Graylock builds and operates for you under this Agreement, including all subdomains we host on your behalf.</p>
            </div>
          </ScrollReveal>

          {/* 2. Services and Subscription Tiers */}
          <ScrollReveal>
            <h2 className={H2}>2. Services and Subscription Tiers</h2>

            <h3 className={H3}>2.1 Services Generally</h3>
            <p className={P}>
              We will design, build, host, maintain, and operate your Website in accordance with the Subscription Tier you have selected. The features, allowances, and limits of each Subscription Tier are described on graylockdigital.com/pricing and incorporated into this Agreement by reference. If a conflict exists between graylockdigital.com/pricing and this Agreement, this Agreement controls.
            </p>

            <h3 className={`${H3} mt-8`}>2.2 Site Updates and Edits</h3>
            <p className={`${P} mb-4`}>
              Each Subscription Tier includes a defined allowance of site update time per period (currently 1 hour per quarter for Starter, 1 hour per month for Growth, and 2 hours per month for Scale; Custom Tier allowances are specified in your applicable Statement of Work). We track update time in 6-minute (one-tenth of an hour) increments. Update time does not roll over from one period to the next.
            </p>
            <p className={P}>
              Update time outside your included allowance is billed at $100 per hour. We will scope, estimate, and obtain your written approval for any work that exceeds your allowance before performing the work.
            </p>

            <h3 className={`${H3} mt-8`}>2.3 &Agrave; La Carte Services</h3>
            <p className={P}>
              Custom integrations, third-party software, premium plugins, paid templates, paid stock photography, and other services not included in your Subscription Tier are available at additional cost. Some &agrave; la carte services carry one-time fees, ongoing monthly fees, or both. We will provide a written estimate before performing any &agrave; la carte work, and you must approve the estimate in writing before we begin.
            </p>

            <h3 className={`${H3} mt-8`}>2.4 Refresh Allowance</h3>
            <p className={`${P} mb-4`}>
              Beginning at the conclusion of your 24th paid Subscription month and continuing every 24 paid Subscription months thereafter, you become eligible for a Refresh. Your Refresh Allowance is 20 hours for the Starter Tier, 30 hours for the Growth Tier, and 40 hours for the Scale Tier. Custom Tier Refresh Allowances are specified in your applicable Statement of Work.
            </p>
            <p className={`${P} mb-4`}>
              Refresh hours may be applied to any combination of website refresh work, new components, new features, redesign work, content updates, or other Website improvements that we agree to perform. We will scope and estimate any work you wish to do with your Refresh hours before beginning.
            </p>
            <p className={`${P} mb-4`}>
              Refresh Allowances must be engaged within 6 months of the date you become eligible. Refresh hours not engaged within that 6-month window expire and do not roll over. You may delay the actual performance of Refresh work after engagement, but you must enter into a written scope of work with us within the 6-month window for the hours to remain available.
            </p>
            <p className={`${P} mb-4`}>
              If you do not engage your first Refresh Allowance within the 6-month window, you do not become eligible for a second Refresh Allowance at month 48; instead, the next Refresh becomes available 24 months after you have engaged a Refresh.
            </p>
            <p className={P}>
              If you cancel your Subscription before engaging a Refresh, any unused Refresh hours expire on the cancellation date with no compensation.
            </p>

            <h3 className={`${H3} mt-8`}>2.5 Statements of Work</h3>
            <p className={P}>
              Custom Tier customers and any work outside the standard Subscription Tier features are governed by a separate written Statement of Work (&ldquo;SOW&rdquo;). Each SOW will reference and incorporate this Agreement. If a conflict exists between an SOW and this Agreement, the SOW controls only as to that specific engagement.
            </p>
          </ScrollReveal>

          {/* 3. Build Phase */}
          <ScrollReveal>
            <h2 className={H2}>3. Build Phase</h2>

            <h3 className={H3}>3.1 Separate Build Agreement</h3>
            <p className={P}>
              Before your Subscription begins, you and Graylock will enter into a separate Build Agreement that governs the Build Phase, including the scope of the initial Website build, the setup fee, milestones, and your participation in the build process. This Master Services Agreement does not govern the Build Phase.
            </p>

            <h3 className={`${H3} mt-8`}>3.2 Acceptance of Built Website</h3>
            <p className={P}>
              By completing checkout and starting your Subscription, you confirm that you have reviewed your Website in full and that you approve all Content, design, structure, copy, headings, images, claims, testimonials, and other materials displayed on the Website as of that moment. This approval applies regardless of whether the Content was created by Graylock personnel, generated or assisted by artificial intelligence tools, or supplied by you. You acknowledge that you, not Graylock, are responsible for the legal compliance of all Content on your Website.
            </p>
          </ScrollReveal>

          {/* 4. Subscription Term, Pricing, and Cancellation */}
          <ScrollReveal>
            <h2 className={H2}>4. Subscription Term, Pricing, and Cancellation</h2>

            <h3 className={H3}>4.1 Subscription Start</h3>
            <p className={P}>
              Your Subscription begins on the date you complete checkout (the &ldquo;Subscription Start Date&rdquo;).
            </p>

            <h3 className={`${H3} mt-8`}>4.2 Initial Term and Price Lock</h3>
            <p className={P}>
              The &ldquo;Initial Term&rdquo; is the 24-month period beginning on the Subscription Start Date. During the Initial Term, your monthly Subscription fee will not increase. After the Initial Term, your Subscription continues on a month-to-month basis at the same rate, until cancelled or until we provide notice of a price change under Section 4.4.
            </p>

            <h3 className={`${H3} mt-8`}>4.3 Cancellation</h3>
            <p className={P}>
              You may cancel your Subscription at any time through your client portal or by contacting your client relationship manager. There is no early-termination fee. Cancellation takes effect at the end of your then-current monthly billing cycle. Subscription fees already paid for the cycle in which you cancel are non-refundable.
            </p>

            <h3 className={`${H3} mt-8`}>4.4 Price Changes After Initial Term</h3>
            <p className={P}>
              After the Initial Term, we may change your Subscription fee with at least 60 days&rsquo; written notice to you. Notice will be sent to the email address on file for your account. The new fee will take effect on the next billing cycle that begins at least 60 days after the date of notice. If you do not wish to accept the new fee, you may cancel your Subscription before the new fee takes effect under Section 4.3.
            </p>

            <h3 className={`${H3} mt-8`}>4.5 Payment Method</h3>
            <p className={P}>
              You authorize us to charge the payment method on file for your Subscription fee, any &agrave; la carte services you authorize, and any update time exceeding your included allowance that you have approved. You are responsible for keeping your payment method current.
            </p>

            <h3 className={`${H3} mt-8`}>4.6 Failed Payments</h3>
            <p className={`${P} mb-4`}>If a Subscription payment fails:</p>
            <ul className={UL}>
              <li><span className="text-offwhite font-semibold">Days 1 through 30 after the failure:</span> We will use reasonable efforts to contact you by email and phone to update your payment method, and your Website will remain online and operational. We may suspend non-essential services such as new edit requests during this period.</li>
              <li><span className="text-offwhite font-semibold">Days 31 through 90 after the failure:</span> Your Website will be taken offline. Your Account will be suspended. Your domain registration (if it is registered to you, which it always is under this Agreement) remains yours and is unaffected. You may reinstate your Account at any time during this window by paying all outstanding fees.</li>
              <li><span className="text-offwhite font-semibold">Day 91 and after the failure:</span> Your Website code will be permanently deleted. Your Account will be closed. After this point, restoration is not possible. You may still request a copy of your Content under Section 6.4 within 60 days of Account closure.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>4.7 Setup Fees</h3>
            <p className={P}>
              Setup fees, if any, are paid under your Build Agreement before this Master Services Agreement takes effect. Setup fees are non-refundable except as expressly stated in your Build Agreement. Setup fees are not credited against Subscription fees, but do reduce the Buyout Price under Section 7.
            </p>
          </ScrollReveal>

          {/* 5. Customer Responsibilities */}
          <ScrollReveal>
            <h2 className={H2}>5. Customer Responsibilities</h2>

            <h3 className={H3}>5.1 Content Approval and Ownership of Compliance</h3>
            <p className={P}>
              You are responsible for the legal compliance of all Content displayed on your Website. This responsibility applies regardless of whether the Content was provided by you, written by Graylock personnel, generated or assisted by AI, or any combination. We design and build your Website with consideration of generally applicable advertising and privacy laws, but specific compliance with any law, regulation, professional licensing rule, or industry standard applicable to your business is your responsibility, working with your own attorney, compliance officer, or licensing board as appropriate.
            </p>

            <h3 className={`${H3} mt-8`}>5.2 Content Warranties</h3>
            <p className={`${P} mb-4`}>You represent and warrant that:</p>
            <ul className={UL}>
              <li>You own or have all necessary rights and licenses to all Customer Content you provide to us, and to display that Content on your Website;</li>
              <li>Your Customer Content does not infringe any third party&rsquo;s intellectual property, privacy, publicity, or other rights;</li>
              <li>All testimonials, endorsements, before-and-after photos, and patient or client references on your Website have appropriate written authorizations on file with you, and that those authorizations cover the specific use displayed on the Website;</li>
              <li>All claims, statements of fact, statistics, awards, certifications, credentials, and similar objective representations on your Website are accurate, current, and substantiated by documentation in your possession;</li>
              <li>Your business operations and Website do not violate any applicable law, regulation, or industry rule, and you hold all licenses, registrations, and certifications required to operate your business and offer the services described on your Website.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>5.3 Post-Launch Content Changes</h3>
            <p className={P}>
              After your initial Website goes live, any change you request to your Website is deemed approved by you when you submit the request. Any change we propose to your Website (other than routine maintenance, security updates, accessibility fixes, infrastructure updates, and similar non-substantive changes) requires your written approval before publication. Written approval may be provided through your client portal, by email, or by other written communication.
            </p>

            <h3 className={`${H3} mt-8`}>5.4 Substantiation Records</h3>
            <p className={P}>
              You are responsible for maintaining your own substantiation file for any objective claim, testimonial, credential, certification, license, or similar representation displayed on your Website. We may request that you provide substantiation for specific items. If you cannot or will not provide adequate substantiation, we may decline to publish or may require removal of the item, and you indemnify us against claims related to unsubstantiated representations.
            </p>

            <h3 className={`${H3} mt-8`}>5.5 Domain and Third-Party Accounts</h3>
            <p className={P}>
              You are the registrant of your own domain name. You are also responsible for maintaining your own accounts with any third-party services connected to your Website (Google Business Profile, Google Search Console, Google Analytics, social media platforms, payment processors, email service providers, and similar). We may assist you in setting up these accounts, but you own them and are responsible for their continued maintenance and credentials.
            </p>
          </ScrollReveal>

          {/* 6. Intellectual Property */}
          <ScrollReveal>
            <h2 className={H2}>6. Intellectual Property</h2>

            <h3 className={H3}>6.1 Graylock Property</h3>
            <p className={`${P} mb-4`}>
              Graylock OS, the underlying source code of your Website, the Graylock-built design components and templates, the prompts and AI workflows used to build your Website, the client portal and associated dashboards, and all other software, methodologies, and tools we use to deliver the Services are the exclusive property of Graylock. Nothing in this Agreement transfers ownership of any of the foregoing to you.
            </p>
            <p className={P}>
              During your active Subscription, we grant you a limited, non-exclusive, non-transferable license to access and use the Website we operate for you. This license terminates when your Subscription ends or under Section 7.
            </p>

            <h3 className={`${H3} mt-8`}>6.2 Customer Content</h3>
            <p className={P}>
              You retain ownership of all Customer Content you provide to us. You grant us a non-exclusive, worldwide license to host, display, modify, format, and use Customer Content as necessary to provide the Services.
            </p>

            <h3 className={`${H3} mt-8`}>6.3 Graylock-Created Content</h3>
            <p className={`${P} mb-4`}>
              Original written copy, headings, page structure, and similar text-based Content that we create for your Website becomes part of your Website and is licensed to you for use on the Website during your active Subscription. Subject to Section 6.4, you may receive a copy of this text-based Content if you cancel your Subscription.
            </p>
            <p className={P}>
              Photographs, illustrations, graphics, icons, custom design elements, and other visual assets created by Graylock for your Website remain the exclusive property of Graylock. We license these assets to you for display on the Website during your active Subscription only. We do not transfer or provide these visual assets to you upon cancellation, and you do not have the right to reuse them after your Subscription ends, except as expressly provided in Section 7 (Buyout).
            </p>

            <h3 className={`${H3} mt-8`}>6.4 Content Return on Cancellation</h3>
            <p className={P}>
              Within the 60-day period following your cancellation, you may request a copy of the text-based written Content displayed on your Website. We will deliver this Content within 30 days of your written request, in PDF format, page by page. The PDF will not include metadata, alt text, page titles, meta descriptions, schema markup, or other non-display Content. We will not return Customer Content you originally provided to us, since you already have it. We will not return Graylock-created visual assets.
            </p>

            <h3 className={`${H3} mt-8`}>6.5 Reuse of Templates and Methodology</h3>
            <p className={P}>
              Each Website we build is original to the customer it serves. However, we may apply our methodologies, structures, design systems, code patterns, prompts, and workflows to other customers. Nothing in this Agreement restricts us from developing, owning, marketing, or providing services to other customers, including in your industry or geographic market.
            </p>

            <h3 className={`${H3} mt-8`}>6.6 Footer Attribution</h3>
            <p className={P}>
              During your active Subscription, your Website will display a small attribution in the footer (such as &ldquo;Built by Graylock Digital&rdquo; or &ldquo;Maintained by Graylock Digital&rdquo;) linking to graylockdigital.com. You may purchase the right to remove this attribution at our then-current attribution-removal fee. After a Buyout under Section 7, the attribution requirement no longer applies.
            </p>

            <h3 className={`${H3} mt-8`}>6.7 Portfolio and Marketing Use</h3>
            <p className={P}>
              We may display your Website, business name, logo, and a brief description of our work in our portfolio, on our website, in proposals to prospective customers, and in similar marketing materials. You may opt out of this use at any time by written notice to us, in which case we will remove the relevant materials within 30 days. While you are an active customer, we may publicly identify you as a Graylock customer.
            </p>
          </ScrollReveal>

          {/* 7. Buyout Option */}
          <ScrollReveal>
            <h2 className={H2}>7. Buyout Option</h2>

            <h3 className={H3}>7.1 Right to Purchase Source Code</h3>
            <p className={P}>
              If you wish to terminate your Subscription and retain a copy of your Website source code, you may purchase the source code from Graylock at the Buyout Price defined in Section 7.2.
            </p>

            <h3 className={`${H3} mt-8`}>7.2 Buyout Price</h3>
            <p className={`${P} mb-4`}>The Buyout Price is calculated as follows:</p>
            <p className={`${P} mb-4 font-mono text-offwhite`}>
              Buyout Price = (Monthly Subscription Fee &times; Build Hours) &minus; Setup Fees Actually Paid
            </p>
            <p className={`${P} mb-4`}>
              Where Build Hours are: 40 hours for Starter, 50 hours for Growth, 60 hours for Scale, and as specified in the Statement of Work for Custom Tier customers.
            </p>
            <p className={`${P} mb-4`}>
              By way of example: a Starter customer who paid an $799 setup fee would have a Buyout Price of ($199 &times; 40) &minus; $799 = $7,161. A Growth customer who paid a $999 setup fee would have a Buyout Price of ($299 &times; 50) &minus; $999 = $13,951.
            </p>
            <p className={P}>
              Subscription fees you have paid do not reduce the Buyout Price. The Buyout Price reflects the value of the Website&rsquo;s underlying code and assets, separate from the ongoing Services covered by your Subscription fees.
            </p>

            <h3 className={`${H3} mt-8`}>7.3 What the Buyout Includes</h3>
            <p className={`${P} mb-4`}>Upon payment of the Buyout Price, we will deliver to you:</p>
            <ul className={UL}>
              <li>A Git repository containing the source code of your Website at the time of buyout;</li>
              <li>Photographs, illustrations, graphics, and other visual assets that are part of your Website code;</li>
              <li>On-page SEO work that is part of your Website code (titles, headings, meta tags, schema, internal linking);</li>
              <li>A copy of the text-based Content displayed on your Website.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>7.4 What the Buyout Does Not Include</h3>
            <p className={`${P} mb-4`}>The following are not included in a Buyout:</p>
            <ul className={UL}>
              <li>Graylock OS, the client portal, the customer dashboards, and any other Graylock proprietary software platform components, including any components that are accessed by your Website but are not embedded in your Website&rsquo;s source code;</li>
              <li>Third-party software licenses, plugin licenses, font licenses, stock photography licenses, and any other third-party rights that do not transfer with the source code; you are responsible for separately licensing any third-party assets needed for your Website to operate;</li>
              <li>Hosting, deployment, ongoing maintenance, support, security updates, accessibility monitoring, or any other services we previously provided under your Subscription;</li>
              <li>Any Graylock-OS-generated dashboards, analytics, monitoring, or business intelligence outputs.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>7.5 Post-Buyout Status</h3>
            <p className={P}>
              After Buyout, we will not provide hosting, support, maintenance, or any other services for the Website. You are responsible for finding your own hosting provider, deployment partner, and ongoing maintenance. The source code is provided AS IS without warranty of any kind. Footer attribution to Graylock is not required after Buyout.
            </p>

            <h3 className={`${H3} mt-8`}>7.6 Transfer of Third-Party Accounts</h3>
            <p className={P}>
              Upon Buyout (or upon cancellation under Section 4.3), we will transfer to you administrative access to any Google Business Profile, Google Search Console, Google Analytics, or similar third-party accounts we created or managed on your behalf, to the extent these accounts are tied to your business identity rather than ours.
            </p>
          </ScrollReveal>

          {/* 8. Service Levels */}
          <ScrollReveal>
            <h2 className={H2}>8. Service Levels</h2>

            <h3 className={H3}>8.1 Uptime</h3>
            <p className={P}>
              We target Website uptime of 99% per calendar month, measured by Graylock&rsquo;s monitoring tools, excluding scheduled maintenance, force majeure, third-party outages outside our reasonable control, and outages caused by Customer or Customer Content. Uptime is a target, not a contractual guarantee, and the limitations of liability in Section 11 apply to all uptime-related claims.
            </p>

            <h3 className={`${H3} mt-8`}>8.2 Support Response Time</h3>
            <p className={P}>
              We respond to support requests submitted through your client portal or by email within one business day. &ldquo;Business day&rdquo; means Monday through Friday, excluding U.S. federal holidays, between the hours of 9:00 a.m. Mountain Time and 5:00 p.m. Pacific Time.
            </p>

            <h3 className={`${H3} mt-8`}>8.3 Backups</h3>
            <p className={P}>
              We maintain daily backups of your Website with a rolling 30-day retention period. Backups are intended for our operational use to recover from incidents. While we will use reasonable efforts to restore from backup if needed, we do not guarantee the completeness or success of any specific restoration.
            </p>

            <h3 className={`${H3} mt-8`}>8.4 Hours of Operation</h3>
            <p className={P}>
              Our normal business hours are Monday through Friday, 9:00 a.m. Mountain Time through 5:00 p.m. Pacific Time, excluding U.S. federal holidays. We are not staffed for emergency response outside of business hours.
            </p>
          </ScrollReveal>

          {/* 9. Use of AI */}
          <ScrollReveal>
            <h2 className={H2}>9. Use of AI</h2>
            <p className={`${P} mb-4`}>
              Graylock uses a combination of human work and artificial intelligence tools to deliver the Services. AI tools may be used in copywriting, editing, content generation, design, code generation, search optimization, and other aspects of the build and ongoing maintenance of your Website.
            </p>
            <p className={`${P} mb-4`}>
              Graylock OS, including the AI workflows and prompts that power it, is proprietary to Graylock and is not licensed or transferred to you under this Agreement, including in a Buyout.
            </p>
            <p className={P}>
              You acknowledge and agree that the use of AI tools in the production of your Website does not change your responsibilities under Section 5, including your responsibility for legal compliance and the accuracy of all Content.
            </p>
          </ScrollReveal>

          {/* 10. Disclaimers */}
          <ScrollReveal>
            <h2 className={H2}>10. Disclaimers and No Guarantees</h2>

            <h3 className={H3}>10.1 Service AS IS</h3>
            <p className={P}>
              EXCEPT AS EXPRESSLY STATED IN THIS AGREEMENT, THE SERVICES AND THE WEBSITE ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED, AND STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
            </p>

            <h3 className={`${H3} mt-8`}>10.2 No Outcome Guarantees</h3>
            <p className={P}>
              We do not guarantee any specific business outcome, including search engine rankings, search engine indexing, traffic levels, conversion rates, lead volume, sales, revenue, customer acquisition, customer retention, or competitive positioning. We do not guarantee that your Website will be free from errors, defects, or vulnerabilities, or that the Services will be uninterrupted.
            </p>

            <h3 className={`${H3} mt-8`}>10.3 No Legal or Compliance Guarantees</h3>
            <p className={P}>
              We are not a law firm, a compliance consultancy, an accounting firm, or a regulatory advisor. Nothing we provide constitutes legal, financial, accounting, tax, medical, or professional advice. We do not guarantee that your Website complies with any law, regulation, professional licensing rule, or industry standard. Final responsibility for legal and regulatory compliance is yours, working with your own qualified advisors.
            </p>
          </ScrollReveal>

          {/* 11. Limitation of Liability */}
          <ScrollReveal>
            <h2 className={H2}>11. Limitation of Liability</h2>

            <h3 className={H3}>11.1 Liability Cap</h3>
            <p className={P}>
              EXCEPT FOR YOUR PAYMENT OBLIGATIONS, INDEMNIFICATION OBLIGATIONS, AND BREACHES OF CONFIDENTIALITY, NEITHER PARTY&rsquo;S TOTAL LIABILITY UNDER THIS AGREEMENT, REGARDLESS OF THE BASIS OR FORM OF THE CLAIM, WILL EXCEED THE TOTAL FEES YOU PAID TO GRAYLOCK UNDER THIS AGREEMENT IN THE 12 MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
            </p>

            <h3 className={`${H3} mt-8`}>11.2 Excluded Damages</h3>
            <p className={P}>
              IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST DATA, LOSS OF GOODWILL, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>

            <h3 className={`${H3} mt-8`}>11.3 Application</h3>
            <p className={P}>
              These limitations apply to the maximum extent permitted by law. The limitations apply even if a remedy fails of its essential purpose.
            </p>
          </ScrollReveal>

          {/* 12. Indemnification */}
          <ScrollReveal>
            <h2 className={H2}>12. Indemnification</h2>

            <h3 className={H3}>12.1 By Customer</h3>
            <p className={`${P} mb-4`}>
              You will defend, indemnify, and hold harmless Graylock and its members, officers, employees, and agents from and against all third-party claims, demands, suits, proceedings, damages, liabilities, losses, fines, penalties, and expenses (including reasonable attorneys&rsquo; fees) arising out of or related to:
            </p>
            <ul className={UL}>
              <li>Customer Content or any Content displayed on your Website;</li>
              <li>Your breach of any of the warranties in Section 5;</li>
              <li>Your operation of your business;</li>
              <li>Your compliance or non-compliance with any law, regulation, professional licensing rule, or industry standard applicable to your business;</li>
              <li>Your products or services described or sold through your Website;</li>
              <li>Any claim that your Content, your business, or your operations infringes the rights of any third party.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>12.2 By Graylock</h3>
            <p className={P}>
              We will defend, indemnify, and hold harmless you from and against third-party claims that the Graylock-developed source code of your Website (excluding Customer Content) infringes the U.S. intellectual property rights of a third party. This indemnification does not apply to (a) Customer Content, (b) modifications to the Website made by anyone other than us, (c) combinations of the Website with materials we did not provide, or (d) the Website after Buyout.
            </p>

            <h3 className={`${H3} mt-8`}>12.3 Procedure</h3>
            <p className={P}>
              The party seeking indemnification must provide prompt written notice of the claim, give the indemnifying party sole control of the defense and settlement, and provide reasonable cooperation. The indemnifying party may not settle a claim that imposes liability or admission on the other party without that party&rsquo;s written consent, not to be unreasonably withheld.
            </p>
          </ScrollReveal>

          {/* 13. Confidentiality */}
          <ScrollReveal>
            <h2 className={H2}>13. Confidentiality</h2>

            <h3 className={H3}>13.1 Definition</h3>
            <p className={P}>
              &ldquo;Confidential Information&rdquo; means non-public information disclosed by one party to the other that is marked confidential or that a reasonable person would understand to be confidential under the circumstances. Confidential Information does not include information that is publicly known, was known to the receiving party before disclosure, is independently developed, or is rightfully obtained from a third party.
            </p>

            <h3 className={`${H3} mt-8`}>13.2 Obligations</h3>
            <p className={P}>
              Each party will protect the other&rsquo;s Confidential Information with at least the same degree of care it uses to protect its own confidential information of similar importance, and not less than reasonable care. Neither party will use the other&rsquo;s Confidential Information except to perform its obligations under this Agreement, and neither party will disclose the other&rsquo;s Confidential Information to third parties except as expressly permitted under this Agreement.
            </p>

            <h3 className={`${H3} mt-8`}>13.3 Required Disclosure</h3>
            <p className={P}>
              A party may disclose Confidential Information if compelled by law or court order, provided that the party gives the other reasonable advance notice (where lawful) and cooperates in seeking protective treatment.
            </p>
          </ScrollReveal>

          {/* 14. Termination */}
          <ScrollReveal>
            <h2 className={H2}>14. Termination</h2>

            <h3 className={H3}>14.1 Termination by Customer</h3>
            <p className={P}>
              You may cancel your Subscription at any time as described in Section 4.3.
            </p>

            <h3 className={`${H3} mt-8`}>14.2 Termination by Graylock</h3>
            <p className={`${P} mb-4`}>
              We may suspend or terminate your Subscription, in whole or in part, on written notice, for any of the following reasons:
            </p>
            <ul className={UL}>
              <li>Non-payment after the cure period in Section 4.6;</li>
              <li>Material breach of this Agreement that is not cured within 15 days of written notice;</li>
              <li>Your engagement in illegal activity through the Website;</li>
              <li>Your violation of the{" "}
                <Link href="/aup" className={EMAIL}>Acceptable Use Policy</Link>{" "}(incorporated by reference);
              </li>
              <li>Your bankruptcy, insolvency, or assignment for the benefit of creditors;</li>
              <li>Conduct that, in our reasonable judgment, exposes Graylock to legal, regulatory, reputational, or operational risk.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>14.3 Effect of Termination</h3>
            <p className={P}>
              Upon termination by either party, we will provide you 60 days&rsquo; notice during which your Website will remain operational at our discretion (or, in the case of immediate termination for cause, may go offline immediately). You must request return of your Content under Section 6.4 within 60 days of the termination notice. Your domain registration is unaffected and remains yours. After 60 days, your Website goes offline. After 90 days from the termination notice, your Website code and our copies of your Customer Content are deleted.
            </p>

            <h3 className={`${H3} mt-8`}>14.4 Survival</h3>
            <p className={P}>
              Sections 1 (Definitions), 5 (Customer Responsibilities, to the extent of obligations and warranties for the period of active service), 6 (Intellectual Property), 7 (Buyout Option, if exercised), 10 (Disclaimers), 11 (Limitation of Liability), 12 (Indemnification), 13 (Confidentiality), 14 (Termination), 15 (Dispute Resolution), 16 (Governing Law), and 18 (General) survive termination of this Agreement.
            </p>
          </ScrollReveal>

          {/* 15. Dispute Resolution */}
          <ScrollReveal>
            <h2 className={H2}>15. Dispute Resolution</h2>

            <h3 className={H3}>15.1 Informal Resolution</h3>
            <p className={P}>
              Before initiating any formal dispute, the parties agree to attempt in good faith to resolve any dispute through direct discussion. The party initiating the dispute will provide written notice describing the dispute and the desired resolution. The parties will negotiate for at least 30 days before proceeding to mediation.
            </p>

            <h3 className={`${H3} mt-8`}>15.2 Mediation</h3>
            <p className={P}>
              If a dispute is not resolved within 30 days of the notice in Section 15.1, the parties will submit the dispute to mediation administered by a mutually agreed-upon mediator located in Montana, with each party bearing half of the mediator&rsquo;s fees. The parties will participate in the mediation in good faith for at least one session before initiating arbitration.
            </p>

            <h3 className={`${H3} mt-8`}>15.3 Binding Arbitration</h3>
            <p className={P}>
              If mediation does not resolve the dispute, the dispute will be resolved exclusively by binding arbitration administered by JAMS or the American Arbitration Association under its Commercial Arbitration Rules, before a single arbitrator. The arbitration will take place in Flathead County, Montana, or by remote means as the arbitrator directs. The arbitrator&rsquo;s award will be final and may be entered in any court of competent jurisdiction.
            </p>

            <h3 className={`${H3} mt-8`}>15.4 Small Claims Carve-Out</h3>
            <p className={P}>
              Notwithstanding Section 15.3, either party may bring an individual claim in small claims court in Flathead County, Montana, if the claim qualifies for small claims jurisdiction under Montana law.
            </p>

            <h3 className={`${H3} mt-8`}>15.5 Class Action Waiver</h3>
            <p className={P}>
              EACH PARTY AGREES THAT ANY DISPUTE WILL BE RESOLVED ONLY ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING. Neither party may consolidate or join more than one person&rsquo;s claims, and the arbitrator may not preside over any form of representative or class proceeding.
            </p>

            <h3 className={`${H3} mt-8`}>15.6 Equitable Relief</h3>
            <p className={P}>
              Notwithstanding the above, either party may seek temporary injunctive or other equitable relief in a court of competent jurisdiction to prevent or restrain misuse of intellectual property, breach of confidentiality, or similar irreparable harm, pending resolution of the underlying dispute.
            </p>
          </ScrollReveal>

          {/* 16. Governing Law */}
          <ScrollReveal>
            <h2 className={H2}>16. Governing Law</h2>
            <p className={P}>
              This Agreement is governed by the laws of the State of Montana, without regard to its conflict-of-law principles. The federal and state courts located in Flathead County, Montana, have exclusive jurisdiction for any matters not subject to arbitration under Section 15.
            </p>
          </ScrollReveal>

          {/* 17. Notices */}
          <ScrollReveal>
            <h2 className={H2}>17. Notices</h2>
            <p className={P}>
              Notices to Graylock must be sent by email to{" "}
              <a href="mailto:tim@graylockdigital.com" className={EMAIL}>tim@graylockdigital.com</a>{" "}and{" "}
              <a href="mailto:jared@graylockdigital.com" className={EMAIL}>jared@graylockdigital.com</a>, or by U.S. mail to Graylock Digital, LLC at the address on graylockdigital.com/contact (or the address noted in this Agreement). Notices to Customer will be sent to the email address on file for your Account. Notices are effective upon receipt, except that emailed notices to Customer are deemed received on the day sent if sent during a business day, or on the next business day if sent outside business hours.
            </p>
          </ScrollReveal>

          {/* 18. General */}
          <ScrollReveal>
            <h2 className={H2}>18. General</h2>

            <h3 className={H3}>18.1 Entire Agreement</h3>
            <p className={P}>
              This Agreement, together with the Build Agreement (for the Build Phase), the{" "}
              <Link href="/aup" className={EMAIL}>Acceptable Use Policy</Link>, the{" "}
              <Link href="/privacy" className={EMAIL}>Privacy Policy</Link>, and any applicable Statement of Work, is the entire agreement between the parties regarding its subject matter, and supersedes all prior agreements and understandings.
            </p>

            <h3 className={`${H3} mt-8`}>18.2 Amendments to This Agreement</h3>
            <p className={P}>
              We may update this Agreement from time to time. We will provide at least 30 days&rsquo; notice of material changes by email or through your client portal. Your continued use of the Services after the effective date of an updated Agreement constitutes acceptance of the updated terms. If you do not accept the updated terms, you may cancel under Section 4.3.
            </p>

            <h3 className={`${H3} mt-8`}>18.3 Assignment</h3>
            <p className={P}>
              You may not assign this Agreement without our prior written consent. We may assign this Agreement to an affiliate, to a successor in interest in connection with a merger, acquisition, reorganization, or sale of all or substantially all of our assets, or with your consent (not to be unreasonably withheld).
            </p>

            <h3 className={`${H3} mt-8`}>18.4 Force Majeure</h3>
            <p className={P}>
              Neither party is liable for failure or delay in performance caused by events outside its reasonable control, including acts of God, natural disasters, war, terrorism, pandemic, government action, internet outages, third-party service failures, and cyberattacks not caused by the affected party&rsquo;s negligence.
            </p>

            <h3 className={`${H3} mt-8`}>18.5 Severability</h3>
            <p className={P}>
              If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid or unenforceable provision will be modified to the minimum extent necessary to make it enforceable.
            </p>

            <h3 className={`${H3} mt-8`}>18.6 No Waiver</h3>
            <p className={P}>
              A failure to enforce any provision of this Agreement is not a waiver of the right to enforce it later or in another instance. Waivers must be in writing to be effective.
            </p>

            <h3 className={`${H3} mt-8`}>18.7 Independent Contractors</h3>
            <p className={P}>
              The parties are independent contractors. Nothing in this Agreement creates a partnership, joint venture, agency, fiduciary, or employment relationship.
            </p>

            <h3 className={`${H3} mt-8`}>18.8 No Third-Party Beneficiaries</h3>
            <p className={P}>
              This Agreement does not create any rights for any third party.
            </p>

            <h3 className={`${H3} mt-8`}>18.9 Headings</h3>
            <p className={P}>
              Section headings are for convenience only and do not affect interpretation.
            </p>

            <h3 className={`${H3} mt-8`}>18.10 Counterparts and Electronic Acceptance</h3>
            <p className={P}>
              This Agreement may be accepted electronically. Your acceptance through the checkout process has the same legal effect as a handwritten signature.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-gunmetal pt-8">
              <p className={`${P} italic`}>
                End of Master Services Agreement. Customer accepts this Agreement by checking the agreement box at checkout and completing payment.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
