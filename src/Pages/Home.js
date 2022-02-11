import "./Home.css";
import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [buttonText, setButtonText] = useState("SEE MY WORK");
  const [position, setPosition] = useState({
    position: "absolute",
    left: "100%",
    opacity: "0%",
  });

  //function
  function projectsPosition() {
    setPosition({
      position: "absolute",
      left: "865px",
      opacity: "100%",
    });
    setButtonText("CONTACT");
  }

  return (
    <>
      {/* <Nav light={true} /> */}
      <div className="home-outer">
        <div className="home-left-outer">
          <div className="home-first-name">
            <span className="jaden">JADEN</span>
          </div>
          <div className="home-last-name">
            <span className="ficklin">FICKLIN</span>
          </div>
          <div className="about-me-header">// ABOUT ME</div>
          <div className="about-me-paragraph-one">
            I'm a website developer based in Ogden, Utah. Looking for an
            entry-level front-end position.
          </div>
          <div className="about-me-paragraph-two">( open to remote work )</div>
        </div>
        <div className="home-right-outer"></div>
        <div className="home-right-outer-projects" style={position}>
          <div className="project-one"></div>
        </div>
        <div className="home-right-outer-contact"></div>
        <div className="home-right-outer-about"></div>

        <button className="home-see-work" onClick={() => projectsPosition()}>
          {buttonText}
        </button>

        {/* <button className="contact-info-button">CONTACT</button> */}

        <div className="home-bottom-outer">
          <div className="html-logo"></div>
          <div className="html-nodejs">Node JS</div>
          <div className="react-logo"></div>
          <div className="react-text">REACT</div>
        </div>
        {/* <div className="circle-one"></div> */}
        {/* <div className="circle-two"></div> */}
      </div>
    </>
  );
}

export default Home;
