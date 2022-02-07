import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="login-outer">
        <div className="login-top-bar"></div>
        <div className="login-left-side">
          <div className="login-left-side-border"></div>
        </div>
        <div className="login-right-side">
          <div className="login-create-account-text">Create Account</div>
          <div className="login-info-outer">
            <div className="login-email-text">Username</div>
            <div className="login-password-text">Password</div>
            <input
              className="login-email-box"
              type="text"
              placeholder="username"
            ></input>
            <input
              className="login-password-box"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="login-bottom">
            <Link to="/Signup">
              <div className="login-already-have-account">
                I don't have an account
              </div>
            </Link>
            <div className="login-create-account">Login</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
