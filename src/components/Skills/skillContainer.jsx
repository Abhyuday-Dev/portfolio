import React from 'react';

const SkillContainer = ({name,src}) => {

  return (
    <div className='skill-con'>
    <img src={src} alt="" />
    <h4 className="skill_name">{name}</h4>
</div>
  )
}

export default SkillContainer;