import React , {useContext} from 'react'
import './Home.css'
import profile from '../../image/profile.jpg'
import { ThemeContext } from '../Context'

import {motion} from 'framer-motion'

export default function Home() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


  return (
    <div className='i' id='home' style={{backgroundColor: darkMode && 'black', color: darkMode && 'white'}}>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Abhinaba De</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Student</div>
                        <div className='i-title-item'>Web Developer</div>
                        <div className='i-title-item'>UI/UX designer</div>
                        <div className='i-title-item'>Learner</div>
                    </div>
                </div>
                <div className='i-description'>
                Enthusiastic learner and passionate software developer. welcome to my portfolio website!
                </div>
                
            </div>
        </div>
        <div className='i-right'>
            <div className='cont'>
            <motion.img src={profile} className='i-img' whileHover={{scale: 1.15}}/>
            </div>
            
        </div>
    </div>
  )
}
