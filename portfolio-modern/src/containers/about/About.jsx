import React from 'react'
import { Feature } from '../../components'

import './about.css'

const About = () => {
  return (
    <div className="about section__margin" id="about">
      <div className="about-feature">
        <Feature
          title="About Me"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."
        />
      </div>
      <div className="about-heading">
        <h1 className="gradient__text">Cloud Software Engineer</h1>
      </div>
      <div className="about-container">
        <Feature
          title="Projects"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."
        />
        <Feature
          title="Work Experience"
          text="Lorem ipsuganern  sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."
        />
      </div>
    </div>
  )
}

export default About;