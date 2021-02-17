import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const Projects = () => {
  const data = useStaticQuery(graphql`
  {
    allPrismicProject {
      edges {
        node {
          data {
            title {
              text
            }
            body {
              primary {
                description {
                  text
                }
                image {
                  url
                }
                link {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
  `)

  const [hover, setHover] = useState(false);

  const projects = data.allPrismicProject.edges.map((node) => {
    const data = node.node.data.body[0].primary;
    const title = node.node.data.title[0].text;
    return (
      <Project
        href={data.link.url}
        key={data.image.url}
        arget="_blank"
        data-aos={title === 'Grouply' || title === 'Shadetree' || title === 'Postcard' ? 'fade-right' : 'fade-left'}
        data-aos-offset="50"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ProjectTitle>{title}</ProjectTitle>
        <ImageCont>
          <Image
            style={{marginTop: title === 'Optimize Prime System Design' ? "-50px" : "-7px"}}
            src={data.image.url}
          />
        </ImageCont>
        <Description>{data.description[0].text}</Description>
      </Project>
    )
  })


  return (
    <Container>
      <Title>Projects</Title>
      <LinksTitle>Links to Repos on Github</LinksTitle>
      <ProjectsCont>{projects}</ProjectsCont>
    </Container>
  )
};

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Description = styled.div`
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  padding: 10px 15px 15px 15px;
  font-size: 14px;
  font-weight: 300;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`
const Image = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
`
const ImageCont = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  margin-top: -2px;
`
const LinksTitle = styled.div`
  margin-bottom: 2vh;
  text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 10px;
`
const ProjectTitle = styled.div`
  padding: 12px 0px 0px 15px;
  font-size: 14.5px;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  height: 40px;
  z-index: 1;
  font-weight: 600;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`
const Project = styled.a`
  font-size: 15px;
  width: 260px;
  height: 270px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 16px;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.1s ease;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px;
    margin-top: -4px;
  }
  &:hover ${ProjectTitle} {
    transition: all 0.7s ease;
    background: rgba(245, 245, 245, 0.75);
    color: black;
  }
  &:hover ${Description} {
    transition: all 0.7s ease;
    background: rgba(245, 245, 245, 0.75);
    color: black;
  }
  &:hover ${ImageCont} {
    transition: all 0.7s ease;
    background: rgba(245, 245, 245, 0.75);
    color: black;
  }
`
const ProjectsCont = styled.div`
  display: flex;
  width: 850px;
  height: 590px;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Title = styled.div`
  margin-bottom: 1vh;
  letter-spacing: 1px;
  font-size: 45px;
  font-family: 'Lobster', cursive;
  text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 10px;
`

export default Projects;
