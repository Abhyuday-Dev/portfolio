import React, { useState } from 'react';
import {GiHamburgerMenu,GiCrossedBones} from "react-icons/gi";
import {motion} from "framer-motion"
import "./Navbar.css";

const Navbar = () => {

const [isActive, setIsActive] = useState(false);

const navToggle = () => {
  setIsActive(!isActive);
};

const handleClick=()=>{
  setIsActive(false);
}
  return (
    <nav className="nav">
        <a href="#" className="nav__brand">Abhyuday</a>
        <ul className={`nav__menu ${isActive ? 'nav_active' : ''}`}>
            <li className="nav__item"><motion.a href="#" className="nav__link"onClick={handleClick}  whileHover={{scale:1.1}}>Home</motion.a></li>
            <li className="nav__item"><motion.a href="#skills" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>Skills</motion.a></li>
            <li className="nav__item"><motion.a href="#about" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>About</motion.a></li>
            <li className="nav__item"><motion.a href="#project" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>Projects</motion.a></li>
            <li className="nav__item"><motion.a href="#contact" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>Contact</motion.a></li>
        </ul>
        <div className="nav_toggler" onClick={navToggle}>{!isActive?<GiHamburgerMenu />:<GiCrossedBones/>}</div>
    </nav>
  )
}

export default Navbar