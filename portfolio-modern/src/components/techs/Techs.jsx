import React from 'react';
import './techs.css';

import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiReact, SiMysql, SiAmazonaws, SiJavascript, SiPython, SiFlutter } from 'react-icons/si';

const techStack = [
  {
    "name": "Java",
    "icon": FaJava,
  },
  {
    "name": "Python",
    "icon": SiPython,
  },
  {
    "name": "Springboot",
    "icon": SiSpringboot,
  },
  {
    "name": "Javascript",
    "icon": SiJavascript,
  },
  {
    "name": "ReactJs",
    "icon": SiReact,
  },
  {
    "name": "Flutter",
    "icon": SiFlutter,
  },
  {
    "name": "MySQL",
    "icon": SiMysql,
  },
  {
    "name": "AWS",
    "icon": SiAmazonaws,
  },
]

const Techs = () => {
  return (
    <div className="techs section__padding">
      <div className="techs-heading">
        <h1 className="gradient__text"> Tech Stack </h1>
      </div>
      <div className="techs-content">
        {
          techStack.map((tech, i) => (
            <div className="techs_icon" key={tech.name + i}>
              < tech.icon />
              <p> {tech.name} </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Techs;