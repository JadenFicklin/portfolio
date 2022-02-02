import "./Shoecare.css";
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
      <div className="shoecare-outer">
        <div className="shoecare-span-image">
          <div className="shoecare-image-span-text">Shoecare Solutions</div>
        </div>
        <div className="shoecare-text-outer">
          <div className="shoecare-text-one"></div>
          <div className="shoecare-text-two"></div>
        </div>
        <div className="shoecare-bottom-outer">
          <div className="shoecare-bottom-left-picture"></div>
          <div className="shoecare-bottom-right-container-outer">
            <div className="shoecare-bottom-right-containers-text">
              <div className="shoecare-text-bottom"></div>
            </div>
            <div className="shoecare-bottom-right-containers-bottom-left-picture"></div>
            <div className="shoecare-bottom-right-containers-bottom-right-picture"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoecare;
