import React from "react";
import "./Nav.css";
import { useNavigate, Link } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  return (
    <div class="nav">
      <div class="nav-first">
        {/* euka */}
        <Link to="/">
          <button class="euka">Euka.</button>
        </Link>
        {/* <button
          class="euka"
          onClick={() => navigate("/")}
        >
          Euka.
        </button> */}
        {/* Shop */}
        <Link to="/Shop">
          <button class="shop">Shop</button>
        </Link>
        {/* Shoecare */}
        <Link to="/Shoecare">
          <button class="shoecare">Shoecare</button>
        </Link>
      </div>
      <div class="nav-last">
        {/* Signup */}
        <Link to="/Signup">
          <button class="sign-up">sign up</button>
        </Link>
        {/* Login */}
        <Link to="/Login">
          <button class="login">login</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
