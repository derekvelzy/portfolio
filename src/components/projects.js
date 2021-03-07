import React, { useState, useRef, useEffect } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';
import BGKorhonen from './photos/BGKorhonen.jpg';
import BGKorhonen150 from './photos/BGKorhonen150.webp';

const webps = [
  'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/projects/a_grouply.webp',
  'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/projects/b_shadetree.webp',
  'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/Main.webp',
  'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/hindsightSC.webp',
  'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/projects/e_ringmeup.webp',
  'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/sdcDiagram.webp'
]

const calc = (o) => `translateX(${o * 0.2}px)`;
const blur = (o) => {
  if (o < 0) {
    return `blur(${-1 * o * 0.005}px) grayscale(${-1 * o * 0.3}%) brightness(${100 / (-1 * o * 0.001 + 1)}%)`
  } else {
    return `blur(${o * 0.005}px) grayscale(${o * 0.3}%) brightness(${100 / (o * 0.001 + 1)}%)`
  }
}

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

  const ref = useRef();
  const [{offset}, set] = useSpring(() => ({ offset: 0 }));
  const [{blurOff, setBlur}] = useSpring(() => ({blurOff: 0}))

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

  const [hover, setHover] = useState(false);
  let i = -1;
  const projects = data.allPrismicProject.edges.map((node) => {
    i++;
    const data = node.node.data.body[0].primary;
    const title = node.node.data.title[0].text;
    return (
      <Project
        href={data.link.url}
        key={data.image.url}
        rel="noopener"
        target="_blank"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ProjectTitle>{title}</ProjectTitle>
        <ImageCont>
          <picture>
            <ImageSource
              style={{marginTop: title === 'Optimize Prime System Design' ? "-50px" : "-7px"}}
              alt={`${title} project`}
              srcSet={webps[i]}
            />
            <Image
              style={{marginTop: title === 'Optimize Prime System Design' ? "-50px" : "-7px"}}
              alt={`${title} project`}
              src={data.image.url}
            />
          </picture>
        </ImageCont>
        <Description>{data.description[0].text}</Description>
      </Project>
    )
  })


  return (
    <Container ref={ref}>
      <animated.div style={{filter: offset.interpolate(blur), height: '100vh', position: 'absolute'}}>
        <picture>
          <source
            style={{width: '100vw', height: '100vh', objectFit: 'cover', filter: 'brightness(55%)', position: 'absolute', marginLeft: '-50vw'}}
            alt="webp Korhonen"
            srcSet={BGKorhonen150}/>
          <img
            style={{width: '100vw', height: '100vh', objectFit: 'cover', filter: 'brightness(55%)', position: 'absolute', marginLeft: '-50vw'}}
            alt="Kornonen"
            src={BGKorhonen}
          />
        </picture>
      </animated.div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'translateX(0px)'
      }}>
        <Title data-aos="fade-left">Projects</Title>
        <LinksTitle data-aos="fade-left">Links to Repos on Github</LinksTitle>
      </div>
      <ProjectsCont data-aos='fade-left' data-aos-offset="50">{projects}</ProjectsCont>
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
  @media (max-width: 1135px) {
    font-size: 14px;
  }
  @media (max-width: 550px) {
    padding: 6px 6px8px 8px;
    font-size: 13px;
  }
  @media (max-width: 470px) {
    padding: 4px 4px 6px 4px;
    font-size: 12px;
  }
`
const Image = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  @media (max-width: 1135px) {
    width: 230px;
  }
  @media (max-width: 1060px) {
    width: 220px;
  }
  @media (max-width: 950px) {
    height: 180px;
    width: 220px;
  }
  @media (max-width: 550px) {
    height: 170px;
    width: 200px;
  }
  @media (max-width: 470px) {
    width: 180px;
    height: 150px;
  }
  @media (max-width: 400px) {
    width: 150px;
    height: 140px;
  }
  @media (max-width: 350px) {
    height: 130px;
    width: 140px;
  }
  @media (max-width: 330px) {
    height: 120px;
    width: 134px;
  }
`
const ImageSource = styled.source`
  width: 240px;
  height: 240px;
  object-fit: cover;
  @media (max-width: 1135px) {
    width: 230px;
  }
  @media (max-width: 1060px) {
    width: 220px;
  }
  @media (max-width: 950px) {
    height: 180px;
    width: 220px;
  }
  @media (max-width: 550px) {
    height: 170px;
    width: 200px;
  }
  @media (max-width: 470px) {
    width: 180px;
    height: 150px;
  }
  @media (max-width: 400px) {
    width: 150px;
    height: 140px;
  }
  @media (max-width: 350px) {
    height: 130px;
    width: 140px;
  }
  @media (max-width: 330px) {
    height: 120px;
    width: 134px;
  }
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
  @media (max-width: 950px) {
    margin-bottom: 10px;
  }
  @media (max-width: 550px) {
    margin-bottom: 10px;
    font-size: 14px;
  }
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
  @media (max-width: 1135px) {
    font-size: 14px;
  }
  @media (max-width: 550px) {
    padding: 6px 0px 2px 8px;
    font-size: 13px;
  }
  @media (max-width: 470px) {
    padding: 4px 0px 1px 6px;
    font-size: 12px;
  }
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
  @media (max-width: 1135px) {
    width: 240px;
    font-size: 14px;
  }
  @media (max-width: 1060px) {
    width: 230px;
    font-size: 13px;
  }
  @media (max-width: 950px) {
    width: 240px;
    margin-bottom: 20px;
    height: 200px;
  }
  @media (max-width: 880px) {
    height: 200px;
  }
  @media (max-width: 550px) {
    width: 214px;
    margin-bottom: 10px;
    height: 180px;
  }
  @media (max-width: 470px) {
    width: 190px;
    margin-bottom: 10px;
    height: 170px;
  }
  @media (max-width: 400px) {
    width: 160px;
    margin-bottom: 10px;
    height: 150px;
  }
  @media (max-width: 350px) {
    margin-bottom: 10px;
    width: 150px;
  }
  @media (max-width: 330px) {
    margin-bottom: 10px;
    width: 140px;
  }
`
const ProjectsCont = styled.div`
  display: flex;
  width: 850px;
  height: 590px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1135px) {
    width: 780px;
  }
  @media (max-width: 1060px) {
    width: 720px;
  }
  @media (max-width: 950px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 440px;
  }
  @media (max-width: 470px) {
    width: 390px;
  }
  @media (max-width: 400px) {
    width: 330px;
  }
  @media (max-width: 350px) {
    width: 310px;
  }
  @media (max-width: 330px) {
    width: 284px;
  }
`
const Title = styled.div`
  margin-bottom: 1vh;
  letter-spacing: 1px;
  font-size: 45px;
  font-family: 'Lobster', cursive;
  text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 10px;
  @media (max-width: 950px) {
    font-size: 40px;
  }
  @media (max-width: 420px) {
    font-size: 35px;
  }
  @media (max-width: 330px) {
    font-size: 30px;
  }
`

export default Projects;
