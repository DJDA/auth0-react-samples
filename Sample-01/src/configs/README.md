# Config Explainer

Example config:
```
module.exports = {
  // this is the custom domain for the Auth0 hosted login page the React app redirects to  
  domain: "accounts.staging.league.dev",

  // this is the React app's hostname.  I'm using Ngrok - but you could also use a local DNS spoof.  We switch configs based on this hostname.
  appHostname: "leaguepciddemo.ngrok.io",

  // this is what displays in the title bar for this config
  appTitle: "PC Health",

  // the Auth0 client ID we use when we redirect to the login page
  clientId: "wyvslER2Zn1YP3xyImRmAzCFyzqkfHLd",

  // store tokens in local storage - details here: https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options
  cacheLocation: "localstorage",

  // use rotating refresh tokens and PKCE - details here: https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options
  useRefreshTokens: true,
};
```