import React from "react";
import NewOrder from "../Components/NewOrder/NewOrder";
import SubscriptionSection from "../Components/Billing Packages/SubscriptionSection";
import FaqSection from "../Components/FAQSection/FaqSection";
import HelpSection from "../Components/Help/HelpSection";
import DashBoard from "../Components/Landing/DashBoard";
// import WebLandingPage from "../Components/Website/WebLandingPage";

const Language = {
  Pages: [
    // {
    //   route: "/",
    //   component: <WebLandingPage />,
    //   condition: (CRObject) => false,
    // },
    {
      route: "/dashboard",
      component: <DashBoard />,
      condition: (CRObject) => false,
    },
    {
      route: "/orders/new/*",
      component: <NewOrder />,
      condition: (CRObject) => false,
    },
    {
      route: "/subscriptions",
      component: <SubscriptionSection />,
      condition: (CRObject) => false,
    },
    {
      route: "/faq-section",
      component: <FaqSection />,
      condition: (CRObject) => false,
    },
    {
      route: "/help",
      component: <HelpSection />,
      condition: (CRObject) => false,
    },
  ],
};

export default Language;
