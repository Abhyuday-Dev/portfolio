import React,{useEffect} from 'react'
import "./Project.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectShowCard from './ProjectShowCard';


const ProjectInfo=[
  {
    key:1,
    name:"Testimonials",
    description:"A React.js weather web app using OpenWeatherMap API: Get real-time weather information with a responsive and intuitive interface.",
    src:"https://www.aihr.com/wp-content/uploads/employee-testimonial-examples-cover.png",
    github:"https://github.com/Abhyuday-Dev/testimonial",
    site:"https://testimonials-abhyuday.vercel.app/"
  },
  {
    key:2,
    name:"Smart Forms",   
    description:"Responsive dashboard frontend:Data visualization, interactive charts, user-friendly interface, real-time insights, efficient data management.",
    src:"https://strapi.vksapp.com/uploads/what_are_smart_forms_for_8e274b53d6.jpg",
    github:"https://github.com/Abhyuday-Dev/smartforms",
    site:"https://abhyuday-smartforms.vercel.app/"
  },
  {
    key:3,
    name:"Picsa Gram",
    description:"A MERN Task Manager with CRUD functionality offers seamless management of tasks, empowering users to create, read, update, and delete tasks.",
    src:"https://media.istockphoto.com/id/1223365194/vector/hands-with-smartphones.jpg?s=612x612&w=0&k=20&c=U882QpMsgzhMQS7TeUtwSYOGMbJFjUwQ9M8OodFrSkI=",
    github:"https://github.com/Abhyuday-Dev/PicsaGram",
    site:"https://photogram-cccec.web.app/"
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
        return <ProjectShowCard name={item.name} src={item.src} description={item.description}
        github={item.github} key={item.key} site={item.site} />
      })}
      </motion.div>
    </section>
  )
}

export default Project