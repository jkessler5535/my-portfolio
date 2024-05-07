import React from 'react';
import '../Styles/Home.css';
import {Container} from 'react-bootstrap';
import '../Images/ImageStyles.css';
import { FaGithub } from "react-icons/fa";





function Home() {
  
  /* handles contact button */
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-btn');
    contactSection.scrollIntoView({ behavior: 'smooth'});
  };



  return (
    <div className="background" id="home">
      <Container className="container-padding hero-banner">
              <div className="inner-content">
                <h1>Hi, I'm<span className="my-name"> Jamie.</span></h1>
                <h2 className="job-title">Front-end Developer</h2>
                <p>Exploring React and open for freelance work. Let's code together!<br/> Follow me on Github.</p> 
                <div className="btn-container">
                    <a href="/contact" id="contact-btn" onClick={handleContactClick}>Past work</a>
                    <a href="https://www.github.com/jkessler5535" target="_blank" rel="noreferrer"><FaGithub className="github-btn"/></a>
                </div>
              </div>
      </Container>
    </div>
  );
};

export default Home;