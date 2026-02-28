import { useState } from "react";

import Content from "../../assets/Content";
import dashboardTheme from "../../theme/dashboardTheme";

const LandingPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  let allRouts = Content.Pages;

  return <div style={{ background: dashboardTheme.background }}>

    
  </div>;
};

export default LandingPage;
