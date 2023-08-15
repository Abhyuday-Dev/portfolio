import React, { useEffect, useState } from 'react';
import {GiHamburgerMenu,GiCrossedBones} from "react-icons/gi";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Navbar.css";

const Navbar = () => {
  const navAnimation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
  if (inView) {
    navAnimation.start({
      y: 0,
      transition: { duration: 1 }
    });
  } else {
    navAnimation.start({
      y:"-50px"
    });
  }
}, [inView, navAnimation]);

const [isActive, setIsActive] = useState(false);

const navToggle = () => {
  setIsActive(!isActive);
};

const handleClick=()=>{
  setIsActive(false);
}
  return (
    <motion.nav className="nav" animate={navAnimation} ref={ref}>
        <a href="#" className="nav__brand">Abhyuday</a>
        <ul className={`nav__menu ${isActive ? 'nav_active' : ''}`}>
            <li className="nav__item"><motion.a href="#" className="nav__link"onClick={handleClick}  whileHover={{scale:1.1}}>Home</motion.a></li>
            <li className="nav__item"><motion.a href="#about" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>About</motion.a></li>
            <li className="nav__item"><motion.a href="#project" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>Projects</motion.a></li>
            <li className="nav__item"><motion.a href="#skills" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>Skills</motion.a></li>
            <li className="nav__item"><motion.a href="#contact" className="nav__link" onClick={handleClick} whileHover={{scale:1.1}}>Contact</motion.a></li>
        </ul>
        <div className="nav_toggler" onClick={navToggle}>{!isActive?<GiHamburgerMenu />:<GiCrossedBones/>}</div>
    </motion.nav>
  )
}

export default Navbar