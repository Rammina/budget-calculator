import "./shared.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Amplify } from "aws-amplify";
import store from "./configureStore";
import config from "./config";
import App from "./components/App";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App data-test="component-app" />
  </Provider>,
  document.getElementById("root")
);
