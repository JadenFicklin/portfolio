import "./Contact.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";

function Shoecare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav light={true} />

      <div className="outer">
        <div className="contact-outer-left"></div>
        <div className="contact-outer-right"></div>
      </div>
    </>
  );
}

export default Shoecare;
