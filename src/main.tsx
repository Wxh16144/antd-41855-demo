import React from "react";
import ReactDOM from "react-dom/client";
import { App as AntdApp, ConfigProvider } from "antd";
import EscapeAntd from "./shared/EscapeAntd";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider theme={{}}>
    <AntdApp>
      <EscapeAntd />
      <App />
    </AntdApp>
  </ConfigProvider>
);
