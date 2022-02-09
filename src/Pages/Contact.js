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
      <Nav />
      <div>this is the Contact page</div>
    </>
  );
}

export default Shoecare;
