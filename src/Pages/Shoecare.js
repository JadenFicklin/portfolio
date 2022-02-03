import "./Shoecare.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";

function Shoecare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="shoecare-outer">
        <div className="shoecare-span-image">
          <div className="shoecare-image-span-text">Shoecare Solutions</div>
        </div>
        <div className="shoecare-text-outer">
          <div className="shoecare-text-one">
            <p className="shoecare-text-header">
              At Euka, everything we do is meant to last.
            </p>
            <p className="shoecare-text-one-paragraph">
              Our products last, our designs last, our relationships last. That
              consistency is the one thing that we’re most proud of. We stand
              behind everything we make. But note that our products require care
              if they are going to be used the way they are intended. Our items
              will last even longer if you take good care of them.
            </p>
          </div>
          <div className="shoecare-text-two">
            <p>
              That’s why we have developed a complete shoe care range with
              SneakerLAB®, a premium supplier of eco friendly and effective
              cleaning formulas. Hence its harmless ingredients, their product
              is fully biodegradable and does not damage the natural features of
              leather, rubber and textile.
            </p>
          </div>
        </div>
        <div className="shoecare-bottom-outer">
          <div className="shoecare-bottom-left-picture"></div>
          <div className="shoecare-bottom-right-container-outer">
            <div className="shoecare-bottom-right-containers-text">
              <div className="shoecare-text-bottom">
                <p calssName="shoecare-text-bottom-header">
                  Harmless yet effective
                </p>
                <p className="shoecare-text-bottom-paragraph">
                  Explore our natural shoe care solutions with SneakerLAB®
                </p>
              </div>
            </div>
            <div className="shoecare-bottom-right-containers-bottom-left-picture"></div>
            <div className="shoecare-bottom-right-containers-bottom-right-picture"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoecare;
