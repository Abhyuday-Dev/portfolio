import React from 'react';
import {motion} from "framer-motion"

const SkillContainer = ({name,src}) => {

  return (
    <motion.div whileHover={{scale:1.2}} className='skill-con'>
    <img src={src} alt="" />
    <h4 className="skill_name">{name}</h4>
</motion.div>
  )
}

export default SkillContainer;