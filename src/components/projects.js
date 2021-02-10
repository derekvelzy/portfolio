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
          <Image style={{marginTop: title === 'Optimize Prime - System Design' ? "-50px" : "-5px"}} src={data.image.url} />
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
  font-family: 'work sans';
  font-weight: 300;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Description = styled.div`
  background: rgba(26, 25, 34, 0.7);
  backdrop-filter: blur(6px);
  padding: 5px 10px;
`
const Image = styled.img`
  width: 240px;
  height: 239px;
  object-fit: cover;
`
const ImageCont = styled.div`
  overflow: hidden;
`
const Project = styled.a`
  font-size: 15px;
  width: 240px;
  height: 260px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease;
    margin-top: -10px;
    box-shadow: rgba(0, 0, 0, 1) 0px 0px 10px;
  }
`
const ProjectTitle = styled.div`
  padding: 8px 0px 0px 10px;
  font-size: 14px;
  background: rgba(26, 25, 34, 0.7);
  backdrop-filter: blur(6px);
  height: 40px;
  z-index: 1;
  font-weight: 400;
`
const ProjectsCont = styled.div`
  display: flex;
  width: 800px;
  height: 600px;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default Projects;
