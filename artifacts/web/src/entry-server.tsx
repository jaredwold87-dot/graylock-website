import { renderToString } from "react-dom/server";
import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import { SiteSettingsProvider } from "@/hooks/SiteSettingsContext";

import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Pricing from "@/pages/Pricing";
import Work from "@/pages/Work";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import GetStarted from "@/pages/GetStarted";
import ContactRedirect from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import AccountantsFunnel from "@/pages/AccountantsFunnel";
import OtherServiceBusinesses from "@/pages/OtherServiceBusinesses";
import NotFound from "@/pages/not-found";

import AccountantsIndustry from "@/pages/industries/Accountants";
import Chiropractors from "@/pages/industries/Chiropractors";
import Dentists from "@/pages/industries/Dentists";
import Dermatologists from "@/pages/industries/Dermatologists";
import Ophthalmologists from "@/pages/industries/Ophthalmologists";
import Optometrists from "@/pages/industries/Optometrists";
import PhysicalTherapists from "@/pages/industries/PhysicalTherapists";
import Physicians from "@/pages/industries/Physicians";
import Psychologists from "@/pages/industries/Psychologists";
import Therapists from "@/pages/industries/Therapists";
import Veterinarians from "@/pages/industries/Veterinarians";
import IndustrialConstruction from "@/pages/industries/IndustrialConstruction";

import OurStrategy from "@/pages/strategy/OurStrategy";
import WebsiteDesign from "@/pages/strategy/WebsiteDesign";
import SEOPage from "@/pages/strategy/SEO";
import GEOPage from "@/pages/strategy/GEO";
import FunnelPagesPage from "@/pages/strategy/FunnelPages";
import GoogleBusinessProfilePage from "@/pages/strategy/GoogleBusinessProfile";
import LeadGenerationPage from "@/pages/strategy/LeadGeneration";

export { SITE_ROUTES } from "@/lib/site-routes";

function ServerRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/work" component={Work} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/get-started" component={GetStarted} />
      <Route path="/contact" component={ContactRedirect} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/accountants" component={AccountantsFunnel} />
      <Route path="/websites-for-accountants" component={AccountantsIndustry} />
      <Route path="/other-service-businesses" component={OtherServiceBusinesses} />
      <Route path="/websites-for-chiropractors" component={Chiropractors} />
      <Route path="/websites-for-dentists" component={Dentists} />
      <Route path="/websites-for-dermatologists" component={Dermatologists} />
      <Route path="/websites-for-ophthalmologists" component={Ophthalmologists} />
      <Route path="/websites-for-optometrists" component={Optometrists} />
      <Route path="/websites-for-physical-therapists" component={PhysicalTherapists} />
      <Route path="/websites-for-physicians" component={Physicians} />
      <Route path="/websites-for-psychologists" component={Psychologists} />
      <Route path="/websites-for-therapists" component={Therapists} />
      <Route path="/websites-for-veterinarians" component={Veterinarians} />
      <Route path="/websites-for-industrial-construction" component={IndustrialConstruction} />
      <Route path="/our-strategy" component={OurStrategy} />
      <Route path="/website-design" component={WebsiteDesign} />
      <Route path="/seo-for-small-business" component={SEOPage} />
      <Route path="/geo-generative-engine-optimization" component={GEOPage} />
      <Route path="/funnel-pages" component={FunnelPagesPage} />
      <Route path="/google-business-profile" component={GoogleBusinessProfilePage} />
      <Route path="/lead-generation-for-small-business" component={LeadGenerationPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />

      <Route path="/our-work">{() => <Redirect to="/work" />}</Route>
      <Route path="/strategy">{() => <Redirect to="/our-strategy" />}</Route>
      <Route path="/geo">{() => <Redirect to="/geo-generative-engine-optimization" />}</Route>
      <Route path="/terms">{() => <Redirect to="/terms-of-service" />}</Route>
      <Route path="/privacy">{() => <Redirect to="/privacy-policy" />}</Route>

      <Route component={NotFound} />
    </Switch>
  );
}

export interface RenderResult {
  html: string;
  head: string;
}

export function render(url: string): RenderResult {
  const helmetContext = {};
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } },
  });

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter ssrPath={url} base="">
            <SiteSettingsProvider>
              <Layout>
                <ServerRoutes />
              </Layout>
            </SiteSettingsProvider>
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  return { html, head: "" };
}
