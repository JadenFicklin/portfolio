import React from "react";
import { useNavigate } from "react-router-dom";

function Shoecare() {
  let navigate = useNavigate();
  return (
    <div>
      THIS IS THE SHOECARE PAGE
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Change to about page
      </button>
    </div>
  );
}

export default Shoecare;
