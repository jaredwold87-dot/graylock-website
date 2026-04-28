import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const H2 = "text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug";
const H3 = "text-lg md:text-xl font-display text-offwhite mb-3 mt-2 leading-snug";
const P = "text-stone font-sans text-base md:text-[17px] leading-[1.85]";
const UL = "text-stone font-sans text-base md:text-[17px] leading-[1.85] space-y-2.5 list-disc list-outside ml-6";
const EMAIL = "text-orange font-semibold hover:underline";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Graylock Digital"
        description="How Graylock Digital, LLC collects, uses, shares, and protects information about visitors and customers of graylockdigital.com."
        url="https://graylockdigital.com/privacy"
      />

      <section className="bg-offwhite pt-28 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 text-charcoal">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-5 leading-tight">Privacy Policy</h1>
            <p className="text-gray-600 font-sans text-sm">
              Effective: April 28, 2026 · Last updated: April 28, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12">

          <ScrollReveal>
            <h2 className={H2}>What this Privacy Policy covers</h2>
            <p className={P}>
              This Privacy Policy explains how Graylock Digital, LLC collects, uses, and shares information when you visit graylockdigital.com or use our services. This Policy applies to information about you and your business as a Graylock visitor or customer. It does not apply to information your customers provide to your own website built by Graylock — your own privacy practices govern that, and you are responsible for them.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>1. Information We Collect</h2>

            <h3 className={H3}>1.1 Information You Provide Directly</h3>
            <p className={`${P} mb-4`}>When you contact us, sign up, or use our services, you may provide:</p>
            <ul className={UL}>
              <li>Name, email address, phone number, business name, and business address;</li>
              <li>Payment information (processed by our payment processor; we do not store card numbers);</li>
              <li>Information about your business, industry, services, and goals;</li>
              <li>Content you provide for use on your Website (text, photos, brand assets, and similar);</li>
              <li>Communications you send us through email, the client portal, or other channels.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>1.2 Information We Collect Automatically</h3>
            <p className={`${P} mb-4`}>When you visit graylockdigital.com or use the client portal, we may collect:</p>
            <ul className={UL}>
              <li>IP address, browser type, device information, operating system, referring URL;</li>
              <li>Pages you visit, time spent, links clicked, and other usage information;</li>
              <li>Cookies and similar technologies as described in Section 6.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>1.3 Information from Third Parties</h3>
            <p className={P}>
              We may receive information about you from third parties, including service providers, analytics providers, payment processors, and publicly available sources, in connection with delivering services to you and operating our business.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>2. How We Use Information</h2>
            <p className={`${P} mb-4`}>We use the information we collect to:</p>
            <ul className={UL}>
              <li>Provide, operate, and improve our services and your Website;</li>
              <li>Communicate with you about your account, services, and inquiries;</li>
              <li>Process payments and manage your Subscription;</li>
              <li>Send service announcements, security alerts, and administrative messages;</li>
              <li>Send marketing communications, where permitted by law and your preferences;</li>
              <li>Comply with legal obligations and enforce our agreements;</li>
              <li>Detect, prevent, and address fraud, security, and technical issues;</li>
              <li>Conduct research, analytics, and product development.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>3. How We Share Information</h2>
            <p className={`${P} mb-4`}>We share information with:</p>
            <ul className={UL}>
              <li>Service providers and vendors that help us operate our business (hosting, payment processing, email delivery, analytics, customer support, and similar), under appropriate contractual protections;</li>
              <li>Professional advisors (attorneys, accountants) when needed for our business operations;</li>
              <li>Authorities and other parties when required by law, court order, or legal process, or when necessary to protect our rights or the rights of others;</li>
              <li>A successor entity in connection with a merger, acquisition, financing, reorganization, or sale of all or substantially all of our assets, with appropriate notice.</li>
            </ul>
            <p className={`${P} mt-4`}>
              We do not sell your personal information for monetary consideration, and we do not engage in cross-context behavioral advertising of your personal information.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>4. Your Rights and Choices</h2>
            <p className={`${P} mb-4`}>Depending on where you live, you may have rights regarding your personal information, including:</p>
            <ul className={UL}>
              <li>Accessing the personal information we hold about you;</li>
              <li>Correcting inaccurate personal information;</li>
              <li>Deleting your personal information, subject to legal exceptions;</li>
              <li>Receiving a portable copy of your personal information;</li>
              <li>Opting out of certain processing, including any sale or sharing of personal information for cross-context behavioral advertising, and certain types of profiling;</li>
              <li>Withdrawing consent where we rely on consent.</li>
            </ul>
            <p className={`${P} mt-4`}>
              To exercise these rights, contact us at{" "}
              <a href="mailto:jared@graylockdigital.com" className={EMAIL}>jared@graylockdigital.com</a>{" "}or{" "}
              <a href="mailto:tim@graylockdigital.com" className={EMAIL}>tim@graylockdigital.com</a>. We will respond within the timeframe required by applicable law. We may need to verify your identity before processing your request.
            </p>
            <p className={`${P} mt-4`}>
              We honor browser-level privacy signals, including the Global Privacy Control (GPC) signal, where required by applicable law.
            </p>

            <h3 className={`${H3} mt-8`}>4.1 California Residents</h3>
            <p className={P}>
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), including the rights described above. You may also designate an authorized agent to make requests on your behalf, subject to verification.
            </p>

            <h3 className={`${H3} mt-8`}>4.2 Other States with Comprehensive Privacy Laws</h3>
            <p className={P}>
              Residents of states with comprehensive privacy laws (including but not limited to Virginia, Colorado, Connecticut, Utah, Oregon, Texas, Montana, Delaware, Iowa, New Jersey, New Hampshire, Tennessee, Indiana, Kentucky, Maryland, Minnesota, Rhode Island, and Nebraska) may have similar rights under their respective state laws. We respect those rights and will respond in accordance with the applicable law.
            </p>

            <h3 className={`${H3} mt-8`}>4.3 Marketing Communications</h3>
            <p className={P}>
              You may opt out of marketing emails at any time by clicking the unsubscribe link in any marketing email or by contacting us. We will continue to send transactional and account-related emails as necessary to provide the Services.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>5. Data Retention</h2>
            <p className={P}>
              We retain your information for as long as needed to provide the Services, to comply with legal obligations, to resolve disputes, and to enforce our agreements. After your Subscription ends, we retain your information consistent with the Master Services Agreement and as required by law. Some categories of data (such as financial records and tax documents) may be retained longer to comply with legal requirements.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>6. Cookies and Similar Technologies</h2>
            <p className={P}>
              We use cookies and similar technologies on graylockdigital.com to operate the site, remember your preferences, analyze how the site is used, and improve our services. You can control cookies through your browser settings. We respect Global Privacy Control signals where required by law.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>7. Data Security</h2>
            <p className={P}>
              We use reasonable administrative, technical, and physical safeguards to protect your information, including encryption in transit and at rest, access controls, and monitoring. However, no system is perfectly secure, and we cannot guarantee absolute security.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>8. International Users</h2>
            <p className={P}>
              We operate from the United States. If you access our services from outside the United States, your information will be transferred to and processed in the United States, where data protection laws may differ from those of your jurisdiction.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>9. Children&rsquo;s Privacy</h2>
            <p className={P}>
              Our services are not directed to children under 13, and we do not knowingly collect information from children under 13. If you believe we have collected information from a child under 13, please contact us and we will delete it.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>10. Changes to This Policy</h2>
            <p className={P}>
              We may update this Privacy Policy from time to time. We will post the updated Policy on graylockdigital.com with the new effective date. For material changes, we will provide additional notice (such as by email).
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>11. Contact</h2>
            <p className={`${P} mb-4`}>
              If you have questions about this Privacy Policy or our privacy practices, contact us at:
            </p>
            <p className={P}>
              Graylock Digital, LLC<br />
              245 Gilbert Lake Drive<br />
              Kalispell, Montana 59901
            </p>
            <p className={`${P} mt-4`}>
              Email:{" "}
              <a href="mailto:jared@graylockdigital.com" className={EMAIL}>jared@graylockdigital.com</a>{" "}/{" "}
              <a href="mailto:tim@graylockdigital.com" className={EMAIL}>tim@graylockdigital.com</a>
            </p>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
