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
      <Nav light={true} />
      <div className="outer">
        <div className="contact-outer-left">
          <div className="contact-text-one">Email:</div>
          <div className="contact-text-two">JadendFicklin@gmail.com</div>
          <a
            href="https://github.com/JadenFicklin"
            target="_blank"
            className="contact-text-three"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
            target="_blank"
            className="contact-text-four"
          >
            Linkdin
          </a>
          <div className="contact-text-five"></div>
          <div className="contact-text-six"></div>
          <div className="contact-text-seven"></div>
          <div className="contact-text-eight"></div>
          <div className="contact-text-nine"></div>
          <div className="contact-text-ten"></div>
        </div>
        <div className="contact-outer-right"></div>
      </div>
    </>
  );
}

export default About;
