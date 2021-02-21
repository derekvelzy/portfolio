import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import { Line } from './home.js';

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
  `)

  return (
    <Container>
      <Title>About Me</Title>
      <Box data-aos="fade-up">
        <P>{data.prismicAbout.data.body[0].primary.paragraph.text}</P>
        <P>{data.prismicAbout.data.body[1].primary.paragraph.text}</P>
      </Box>
      <div style={{height: '26px'}}/>
      <Box data-aos="fade-up">
        <Education>
          <Logo src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/asu.png" />
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
          <Logo src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/hackreactor.png" />
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
`

export default About;
