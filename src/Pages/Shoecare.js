import "./Shoecare.css";
import React from "react";
import Nav from "./Nav";

function Shoecare() {
  return (
    <>
      <Nav />
      <div class="shoecare-outer">
        <div class="shoecare-span-image">
          <div class="shoecare-image-span-text">Shoecare Solutions</div>
        </div>
        <div class="shoecare-text-outer">
          <div class="shoecare-text-one"></div>
          <div class="shoecare-text-two"></div>
        </div>
        <div class="shoecare-bottom-outer">
          <div class="shoecare-bottom-left-picture"></div>
          <div class="shoecare-bottom-right-container-outer">
            <div class="shoecare-bottom-right-containers-text">
              <div class="shoecare-text-bottom"></div>
            </div>
            <div class="shoecare-bottom-right-containers-bottom-left-picture"></div>
            <div class="shoecare-bottom-right-containers-bottom-right-picture"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoecare;
