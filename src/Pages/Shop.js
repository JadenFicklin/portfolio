import "./Shop.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getButton() {
    axios.get("http://localhost:4000/api/houses").then(function (res) {
      for (let i = 0; i < res.data.length; i++) {
        document.createElement("div").className("box");
        //add inner HTML with src of res.data[i].imageOne
      }
    });
  }

  return (
    <>
      <Nav />
      <section></section>
      <button onClick={getButton} className="get-database">
        get database in console log
      </button>
      <div className="shop-shoes">Mens shoes</div>
      <div className="shop-outer">
        <div className="row-one row">
          <Link to="/Checkout">
            <div className="row-one-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-five box"></div>
          </Link>
        </div>
        <div className="row-two row">
          <Link to="/Checkout">
            <div className="row-two-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-five box"></div>
          </Link>
        </div>
        <div className="row-three row">
          <Link to="/Checkout">
            <div className="row-three-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-five box"></div>
          </Link>
        </div>
        <div className="row-four row">
          <Link to="/Checkout">
            <div className="row-four-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-five box"></div>
          </Link>
        </div>
      </div>
      <div className="shop-shoes">Womens shoes</div>
      <div className="shop-outer">
        <div className="row-one row">
          <Link to="/Checkout">
            <div className="row-one-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-one-item-five box"></div>
          </Link>
        </div>
        <div className="row-two row">
          <Link to="/Checkout">
            <div className="row-two-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-two-item-five box"></div>
          </Link>
        </div>
        <div className="row-three row">
          <Link to="/Checkout">
            <div className="row-three-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-three-item-five box"></div>
          </Link>
        </div>
        <div className="row-four row">
          <Link to="/Checkout">
            <div className="row-four-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div className="row-four-item-five box"></div>
          </Link>
        </div>
      </div>
    </>
  );
}
// export default withRouter(ScrollToTop);
export default Shop;
