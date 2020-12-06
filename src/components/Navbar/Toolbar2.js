import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

class Toolbar2 extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  unhideToolbar = () => {
    //debugger
    console.log('hovering');
    let navbarTransform = document.getElementById('navbar').style.transform;
    return (
      (document.getElementById('navbar').style.top = '0'),
      // (navbarTransform = 'translateY(50%)')
      (document.getElementById('navbar').style.transform = 'translateY(2%)'),
      (document.getElementById('navbar').style.transition = 'transform 1s ease-in')
    );
  };
  hideToolbar = () => {
    console.log('leaving');
    let navbarVar = document.getElementById('navbar').style;
    if (window.scrollY !== 0) {
      return (
        //document.getElementById('navbar').style.top='0',
        (document.getElementById('navbar').style.top = '-31px')
        //(document.getElementById('navbar').style.transition = 'transform 1s ease-out')

        // (navbarVar.transform = 'translateY(1%)'), (navbarVar.transition = 'transform .2s ease-out')
      );
    }
  };

  render() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      screen.width > 768
        ? prevScrollpos > currentScrollPos
          ? (document.getElementById('navbar').style.top = '0')
          : (document.getElementById('navbar').style.top = '-31px')
        : null;
      prevScrollpos = currentScrollPos;
    };
    return (
      <header
        id="navbar"
        onMouseEnter={() => this.unhideToolbar()}
        onMouseLeave={() => this.hideToolbar()}
        className="toolbar"
        id="navbar"
      >
        <nav className="toolbar_navigation">
          <div className="toolbar_logo">
            <a onClick={this.scrollToTop}>SANG PARK</a>
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
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar2;
