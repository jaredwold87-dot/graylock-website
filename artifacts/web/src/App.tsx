import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout/Layout";
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
import SmallBusinessOwners from "@/pages/industries/SmallBusinessOwners";
import Contractors from "@/pages/industries/Contractors";
import SoloPractitioners from "@/pages/industries/SoloPractitioners";
import GroupPractices from "@/pages/industries/GroupPractices";
import AccountantsIndustry from "@/pages/industries/Accountants";
import LawyersIndustry from "@/pages/industries/Lawyers";
import HouseCleaners from "@/pages/industries/HouseCleaners";
import DogGroomers from "@/pages/industries/DogGroomers";
import OurStrategy from "@/pages/strategy/OurStrategy";
import WebsiteDesign from "@/pages/strategy/WebsiteDesign";
import SEOPage from "@/pages/strategy/SEO";
import GEOPage from "@/pages/strategy/GEO";
import FunnelPagesPage from "@/pages/strategy/FunnelPages";
import GoogleBusinessProfilePage from "@/pages/strategy/GoogleBusinessProfile";
import LeadGenerationPage from "@/pages/strategy/LeadGeneration";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
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
      <Route path="/websites-for-small-business-owners" component={SmallBusinessOwners} />
      <Route path="/websites-for-contractors" component={Contractors} />
      <Route path="/websites-for-solo-practitioners" component={SoloPractitioners} />
      <Route path="/websites-for-group-practices" component={GroupPractices} />
      <Route path="/websites-for-accountants" component={AccountantsIndustry} />
      <Route path="/websites-for-lawyers" component={LawyersIndustry} />
      <Route path="/websites-for-house-cleaners" component={HouseCleaners} />
      <Route path="/websites-for-dog-groomers" component={DogGroomers} />
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

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <Layout>
              <Router />
            </Layout>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
