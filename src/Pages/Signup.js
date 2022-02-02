import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import "./Signup.css";

function Signup() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="signup-outer">
        <div className="signup-left-side">
          <div className="signup-left-side-border"></div>
        </div>
        <div className="signup-right-side">
          <div className="signup-create-account-text">Create Account</div>
          <div className="signup-info-outer">
            <div className="signup-first-name-text"></div>
            <div className="signup-first-name-text"></div>
            <input className="signup-first-name-box" type="text"></input>
            <input className="signup-last-name-box" type="text"></input>
            <div className="signup-birthday-text"></div>
            <input className="signup-birthday-box" type="text"></input>
            <div className="signup-email-text"></div>
            <div className="signup-password-text"></div>
            <input className="singup-email-box" type="text"></input>
            <input className="singup-password-box" type="text"></input>
          </div>
          <div className="signup-bottom">
            <div className="signup-already-have-account"></div>
            <div className="signup-create-account"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
