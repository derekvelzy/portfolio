import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const Resume = () => {

  return (
    <Container>
      <AllBoxes>
        <ProjectsBox>
          <Apps>Applications</Apps>
          <div>
            <ProjectTitle>Postcard, Full-Stack Engineer</ProjectTitle>
            <div>
              <B><span>&#8226;</span> Managed authentication with bcrypt password hashing and JSON Web Token user verification for all API routes</B>
              <B><span>&#8226;</span> Performed complex ArangoDB AQL queries to handle requests for 18 unique API endpoints</B>
              <B><span>&#8226;</span> Tested components using Jest and Enzyme, and mobile optimization insights with Lighthouse</B>
              <B><span>&#8226;</span> Gave users ability to reset profile avatar and attach images to Postcards using Cloudinary Image Hosting.</B>
            </div>
          </div>
          <div>
            <ProjectTitle>Optimize Prime System Design, Backend Engineer</ProjectTitle>
            <div>
              <B><span>&#8226;</span> Horizontally scaled backend with 4 server instances on AWS and load balanced with Nginx, improving latency from 4422 ms to 137 ms with a 0 percent error rate at 2500 requests per second</B>
              <B><span>&#8226;</span> Tested response times with Loader.io, K6, and New Relic</B>
              <B><span>&#8226;</span> Reduced response times by 39% with ArangoDB’s native option for query caching</B>
            </div>
          </div>
          <div>
            <ProjectTitle>Hinsdight, Full-Stack Engineer</ProjectTitle>
            <div>
              <B><span>&#8226;</span> Automated daily server-side API requests to retrieve latest prices based on stocks saved in portfolio</B>
              <B><span>&#8226;</span> Generated user’s portfolio data by combining their shares with historical stock data</B>
              <B><span>&#8226;</span> Managed redirection using React Router on the client-side and Express Router on the server-side</B>
            </div>
          </div>
          <div>
            <ProjectTitle>Ring Me Up, Mobile Developer</ProjectTitle>
            <div>
              <B><span>&#8226;</span> Included custom parallax scrolling animations and SVGs to enhance user interface</B>
              <B><span>&#8226;</span> Implemented pie charts showing the user's weekly and monthly progress</B>
            </div>
          </div>
        </ProjectsBox>
        <div>
          <ToolsBox>
            <Apps>Tools</Apps>
            <Stack>General</Stack>
            <div style={{fontSize: "16px", marginBottom: "4px"}}>JavaScript, TypeScript, Git, AWS</div>
            <FBTools>
              <FrontBack>
                <Stack>Frontend</Stack>
                <div>React</div>
                <div>React Native</div>
                <div>Next.js</div>
                <div>Jest & Enzyme</div>
                <div>Styled Components</div>
                <div>jQuery</div>
                <div>Webpack</div>
                <div>HTML, CSS</div>
                <div>Figma</div>
              </FrontBack>
              <FrontBack>
                <Stack>Backend</Stack>
                <div>Node.js</div>
                <div>Express</div>
                <div>PostgreSQL</div>
                <div>MongoDB</div>
                <div>ArangoDB</div>
                <div>Nginx</div>
                <div>New Relic</div>
              </FrontBack>
            </FBTools>
          </ToolsBox>
          <EducationBox>
            <Apps>Edcuation</Apps>
            <Stack>Arizona State University</Stack>
            <div style={{fontSize: "14px"}}>BS, Mechanical Engineering</div>
            <Stack>Hack Reactor, SF</Stack>
            <div style={{fontSize: "14px"}}>Advanced Software Engineering Immersive Program</div>
          </EducationBox>
        </div>
      </AllBoxes>
    </Container>
  )
};

const AllBoxes = styled.div`
  display: flex;
  justify-content: space-between;
`
const Apps = styled.div`
  font-size: 24px;
  font-weight: 600;
`
const B = styled.div`
  margin: 5.8px 0px;
`
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
const EducationBox = styled.div`
  margin: 30px 0px 0px 30px;
  width: 240px;
  height: 180px;
  background: rgba(26, 25, 34, 0.7);
  backdrop-filter: blur(6px);
  color: rgb(246, 249, 250);
  padding: 18px 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
`
const FBTools = styled.div`
  display: flex;
  justify-content: space-between;
`
const FrontBack = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 22px;
`
const ProjectTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-top: 15px;
  text-decoration: underline;
`
const Stack = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-top: 8px;
  text-decoration: underline;
`
const ProjectsBox = styled.div`
  width: 630px;
  background: rgba(26, 25, 34, 0.7);
  backdrop-filter: blur(6px);
  color: rgb(246, 249, 250);
  padding: 18px 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  font-size: 14px;
`
const ToolsBox = styled.div`
  margin-left: 30px;
  width: 240px;
  height: 330px;
  background: rgba(26, 25, 34, 0.7);
  backdrop-filter: blur(6px);
  color: rgb(246, 249, 250);
  padding: 18px 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  font-size: 15px;
`

export default Resume;