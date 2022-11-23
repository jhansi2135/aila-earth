import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = "";

export function Google() {
  const [showlogin, setShowlogin] = useState(true);
  const [showlogout, setShowlogout] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowlogin(false);
    setShowlogout(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowlogin(true);
    setShowlogout(false);
  };

  return (
    <div className="signin">
      {showlogin ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogout ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
