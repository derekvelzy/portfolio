import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';
import { animated, useSpring } from "react-spring";
import { Helmet } from 'react-helmet';
// import loadable from '@loadable/component';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Forest from '../components/photos/Forest.jpeg';

// const Home = loadable(() => import('../components/home.js'));
// const About = loadable(() => import('../components/about.js'));
// const Projects = loadable(() => import('../components/projects.js'));
// const Skills = loadable(() => import('../components/skills.js'));
// const Contact = loadable(() => import('../components/contact.js'));
import Home from '../components/home.js';
import About from '../components/about.js';
import Projects from '../components/projects.js';
import Skills from '../components/skills.js';
import Contact from '../components/contact.js'

const IndexPage = () => {
  useEffect(() => {
    Aos.init({duration: 700});
  }, []);

  const [view, setView] = useState(0);

  const ref = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const homeScroll = () => homeRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const aboutScroll = () => aboutRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const projectsScroll = () => projectsRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const skillsScroll = () => skillsRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const contactScroll = () => contactRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});

  return (
    <Container>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Derek Velzy</title>
        <link rel="site" href="http://dvelzyportfolio.com" />
        <meta name="Description" content="derek velzy's portfolio site" />
      </Helmet>
        <picture style={{height: '500vh', width: '100vw',
        position: 'absolute'}}>
          <source
            style={{width: '100vw', height: '500vh', objectFit: 'cover', filter: 'brightness(75%) blur(2px)', position: 'absolute'}}
            alt="webp Korhonen"
            srcSet={Forest}/>
          <img
            style={{width: '100vw', height: '500vh', objectFit: 'cover', filter: 'brightness(75%) blur(2px)', position: 'absolute'}}
            alt="Kornonen"
            src={Forest}
          />
        </picture>
      <Switch>
        <Button onClick={homeScroll}>home</Button>
        <Button onClick={aboutScroll}>about</Button>
        <Button onClick={projectsScroll}>projects</Button>
        <Button onClick={skillsScroll}>skills</Button>
        <Button onClick={contactScroll}>contact</Button>
      </Switch>
      <div>
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={contactRef}><Contact /></div>
      </div>
    </Container>
  )
};

const BG = styled.picture`
  position: fixed;
  z-index: -1;
`
const BGImg = styled.img`
  position: fixed;
`
const BGSource = styled.source`
  position: fixed;
`
const Button = styled.div`
  // background: rgba(26, 25, 34);
  background: rgba(240, 240, 250, 0.8);
  color: blacks;
  font-size: 13px;
  height: 60px;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    // box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
    // background: rgb(47, 44, 56);
    background: rgba(245, 245, 250, 0.9);
  }
`
const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 500vh;
`
const Switch = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
  margin-top: 50px;
  margin-left: 4%;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 10px;
  @media (max-width: 1000px) {
    margin-top: 30px;
    margin-left: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export default IndexPage
