import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>Wouldn't you like to know? I bet you would.</p>
    <img src={image}alt="I made this" />
  </div>
  )
}

export default About;
