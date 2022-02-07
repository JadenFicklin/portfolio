import "./Shop.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { buildQueries } from "@testing-library/react";

function Shop() {
  // start at to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);

  function getButton() {
    axios.get("http://localhost:4000/api/houses").then(function (res) {
      setShoes(res.data);
    });
  }

  useEffect(() => {
    getButton();
  }, []);

  function filterShoes(filter) {
    const filteredArray = shoes.filter((shoe) => shoe.name.includes(filter));
    setShoes(filter === "" ? shoes : filteredArray);
  }

  return (
    <>
      {/* import navigation bar */}
      <Nav light={true} />

      {/* button */}
      {/* <button onClick={getButton} className="get-database">
        get database in console log
      </button> */}

      {/* mens shoes */}
      <div className="shop-span-image">
        <div className="shop-shoes">Shoes Selection</div>
      </div>
      <div className="shop-search-bar">
        <p className="shop-search-text">Search</p>
        <input
          className="shop-search-input"
          // onChange={(e) => setFilter(e.target.value)}
          onChange={(e) => filterShoes(e.target.value)}
        ></input>
      </div>
      <div className="shop-outer">
        {shoes.map((shoe) => (
          <Link to="/Checkout" key={shoe.id}>
            <div
              className="box"
              style={{ backgroundImage: `url(${shoe.imageOne})` }}
            >
              <span>{shoe.name}</span>
              <span>${shoe.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
// export default withRouter(ScrollToTop);
export default Shop;
