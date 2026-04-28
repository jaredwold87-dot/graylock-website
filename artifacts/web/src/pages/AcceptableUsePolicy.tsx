import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const H2 = "text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug";
const H3 = "text-lg md:text-xl font-display text-offwhite mb-3 mt-2 leading-snug";
const P = "text-stone font-sans text-base md:text-[17px] leading-[1.85]";
const UL = "text-stone font-sans text-base md:text-[17px] leading-[1.85] space-y-2.5 list-disc list-outside ml-6";
const EMAIL = "text-orange font-semibold hover:underline";

export default function AcceptableUsePolicy() {
  return (
    <>
      <SEO
        title="Acceptable Use Policy | Graylock Digital"
        description="The Graylock Digital Acceptable Use Policy describes how Customers may and may not use Graylock services, including the Websites we build and host."
        url="https://graylockdigital.com/aup"
      />

      <section className="bg-offwhite pt-28 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 text-charcoal">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-5 leading-tight">
              Acceptable Use Policy
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
            <p className={P}>
              This Acceptable Use Policy (&ldquo;AUP&rdquo;) describes how Customers may and may not use Graylock services, including the Websites we build and host. This AUP is part of the Master Services Agreement and is enforceable on the same terms.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>1. Prohibited Content and Activities</h2>
            <p className={`${P} mb-6`}>
              You may not use Graylock services to publish, host, distribute, or facilitate any of the following:
            </p>

            <h3 className={H3}>1.1 Illegal Content</h3>
            <ul className={UL}>
              <li>Content that violates any applicable U.S. federal, state, or local law, or the law of any jurisdiction where the content is targeted;</li>
              <li>Content that infringes the intellectual property, privacy, publicity, or other rights of any third party;</li>
              <li>Content that constitutes child sexual abuse material, child sexualization, or content that endangers minors in any form.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>1.2 Harmful Content</h3>
            <ul className={UL}>
              <li>Content that promotes violence, terrorism, or unlawful harm to any person or group;</li>
              <li>Content that constitutes harassment, hate speech, defamation, or unlawful discrimination;</li>
              <li>Content that promotes self-harm, suicide, or eating disorders.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>1.3 Fraud and Deception</h3>
            <ul className={UL}>
              <li>Content that constitutes false, deceptive, or misleading advertising;</li>
              <li>Content used to defraud, scam, phish, or otherwise deceive consumers;</li>
              <li>Content that misrepresents your identity, credentials, licensure, or affiliation;</li>
              <li>Pyramid schemes, multi-level marketing schemes that operate as pyramid schemes, or similar deceptive business models.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>1.4 Regulated Industries Without Proper Authorization</h3>
            <ul className={UL}>
              <li>Practice of medicine, law, accounting, financial advisory, or other licensed professions without the proper licenses;</li>
              <li>Sale or distribution of controlled substances, firearms, or other regulated goods without compliance with applicable law;</li>
              <li>Gambling services not properly licensed in the relevant jurisdiction;</li>
              <li>Operation as a money services business, money transmitter, or similar regulated entity without proper authorization.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>1.5 Adult Content</h3>
            <ul className={UL}>
              <li>Sexually explicit content, pornography, or content primarily intended for sexual gratification;</li>
              <li>Adult dating, escort services, or similar services.</li>
            </ul>

            <h3 className={`${H3} mt-8`}>1.6 Technical Misuse</h3>
            <ul className={UL}>
              <li>Distribution of malware, spyware, ransomware, or other malicious code;</li>
              <li>Phishing, social engineering, or credential harvesting;</li>
              <li>Unauthorized access to systems, networks, or data;</li>
              <li>Activities that disrupt, overload, or interfere with our services or third-party services;</li>
              <li>Spam, unsolicited commercial communications, or violations of CAN-SPAM, the TCPA, or similar laws;</li>
              <li>Reverse engineering, scraping, decompiling, or otherwise attempting to extract our source code, Graylock OS, or our proprietary methods.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>2. Compliance Responsibilities</h2>
            <p className={P}>
              You are responsible for ensuring that your use of Graylock services and your Website complies with all applicable laws, regulations, professional licensing requirements, and industry standards. We are not your compliance officer and do not monitor your business operations or content for legal compliance, except as expressly described in your Subscription.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>3. Reporting Violations</h2>
            <p className={P}>
              If you become aware of a violation of this AUP, contact us at{" "}
              <a href="mailto:jared@graylockdigital.com" className={EMAIL}>jared@graylockdigital.com</a>{" "}or{" "}
              <a href="mailto:tim@graylockdigital.com" className={EMAIL}>tim@graylockdigital.com</a>.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className={H2}>4. Enforcement</h2>
            <p className={`${P} mb-4`}>
              If we determine, in our reasonable judgment, that you have violated this AUP, we may take any of the following actions, with or without notice:
            </p>
            <ul className={UL}>
              <li>Require removal or modification of the offending Content;</li>
              <li>Suspend access to your Website or your Account;</li>
              <li>Terminate your Subscription under Section 14 of the Master Services Agreement;</li>
              <li>Cooperate with law enforcement;</li>
              <li>Seek other remedies available under law or equity.</li>
            </ul>
            <p className={`${P} mt-4`}>
              We have no obligation to monitor your Website for AUP violations, but we reserve the right to do so at our discretion.
            </p>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
