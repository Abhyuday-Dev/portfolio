import React from 'react';
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className='p_card'>
        <div className="p_img">
        </div>
        <div className="p_content">
            <h2>Project Name</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, quidem.</p>
            <div className="p_btn">
                <button className='p_button'>Demo</button>
                <button className='p_button'>Code</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard