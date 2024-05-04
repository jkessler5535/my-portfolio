import '../Styles/About.css';
import '../index.css';
import '../Styles/Home.css';
import Hero from '../Images/me.png';
import {Container, Row, Col} from 'react-bootstrap';




export default function About (){
    return(
      <Container fluid id="about"     className="box-shadow-bottom about-background align-items-center justify-content-center d-flex">
            <Row className="about-container p-4">
              <Col xs={12} md={6} className="order-md-1 d-flex justify-content-center align-items-center">
                <div className="about-img">
                  <a href="./home">
                    <img src={Hero} alt="Intro" className="img-fluid" />
                  </a>
                </div>
              </Col>
              <Col xs={12} md={6} className="order-md-2 d-flex  ">
                <div className="about-content">
                  <h1 className="logo">About Me</h1>
                  <p>Let's dive right in.</p>
                  I have worked in retail for my entire 20+ year career, during which I have been very dedicated and passionate about my work. One of my biggest goals in life has always been to find a career that I am truly passionate about, where I can strive to be the best I can be. After exploring various paths, I found this sense of fulfillment in the world of coding. Over the past two years, I have actively engaged in online learning through different platforms, which has significantly broadened my knowledge and skills in this field. Despite starting from scratch, with little to no knowledge of computer navigation, I now look back with pride and a sense of achievement at how far I have come.
                  My Journey didn't stop there, as I decided to take a leap of faith and enroll in an online boot camp at Promineo Tech. Through obtaining a certificate and many late nights fueled by caffeine and banging my head on the keyboard, I have continued to pursue excellence and growth in the tech industry. While I may be relatively new to this field, my dedication and eagerness to succeed drive me forward. I am now seeking an opportunity where I can further cultivate my skills, contribute to a team, and continue to grow.<p> </p>
                </div>
              </Col>
            </Row>
      </Container>
   
    )
  }