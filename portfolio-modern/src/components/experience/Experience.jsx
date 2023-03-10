import React from 'react'
import './experience.css'

const Experience = ({ title, company, years, description }) => {
  return (
    <div className="experience">
      <div className="experience-title">
        <div />
        <h1> {title} </h1>
        <h2> {company} </h2>
        <h2> {years} </h2>
      </div>
      <div className="experience-description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Experience;