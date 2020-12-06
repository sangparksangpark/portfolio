
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../../src/context/context';


const Navbar = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const changeCurrent=()=>{
     
  }
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav-bar" >
        <li className="current">
          <a className="smoothscroll"  href="#home">
            Home
          </a>
        </li>
        
        <li>
          <a className="smoothscroll" smooth duration={1000} href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">
            Works
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
