import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyles } from "./style/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>
);