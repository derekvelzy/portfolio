import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
`;

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
  console.log(data.prismicHome.data.body[1].items[0])

  return (
    <Container>
      <Name>{data.prismicHome.data.helloworld.text}</Name>
      <Title>{data.prismicHome.data.body[0].primary.title.text}</Title>
      <Line />
      <Icons>
        <a target="_blank" href={data.prismicHome.data.body[1].items[0].github.url}>
          <Git src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/gitClear.png" />
        </a>
        <a target="_blank" href={data.prismicHome.data.body[1].items[0].linkedin.url}>
          <LinkedIn src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/linkedInClear.png" />
        </a>
        <a href={data.prismicHome.data.body[1].items[0].gmail.url}>
          <Gmail src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/emailClear.png" />
        </a>
      </Icons>
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
  height: 100vh;
`
const Git = styled.img`
  cursor: pointer;
  width: 55px;
  height: 55px;
`
const Gmail = styled.img`
  cursor: pointer;
  width: 55px;
  height: 55px;
`
const Icons = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;
`
export const Line = styled.div`
  border-bottom: 1px solid white;
  width: 400px;
  margin-bottom: 30px;
`
const LinkedIn = styled.img`
  cursor: pointer;
  width: 52px;
  height: 52px;
`
const Name = styled.div`
  font-size: 34px;
  margin-bottom: 20px;
  margin-top: 25vh;
  font-weight: 600;
  letter-spacing: 1px;
`
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`

export default Home;
