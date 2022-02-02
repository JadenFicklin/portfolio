import "./Home.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav />
      <div class="outer">
        {/* span image */}
        <div class="span-image">
          <div class="image-span-text">
            <span class="you-shop">Footware, made for you</span>
            <span class="eureka">
              <span class="eu">Eu</span>
              <span class="r">r</span>
              <span class="e">e</span>
              <span class="k">k</span>
              <span class="a">a</span>
            </span>
            <Link to="/Shop">
              <button class="span-button">SHOP NOW</button>
            </Link>
          </div>
        </div>

        {/* <!-- shop women, shop men, about us --> */}
        <div id="outer-shop">
          <Link to="/Shop">
            <div class="shop-women-image"></div>
          </Link>
          <div class="shop-women-text">
            Shop for Women
            <Link to="/Shop">
              <a class="shop-women-button">Shop now</a>
            </Link>
            <Link to="/Shop"></Link>
          </div>
          <Link to="/Shop">
            <div class="shop-men-image"></div>
          </Link>
          <div class="shop-men-text">
            Shop for Men
            <Link to="/Shop">
              <a class="shop-men-button">Shop now</a>
            </Link>
          </div>
          <Link to="/Shoecare">
            <div class="who-we-are-image"></div>
          </Link>
          <div class="who-we-are-text">
            Shoecare solutions
            <Link to="/Shoecare">
              <a class="who-we-are-button">Shop now</a>
            </Link>
          </div>
        </div>

        {/* <!-- our best sellers --> */}
        <div class="our-best-sellers">Our best sellers</div>
        <div class="outer-best-sellers">
          <div class="first-option-image"></div>
          <div class="second-option-image"></div>
          <div class="third-option-image"></div>
          <div id="first-option-text">
            Metal-free tanned leather <br />
            LT 01 VEGEA White <br />
            $229
          </div>
          <div class="second-option-text">
            Metal-free tanned leather <br />
            LT 01 All Black <br />
            $249
          </div>
          <div class="third-option-text">
            Metal-free tanned leather <br />
            LT 01 Court Lite White / Sand <br />
            $189
          </div>
        </div>

        {/* <!-- shoecare and locations --> */}
        <div class="outer-shoecare-locations">
          <Link to="/About">
            <div class="shoecare-image"></div>
          </Link>
          <Link to="/About">
            <div class="location-image"></div>
          </Link>
          <div class="shoecare-text">
            Who we are, our journey explained
            <Link to="/About">
              <div class="shoecare-btn">
                <a id="shoecare-button">Read</a>
              </div>
            </Link>
          </div>
          <div class="location-text">
            locations
            <div class="store-btn">
              <Link to="/About">
                <a class="find-store">Find store</a>
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- bottom of page --> */}
        <div class="outer-bottom">
          <div class="customer-care-text">
            <div class="bottom-text-header">Customer Care</div>
            <div class="bottom-text">Shipping and returns</div>
            <div class="bottom-text">Contact us</div>
            <div class="bottom-text">FAQ's</div>
            <div class="bottom-text">Size guide</div>
            <div class="bottom-text">Retailers</div>
            <div class="bottom-text">WholeSale</div>
            <div class="bottom-text">AfterPay</div>
            <div class="bottom-text">Legal & privacy</div>
          </div>
          <div class="our-world-text">
            <div class="bottom-text-header">Our World</div>
            <div class="bottom-text">About us</div>
            <div class="bottom-text">Ethics & sustainability</div>
            <div class="bottom-text">Giving back</div>
          </div>
          <div class="follow-text">
            <div class="bottom-text-header">Follow</div>
            <div class="bottom-text">Instagram</div>
            <div class="bottom-text">Facebook</div>
            <div class="bottom-text">Newsletter</div>
          </div>
        </div>

        {/* <!-- end of .outer --> */}
      </div>
    </>
  );
}

export default Home;
