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
    //   route: "/admin/",
    //   component: <WebLandingPage />,
    //   condition: (CRObject) => false,
    // },
    {
      route: "/admin/dashboard",
      component: <DashBoard />,
      condition: (CRObject) => false,
    },
    {
      route: "/admin/orders/new/*",
      component: <NewOrder />,
      condition: (CRObject) => false,
    },
    {
      route: "/admin/subscriptions",
      component: <SubscriptionSection />,
      condition: (CRObject) => false,
    },
    {
      route: "/admin/faq-section",
      component: <FaqSection />,
      condition: (CRObject) => false,
    },
    {
      route: "/admin/help",
      component: <HelpSection />,
      condition: (CRObject) => false,
    },
  ],
};

export default Language;
