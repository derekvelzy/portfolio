import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';
import { animated, useSpring } from "react-spring";
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
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

  const [view, setView] = useState(0);

  // const handleScroll = () => {
  //   console.log(ref.current.getBoundingClientRect().top)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // })

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

  // return (
  //   <Container ref={ref}>
  //     <Helmet
  //       htmlAttributes={{
  //         lang: 'en',
  //       }}
  //     >
  //       <title>Derek Velzy</title>
  //       <link rel="site" href="http://dvelzyportfolio.com" />
  //       <meta name="Description" content="derek velzy's portfolio site" />
  //     </Helmet>
  //     <Switch>
  //       <Button onClick={homeScroll}>home</Button>
  //       <Button onClick={aboutScroll}>about</Button>
  //       <Button onClick={projectsScroll}>projects</Button>
  //       <Button onClick={skillsScroll}>skills</Button>
  //       <Button onClick={contactScroll}>contact</Button>
  //     </Switch>
  //     {/* <Parallax strength={2600}> */}
  //     <Parallax pages={5}>
  //       <ParallaxLayer speed={-0.4} offset={0}>
  //         <picture>
  //           <source
  //             style={{width: '100vw', height: '350vh', objectFit: 'cover', filter: 'brightness(85%)', position: 'absolute', zIndex: '-1'}}
  //             alt="webp Federico Bottos"
  //             srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/botts250.webp"/>
  //           <img
  //             style={{width: '100vw', height: '350vh', objectFit: 'cover', filter: 'brightness(85%)', position: 'absolute', zIndex: '-1'}}
  //             alt="Federico Bottos"
  //             src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/federico-bottos-7veINmpZL4Y-unsplash.jpg"
  //           />
  //         </picture>
  //         </ParallaxLayer>

  //         <ParallaxLayer speed={0.1} offset={0}><div ref={homeRef}><Home /></div></ParallaxLayer>
  //         <ParallaxLayer speed={0.1} offset={1}><div ref={aboutRef}><About /></div></ParallaxLayer>
  //         <ParallaxLayer speed={0.1} offset={2}><div ref={projectsRef}><Projects /></div></ParallaxLayer>
  //         <ParallaxLayer speed={0.1} offset={3}><div ref={skillsRef}><Skills /></div></ParallaxLayer>
  //         <ParallaxLayer speed={0.1} offset={4}><div ref={contactRef}><Contact /></div></ParallaxLayer>

  //     </Parallax>
  //   </Container>
  // )

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
  height: 100vh;
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
