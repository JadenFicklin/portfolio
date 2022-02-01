import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  return (
    <div class="nav">
      <div class="nav-first">
        {/* euka */}
        <button
          class="euka"
          onClick={() => {
            navigate("/");
          }}
        >
          Euka.
        </button>
        {/* Shop */}
        <button
          class="shop"
          onClick={() => {
            navigate("/Shop");
          }}
        >
          Shop
        </button>
        {/* Shoecare */}
        <button
          class="shoecare"
          onClick={() => {
            navigate("/Shoecare");
          }}
        >
          Shoecare
        </button>
      </div>
      <div class="nav-last">
        {/* Signup */}
        <button
          class="sign-up"
          onClick={() => {
            navigate("/Signup");
          }}
        >
          sign up
        </button>
        {/* Login */}
        <button
          class="login"
          onClick={() => {
            navigate("/Login");
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default Nav;
