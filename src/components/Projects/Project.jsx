import React from 'react'
import ProjectCard from './ProjectCard';
import "./Project.css"

const Project = () => {
  return (
    <section className="project" id='project'>
      <h1 className='project_title'>Projects</h1>
      <div className="p_div">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </div>
    </section>
  )
}

export default Project