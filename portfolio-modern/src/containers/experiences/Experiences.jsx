import React from 'react'
import Experience from '../../components/experience/Experience'
import './experiences.css'

const experiences = [
  {
    title: 'Customer Service Engineer',
    company: 'Trend Micro',
    years: '2014 - 2020', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem.',
  },
  {
    title: 'Cloud Software Engineer',
    company: 'Trend Micro',
    years: '2020 - 2022', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem.',
  },
  {
    title: 'Senior Cloud Software Engineer',
    company: 'Trend Micro',
    years: '2022 - 2023', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem.',
  },
  {
    title: 'Senior Consultant',
    company: 'Indra PH',
    years: '2014 - 2020', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem.',
  },
]

const Experiences = () => {
  return (
    <div className="experiences section__padding" id="experiences">
      <div className="experiences-heading">
        <h1 className="gradient__text">
          Work Experience
        </h1>
        <p>
        </p>
      </div>
      <div className="experiences-container">
        {
          experiences.map((exp, i) => (
            <Experience
              key={exp.title + i}
              title={exp.title}
              company={exp.company}
              years={exp.years}
              description={exp.description}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Experiences