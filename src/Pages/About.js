import './About.css';
import '../index.css';
import './Home.css';
import {Container, Row, Col} from 'react-bootstrap';
import AboutMe from '../Images/about-me.jpg';



export default function About (){
    return(
      <Container fluid id="about"     className="box-shadow-bottom about-background">
            <Row className=" text-align-center about-container p-4">
              <Col xs={12} md={6} className="order-md-1 d-flex justify-content-center align-items-center">
                <div className="about-img">
                  <a href="./home">
                    <img src={AboutMe} alt="Intro" className="img-fluid" />
                  </a>
                </div>
              </Col>
              <Col xs={12} md={6} className="order-md-2 d-flex justify-content-center align-items-center ">
                <div className="about-content">
                  <h1>About Me</h1>
                  <p>Hello! I'm Jamie, a passionate front-end developer with 2 years of experience. Last year, I made the decision to dedicate myself to this field by enrolling in a front-end development bootcamp through <span className="promineo">Promineo Tech</span>. The bootcamp was an incredible experience that significantly boosted my skills and knowledge. Since completing the bootcamp, I have been actively working on various projects and studying on different coding platforms so I can apply what I learned in new projects, with a strong focus on JavaScript. My goal is to become a master in this area, continuously learning and improving.
                  I believe that learning is a lifelong journey, and I am dedicated to continuously growing in my skills as both a developer and problem solver. Let's create something remarkable together!</p>
                </div>
              </Col>
            </Row>
      </Container>
   
    )
  }