import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './SideDrawer.css';

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={drawerClasses}>
      <ul>
        <li className="menu-item">MENU</li>
        <li className="nav-item">
          <a onClick={scrollToTop} activeclass="active">
            Top
          </a>
        </li>
        <li className="nav-item">
          <Link
            activeclass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={450}
          >
            About
          </Link>
        </li>{' '}
        <li className="nav-item">
          <Link
            activeclass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-30}
            duration={450}
          >
            Projects
          </Link>
        </li>{' '}
        <li className="nav-item">
          <Link
            activeclass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={450}
          >
            Contact
          </Link>
        </li>{' '}
        {/* <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href=";">MISC</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default sideDrawer;
