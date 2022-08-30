import React, { useContext } from 'react'
import { ThemeContext } from '../Context'
import './About.css'
import resume from '../../assets/Resume_deabh.pdf'

import {motion} from 'framer-motion'
 
export default function About() {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;


  return (
    <div className='a' id='about'>
        <div className='a-left'  style={{backgroundColor: darkMode && "#333"}}>
            <div className='a-left-wrapper'>
                <h2>About</h2>
                <div>Enthusiastic learner and passionate software developer with a belonging for building web applications. Currently an undergrad and also creative about any kind of content creation and designing challenges. Loves music and gaming. Avid fan of crime thrillers and a dreamer. Lately learning deep into react and starting Node. Lastly, greatly influenced by peeps who are always bingo on what they do. Always ready to learn new skills.</div>
                <div><b>Skills: </b>
                <p>Object Oriented Programming</p>
                <p>Database Management System</p>
                <div>Programming languages and skills are <b>C/C++</b>, <b>Python 3</b>, <b>Java</b>, <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>, <b>TailwindCSS</b>, <b>Javascript</b> and <b>React</b> framework. Also got my hands on <b>Figma</b> in terms of UI/UX designing.</div>
                </div>
                <div className='btn-wrapper'>
                    <motion.button className='btn'
                    whileHover={{scale: 1.15}}
                    ><a href={resume} target='_blank'>Download Resume</a></motion.button>
                </div>
            </div>
            
        </div>
        <motion.div className='a-right' style={{backgroundColor: !darkMode && '#333', color: !darkMode && 'white'}} >
            <div className='a-right-wrapper'>
                <h2 style={{borderBottom: '1px solid white'}}>Education</h2>
                <div style={{textAlign: 'center'}}><b>Schooling- </b>Patha Bhavan, Kolkata. <br></br> 2016 secondary <br></br> 2019 Higher secondary</div>
                <div style={{textAlign: 'center'}}><b>Graduation- </b>St. Thomas' College of Engineering and Technology<br></br>( 2019 - 2023), Currently an undergrad, pursuing B.Tech. in Computer Science and Engineering.</div>
            </div>
            
        </motion.div>
    </div>
  )
}
