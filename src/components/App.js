// import "../shared.scss";
// import "./App.scss";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Router, Route, Redirect } from "react-router-dom";
import history from "../history";

import AuthenticatedRoute from "../routeWrappers/AuthenticatedRoute";
import UnauthenticatedRoute from "../routeWrappers/UnauthenticatedRoute";
import AuthLoader from "./UIComponents/AuthLoader/AuthLoader";

// import {} from "./AppContext";
// import { loadUser } from "../flux/actions/authActions";
// import * as constants from "../utils/constants.js";

export const App = (props) => {
  //note: add chat for logged in users
  return <div id="app-outer-container" data-test="component-app"></div>;
};

export default App;
/*
const mapStateToProps = (state) => ({
  isLoadingUser: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user.info,
});
*/
// export default connect(mapStateToProps, { loadUser })(App);

// eventually put this at the top of the component
/*
const { DESKTOP_WIDTH, DESKTOP_HEIGHT } = constants;
const [isDesktopWidth, setIsDesktopWidth] = useState(
  window.innerWidth >= DESKTOP_WIDTH
);
const [isDesktopHeight, setIsDesktopHeight] = useState(
  window.innerHeight >= DESKTOP_HEIGHT
);

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
    console.log("no desktop height");
  }
};



useEffect(() => {
  props.loadUser();
  window.addEventListener("resize", handleResize);
  handleResize();
  // cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
*/

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
