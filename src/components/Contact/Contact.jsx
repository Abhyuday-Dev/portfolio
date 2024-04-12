import React, { useEffect } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { GrLinkedin, GrTwitter } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = (props) => {
  const controls = useAnimation();
  const divAnimation = useAnimation();
  const textAnimation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { type: "spring", duration: 2 },
      });
      divAnimation.start({
        opacity: 1,
        scale: 1,
        transition: { type: "tween", duration: 2, delay: 0.1 },
      });
      textAnimation.start({
        opacity: 1,
        transition: { type: "spring", duration: 4, delay: 1 },
      });
    } else {
      controls.start({ opacity: 0.5, scale: 0.6 });
      divAnimation.start({ opacity: 0, scale: 0 });
      textAnimation.start({ opacity: 0 });
    }
  }, [controls, divAnimation, textAnimation, inView]);

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.h1
        className="skills_title"
        animate={controls}
        initial={{ scale: 0.6, opacity: 0.5 }}
      >
        Get In Touch
      </motion.h1>
      <div className="contact_content">
        <div className="contact_left">
          <a href="mailto:work.abhyuday@gmail.com">
          <motion.div
            className="email"
            animate={divAnimation}
            whileHover={{ scale: 1.1, backgroundColor: "#f6f6f6" }}
          >
            <div className="email_icon">
              <MdEmail />
            </div>
            <h4>work.abhyuday@gmail.com</h4>
          </motion.div>
          </a>
          <a href="https://www.linkedin.com/in/abhyuday-751792229/" target="_blank">
          <motion.div
            className="email"
            animate={divAnimation}
            whileHover={{ scale: 1.1, backgroundColor: "#f6f6f6" }}
          >
            <div className="email_icon">
              <GrLinkedin />
            </div>
            <h4>Abhyuday</h4>
          </motion.div>
          </a>
         <a href="https://twitter.com/Awwbhyuday" target="_blank"> <motion.div
            className="email"
            animate={divAnimation}
            whileHover={{ scale: 1.1, backgroundColor: "#f6f6f6" }}
          >
            <div className="email_icon">
              <GrTwitter />
            </div>
            <h4>@Awwbhyuday</h4>
          </motion.div></a>
        </div>
        <motion.div animate={textAnimation} className="send-btn ">
          <div className="send_content">
            <h2>Let´s Connect</h2>
            <h3>
              Feel free to reach out for collaborations or just a friendly hello
              😀
            </h3>
          </div>
          <motion.button
            className="btn"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              cursor: "pointer",
            }}
            onClick={props.onShowCard}
          >
            Send Messsage
            <span>
              <RiSendPlaneFill />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
