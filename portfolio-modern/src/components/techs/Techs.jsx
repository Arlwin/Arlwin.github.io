import React from 'react';
import './techs.css';

import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiReact, SiMysql, SiAmazonaws, SiJavascript } from 'react-icons/si';

const techStack = [
  {
    "name": "Java",
    "icon": FaJava,
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

        {
          techStack.map((tech) => (
            <div className="techs_icon">
              < tech.icon />
              <p> { tech.name } </p>
            </div>
          ))
        }
    </div>
  )
}

export default Techs;