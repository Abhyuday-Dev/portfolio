import React from "react";
import "./ProjectShowCard.css";
import {AiOutlineArrowRight} from "react-icons/ai"

const ProjectShowCard = ({ name, src, description, github, site }) => {

  return (
    <div className="project_card" >
      <div className="project_img">
        <img src={src} alt="" />
        <p className="p_tag">{description}</p>
      </div>
      <div className="project_content">
        <h2>{name}</h2>
      </div>
      <div className="project_btn">
        <AiOutlineArrowRight/>
        <a href={site} target="_blank">
          <h2 className="project_h2">Demo</h2>
        </a>|
        <a href={github} target="_blank">
          <h2 className="project_h2">Code</h2>
        </a>
      </div>
    </div>
  );
};

export default ProjectShowCard;
