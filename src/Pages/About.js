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
                  <p>For over 20 years, I dedicated my career to the retail industry. Despite my dedication, I always felt a lack of fullfillment until I discovered coding. When I discovered coding, It instantly brought back memories of spending late nights in my room as a child obsessivley customizing my MySpace page to perfection. Little did I realize then that there was a profession that aligned so closley with the childhood hobby I was so passionate about. After exploring various paths, dedicating over 2 years to self-study and earning a certificate through an online coding boot camp, I now reflect with pride on how far I've come. Starting with minimal computer knowledge, I can now smile at the countless late nights fuelded by caffeine and banging my head on the keyboard. While I may be super green, my dedication and eagerness to succeed push me forward. I am now actively seeking opportunities to further develop my skills, contribute to a team, and continue my journey of growth.   </p>
                </div>
              </Col>
            </Row>
      </Container>
   
    )
  }