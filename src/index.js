import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-r998x7jx.eu.auth0.com"
    clientId="03VxMv2wzQuEBcphhTacjXJurlSBxVwV"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Button
        className="antdbutton"
        type="primary"
        href="https://en.wikipedia.org/wiki/Columbidae"
        target="_blank"
      >
        MORE PIGEONS ON WIKI
      </Button>
      <App></App>
    </React.StrictMode>
    ,
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
