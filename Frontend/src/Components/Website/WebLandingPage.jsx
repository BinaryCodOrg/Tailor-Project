import React from "react";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import PlanSupportBreakdown from "./PlanSupportBreakdown";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";
import FooterSection from "./FooterSection";
import FaqSection from "../FAQSection/FaqSection";
import SubscriptionSection from "../Billing Packages/SubscriptionSection";

const WebLandingPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <SubscriptionSection />
      <PlanSupportBreakdown />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
      <FooterSection />
    </div>
  );
};

export default WebLandingPage;
