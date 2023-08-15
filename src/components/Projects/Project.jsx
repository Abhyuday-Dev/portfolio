import React,{useEffect} from 'react'
import "./Project.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectShowCard from './ProjectShowCard';


const ProjectInfo=[
  {
    key:1,
    name:"Weather App",
    description:"A React.js weather web app using OpenWeatherMap API: Get real-time weather information with a responsive and intuitive interface.",
    src:"https://static.vecteezy.com/system/resources/previews/011/126/301/original/animated-cloud-with-sun-depicting-weather-in-flat-icon-clipart-illustration-on-blue-sky-vector.jpg",
    github:"https://github.com/Abhyuday-Dev/weather",
    site:"https://abhyudayweatherapp.netlify.app/"
  },
  {
    key:2,
    name:"Dahboard UI",   
    description:"Responsive dashboard frontend:Data visualization, interactive charts, user-friendly interface, real-time insights, efficient data management.",
    src:"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1282863/retina_1708x683_image_0_-_2020-10-19T234908.526-9473d815ad946c7c3a3f240534268049.png",
    github:"https://github.com/Abhyuday-Dev/dashboard",
    site:"https://abhyuday-dashboard.vercel.app/"
  },
  {
    key:3,
    name:"Task Manager",
    description:"A MERN Task Manager with CRUD functionality offers seamless management of tasks, empowering users to create, read, update, and delete tasks.",
    src:"https://media.istockphoto.com/id/1291339958/vector/project-management-concept-vector-illustration-business-team-working-together-with-project.jpg?s=170667a&w=0&k=20&c=geqgdXFWeKuf_sfKUWPEv33tX2F1wfyBdx8GXXxjVIo=",
    github:"https://github.com/Abhyuday-Dev/Task-Mangangement",
    site:"https://abhyuday-taskmanager.netlify.app/"
  },
  {
    key:4,
    name:"Redux Store",
    description:"Redux-based eCommerce store: Add/delete items in cart with actions, reducers; centralized state management, seamless user experienc",
    src:"https://assets-blog.hostgator.mx/wp-content/uploads/2017/09/blog-ecommerce-plataform.webp",
    github:"https://github.com/Abhyuday-Dev/Redux-Store",
    site:"https://redux-store-abhyuday.vercel.app/"
  },
  {
    key:5,
    name:"DALL-E",
    description:"DALL-E is an advanced AI model developed by OpenAI that generates images from textual descriptions.",
    src:"https://theintercept.com/wp-content/uploads/2023/05/GettyImages-1252639606-pentagon-open-AI-chatGPT.jpg",
    github:"https://github.com/Abhyuday-Dev/DALL-E-Clone",
    site:"https://github.com/Abhyuday-Dev/DALL-E-Clone"
  },
  {
    key:6,
    name:"MERN Book Store",
    description:"A MERN Book Store with CRUD functionality offers seamless management of books, empowering users to create, read, update, and delete books",
    src:"https://img.freepik.com/premium-vector/searching-educational-literature_118813-9147.jpg?w=2000",
    github:"https://github.com/Abhyuday-Dev/MERN-Book-Store",
    site:"https://abhyuday-bookstore.netlify.app/"
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