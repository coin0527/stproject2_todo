import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Login } from "./Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
    <Router />
  </React.StrictMode>
);
