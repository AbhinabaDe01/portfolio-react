import React, { useContext } from 'react'
import { ThemeContext } from '../Context'
import './Toggle.css'

export default function Toggle() {

  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }

  return (
    <div className="t">
        <img src="https://cdn-icons-png.flaticon.com/512/169/169367.png" 
        className='t-icon'
        />
        <img src="https://www.freeiconspng.com/thumbs/moon-icon/moon-icon-29.png" 
        className='t-icon'
        />
        <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}
