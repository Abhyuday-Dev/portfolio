import React, { useEffect } from "react";
import "./About.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const imgAnimation = useAnimation();
  const textAnimation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { type: "spring", duration: 2 },
      });
      imgAnimation.start({
        opacity: 1,
        x: 0,
        transition: { type: "tween", duration: 1.2, delay: 0.1 },
      });
      textAnimation.start({
        opacity: 1,
        x: 0,
        transition: { type: "tween", duration: 1.2, delay: 0.1 },
      });
    } else {
      controls.start({ opacity: 0.5, scale: 0.6 });
      imgAnimation.start({ x: "-100vw" });
      textAnimation.start({ x: "100vw" });
    }
  }, [controls, imgAnimation, textAnimation, inView]);

  return (
    <section className="aboutme" id="about" ref={ref}>
      <motion.h1
        animate={controls}
        initial={{ scale: 0.6, opacity: 0.5 }}
        className="aboutme_title"
      >
        About Me
      </motion.h1>
      <div className="aboutme_content">
        <motion.div
          className="aboutme_img"
          animate={imgAnimation}
          initial={{ x: "-100vw" }}
        ></motion.div>
        <div className="aboutme_text">
          <motion.p
            className="aboutme_description"
            initial={{ x: "100vw" }}
            animate={textAnimation}
          >
            I am Abhyuday, a Computer Science undergraduate student at IIIT
            Sonepat. With a strong passion for frontend development and
            expertise in React, I specialize in crafting visually captivating
            and user-friendly web interfaces. I am actively seeking
            opportunities as a frontend developer to continue refining my skills
            and contribute to exciting projects.
          </motion.p>
          <motion.button
            initial={{ x: "100vw" }}
            animate={textAnimation}
            className="aboutme_cv"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              cursor: "pointer",
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
