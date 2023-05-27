import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="aboutme" id="about">
      <h1 className="aboutme_title">About Me</h1>
      <div className="aboutme_content">
        <motion.div
          animate={{ x: 100, scale: 1 }}
          initial={{ scale: 0 }}
          className="aboutme_img"
        ></motion.div>
        <div className="aboutme_text">
          <p className="aboutme_description">
            I'm a freontend web developer.I'mn a Computer Science undergraduate
            at IIIT Sonipat. I invite you to explore my projects and
            experiences, and I hope you find inspiration and insight into my
            journey. Thank you for visiting, and enjoy your exploration!
          </p>
          <button className="aboutme_cv">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
