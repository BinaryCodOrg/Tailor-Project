import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { ConfigProvider, notification } from "antd";
import { HashRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      notify={notification}
      theme={{
        token: {
          /* here is your global tokens */
          colorPrimary: "#0d4e4e",
        },
      }}
    >
      <RecoilRoot>
        <HashRouter>
          <App />
        </HashRouter>
      </RecoilRoot>
    </ConfigProvider>
  </StrictMode>,
);
