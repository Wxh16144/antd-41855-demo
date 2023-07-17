import React from "react";
import ReactDOM from "react-dom/client";
import { App as AntdApp, ConfigProvider } from "antd";
import {
  StyleProvider,
  px2remTransformer,
  legacyLogicalPropertiesTransformer
} from '@ant-design/cssinjs';
import EscapeAntd from "./shared/EscapeAntd";
import App from "./App";
import "./index.css";

const px2rem = px2remTransformer({
  rootValue: 8, // 32px = 1rem; @default 16
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StyleProvider transformers={[px2rem, legacyLogicalPropertiesTransformer]}>
    <ConfigProvider theme={{}}>
      <AntdApp>
        <EscapeAntd />
        <App />
      </AntdApp>
    </ConfigProvider>
  </StyleProvider>
);
