import "./Checkout.css";
import React from "react";
import Nav from "./Nav";

function Checkout() {
  return (
    <>
      <Nav />
      <div class="checkout-outer">
        <div class="checkout-outer-four-images-container">
          <div class="checkout-image-one checkout-shoe"></div>
          <div class="checkout-image-two checkout-shoe"></div>
          <div class="checkout-image-three checkout-shoe"></div>
          <div class="checkout-image-four checkout-shoe"></div>
        </div>
        <div class="checkout-outer-input">
          <div class="checkout-item-info">
            Metal-free tanned leather LT 01 Desert Taupe $149
          </div>
          <div class="checkout-size">
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
            class="checkout-input-box email"
            value="Email"
          ></input>
          <input
            type="text"
            class="checkout-input-box first-name"
            value="First name"
          ></input>
          <input
            type="text"
            class="checkout-input-box last-name"
            value="Last name"
          ></input>
          <input
            type="text"
            class="checkout-input-box address"
            value="Address"
          ></input>
          <input
            type="text"
            class="checkout-input-box city"
            value="City"
          ></input>
          <input
            type="text"
            class="checkout-input-box country"
            value="Country"
          ></input>
          <input
            type="text"
            class="checkout-input-box state"
            value="State"
          ></input>
          <input
            type="text"
            class="checkout-input-box zip"
            value="ZIP code"
          ></input>
          <input
            type="text"
            class="checkout-input-box phone"
            value="Phone"
          ></input>
          <button class="checkout-checkout-button"></button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
