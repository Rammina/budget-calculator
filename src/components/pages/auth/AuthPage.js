import "./AuthPage.scss";

import React from "react";

const AuthPage = () => {
  return (
    <div className="auth-page page-container">
      <h1 className="heading-title">May's Budget Calculator</h1>
      {props.children}
    </div>
  );
};

export default AuthPage;
