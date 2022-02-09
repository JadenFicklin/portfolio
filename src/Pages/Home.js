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
      <Nav />
      <div>this is the home page test</div>
    </>
  );
}

export default Home;
