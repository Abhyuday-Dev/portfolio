import React,{useEffect} from 'react'
import ProjectCard from './ProjectCard';
import "./Project.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Project = () => {
  const controls = useAnimation();
  const imgAnimation = useAnimation();
  const [titleRef, titleInView] = useInView();
  useEffect(() => {
    if (titleInView) {
      controls.start({
       opacity:1,
       scale:1,
        transition: {type:"tween", duration: 3,delay:0.5},
      });
   
      imgAnimation.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", duration: 2 },
      });
    }
    if (!titleInView) {
      controls.start({
        opacity:0
       });
      imgAnimation.start({
        scale: 0.5,
        opacity: 0.4,
      });
    }
  }, [ imgAnimation, titleInView]);
  return (
    <section className="project" id='project' ref={titleRef}>
      <motion.h1 className='project_title'  animate={imgAnimation}
        initial={{ scale: 0.6, opacity: 0.5 }}
        >Projects</motion.h1>
      <motion.div className="p_div" animate={controls} >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </motion.div>
    </section>
  )
}

export default Project