import React from 'react';
import "./Skills.css";
import Data from './skillData.js';
import SkillContainer from './skillContainer';

const Skills = () => {
  return (
    <section className="skills" id='skills'>
        <h1 className="skills_title">My Skills</h1>
        <div className="skills_content">
            <div className="skills_container">
            { Data.map((skill) => {
            return <SkillContainer
            key={skill.key}
            name={skill.name}
            src={skill.src}
            />
        })}
            </div>
        </div>
    </section>
  )
}

export default Skills