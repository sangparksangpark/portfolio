import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import ParticlesBg from 'particles-bg';
import Navbar from '../Navbar/Navbar';
import Toolbar from '../Navbar/Toolbar';
import MouseParticles from 'react-mouse-particles';
import SideDrawer from '../SideDrawer/SideDrawer';
import './Hero.css';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [particleBool, setParticleBool] = useState(true);

  // const particleSwitch = () => {
  //   particleBool === true ? (
  //     <MouseParticles
  //       g={4}
  //       num={0.1}
  //       radius={2.5}
  //       alpha={0.5}
  //       tha={1}
  //       v={1}
  //       life={10}
  //       color="random"
  //       cull="col,image-wrapper"
  //     />
  //   ) : (
  //     <ParticlesBg
  //       type="circle"
  //       //config={config}
  //       bg={true}
  //     />
  //   );
  // };

  // const particleBgSwitch = () => {
  //   const array = [
  //     'circle',
  //     'color',
  //     'ball',
  //     'color',
  //     'ball',
  //     'lines',
  //     'thick',
  //     'circle',
  //     'cobweb',
  //     'polygon',
  //     'square',
  //     'tadpole',
  //     'fountain',
  //     'random',
  //   ];
  // };

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  // let config = {
  //   num: [4, 7],
  //   rps: 0.3,
  //   radius: [5, 40],
  //   life: [1.5, 3],
  //   v: [2, 3],
  //   tha: [-40, 40],
  //   //body: "../../public/images/smiley.png", // Whether to render pictures
  //   // rotate: [0, 20],
  //   alpha: [0.6, 0],
  //   scale: [5, 0.1],
  //   position: 'center', // all or center or {x:1,y:1,width:100,height:100}
  //   color: ['random', '#ff0000'],
  //   cross: 'dead', // cross or bround
  //   random: 15, // or null,
  //   g: 8, // gravity
  //   // f: [2, -1], // force
  //   onParticleUpdate: (ctx, particle) => {
  //     ctx.beginPath();
  //     ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
  //     ctx.fillStyle = particle.color;
  //     ctx.fill();
  //     ctx.closePath();
  //   },
  // };

  return (
    <section id="hero" className="jumbotron" style={{ height: '100%' }}>
      {/* <Navbar /> */}
      {/* <Toolbar/> */}
      {/* <SideDrawer/> */}
      <main style={{ marginTop: '64px' }}></main>

      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <ParticlesBg
            type="random"
            //config={config}
            bg={true}
          />{' '}
          {/* <MouseParticles g={4} num={.1} radius ={2.5} alpha={.5} tha={1} v={1} life={10} color="random" cull="col,image-wrapper"/> */}
          {/* {particleBool ? (
            <>
              <div className="fade-in">
                {' '}
                <MouseParticles
                  g={10}
                  num={0.1}
                  radius={2.5}
                  alpha={0.5}
                  tha={1}
                  v={1}
                  life={10}
                  color="random"
                  cull="col,image-wrapper"
                />{' '}
              </div>
              <div className="fade-out">
                {' '}
                <ParticlesBg type="circle" bg={true} />{' '}
              </div>{' '}
            </>
          ) : (
            <>
              <div className="fade-in">
                {' '}
                <ParticlesBg type="ball" bg={true} />{' '}
              </div>
              <div className="fade-out">
                {' '}
                <MouseParticles
                  g={10}
                  num={0.1}
                  radius={2.5}
                  alpha={0.5}
                  tha={1}
                  v={1}
                  life={10}
                  color="random"
                  cull="col,image-wrapper"
                />
                \
              </div>{' '}
            </>
          )} */}
          <h1 className="hero-title">
            {title || ""}{' '}
            <span className="text-color-main">{name || ''}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="hero-cta">
            <div className="btn-cta">
              <span className="cta-btn cta-btn--hero">
                <Link
                  to="hero"
                  onClick={() => setParticleBool((prevState) => !prevState)}
                  smooth
                  duration={1000}
                >
                  {cta || 'Click Me!'}
                </Link>
              </span>
            </div>
            <div className="btn-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'Learn More'}
                </Link>
              </span>
            </div>
          </div>
        </Fade>
      </Container>
      {/* <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            
            <hr />
            <ul className="social">
              <a href="#project" className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
              <a href="#home" className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> */}
      {/* <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p> */}
    </section>
  );
};

export default Header;
