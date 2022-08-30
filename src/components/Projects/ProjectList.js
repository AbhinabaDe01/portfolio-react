import React from 'react'
import Proj1 from '../../assets/img1.jpg'
import Proj2 from '../../assets/img2.jpg'
import Proj3 from '../../assets/img3.jpg'
import Proj4 from '../../assets/img4.jpg'
import Proj5 from '../../assets/img5.jpg'
import Proj6 from '../../assets/img6.jpg'
import Proj7 from '../../assets/img7.jpg'
import Proj8 from '../../assets/img8.jpg'
import Todo from '../../assets/todo-app.JPG'
import Pizza from '../../assets/pizza-hub.jpg'



import {FaGlobe, FaGithub} from 'react-icons/fa'


export const projectList = [
    {
        name:"University Admission website",
        image: Proj1,
        description : "A static website using HTML CSS Javascript", 
        links: <div className='icons'><a href='https://abhinabade01.github.io/university-admission/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/university-admission' target="_blank" className="git"><FaGithub /></a></div>
    },
    {
        name:"Pricing Plans",
        image: Proj2,
        description : "A Static website using HTML and Tailwind CSS",
        links: <div className='icons'><a href='https://abhinabade01.github.io/Pricing-Plans/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/Pricing-Plans' target="_blank" className="git"><FaGithub /></a></div>
    },
    
    // {
    //     name:"Recipe List",
    //     image: Proj5,
    //     description: "A Recipe listing website using React and Firebase",
    //     links: <div className='icons'><a href='https://recipe-list-sigma.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/Recipe-List' target="_blank" className="git"><FaGithub /></a></div>
    // },
    // {
    //     name:"Photo Gallery",
    //     image: Proj6,
    //     description: "A Photo Gallery showacase using React and Firebase",
    //     links: <div className='icons'><a href='https://photo-gallery-peach.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='' target="_blank" className="git"><FaGithub /></a></div>
    // },
    {
        name:"Todo List",
        image: Todo,
        description: "A simple todo app using React and localstorage",
        links: <div className='icons'><a href='https://todo-app-henna-one.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/todo-app' target="_blank" className="git"><FaGithub /></a></div>
    },
    {
        name:"Pizza Hub",
        image: Pizza,
        description: "A simple pizza ordering ordering app using React, used library Framer Motion",
        links: <div className='icons'><a href='https://pizza-hub-sigma.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/pizza-hub' target="_blank" className="git"><FaGithub /></a></div>
    },
    {
        name:"Weather App",
        image: Proj4,
        description: "A weather display website using React and Fetching Api",
        links: <div className='icons'><a href='https://weather-react-app-ruby.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/weather-react-app' target="_blank" className="git"><FaGithub /></a></div>
    },
    {
        name:"Crypto Finance Tracker",
        image: Proj3,
        description: "A Crypto Finance Tracker website using React and fetching Api",
        links: <div className='icons'><a href='https://crypto-finance-tracker-ashen.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/crypto-finance-tracker' target="_blank" className="git"><FaGithub /></a></div>
    },
    {
        name:"Memory Match",
        image: Proj7,
        description: "A Memory game using React",
        links: <div className='icons'><a href='https://memory-match-pied.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='https://github.com/AbhinabaDe01/photo-gallery' target="_blank" className="git"><FaGithub /></a></div>
    },
    {
        name:"Portfolio Website",
        image: Proj8,
        description: "A Portfolio Website using Reactjs with dark mode",
        links: <div className='icons'><a href='https://portfolio-react-nu-henna.vercel.app/' target="_blank" ><FaGlobe className="globe" /></a>&nbsp;&nbsp;<a href='' target="_blank" className="git"><FaGithub /></a></div>
    }
]
