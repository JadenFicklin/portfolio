import "./Home.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="outer">
        {/* span image */}
        <div className="span-image">
          <div className="image-span-text">
            <span className="you-shop">Footware, made for you</span>
            <span className="eureka">
              <span className="eu">Eu</span>
              <span className="r">r</span>
              <span className="e">e</span>
              <span className="k">k</span>
              <span className="a">a</span>
            </span>
            <Link to="/Shop">
              <button className="span-button">SHOP NOW</button>
            </Link>
          </div>
        </div>

        {/* <!-- shop women, shop men, about us --> */}
        <div id="outer-shop">
          <Link to="/Shop">
            <div className="shop-women-image"></div>
          </Link>
          <div className="shop-women-text">
            Shop for Women
            <Link to="/Shop">
              <a className="shop-women-button">Shop now</a>
            </Link>
            <Link to="/Shop"></Link>
          </div>
          <Link to="/Shop">
            <div className="shop-men-image"></div>
          </Link>
          <div className="shop-men-text">
            Shop for Men
            <Link to="/Shop">
              <a className="shop-men-button">Shop now</a>
            </Link>
          </div>
          <Link to="/Shoecare">
            <div className="who-we-are-image"></div>
          </Link>
          <div className="who-we-are-text">
            Shoecare solutions
            <Link to="/Shoecare">
              <a className="who-we-are-button">Shop now</a>
            </Link>
          </div>
        </div>

        {/* <!-- our best sellers --> */}
        <div className="our-best-sellers">Our best sellers</div>
        <div className="outer-best-sellers">
          <div className="first-option-image"></div>
          <div className="second-option-image"></div>
          <div className="third-option-image"></div>
          <div id="first-option-text">
            Metal-free tanned leather <br />
            LT 01 VEGEA White <br />
            $229
          </div>
          <div className="second-option-text">
            Metal-free tanned leather <br />
            LT 01 All Black <br />
            $249
          </div>
          <div className="third-option-text">
            Metal-free tanned leather <br />
            LT 01 Court Lite White / Sand <br />
            $189
          </div>
        </div>

        {/* <!-- shoecare and locations --> */}
        <div className="outer-shoecare-locations">
          <Link to="/About">
            <div className="shoecare-image"></div>
          </Link>
          <Link to="/About">
            <div className="location-image"></div>
          </Link>
          <div className="shoecare-text">
            Who we are, our journey explained
            <Link to="/About">
              <div className="shoecare-btn">
                <a id="shoecare-button">Read</a>
              </div>
            </Link>
          </div>
          <div className="location-text">
            locations
            <div className="store-btn">
              <Link to="/About">
                <a className="find-store">Find store</a>
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- bottom of page --> */}
        <div className="outer-bottom">
          <div className="customer-care-text">
            <div className="bottom-text-header">Customer Care</div>
            <div className="bottom-text">Shipping and returns</div>
            <div className="bottom-text">Contact us</div>
            <div className="bottom-text">FAQ's</div>
            <div className="bottom-text">Size guide</div>
            <div className="bottom-text">Retailers</div>
            <div className="bottom-text">WholeSale</div>
            <div className="bottom-text">AfterPay</div>
            <div className="bottom-text">Legal & privacy</div>
          </div>
          <div className="our-world-text">
            <div className="bottom-text-header">Our World</div>
            <div className="bottom-text">About us</div>
            <div className="bottom-text">Ethics & sustainability</div>
            <div className="bottom-text">Giving back</div>
          </div>
          <div className="follow-text">
            <div className="bottom-text-header">Follow</div>
            <div className="bottom-text">Instagram</div>
            <div className="bottom-text">Facebook</div>
            <div className="bottom-text">Newsletter</div>
          </div>
        </div>

        {/* <!-- end of .outer --> */}
      </div>
    </>
  );
}

export default Home;
