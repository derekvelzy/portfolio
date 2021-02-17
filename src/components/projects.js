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

  const projects = data.allPrismicProject.edges.map((node) => {
    const data = node.node.data.body[0].primary;
    const title = node.node.data.title[0].text;
    return (
      <Project href={data.link.url} key={data.image.url} target="_blank">
        <ProjectTitle>{title}</ProjectTitle>
        <ImageCont>
          <Image style={{marginTop: title === 'Optimize Prime System Design' ? "-50px" : "-7px"}} src={data.image.url} />
        </ImageCont>
        <Description>{data.description[0].text}</Description>
      </Project>
    )
  })


  return (
    <Container>
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
  width: 246px;
  height: 255px;
  object-fit: cover;
  transition: all 0.3s ease;
`
const ImageCont = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
`
const Project = styled.a`
  font-size: 15px;
  width: 260px;
  height: 280px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 16px;
  transition: all 0.3s ease;
  &:hover {
    margin-top: -10px;
    box-shadow: rgba(0, 0, 0, 1) 0px 0px 10px;
  }
  &:hover ${Image} {
    height: 266px;
  }
`
const ProjectTitle = styled.div`
  padding: 12px 15px 0px 15px;
  font-size: 13.5px;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  height: 40px;
  z-index: 1;
  font-weight: 600;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`
const ProjectsCont = styled.div`
  display: flex;
  width: 850px;
  height: 620px;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default Projects;
