import "./Shop.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { buildQueries } from "@testing-library/react";

function Shop() {
  // start at to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [shoes, setShoes] = useState([]);

  function getButton() {
    axios.get("http://localhost:4000/api/houses").then(function (res) {
      setShoes(res.data);
    });
  }

  useEffect(() => {
    getButton();
  }, []);

  return (
    <>
      {/* import navigation bar */}
      <Nav />

      {/* button */}
      {/* <button onClick={getButton} className="get-database">
        get database in console log
      </button> */}

      {/* mens shoes */}
      <div className="shop-shoes">Mens shoes</div>
      <div className="shop-outer">
        {shoes.map((shoe) => (
          <Link to="/Checkout">
            <div
              className="box"
              style={{ backgroundImage: `url(${shoe.imageOne})` }}
            >
              <span>{shoe.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
// export default withRouter(ScrollToTop);
export default Shop;
