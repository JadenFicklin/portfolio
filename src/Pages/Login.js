import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import "./Login.css";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div>THIS IS THE LOGIN PAGE</div>
    </>
  );
}

export default Login;
