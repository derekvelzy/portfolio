import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const images = [
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
  },
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
  },
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

  return (
    <Container>
      <Boxes>
        {images.map((i) => (
          <Skill key={i.name}>
            <Logo src={i.img}/>
            <Name>{i.name}</Name>
          </Skill>
        ))}
      </Boxes>
    </Container>
  )
};

const Boxes = styled.div`
  width: 860px;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
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
`
const Name = styled.div`
  font-size: 13.5px;
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
`

export default Skills;