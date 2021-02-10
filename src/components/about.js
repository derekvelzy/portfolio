import * as React from "react"
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
      <Line />
      <Box>
        <P>{data.prismicAbout.data.body[0].primary.paragraph.text}</P>
        <P>{data.prismicAbout.data.body[1].primary.paragraph.text}</P>
      </Box>
    </Container>
  )
};

const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  background: rgba(26, 25, 34, 0.7);
  backdrop-filter: blur(6px);
  padding: 20px;
  width: 550px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  line-height: 27px;
`
const Container = styled.div`
  font-family: 'work sans';
  font-weight: 300;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const P = styled.div`
  text-align: center;
  margin: 5px 0px;
`
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: -12vh;
  font-weight: 600;
  letter-spacing: 1px;
`

export default About;
