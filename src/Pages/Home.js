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
    <div className="background" id="home">
      <Container className="container-padding hero-banner">
              <div className="inner-content">
                <h1>Hi, I'm<span className="my-name"> Jamie.</span></h1>
                <h2 className="job-title">Front-end Developer</h2>
                <p>Thriving on React adventures, freelance gigs welcome. Let's Github!</p>
                <a href="/contact" id="contact-btn" onClick={handleContactClick}>Past work</a>
              </div>
      </Container>
    </div>
  );
};

export default Home;