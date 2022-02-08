import "./Checkout.css";
import React, { useState } from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getShoe() {
    axios.get(`http://localhost:4000/api/houses/${id}`).then(function (res) {
      setShoe(res.data);
    });
  }

  useEffect(() => {
    getShoe();
  }, []);

  const { id } = useParams();
  const [shoe, setShoe] = useState({});

  return (
    <>
      <Nav />
      <div className="checkout-outer">
        <div className="checkout-outer-four-images-container">
          <div
            className="checkout-image-one checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageOne})` }}
          ></div>
          <div
            className="checkout-image-two checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageTwo})` }}
          ></div>
          <div
            className="checkout-image-three checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageThree})` }}
          ></div>
          <div
            className="checkout-image-four checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageFour})` }}
          ></div>
        </div>
        <div className="checkout-outer-input">
          <div className="checkout-item-info">
            Metal-free tanned leather LT 01 Desert Taupe $149
          </div>
          <div className="checkout-size"></div>
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
