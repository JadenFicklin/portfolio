import "./Projects.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav light={true} />
      <div className="projects-outer">
        <div className="projects-left-outer">
          <div className="text-one-header">Project 1</div>
          <div className="text-one">
            Euka is an ecommerse website designed to sell shoes created as my
            capstone project after the 8 week mark in DevMountain
          </div>
          <div className="text-two">Time frame: Jan 31 - Feb 10</div>
          <div className="text-three">Tech stack: React</div>
          <div className="text-two-header">Project 2</div>
          <div className="text-three-header">Project 3</div>
        </div>
        <div className="projects-right-outer">
          {/* <div className="top-bar"></div> */}

          <div className="box-border-bar"></div>
          <div className="box-border-bar-two"></div>
          <div className="box-border-bar-three"></div>
          {/* <div className="line"></div> */}
          <div className="project-one"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
