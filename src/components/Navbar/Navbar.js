import React, { useContext, useState } from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { ThemeContext } from '../Context'

import {motion} from 'framer-motion'

export default function Navbar() {

  const [nav, setNav] = useState(false)
  const toggle = () => {setNav(!nav)}

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [active, setActive] = useState(false)



  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1, boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}
    transition={{duration: 1}}
    className='navbar' style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}}>
        <div className='nav-container'>
            <div className='brand'>
                <motion.span whileHover={{scale: 1.5}}>[ Abhinaba De ]</motion.span>
            </div>
            <div className='nav-list'>
                <motion.div><a href='#home' style={{color: darkMode && 'white'}}>Home</a></motion.div>
                <motion.div><a href='#about' style={{color: darkMode && 'white'}}>About</a></motion.div>
                <motion.div><a href='#projects' style={{color: darkMode && 'white'}}>Projects</a></motion.div>
                <motion.div><a href='#connect' style={{color: darkMode && 'white'}}>Connect</a></motion.div>
            </div>
            <div className={!nav ? 'menu-show' : 'menu-hide'} onClick={toggle}>
              {!nav ? <FaBars /> : <ImCross />}
            </div>
            <div className={!nav ? 'mobile-hide' : 'mobile-show'}>
                <div><a href='#home'>Home</a></div>
                <div><a href='#about'>About</a></div>
                <div><a href='#projects'>Projects</a></div>
                <div><a href='#connect'>Connect</a></div>
            </div>
        </div>
    </motion.div>
  )
}
