import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = loadable(() => import('../components/home.js'));
const About = loadable(() => import('../components/about.js'));
const Projects = loadable(() => import('../components/projects.js'));
const Skills = loadable(() => import('../components/skills.js'));
const Contact = loadable(() => import('../components/contact.js'));

const IndexPage = () => {
  useEffect(() => {
    Aos.init({duration: 700});
  }, []);

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
      <Switch>
        <Button onClick={homeScroll}>home</Button>
        <Button onClick={aboutScroll}>about</Button>
        <Button onClick={projectsScroll}>projects</Button>
        <Button onClick={skillsScroll}>skills</Button>
        <Button onClick={contactScroll}>contact</Button>
      </Switch>
      <Parallax strength={2600}>
        <Background>
          <picture>
            <source
              style={{width: '100vw', filter: 'brightness(85%)'}}
              alt="webp Federico Bottos"
              srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/botts250.webp"/>
            <img
              style={{width: '100vw', filter: 'brightness(85%)'}}
              alt="Federico Bottos"
              src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/federico-bottos-7veINmpZL4Y-unsplash.jpg"
            />
          </picture>
        </Background>
        <div>
          <div ref={homeRef}><Home /></div>
          <div ref={aboutRef}><About /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={contactRef}><Contact /></div>
        </div>
      </Parallax>
    </Container>
  )
};

const Button = styled.div`
  background: rgba(26, 25, 34);
  color: white;
  font-size: 13px;
  height: 60px;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
    background: rgb(47, 44, 56);
  }
`
const Container = styled.div`
  margin: 0;
  padding: 0;
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
`

export default IndexPage
