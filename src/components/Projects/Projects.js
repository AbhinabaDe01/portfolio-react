import React, { useContext } from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'
import { projectList } from './ProjectList'
import { ThemeContext } from '../Context'

export default function Projects() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;


  return (
    <div className='projects' id='projects' style={{backgroundColor: !darkMode && '#333', color: !darkMode && 'white'}}>
      <h2>My projects</h2>
      <div className='projectList'>
        {projectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} description={project.description} links={project.links}/>
        })}
      </div>
    </div>
  )
}
