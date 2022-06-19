import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../Context';
import './Connect.css'
import {FaLinkedin, FaTwitterSquare, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import emailjs from '@emailjs/browser';


export default function Connect() {


  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //   'service_y132s0w', 
    //   'template_ommvrdt', 
    //   form.current, 
    //   'JvDuvc6mGJZa5kaBX'
    //   )
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
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
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaGithub />Github</div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaLinkedin />LinkedIn</div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaTwitterSquare />Twitter</div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaFacebook />Facebook</div>
                  <div className='connect-list' style={{display:"flex", alignItems: "center"}}><FaInstagram />Instagram</div>
                </div>
            </div>
            <div className='c-right'>
                {/* <div className='c-right-wrapper'>right</div> */}
                <div className='c-desc' >
                  <p><b>connect </b>with me, send me a mail!</p>
                  <form ref={form} onSubmit={handleSubmit}>
                    <input type='text' placeholder='name' name='user_name' />
                    <input type='text' placeholder='subject' name='user_subject' />
                    <input type='text' placeholder='email' name='user_email' />
                    <textarea rows='5' placeholder='message' name='message'/>
                    <button>Submit</button>
                  </form>
                </div>
            </div>
    </div>
    </div>
  )
}
