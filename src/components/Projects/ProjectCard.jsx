import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ name, src, description, github, site }) => {
 
  const openLink = () => {
    if (window.innerWidth < 823) {
      window.open(site, '_blank');
    }
  };

  return (
    <div className="p_card" onClick={openLink}>
      <div className="p_img">
        <img src={src} alt="" />
      </div>
      <div className="p_content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="p_btn">
        <a href={site} target="_blank">
          <button className="p_button">Demo</button>
        </a>
        <a href={github} target="_blank">
          <button className="p_button">Code</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
