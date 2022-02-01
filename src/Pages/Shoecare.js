import "./Shoecare.css";
import React from "react";
import Nav from "./Nav";

function Shoecare() {
  return (
    <>
      <Nav />
      <div class="shoecare-outer">
        <div class="shoecare-outer-four-images-container">
          <div class="shoecare-image-one shoecare-shoe"></div>
          <div class="shoecare-image-two shoecare-shoe"></div>
          <div class="shoecare-image-three shoecare-shoe"></div>
          <div class="shoecare-image-four shoecare-shoe"></div>
        </div>
        <div class="shoecare-outer-input">
          <div class="shoecare-item-info">
            Metal-free tanned leather LT 01 Desert Taupe $149
          </div>
          <div class="shoecare-size">
            {/* <input type="text">
              <datalist id="shoe-size">
                <option value="size 1"></option>
                <option value="size 2"></option>
                <option value="size 3"></option>
                <option value="size 4"></option>
              </datalist>
            </input> */}
          </div>
          <input
            type="text"
            class="shoecare-input-box email"
            value="Email"
          ></input>
          <input
            type="text"
            class="shoecare-input-box first-name"
            value="First name"
          ></input>
          <input
            type="text"
            class="shoecare-input-box last-name"
            value="Last name"
          ></input>
          <input
            type="text"
            class="shoecare-input-box address"
            value="Address"
          ></input>
          <input
            type="text"
            class="shoecare-input-box city"
            value="City"
          ></input>
          <input
            type="text"
            class="shoecare-input-box country"
            value="Country"
          ></input>
          <input
            type="text"
            class="shoecare-input-box state"
            value="State"
          ></input>
          <input
            type="text"
            class="shoecare-input-box zip"
            value="ZIP code"
          ></input>
          <input
            type="text"
            class="shoecare-input-box phone"
            value="Phone"
          ></input>
          <button class="shoecare-checkout-button"></button>
        </div>
      </div>
    </>
  );
}

export default Shoecare;
