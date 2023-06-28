import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({name,src,description}) => {
  return (
    <div className='p_card'>
        <div className="p_img" >
          <img src={src} alt="" />
        </div>
        <div className="p_content">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        <div className="p_btn">
                <button className='p_button'>Demo</button>
                <button className='p_button'>Code</button>
            </div>
    </div>
  )
}

export default ProjectCard