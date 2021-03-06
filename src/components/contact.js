import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';

const calc = (o) => `translateX(${o * 0.2}px)`;
const blur = (o) => {
  if (o < 0) {
    return `blur(${-1 * o * 0.005}px) grayscale(${-1 * o * 0.3}%) brightness(${100 / (-1 * o * 0.001+ 1)}%)`
  } else {
    return `blur(${o * 0.005}px) grayscale(${o * 0.3}%) brightness(${100 / (o * 0.001+ 1)}%)`
  }
}

const Contact = () => {
  const ref = useRef();
  const [{offset}, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const offset = -1 * ref.current.getBoundingClientRect().top;
    if (offset > -800 && offset < 800) {
      set({ offset });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <Container ref={ref}>
      <animated.div style={{filter: offset.interpolate(blur), height: '100vh', position: 'absolute'}}>
        <picture>
          <source
            style={{width: '100vw', height: '100vh', objectFit: 'cover', filter: 'brightness(45%)', position: 'absolute', marginLeft: '-50vw'}}
            alt="webp Bantersnaps"
            srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/BGBantersnaps.webp"/>
          <img
            style={{width: '100vw', height: '100vh', objectFit: 'cover', filter: 'brightness(45%)', position: 'absolute', marginLeft: '-50vw'}}
            alt="Bantersnaps"
            src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/BGBantersnaps.jpg"
          />
        </picture>
      </animated.div>
      <animated.div style={{
        display: 'flex',
        alignItems: 'center',
        transform: 'translateX(0)'
      }}>
        <Title  data-aos="fade-up">Contact Info</Title>
      </animated.div>
      <Info>
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
          <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/dvelzy/">
            <LinkedIn alt="linkedin logo" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/linkedinClearBlue.jpg" />
          </a>
          <div>
            <div style={{ fontWeight: 600 }}>Let's Connect</div>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/dvelzy/"
            >linkedin.com/in/dvelzy</Link>
          </div>
        </Item>
      </Info>
      {/* <Footer>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" style={{color: 'rgb(230, 161, 255)'}}>Gatsby</a>
        </div>
      </Footer> */}
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
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 480px;
  font-weight: 300;
  @media (max-width: 950px) {
    font-size: 15px;
    width: 450px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    width: 380px;
  }
  @media (max-width: 420px) {
    font-size: 11px;
    width: 320px;
  }
  @media (max-width: 340px) {
    font-size: 10px;
    width: 290px;
  }
`
const Gmail = styled.img`
  width: 60px;
  height: 44px;
  display: flex;
  margin-right: 40px;
  @media (max-width: 950px) {
    width: 54px;
    height: 38px;
    margin-right: 36px;
  }
  @media (max-width: 420px) {
    width: 48px;
    height: 32px;
    margin-right: 28px;
  }
  @media (max-width: 330px) {
    width: 42px;
    height: 30px;
    margin-right: 22px;
  }
`
const Info = styled.div`
  width: 360px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 27px;
  @media (max-width: 950px) {
    width: 330px;
    font-size: 14px;
  }
  @media (max-width: 420px) {
    width: 270px;
    font-size: 12px;
    height: 360px;
  }
  @media (max-width: 330px) {
    width: 220px;
    font-size: 11px;
    height: 320px;
  }
`
const Item = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  background: rgba(26, 25, 34, 0.85);
  backdrop-filter: blur(12px);
  padding: 28px;
  border-radius: 20px;
  margin: 10px;
  @media (max-width: 950px) {
    padding: 24px;
  }
  @media (max-width: 420px) {
    margin: 6px;
    padding: 22px;
  }
  @media (max-width: 330px) {
    margin: 6px;
    padding: 16px;
  }
`
const Link = styled.a`
  color: rgb(99, 139, 176);
`
const LinkedIn = styled.img`
  width: 54px;
  height: 54px;
  display: flex;
  margin-right: 50px;
  cursor: pointer;
  @media (max-width: 950px) {
    width: 48px;
    height: 48px;
    margin-right: 40px;
  }
  @media (max-width: 420px) {
    width: 42px;
    height: 42px;
    margin-right: 30px;
  }
  @media (max-width: 330px) {
    width: 36px;
    height: 36px;
    margin-right: 24px;
  }
`
const Phone = styled.img`
  width: 54px;
  height: 54px;
  display: flex;
  margin-right: 46px;
  @media (max-width: 950px) {
    width: 48px;
    height: 48px;
    margin-right: 36px;
  }
  @media (max-width: 420px) {
    width: 42px;
    height: 42px;
    margin-right: 28px;
  }
  @media (max-width: 330px) {
    width: 36px;
    height: 36px;
    margin-right: 22px;
  }
`
const Title = styled.div`
  letter-spacing: 1px;
  font-size: 45px;
  font-family: 'Lobster', cursive;
  text-shadow: rgba(0, 0, 0, 0.6) 0px 0px 10px;
  align-self: center;
  margin-bottom: 4vh;
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

export default Contact;