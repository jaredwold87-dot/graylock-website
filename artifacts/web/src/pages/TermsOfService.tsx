import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function TermsOfService() {
  return (
    <>
      <SEO title="Terms of Service | Graylock Digital" />
      <section className="bg-offwhite pt-24 pb-12 px-6 md:px-12 text-charcoal">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-display mb-6">Terms of Service</h1>
            <p className="text-gray-600 font-sans mb-2">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Services</h2>
            <p className="text-stone font-sans leading-relaxed">
              Graylock Digital provides custom website design, development, hosting, and ongoing maintenance services for small service businesses. All services are delivered according to the plan selected by the client, as described on our Pricing page.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Payments & Billing</h2>
            <p className="text-stone font-sans leading-relaxed mb-3">
              Clients pay a one-time setup fee at the start of the project and a recurring monthly fee for ongoing hosting, maintenance, and support. Monthly fees are billed at the beginning of each billing cycle.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              All prices are listed in USD. We reserve the right to adjust pricing with 30 days' notice.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Cancellation</h2>
            <p className="text-stone font-sans leading-relaxed">
              All plans are month-to-month with no long-term contracts. You may cancel at any time with 30 days' written notice and no cancellation fees. Upon cancellation, we will package up all of your content and data, and transfer your domain to wherever you choose. You will need to build a new site on your new host, but you will never lose your domain authority, your content, or your brand.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Intellectual Property</h2>
            <p className="text-stone font-sans leading-relaxed">
              You own your domain, your written content, your images, and your brand assets. Graylock Digital retains ownership of the code, the design framework, and the hosting infrastructure used to build and maintain your website. Upon cancellation, we package up all of your content and data, and transfer your domain to wherever you choose.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Client Responsibilities</h2>
            <p className="text-stone font-sans leading-relaxed">
              Clients are responsible for providing accurate business information, timely feedback during the build process, and maintaining access to their domain registrar. Delays in providing materials or feedback may extend project timelines.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Limitation of Liability</h2>
            <p className="text-stone font-sans leading-relaxed">
              Graylock Digital is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client in the preceding 12 months.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Changes to These Terms</h2>
            <p className="text-stone font-sans leading-relaxed">
              We may update these terms from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-display text-offwhite mb-4">Contact Us</h2>
            <p className="text-stone font-sans leading-relaxed">
              If you have questions about these terms, please email{" "}
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
