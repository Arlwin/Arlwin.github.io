import React from 'react'
import './project.css'

const Project = ({ title, description, imgUrl }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={imgUrl} alt="project image"/>
      </div>
      <div className="project-content">
        <div>
          <h3>{title}</h3>
        </div>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default Project