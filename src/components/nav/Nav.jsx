import React from "react";
import  "./nav.css";
import {useState} from 'react'

import { BiBook } from 'react-icons/bi';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'


const Nav = () => {
  const [ActiveNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={ActiveNav === '#' ? 'active' : ''}  > < AiOutlineHome/> </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={ActiveNav === '#about' ? 'active' : ''} > < AiOutlineUser/> </a>
      <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={ActiveNav === '#experience' ? 'active' : ''} > < BiBook/> </a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={ActiveNav === '#services' ? 'active' : ''} > < AiOutlineHome/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={ActiveNav === '#contact' ? 'active' : ''} > <AiOutlineHome/> </a>
    </nav>
  );
};

export default Nav;
