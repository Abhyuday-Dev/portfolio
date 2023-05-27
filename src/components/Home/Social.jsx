import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {FiTwitter,FiGithub,FiLinkedin} from "react-icons/fi";
import {TbBrandLinkedin} from "react-icons/tb";

const Social = () => {
  return (
    <div className='home_social'>
        <a href="" className="home_social-icon">
            <BsInstagram />
        </a>
        <a href="" className="home_social-icon">
            <FiTwitter />
        </a>
        <a href="" className="home_social-icon">
            <FiGithub />
        </a>
        <a href="" className="home_social-icon">
            <FiLinkedin />
        </a>

    </div>
  )
}

export default Social