import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Info>
        <Title>Contact Info</Title>
        <Item data-aos="fade-up">
          <Gmail alt="gmail logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/gmailClear.png" />
          <div>
            <div style={{ fontWeight: 600 }}>Email Me</div>
            <div>dmvelzy@gmail.com</div>
          </div>
        </Item>
        <Item data-aos="fade-up">
          <Phone alt="phone icon" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/phoneIcon.png" />
          <div>
            <div style={{ fontWeight: 600 }}>Give me a ring</div>
            <div>(925) 200-7710</div>
          </div>
        </Item>
        <Item data-aos="fade-up">
          <a target="_blank" href="https://www.linkedin.com/in/dvelzy/">
            <LinkedIn alt="linkedin logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/linkedinClearBlue.jpg" />
          </a>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ fontWeight: 600 }}>Let's Connect</div>
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
  font-weight: 300;
`
const Gmail = styled.img`
  width: 60px;
  height: 44px;
  display: flex;
  margin-right: 40px;
`
const Info = styled.div`
  width: 360px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 27px;
`
const Item = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  padding: 28px;
  border-radius: 20px;
  margin: 10px;
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
  width: 54px;
  height: 54px;
  display: flex;
  margin-right: 46px;
`
const Title = styled.div`
  letter-spacing: 1px;
  font-size: 45px;
  font-family: 'Lobster', cursive;
  text-shadow: rgba(0, 0, 0, 0.6) 0px 0px 10px;
  align-self: center;
  margin-bottom: 4vh;
`

export default Contact;