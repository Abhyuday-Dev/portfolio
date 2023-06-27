import React, { useEffect } from 'react';
import './Skills.css';
import Data from './skillData.js';
import SkillContainer from './skillContainer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration:1.2
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

const Skills = () => {
  const containerAnimation = useAnimation();
  const imgAnimation = useAnimation();
  const [titleRef, titleInView] = useInView();

  useEffect(() => {
    if (titleInView) {
      containerAnimation.start('visible');
      imgAnimation.start({
        scale: 1,
        opacity: 1,
        transition: { type: 'spring', duration: 2 },
      });
    } else {
      containerAnimation.start('hidden');
      imgAnimation.start({
        scale: 0.6,
        opacity: 0.5,
      });
    }
  }, [containerAnimation, imgAnimation, titleInView]);

  return (
    <motion.section className="skills" id="skills" ref={titleRef}>
      <motion.h1
        className="skills_title"
        animate={imgAnimation}
        initial={{ scale: 0.6, opacity: 0.5 }}
        
      >
        My Skills
      </motion.h1>
      <div className="skills_content">
        <motion.div
          className="skills_container"
          variants={container}
          animate={containerAnimation}
          initial="hidden"
        >
          {Data.map((skill) => (
            <motion.div key={skill.key} variants={item}>
              <SkillContainer name={skill.name} src={skill.src} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
