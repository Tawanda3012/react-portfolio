import React from 'react'
import Head from './Head.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
// import Me from '../../assets/t.jpg'

const Header = () => {
  return (
   <header>
       <div className="container header__container">
           <h5>Hello I am</h5>
           <h1>Tawanda Nhare</h1>
           <h5 className="text-light">Fullstack Develpoer</h5>
           <CTA/>
           <HeaderSocials/>

           <div className="me">
             {/* <img src={Me} alt="me"  /> */}
           </div>

           <a href="/" className="scroll__down">Scroll Down</a>

       </div>
   </header>
  )
}

export default Header