import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { configure } from "mobx";

import "./index.css";
import App from "./App";

configure({
  enforceActions: "never",
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
