import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({name,src,description}) => {
  const openLink = () => {
    if (window.innerWidth < 823) {
      const url = 'https://www.google.com'; // Replace with your desired URL
      window.open(url, '_blank');
    }
  };

  
  return (
    <div className='p_card' onClick={openLink}>
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