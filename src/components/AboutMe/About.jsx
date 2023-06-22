import React, { useEffect } from "react";
import "./About.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const imgAnimation = useAnimation();
  const [titleRef, titleInView] = useInView();
  const [textRef, textInView] = useInView();

  useEffect(() => {
    if (titleInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 2 },
      });
      imgAnimation.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", duration: 2 },
      });
    }
    if (!titleInView) {
      controls.start({ opacity: 1, x: "100vw" });
      imgAnimation.start({
        scale: 0.5,
        opacity: 0.4,
      });
    }
  }, [controls, imgAnimation, titleInView]);

  useEffect(() => {
    if (textInView) {
      controls.start({
        opacity: 1,
        transition: { type: "spring", duration: 2 },
      });
    }
    if (!textInView) {
      controls.start({ opacity: 1, x: "100vw" });
    }
  }, [controls, textInView]);

  return (
    <section className="aboutme" id="about">
      <motion.h1
        animate={imgAnimation}
        ref={titleRef}
        initial={{ scale: 0.6, opacity: 0.5 }}
        className="aboutme_title"
      >
        About Me
      </motion.h1>
      <div className="aboutme_content">
        <motion.div
          className="aboutme_img"
          animate={imgAnimation}
          initial={{ scale: 0.6, opacity: 0.5 }}
        ></motion.div>
        <div className="aboutme_text">
          <motion.p
            className="aboutme_description"
            ref={textRef}
            initial={{ opacity: 1, x: "100vw" }}
            animate={controls}
          >
            I'm a frontend web developer. I'm a Computer Science undergraduate
            at IIIT Sonipat. I invite you to explore my projects and
            experiences, and I hope you find inspiration and insight into my
            journey. Thank you for visiting, and enjoy your exploration!
          </motion.p>
          <motion.button
            initial={{ opacity: 1, x: "100vw" }}
            animate={controls}
            className="aboutme_cv"
            whileHover={{
              scale:1.1,
              textShadow:"0px 0px 8px rgb(255,255,255)",
              cursor:"pointer"
            }}
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
