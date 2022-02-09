import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

function Nav({ light }) {
  const scrollPosition = useScrollPosition();
  const isScrolling = scrollPosition > 0;

  const staticStyling = { color: light ? "white" : "#404040" };
  const scrollStyling = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  };

  const navStyling = isScrolling ? scrollStyling : staticStyling;

  return (
    <div className="nav" style={navStyling}>
      <div className="nav-first">
        <Link to="/">
          <button className="home">Home</button>
        </Link>
        {/* projects */}
        <div className="links-second">
          <Link to="/Projects">
            <button className="projects">Projects</button>
          </Link>
          {/* Shoecare */}
          <Link to="/Contact">
            <button className="contact">Contact</button>
          </Link>
          <Link to="/About">
            <button className="about-link">About</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
