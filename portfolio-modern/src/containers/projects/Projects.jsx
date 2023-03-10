import React from 'react'
import { Project } from '../../components'
import { project01 } from './imports'
import './projects.css'

const Projects = () => {
  return (
    <div className="projects section__padding" id="projects">
      <div className="projects-heading">
        <h1 className="gradient__text">
          Personal Projects
        </h1>
      </div>
      <div className="projects-container">
        <div className="projects-container_groupA">
          <Project imgUrl={project01} title="SampleProject" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."/>
        </div>
        <div className="projects-container_groupB">
        <Project imgUrl={project01} title="SampleProject" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."/>
        <Project imgUrl={project01} title="SampleProject" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."/>
        <Project imgUrl={project01} title="SampleProject" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."/>
        <Project imgUrl={project01} title="SampleProject" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem."/>
        </div>
      </div>
    </div>
  )
}

export default Projects