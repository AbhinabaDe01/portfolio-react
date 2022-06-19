import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../Context'
import {FaGlobe, FaGithub} from 'react-icons/fa'

export default function ProjectItem({ image, name, description, links}) {


  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className='projectItem' style={{backgroundColor: darkMode ? "#333" : "white" ,color: darkMode ? "white" : "black"}}>
        <div className='bgImage'><img src={image} className='img'/></div>
        <div className='p-right'>
        <h1>{name}</h1>
        <p>{description}</p>
        {/* <div><FaGlobe />    <FaGithub /></div> */}
        <div>{links}</div>
        </div>
        
    </div>
  )
}
