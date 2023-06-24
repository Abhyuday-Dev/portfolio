import React,{useEffect} from 'react'
import ProjectCard from './ProjectCard';
import "./Project.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ProjectInfo=[
  {
    key:1,
    name:"Weather App",
    description:"A React.js weather web app using OpenWeatherMap API: Get real-time weather information with a responsive and intuitive interface.",
    src:"https://cdn.icon-icons.com/icons2/1514/PNG/512/cloudyraindayweathersymbol_104974.png"
  },
  {
    key:2,
    name:"DALL-E Clone",
    description:"DALL-E is an advanced AI model developed by OpenAI that generates images from textual descriptions.",
    src:"https://www.magnolia-cms.com/dam/jcr:606b86b7-cb7b-48d3-8325-741d0c212162/openai-logo-black_transparent.png"
  },
  {
    key:3,
    name:"Expense Tracker",
    description:"An expense tracker developed using React.js provides users with a practical tool to monitor their financial activities",
    src:"https://cdn-icons-png.flaticon.com/512/3176/3176833.png"
  },
]

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
      {ProjectInfo.map((item)=>{
        return <ProjectCard name={item.name} src={item.src} description={item.description} />
      })}
      </motion.div>
    </section>
  )
}

export default Project