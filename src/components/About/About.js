import React, { useContext } from 'react'
import { ThemeContext } from '../Context'
import './About.css'
import resume from '../../assets/Resume 1.pdf'

export default function About() {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;


  return (
    <div className='a' id='about'>
        <div className='a-left'  style={{backgroundColor: darkMode && "#333"}}>
            <div className='a-left-wrapper'>
                <h2>About</h2>
                <div>Enthusiastic learner and passionate software developer with a belonging for building web applications. Currently an undergrad and also creative about any kind of content creation and designing challenges. Thrives on tech, wants the world to be eaten up by tech, but not by people. Loves music and gaming. Avid fan of crime thrillers and a dreamer. Lately learning deep into react and starting Node. Lastly, greatly influenced by peeps who are always bingo on what they do. Always ready to learn new skills.</div>
                <div><b>Skills: </b>
                <p>Learning Web development.</p>
                <div>Current skills are <b>C/C++</b>, <b>Python 3</b>, <b>Java</b>, <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>, <b>TailwindCSS</b>, <b>Javascript</b> and <b>React</b> framework. Also got my hands on <b>Figma</b> and bit of UI/UX designing.</div>
                </div>
                <div className='btn-wrapper'>
                    <button className='btn'><a href={resume} target='_blank'>Download Resume</a></button>
                </div>
            </div>
            
        </div>
        <div className='a-right' style={{backgroundColor: !darkMode && '#333', color: !darkMode && 'white'}}>
            <div className='a-right-wrapper'>
                <h2>Education</h2>
                <div><b>Schooling- </b>Patha Bhavan, Kolkata. Studied there for 6 years from class 7 till 12. Made many memories along with this school journey.</div>
                <div><b>Graduation- </b>Took admission in the St. Thomas' College of Engineering and Technology. Currently a undergrad, pursuing B.Tech. in Computer Science and Engineering.</div>
            </div>
            
        </div>
    </div>
  )
}
