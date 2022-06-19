import React, { useContext, useState } from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { ThemeContext } from '../Context'

export default function Navbar() {

  const [nav, setNav] = useState(false)
  const toggle = () => {setNav(!nav)}

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  return (
    <div className='navbar' style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}}>
        <div className='nav-container'>
            <div className='brand'>
                <span>Abhinaba De</span>
            </div>
            <div className='nav-list' >
                <div><a href='#home' style={{color: darkMode && 'white'}}>Home</a></div>
                <div><a href='#about' style={{color: darkMode && 'white'}}>About</a></div>
                <div><a href='#projects' style={{color: darkMode && 'white'}}>Projects</a></div>
                <div><a href='#connect' style={{color: darkMode && 'white'}}>Connect</a></div>
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
    </div>
  )
}
