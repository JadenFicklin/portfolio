import "./About.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div>this is the about page</div>
      <div className="span-image"></div>
    </>
  );
}

export default About;
