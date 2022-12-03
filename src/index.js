import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "orld!! "), document.getElementById("root"));
