import "./Home.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollPosition = useScrollPosition();

  const imageChangeStyling = { marginTop: "200px", opacity: "0%" };
  const imageStaticStyling = { marginTop: "0px", opacity: "100%" };

  const imageStyling =
    scrollPosition < 500 ? imageChangeStyling : imageStaticStyling;

  return (
    <>
      <Nav light={true} />
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
        <Link to="/Projects">
          <button className="home-see-work">SEE MY WORK</button>
        </Link>
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
