// import "../shared.scss";
// import "./App.scss";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Auth } from "aws-amplify";
import { authSignIn } from "../flux/actions";
import history from "../history";

import AuthenticatedRoute from "./routeWrappers/AuthenticatedRoute";
import UnauthenticatedRoute from "./routeWrappers/UnauthenticatedRoute";
// import AuthLoader from "./UIComponents/AuthLoader/AuthLoader";

// to be used later
// import {} from "./AppContext";
import * as constants from "../utils/constants.js";

export const App = (props) => {
  // AWS amplify/auth + GoogleAuth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authSignInChecked, setAuthSignInChecked] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(
    true
  ); /*it's going to load authenticate initially*/
  // screen dimension
  const { DESKTOP_WIDTH, DESKTOP_HEIGHT } = constants;
  const [isDesktopWidth, setIsDesktopWidth] = useState(
    window.innerWidth >= DESKTOP_WIDTH
  );
  const [isDesktopHeight, setIsDesktopHeight] = useState(
    window.innerHeight >= DESKTOP_HEIGHT
  );

  // change state when swapping between desktop width and height
  const handleResize = () => {
    if (window.innerWidth >= DESKTOP_WIDTH) {
      setIsDesktopWidth(true);
      console.log("desktop with");
    } else {
      setIsDesktopWidth(false);
      console.log("not desktop with");
    }
    if (window.innerHeight >= DESKTOP_HEIGHT) {
      setIsDesktopHeight(true);
      console.log("desktop height");
    } else {
      setIsDesktopHeight(false);
      console.log("not desktop height");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onLoadAuthSetup = async () => {
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      const userId = attributes.sub;
      props.authSignIn({ userId, authMethod: "cognito" });
    } catch (e) {
      if (e !== "No current user") {
        console.log(e);
      }
    }
    setIsAuthenticating(false);
  };

  useEffect(() => {
    // always try to sign in the user to Cognito when rendering the application the first time
    onLoadAuthSetup();
    /*return () => {}*/
  }, []);

  return <div id="app-outer-container" data-test="component-app"></div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { authSignIn })(App);

/*
const mapStateToProps = (state) => ({
  isLoadingUser: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user.info,
});
*/
// export default connect(mapStateToProps, { loadUser })(App);

// router
/*
<Router history={history}>
  {renderAuthLoader()}
  <WindowContext.Provider value={getWindowContextValue()}>
    <Route path="/" exact>
      <Redirect to={props.isAuthenticated ? `/home` : "/auth/login"} />
    </Route>
    <UnauthenticatedRoute path="/auth/register" exact>
      <Register />
    </UnauthenticatedRoute>
    <UnauthenticatedRoute path="/auth/login" exact>
      <Login />
    </UnauthenticatedRoute>

    <AuthenticatedRoute path="/home" exact>
      <Home />
    </AuthenticatedRoute>
  </WindowContext.Provider>
</Router>
*/
