import React, { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../Context';
import './Connect.css'
import {FaLinkedin, FaTwitterSquare, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import emailjs from '@emailjs/browser';


export default function Connect() {


  const [done, setDone] = useState(false)

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_y132s0w', 
      'template_ommvrdt', 
      form.current, 
      'JvDuvc6mGJZa5kaBX'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
          setDone(false)
      });

  }

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div id='connect' className='con'>
    <h2 className='heading'>Connect with me</h2>
    <div className='c'>
            <div className='c-left' >
                {/* <div className='c-left-wrapper'>left</div> */}
                <div className='connect' style={{backgroundColor: darkMode && "#333", borderRadius: "20px"}}>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaGithub />&nbsp;<a href='https://github.com/AbhinabaDe01' target='_blank' style={{color: darkMode ? "white" : "black"}}>Github</a></div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaLinkedin />&nbsp;<a href='https://www.linkedin.com/in/abhinaba-de-1836b81b4/' target='_blank' style={{color: darkMode ? "white" : "black"}}>LinkedIn</a></div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaTwitterSquare />&nbsp;<a href='https://twitter.com/mrzordel' target='_blank' style={{color: darkMode ? "white" : "black"}}>Twitter</a></div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaFacebook />&nbsp;<a href='https://www.facebook.com/' target='_blank' style={{color: darkMode ? "white" : "black"}}>Facebook</a></div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaInstagram />&nbsp;<a href='https://www.instagram.com/deabhinaba/' target='_blank' style={{color: darkMode ? "white" : "black"}}>Instagram</a></div>
                  
                </div>
            </div>
            <div className='c-right'>
                {/* <div className='c-right-wrapper'>right</div> */}
                <div className='c-desc' >
                  <p><b>connect </b>with me, send me a mail at <b>deabhinaba@gmail.com</b></p>
                  <form ref={form} onSubmit={handleSubmit}>
                    <input type='text' placeholder='name' name='user_name' required/>
                    <input type='text' placeholder='subject' name='user_subject' required/>
                    <input type='text' placeholder='email' name='user_email' required/>
                    <textarea rows='5' placeholder='message' name='message'required/>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '10px' ,alignItems: 'center'}}>
                    <button>Submit</button><span>{done && <p>Thank you, mail has been sent</p>}</span>
                    </div>
                    
                  </form>
                </div>
            </div>
    </div>
    </div>
  )
}
