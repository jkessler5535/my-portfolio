import React from 'react';
import '../Styles/Home.css';
import {Container} from 'react-bootstrap';
import '../Images/ImageStyles.css';





function Home() {
  
  /* handles contact button */
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-btn');
    contactSection.scrollIntoView({ behavior: 'smooth'});
  };



  return (
    <div className="background box-shadow-bottom" id="home">
      <Container className="container-padding hero-banner">
              <div className="inner-content">
                <h1>Hi, I'm <span className="my-name">Jamie</span></h1>
                <h2 className="job-title">Front-end Developer</h2>
                <p> I'm a passionate thinker dedicated to turning ideas into cool projects. Come explore my work and see the cool stuff I make.</p>
                <a href="/contact" id="contact-btn" onClick={handleContactClick}>Check me out</a>
              </div>
      </Container>
    </div>
  );
};

export default Home;