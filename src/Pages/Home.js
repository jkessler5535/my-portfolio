import React from 'react';
import '../Styles/Home.css';
import {Container} from 'react-bootstrap';
import '../Images/ImageStyles.css';
import { BiLogoGithub } from "react-icons/bi";




function Home() {
  
  /* handles contact button */
  const handleContactClick = () => {
    const contactSection = document.getElementById('github-btn');
    contactSection.scrollIntoView({ behavior: 'smooth'});
  };



  return (
    <div className="background" id="home">
      <Container className=" hero-banner">
              <div className="inner-content">
                <h1 className="align-left">Hi, I'm<span className="my-name"> Jamie.</span></h1>
                <h2 className="job-title align-left">Front-end Developer</h2>
                <p className="align-left">Exploring React and open for freelance work. Let's code together!</p> 
                <div className="btn-container">
                    <a href="https://www.github.com/jkessler5535" target="_blank"  rel="noreferrer" id="github-btn" onClick={handleContactClick}><BiLogoGithub className="github-icon"/>Follow me on GitHub</a>
                </div>
              </div>
      </Container>
    </div>
  );
};

export default Home;