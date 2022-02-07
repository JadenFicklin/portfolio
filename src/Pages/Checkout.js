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
            placeholder="Email"
          ></input>
          <input
            type="text"
            className="checkout-input-box first-name"
            placeholder="First name"
          ></input>
          <input
            type="text"
            className="checkout-input-box last-name"
            placeholder="Last name"
          ></input>
          <input
            type="text"
            className="checkout-input-box address"
            placeholder="Address"
          ></input>
          <input
            type="text"
            className="checkout-input-box city"
            placeholder="City"
          ></input>
          <input
            type="text"
            className="checkout-input-box country"
            placeholder="Country"
          ></input>
          <input
            type="text"
            className="checkout-input-box state"
            placeholder="State"
          ></input>
          <input
            type="text"
            className="checkout-input-box zip"
            placeholder="ZIP code"
          ></input>
          <input
            type="text"
            className="checkout-input-box phone"
            placeholder="Phone"
          ></input>
          <button className="checkout-checkout-button"></button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
