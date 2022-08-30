import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../Context'
import {FaGlobe, FaGithub} from 'react-icons/fa'

import {motion} from 'framer-motion'

export default function ProjectItem({ image, name, description, links}) {


  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <motion.div className='projectItem' style={{backgroundColor: darkMode ? "#333" : "white" ,color: darkMode ? "white" : "black"}}
    whileHover={{scale: 1.15,
    boxShadow: "rgba(255, 255, 255, 0.25) 0px 30px 60px -12px, rgba(255, 255, 255, 0.3) 0px 18px 36px -18px"
    }}
    transition={{duration: .1}}
    
    >
        <div className='bgImage'><img src={image} className='img'/></div>
        <div className='p-right'>
        <h1 style={{width: 'fit-content', margin: '5px auto', borderBottom: '1px solid black'}}>{name}</h1>
        <p className='desc' style={{paddingRight: '10px', marginTop: '-15px'}}>{description}</p>
        {/* <div><FaGlobe />    <FaGithub /></div> */}
        <div>{links}</div>
        </div>
        
    </motion.div>
  )
}
