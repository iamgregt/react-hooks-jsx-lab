import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
      <p>This is just to test</p>
      <img src={image} alt="I made this" title="Hey" />
  </div>;
}

export default About;
