import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy | Graylock Digital" description="How Graylock Digital collects, uses, and protects the personal information you share with us through our website, contact forms, and chat widget." url="https://graylockdigital.com/privacy" />
      <section className="bg-offwhite pt-28 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 text-charcoal">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-5 leading-tight">Privacy Policy</h1>
            <p className="text-gray-600 font-sans text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-14">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Information We Collect</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85] mb-4">
              When you use our website, submit a contact form, or interact with our chat widget, we may collect:
            </p>
            <ul className="text-stone font-sans text-base md:text-[17px] leading-[1.85] space-y-2.5 list-disc list-outside ml-6">
              <li>Your name and email address</li>
              <li>Your business name, phone number, and website URL (if provided)</li>
              <li>Messages you send through our chat widget or contact forms</li>
              <li>Basic analytics data such as pages visited and time on site</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">How We Use Your Information</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85] mb-4">We use the information we collect to:</p>
            <ul className="text-stone font-sans text-base md:text-[17px] leading-[1.85] space-y-2.5 list-disc list-outside ml-6">
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Prepare your free website evaluation and custom homepage demo</li>
              <li>Improve our website and the quality of our services</li>
              <li>Send follow-up communications related to your inquiry (you can opt out at any time)</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Data Sharing</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who help us operate our business (such as hosting providers and email services), but only as necessary to deliver our services to you.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Data Security</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. All data transmitted through our website is encrypted using SSL/TLS technology.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Cookies</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              Our website may use cookies to improve your browsing experience and to collect basic analytics data. You can control cookie settings through your browser preferences.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Your Rights</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              You have the right to access, correct, or delete your personal information at any time. To make a request, contact us at hello@graylockdigital.com.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Contact Us</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              If you have questions about this privacy policy, please email{" "}
              <a href="mailto:hello@graylockdigital.com" className="text-orange font-semibold hover:underline">
                hello@graylockdigital.com
              </a>{" "}
              and a real person will get back to you within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
