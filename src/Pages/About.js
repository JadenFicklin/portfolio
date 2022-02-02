import "./About.css";
import React from "react";
import Nav from "./Nav";

function About() {
  return (
    <>
      <Nav />
      <div class="about-outer">
        <div class="about-span-image">
          <div class="about-image-span-text">Our Journey explained</div>
        </div>
        <div class="about-text-one-outer">
          <div class="about-text-one">
            text goes here <br></br>
            <br></br>Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div class="about-pictures-one-and-two-outer">
          <div class="about-picture-one"></div>
          <div class="about-picture-two"></div>
        </div>
        <div class="about-pictures-three-and-four-outer">
          <div class="about-picture-three">
            <div class="about-inner-picture-three"></div>
          </div>
          <div class="about-picture-four"></div>
        </div>
        <div class="about-text-two-outer">
          <div class="about-text-two">
            <span class="fashion">It’s not fashion. It’s design.</span>
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
        <div class="about-picture-five"></div>
        <div class="about-pictures-six-and-seven-outer">
          <div class="about-picture-six">
            <div class="about-picture-six-inner"></div>
          </div>
          <div class="about-picture-seven"></div>
        </div>
        <div class="locations-text">Locations</div>
        <div class="locations-picture"></div>
        <div class="locations-lower-text-outer">
          <div class="locations-lower-text-inner">
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
