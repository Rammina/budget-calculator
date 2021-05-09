import "./Auth.scss";

import React from "react";

const Auth = () => {
  return (
    <div className="auth page-container">
      <h1 className="heading-title">May's Budget Calculator</h1>
      {props.children}
    </div>
  );
};

export default Auth;
