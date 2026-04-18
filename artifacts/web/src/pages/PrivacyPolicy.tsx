import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy | Graylock Digital" />
      <section className="bg-offwhite pt-24 pb-12 px-6 md:px-12 text-charcoal">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-display mb-6">Privacy Policy</h1>
            <p className="text-gray-600 font-sans mb-2">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Information We Collect</h2>
            <p className="text-stone font-sans leading-relaxed mb-3">
              When you use our website, submit a contact form, or interact with our chat widget, we may collect:
            </p>
            <ul className="text-stone font-sans leading-relaxed space-y-2 list-disc list-inside ml-2">
              <li>Your name and email address</li>
              <li>Your business name, phone number, and website URL (if provided)</li>
              <li>Messages you send through our chat widget or contact forms</li>
              <li>Basic analytics data such as pages visited and time on site</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">How We Use Your Information</h2>
            <p className="text-stone font-sans leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="text-stone font-sans leading-relaxed space-y-2 list-disc list-inside ml-2">
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Prepare your free website evaluation and custom homepage demo</li>
              <li>Improve our website and the quality of our services</li>
              <li>Send follow-up communications related to your inquiry (you can opt out at any time)</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Data Sharing</h2>
            <p className="text-stone font-sans leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who help us operate our business (such as hosting providers and email services), but only as necessary to deliver our services to you.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Data Security</h2>
            <p className="text-stone font-sans leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. All data transmitted through our website is encrypted using SSL/TLS technology.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Cookies</h2>
            <p className="text-stone font-sans leading-relaxed">
              Our website may use cookies to improve your browsing experience and to collect basic analytics data. You can control cookie settings through your browser preferences.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Your Rights</h2>
            <p className="text-stone font-sans leading-relaxed">
              You have the right to access, correct, or delete your personal information at any time. To make a request, contact us at hello@graylockdigital.com.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Contact Us</h2>
            <p className="text-stone font-sans leading-relaxed">
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
