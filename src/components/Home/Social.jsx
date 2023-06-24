import React,{useEffect} from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
      duration:1.5
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Social = () => {

  const containerAnimation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      containerAnimation.start('visible');
      
    } else {
      containerAnimation.start('hidden');
    }
  }, [containerAnimation,inView]);
  return (
    <motion.div className="home_social" variants={container}
    animate={containerAnimation}
    initial="hidden" ref={ref}>
      <motion.a href="" className="home_social-icon" whileHover={{scale:1.2}} target="_blank" variants={item}>
        <BsInstagram />
      </motion.a>
      <motion.a href="https://twitter.com/Awwwbhyuday" whileHover={{scale:1.2}} className="home_social-icon" target="_blank" variants={item}>
        <FiTwitter />
      </motion.a>
      <motion.a href="https://github.com/Abhyuday-Dev" whileHover={{scale:1.2}} className="home_social-icon" target="_blank" variants={item}>
        <FiGithub />
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/abhyuday-751792229/" whileHover={{scale:1.2}} className="home_social-icon" target="_blank" variants={item}>
        <FiLinkedin />
      </motion.a>
    </motion.div>
  );
};

export default Social;
