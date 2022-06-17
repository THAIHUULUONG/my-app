import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

const serverKey = 'https://hc8qdo89lsyd.usemoralis.com:2053/server';
const idKey = '6alrQBbyh2HlHhtrpmmdxzBEWJxfZ4XfZ6TV0a0Q';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverKey} appId={idKey}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);