import "./Shop.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

{
  /* <Link to="/">
<button class="euka">Euka.</button>
</Link> */
}

function Shop() {
  return (
    <>
      <Nav />
      <div class="shop-shoes">Mens shoes</div>
      <div class="shop-outer">
        <div class="row-one row">
          <Link to="/Checkout">
            <div class="row-one-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-five box"></div>
          </Link>
        </div>
        <div class="row-two row">
          <Link to="/Checkout">
            <div class="row-two-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-five box"></div>
          </Link>
        </div>
        <div class="row-three row">
          <Link to="/Checkout">
            <div class="row-three-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-five box"></div>
          </Link>
        </div>
        <div class="row-four row">
          <Link to="/Checkout">
            <div class="row-four-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-five box"></div>
          </Link>
        </div>
      </div>
      <div class="shop-shoes">Womens shoes</div>
      <div class="shop-outer">
        <div class="row-one row">
          <Link to="/Checkout">
            <div class="row-one-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-one-item-five box"></div>
          </Link>
        </div>
        <div class="row-two row">
          <Link to="/Checkout">
            <div class="row-two-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-two-item-five box"></div>
          </Link>
        </div>
        <div class="row-three row">
          <Link to="/Checkout">
            <div class="row-three-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-three-item-five box"></div>
          </Link>
        </div>
        <div class="row-four row">
          <Link to="/Checkout">
            <div class="row-four-item-one box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-two box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-three box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-four box"></div>
          </Link>
          <Link to="/Checkout">
            <div class="row-four-item-five box"></div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Shop;
