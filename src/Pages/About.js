import "./About.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav light={true} />
      <div className="about-outer">
        <div className="about-span-image">
          <div className="about-image-span-text">Our Journey explained</div>
        </div>
        <div className="about-text-one-outer">
          <div className="about-text-one">
            text goes here <br></br>
            <br></br>Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className="about-pictures-one-and-two-outer">
          <div className="about-picture-one"></div>
          <div className="about-picture-two"></div>
        </div>
        <div className="about-pictures-three-and-four-outer">
          <div className="about-picture-three">
            <div className="about-inner-picture-three"></div>
          </div>
          <div className="about-picture-four"></div>
        </div>
        <div className="about-text-two-outer">
          <div className="about-text-two">
            <span className="fashion">It’s not fashion. It’s design.</span>
            <br></br>
            <br></br>The difference between the two, for us, is about change
            versus improvement. Being just different is very simple. Being
            better is difficult, but far more valuable. It’s a constant journey
            to perfection, always questioning our previous wins, always aiming
            to do it better next time. We focus on comfort, durability and
            sustainability; the main pillars in our search for the ultimate
            everyday-sneakers.
          </div>
        </div>
        <div className="about-picture-five"></div>
        <div className="about-pictures-six-and-seven-outer">
          <div className="about-picture-six">
            <div className="about-picture-six-inner"></div>
          </div>
          <div className="about-picture-seven"></div>
        </div>
        <div className="locations-text">Locations</div>
        <div className="locations-picture"></div>
        <div className="locations-lower-text-outer">
          <div className="locations-lower-text-inner">
            Address:<br></br>
            <br></br>
            Fusio Ltd <br></br>
            26 Great Strand Street<br></br>
            Dublin<br></br>
            D01 R3P6<br></br>
            Ireland<br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
