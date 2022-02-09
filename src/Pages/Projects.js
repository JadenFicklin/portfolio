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
      <div>This is the projects page</div>
    </>
  );
}

export default Projects;
