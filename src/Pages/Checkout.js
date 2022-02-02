import "./Checkout.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="checkout-outer">
        <div className="checkout-outer-four-images-container">
          <div className="checkout-image-one checkout-shoe"></div>
          <div className="checkout-image-two checkout-shoe"></div>
          <div className="checkout-image-three checkout-shoe"></div>
          <div className="checkout-image-four checkout-shoe"></div>
        </div>
        <div className="checkout-outer-input">
          <div className="checkout-item-info">
            Metal-free tanned leather LT 01 Desert Taupe $149
          </div>
          <div className="checkout-size">
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
            className="checkout-input-box email"
            value="Email"
          ></input>
          <input
            type="text"
            className="checkout-input-box first-name"
            value="First name"
          ></input>
          <input
            type="text"
            className="checkout-input-box last-name"
            value="Last name"
          ></input>
          <input
            type="text"
            className="checkout-input-box address"
            value="Address"
          ></input>
          <input
            type="text"
            className="checkout-input-box city"
            value="City"
          ></input>
          <input
            type="text"
            className="checkout-input-box country"
            value="Country"
          ></input>
          <input
            type="text"
            className="checkout-input-box state"
            value="State"
          ></input>
          <input
            type="text"
            className="checkout-input-box zip"
            value="ZIP code"
          ></input>
          <input
            type="text"
            className="checkout-input-box phone"
            value="Phone"
          ></input>
          <button className="checkout-checkout-button"></button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
