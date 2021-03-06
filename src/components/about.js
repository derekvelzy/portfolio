import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import { animated, useSpring } from "react-spring";
import { Line } from './home.js';

const calc = (o) => `translateX(${o * 0.2}px)`;
const blur = (o) => {
  if (o < 0) {
    return `blur(${-1 * o * 0.005}px) grayscale(${-1 * o * 0.3}%) brightness(${100 / (-1 * o * 0.001 + 1)}%)`
  } else {
    return `blur(${o * 0.005}px) grayscale(${o * 0.3}%) brightness(${100 / (o * 0.001 + 1)}%)`
  }
}

const About = () => {
  const data = useStaticQuery(graphql`
  {
    prismicAbout {
      data {
        about {
          text
        }
        body {
          ... on PrismicAboutBodyAbout {
            primary {
              paragraph {
                text
              }
            }
          }
        }
      }
    }
  }
  `);

  const ref = useRef();
  const [{offset}, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const offset = -1 * ref.current.getBoundingClientRect().top;
    set({ offset });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <Container ref={ref}>
      <animated.div style={{
        filter: offset.interpolate(blur),
        height: '100vh', position: 'absolute'
        }}>
        <picture>
          <source
            style={{width: '100vw', height: '100vh', objectFit: 'cover', filter: 'brightness(65%)', position: 'absolute', marginLeft: '-50vw'}}
            alt="webp Horner"
            srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/BGHorner.webp"/>
          <img
            style={{width: '100vw', height: '100vh', objectFit: 'cover', filter: 'brightness(65%)', position: 'absolute', marginLeft: '-50vw'}}
            alt="Horner"
            src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/BGHorner.jpg"
          />
        </picture>
      </animated.div>
      <animated.div style={{transform: offset.interpolate(calc)}}>
        <Title>About Me</Title>
      </animated.div>
      <Box data-aos="fade-up">
        <P>{data.prismicAbout.data.body[0].primary.paragraph.text}</P>
        <P>{data.prismicAbout.data.body[1].primary.paragraph.text}</P>
      </Box>
      <div style={{height: '26px'}}/>
      <Box data-aos="fade-up">
        <Education>
          <Logo alt="asu logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/asu.png" />
          <Content>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <School>Arizona State University</School>
              <div>2014 - 2018</div>
            </div>
            <div>Bachelor of Science, Mechanical Engineering</div>
          </Content>
        </Education>
        <div style={{height: '16px'}}/>
        <Education>
          <Logo alt="hack reactor logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/hackreactor.png" />
          <Content>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <School>Hack Reactor, San Francisco</School>
              <div>2020 - 2021</div>
            </div>
            <div>Software Engineering Immersive</div>
          </Content>
        </Education>
      </Box>
    </Container>
  )
};

const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  padding: 24px;
  width: 630px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  line-height: 27px;
  border-radius: 20px;
  @media (max-width: 900px) {
    font-size: 15.5px;
    width: 516px;
  }
  @media (max-width: 790px) {
    font-size: 15px;
    width: 460px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
    line-height: 24px;
    width: 400px;
    padding: 20px;
  }
  @media (max-width: 470px) {
    font-size: 13px;
    line-height: 24px;
    width: 340px;
    padding: 16px;
  }
  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 20px;
    width: 300px;
    padding: 12px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
    width: 260px;
    padding: 12px;
  }
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Content = styled.div`
  width: 560px;
`
const Education = styled.div`
  line-height: 24px;
  display: flex;
  @media (max-width: 420px) {
    line-height: 20px;
    font-size: 10px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    line-height: 20px;
  }
`
const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`
const P = styled.div`
  text-align: center;
  margin: 5px 0px;
`
const School = styled.div`
  font-weight: 600;
`
const Title = styled.div`
  font-size: 45px;
  margin-bottom: 26px;
  font-family: 'Lobster', cursive;
  letter-spacing: 1px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  @media (max-width: 470px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 420px) {
    font-size: 35px;
    margin-bottom: 15px;
  }
  @media (max-width: 330px) {
    font-size: 30px;
    margin-bottom: 5px;
  }
`

export default About;
