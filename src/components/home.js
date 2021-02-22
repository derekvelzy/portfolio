import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const messages = [
  'Full-Stack Software Engineer',
  'Two-Wheeled Enthusiast',
  'Guitarist',
  'Climber',
  'Camper'
];
const images = [
  {
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/a.webp',
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/IMG_0584.jpg'
  },
  {
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/b.webp',
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/wheelie.jpg'
  },
  {
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/c.webp',
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/IMG_4281.jpg'
  },
  {
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/d.webp',
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/IMG_4279.jpg'
  },
  {
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/e.webp',
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/IMG_4280.jpg'
  }
];

const Home = () => {
  const data = useStaticQuery(graphql`
  {
    prismicHome {
      data {
        helloworld {
          text
        }
        body {
          ... on PrismicHomeBodyTitle {
            primary {
              title {
                text
              }
            }
          }
          ... on PrismicHomeBodyLinks {
            items {
              gmail {
                url
              }
              linkedin {
                url
              }
              github {
                url
              }
            }
          }
        }
      }
    }
  }
  `)

  const [frame, setFrame] = useState(0);
  const [selected, setSelected] = useState(
    <CSSTransition key={0} timeout={700} classNames="transition">
      <TransContainer>
        <Pic>
          <source alt="derek velzy" srcSet={images[0].webp} />
          <Image alt="derek velzy" src={images[0].jpg} />
        </Pic>
        <Title>{messages[0]}</Title>
      </TransContainer>
    </CSSTransition>
  );

  useEffect(() => {
    const change = setInterval(() => {
      if (frame > messages.length - 2) {
        setSelected(
          <CSSTransition key={0} timeout={700} classNames="transition">
            <TransContainer>
              <Pic>
                <source alt="derek velzy" srcSet={images[0].webp} />
                <Image alt="derek velzy" src={images[0].jpg} />
              </Pic>
              <Title>{messages[0]}</Title>
            </TransContainer>
          </CSSTransition>
        )
        setFrame(0);
      } else {
        setSelected(
          <CSSTransition key={frame + 1} timeout={700} classNames="transition">
            <TransContainer>
              <Pic>
                <source alt="derek velzy" srcSet={images[frame + 1].webp} />
                <Image alt="derek velzy" src={images[frame + 1].jpg} />
              </Pic>
              <Title>{messages[frame + 1]}</Title>
            </TransContainer>
          </CSSTransition>
        )
        setFrame(frame + 1);
      }
    }, 2600);
    return () => clearInterval(change);
  }, [frame])

  return (
    <Container>
      <Name>{data.prismicHome.data.helloworld.text}</Name>
      <TransitionGroup component={Trans}>
        {selected}
      </TransitionGroup>
      <Line />
      <Icons>
        <a
          rel="noopener"
          target="_blank"
          href={data.prismicHome.data.body[1].items[0].github.url}
        >
          <Git alt="github logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/github-icon-white-6.jpg" />
        </a>
        <a
          el="noopener"
          target="_blank"
          href={data.prismicHome.data.body[1].items[0].linkedin.url}
        >
          <LinkedIn alt="linkedin logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/linkedinWhite.png" />
        </a>
        <a href={data.prismicHome.data.body[1].items[0].gmail.url}>
          <Gmail alt="email logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/emailWhite.png" />
        </a>
      </Icons>
    </Container>
  )
};

const Title = styled.div`
  font-size: 25px;
  @media (max-width: 700px) {
    font-size: 22px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 420px) {
    font-size: 15px;
  }
`
const Trans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .transition-enter {
    opacity: 0.01;
    transform: translate(-50px, 0px);
    transition: all 700ms ease-in;
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0px, 0px);
    transition: all 700ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0px, 0px);
    transition: all 700ms ease-in;
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(50px, 0px);
    transition: all 700ms ease-in;
  }
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
const Git = styled.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.4s ease;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 15px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
  }
`
const Gmail = styled.img`
  cursor: pointer;
  width: 32px;
  height: 23px;
  transition: all 0.4s ease;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 15px;
  }
`
const Icons = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    width: 230px;
  }
  @media (max-width: 330px) {
    width: 200px;
  }
`
const Image = styled.img`
  height: 24vh;
  width: 24vh;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 15px;
  border: 2px solid white;
`
const ImageSource = styled.source`
  height: 24vh;
  width: 24vh;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 15px;
  border: 2px solid white;
`
export const Line = styled.div`
  border-bottom: 1px solid white;
  width: 400px;
  margin-bottom: 30px;
  @media (max-width: 420px) {
    width: 270px;
  }
  @media (max-width: 330px) {
    width: 230px;
  }
`
const LinkedIn = styled.img`
  cursor: pointer;
  width: 29px;
  height: 29px;
  transition: all 0.4s ease;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
  }
`
const Name = styled.div`
  font-size: 45px;
  margin-top: 17vh;
  font-family: 'Lobster', cursive;
  letter-spacing: 1px;
  margin-bottom: 38vh;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  @media (max-width: 700px) {
    font-size: 35px;
    margin-bottom: 38.5vh;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 39vh;
  }
  @media (max-width: 420px) {
    font-size: 25px;
    margin-bottom: 40vh;
  }
  @media (max-width: 330px) {
    font-size: 20px;
    margin-bottom: 40vh;
  }
`
const Pic = styled.picture`
  margin-bottom: 3vh;
`
const TransContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 28vh;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
`

export default Home;
