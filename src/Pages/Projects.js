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
      <Nav />
      <div className="projects-outer">
        <div className="projects-left-outer"></div>
        <div className="projects-right-outer"></div>
        {/* <div className="projects-bottom-outer"></div> */}
      </div>
    </>
  );
}

export default Projects;
