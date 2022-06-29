import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Me from '../../assets/t.jpg'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="mE"  />
          </div>
        </div>
        <div className="about__content">
           <div className="about__cards">
             <article className="about__card">
               < FaAward className='about__icon' />
               <h5>Exeperience</h5>
               <small>3+ years Exeperience</small>
             </article>
             <article className="about__card">
               < FiUsers className='about__icon' />
               <h5>Clients</h5>
               <small>30+ worldwide</small>
             </article>
             <article className="about__card">
               < VscFolderLibrary className='about__icon' />
               <h5>Projects</h5>
               <small>5 completed projects</small>
             </article>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit repellat esse numquam repellendus deserunt, impedit sapiente vitae eos officiis voluptatibus delectus eligendi incidunt hic eaque id. Blanditiis, tempore reiciendis.</p>
           <a href="#contact" className='btn btn-primary' > Let's Talk </a>
           
        </div>
      </div>
    </section>
  )
  
}

export default About