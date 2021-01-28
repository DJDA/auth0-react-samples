import React from "react";
import ReactDOM from "react-dom";
import * as R from 'ramda'
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import leagueb2bconfig from "./configs/auth_config_leagueb2b";
import leagueb2bconfigunstyled from "./configs/auth_config_leagueb2bunstyled";
import pcidconfig from "./configs/auth_config_pcid";
import history from "./utils/history";

const configs = [leagueb2bconfig, leagueb2bconfigunstyled, pcidconfig];

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = (() => {
  const appConfig = R.find(
    R.propEq("appHostname", window.location.hostname),
    configs
  );
  if (!appConfig) {
    console.log(
      "hostname match not found in configs - defaulting to leagueb2bconfig"
    );
    return leagueb2bconfig;
  }
  return appConfig;
})();

document.title = config.appTitle

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    audience={config.audience}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    useRefreshTokens={config.useRefreshTokens}
    cacheLocation={config.cacheLocation}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
