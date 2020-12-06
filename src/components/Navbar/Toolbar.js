import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_logo">
          <a onClick={scrollToTop}>SANG PARK</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Projects{' '}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Contact{' '}
              </Link>
            </li>
            {/* <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> */}
          </ul>
        </div>
        <div className="drawer-toggle">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
