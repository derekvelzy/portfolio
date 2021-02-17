import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const Contact = () => {

  return (
    <Container>
      <Title>Contact Info</Title>
      <Info>
        <Item>
          <Gmail src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/gmailClear.png" />
          <div>
            <div>Email Me</div>
            <div>dmvelzy@gmail.com</div>
          </div>
        </Item>
        <Item>
          <Phone src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/phoneIcon.png" />
          <div>
            <div>Give me a ring</div>
            <div>(925) 200-7710</div>
          </div>
        </Item>
        <Item>
          <a target="_blank" href="https://www.linkedin.com/in/dvelzy/">
            <LinkedIn src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/linkedinClearBlue.jpg" />
          </a>
          <div style={{ marginLeft: "10px" }}>
            <div>Let's Connect</div>
            <Link target="_blank" href="https://www.linkedin.com/in/dvelzy/">linkedin.com/in/dvelzy</Link>
          </div>
        </Item>
      </Info>
      <Footer>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        <div>Photograph by Federico Bottos</div>
      </Footer>
    </Container>
  )
};

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 480px;
`
const Gmail = styled.img`
  width: 60px;
  height: 44px;
  display: flex;
  margin-right: 40px;
`
const Info = styled.div`
  margin-top: 40px;
  width: 290px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 27px;
`
const Item = styled.div`
  display: flex;
`
const Link = styled.a`
  color: rgb(99, 139, 176);
`
const LinkedIn = styled.img`
  width: 54px;
  height: 54px;
  display: flex;
  margin-right: 40px;
  cursor: pointer;
`
const Phone = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  margin-right: 40px;
`
const Title = styled.div`
  margin-top: -10vh;
  letter-spacing: 1px;
  font-size: 40px;
  margin-bottom: 20px;
  font-family: 'Lobster', cursive;
`

export default Contact;