import React from "react";
import FadeIn from "./FramerAnimation/FadeIn";

const About = () => {
  return (
    <>
      <FadeIn y={40} delay={0}>
        <div>About Us</div>
      </FadeIn>
    </>
  );
};

export default About;
