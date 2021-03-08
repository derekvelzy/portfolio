import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';

const calc = (o) => `translateX(${o * 0.2}px)`;
const blur = (o) => {
  if (o < 0) {
    return `blur(${-1 * o * 0.005}px) grayscale(${-1 * o * 0.3}%) brightness(${100 / (-1 * o * 0.001 + 1)}%)`
  } else {
    return `blur(${o * 0.005}px) grayscale(${o * 0.3}%) brightness(${100 / (o * 0.001 + 1)}%)`
  }
}

const row1 = [
  {
    name: 'JavaScript',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/JS.png'
  },
  {
    name: 'TypeScript',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/TS.png'
  },
  {
    name: 'React',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/React.png'
  },
  {
    name: 'React Native',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/RN.png'
  },
  {
    name: 'Node.js',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/node.png'
  }
];

const row2 = [
  {
    name: 'Webpack',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/webpack.png'
  },
  {
    name: 'PostgreSQL',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/postgres.png'
  },
  {
    name: 'MongoDB',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/mongo.png'
  },
  {
    name: 'ArangoDB',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/arango.png'
  },
  {
    name: 'Nginx',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/nginx.png'
  }
];

const row3 = [
  {
    name: 'Jest/Enzyme',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/jest.png'
  },
  {
    name: 'Styled Components',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/SC.png'
  },
  {
    name: 'AWS',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/aws.png'
  },
  {
    name: 'HTML',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/html.png'
  },
  {
    name: 'CSS',
    img: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/logos/css.png'
  }
];

const Skills = () => {
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
      <div style={{
        // transform: offset.interpolate(calc)
        transform: 'translateX(0px)'
      }}>
        <Title data-aos="fade-right">Skills</Title>
      </div>
      <Boxes data-aos="fade-right">
        {row1.map((i) => (
          <Skill key={i.name}>
            <Logo alt="skills logo" src={i.img}/>
            <Name>{i.name}</Name>
          </Skill>
        ))}
        {row2.map((i) => (
          <Skill key={i.name}>
            <Logo alt="skills logo" src={i.img}/>
            <Name>{i.name}</Name>
          </Skill>
        ))}
        {row3.map((i) => (
          <Skill key={i.name}>
            <Logo alt="skills logo" src={i.img}/>
            <Name>{i.name}</Name>
          </Skill>
        ))}
      </Boxes>
    </Container>
  )
};

const Boxes = styled.div`
  width: 860px;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1130px) {
    width: 800px;
  }
  @media (max-width: 1070px) {
    width: 720px;
    height: 65vh;
  }
  @media (max-width: 930px) {
    width: 600px;
  }
  @media (max-width: 820px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 420px;
  }
  @media (max-width: 460px) {
    width: 360px;
  }
  @media (max-width: 360px) {
    width: 310px;
  }
  @media (max-width: 300px) {
    width: 280px;
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
const Logo = styled.img`
  height: 70px;
  object-fit: cover;
  @media (max-width: 1130px) {
    height: 65px;
  }
  @media (max-width: 1070px) {
    height: 60px;
  }
  @media (max-width: 820px) {
    height: 50px;
  }
  @media (max-width: 600px) {
    height: 42px;
  }
  @media (max-width: 460px) {
    height: 36px;
  }
  @media (max-width: 360px) {
    height: 30px;
  }
  @media (max-width: 300px) {
    height: 24px;
  }
`
const LogoSource = styled.source`
  height: 70px;
  object-fit: cover;
  @media (max-width: 1130px) {
    height: 65px;
  }
  @media (max-width: 1070px) {
    height: 60px;
  }
  @media (max-width: 820px) {
    height: 50px;
  }
  @media (max-width: 600px) {
    height: 42px;
  }
  @media (max-width: 460px) {
    height: 36px;
  }
  @media (max-width: 360px) {
    height: 30px;
  }
  @media (max-width: 300px) {
    height: 24px;
  }
`
const Name = styled.div`
  font-size: 13.5px;
  text-align: center;
  @media (max-width: 1070px) {
    font-size: 12px;
  }
  @media (max-width: 820px) {
    font-size: 11px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`
const Skill = styled.div`
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  width: 144px;
  height: 110px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0px;
  border-radius: 16px;
  &:hover ${Logo} {
    transition: all 0.3s ease;
    height: 76px;
  }
  @media (max-width: 1130px) {
    width: 134px;
    height: 100px;
  }
  @media (max-width: 1070px) {
    width: 120px;
    height: 92px;
  }
  @media (max-width: 820px) {
    width: 105px;
    height: 85px;
  }
  @media (max-width: 600px) {
    width: 115px;
    height: 70px;
  }
  @media (max-width: 460px) {
    width: 100px;
    height: 60px;
  }
  @media (max-width: 360px) {
    width: 80px;
    height: 55px;
  }
  @media (max-width: 300px) {
    width: 70px;
    height: 50px;
  }
`
const Title = styled.div`
  font-size: 45px;
  margin-bottom: 0vh;
  font-family: 'Lobster', cursive;
  letter-spacing: 1px;
  text-shadow: rgba(0, 0, 0, 0.6) 0px 0px 10px;
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

export default Skills;