import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function TermsOfService() {
  return (
    <>
      <SEO title="Terms of Service | Graylock Digital" description="The terms governing Graylock Digital's website design, hosting, maintenance, and ongoing support services for professional practices." path="/terms-of-service" />
      <section className="bg-offwhite pt-28 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 text-charcoal">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-5 leading-tight">Terms of Service</h1>
            <p className="text-gray-600 font-sans text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-14">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Services</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              Graylock Digital provides custom website design, development, hosting, and ongoing maintenance services for small service businesses. All services are delivered according to the plan selected by the client, as described on our Pricing page.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Payments &amp; Billing</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85] mb-4">
              Clients pay a one-time setup fee at the start of the project and a recurring monthly fee for ongoing hosting, maintenance, and support. Monthly fees are billed at the beginning of each billing cycle.
            </p>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              All prices are listed in USD. We reserve the right to adjust pricing with 30 days' notice.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">30-Day "Love It or Leave It" Guarantee</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85] mb-4">
              If your new website is live for 30 days and you genuinely don't love it, just tell us. We will refund every dollar of your setup fee — no clawbacks, no fine print, no awkward conversations. You keep the full website code, copy, and assets we built for you. We are confident enough in our work to put our money behind it, so you never have to gamble on yours.
            </p>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85] mb-4">
              For legal clarity: the guarantee covers the one-time setup fee only. Monthly fees already paid for hosting, maintenance, and support during the period the website was live and serviced are not refundable. Custom-quoted work and Custom plan engagements may have separate guarantee terms specified in writing at the time of engagement.
            </p>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              To request a refund under this guarantee, send a written request by email to <a href="mailto:hello@graylockdigital.com" className="text-orange font-semibold hover:underline">hello@graylockdigital.com</a> within 30 days of your website's launch date. You keep the website code, copy, images, and brand assets we created for you — there are no clawbacks.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Cancellation</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              All plans are month-to-month with no long-term contracts. You may cancel at any time with 30 days' written notice and no cancellation fees. Upon cancellation, we will package up all of your content and data, and transfer your domain to wherever you choose. You will need to build a new site on your new host, but you will never lose your domain authority, your content, or your brand.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Intellectual Property</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              You own your domain, your written content, your images, and your brand assets. Graylock Digital retains ownership of the code, the design framework, and the hosting infrastructure used to build and maintain your website. Upon cancellation, we package up all of your content and data, and transfer your domain to wherever you choose.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Client Responsibilities</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              Clients are responsible for providing accurate business information, timely feedback during the build process, and maintaining access to their domain registrar. Delays in providing materials or feedback may extend project timelines.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Limitation of Liability</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              Graylock Digital is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client in the preceding 12 months.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Changes to These Terms</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
              We may update these terms from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5 leading-snug">Contact Us</h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-[1.85]">
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
