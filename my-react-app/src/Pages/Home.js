import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import HeroImage from '../Images/me.png';
import '../Images/ImageStyles.css';

import About from '../Pages/About';




function Home() {
  
  /* handles contact button */
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth'});
  };

  return(
    <div className="Container">
     <div className="main-Section row">
      <div className="col-md-6 content-container">
          <h1>Hi, Im Jamie!</h1>
          <h2>Front end Developer</h2>
          <button onClick={handleContactClick}>Contact</button>
        </div>
        <div className="col-md-6 polaroid">
          <a href="#">
          <img src={HeroImage} alt="Intro Image" 
          className="img-fluid"/>
          </a>
        </div>
      </div>
      <div id="about">
        <About/>
      </div>
    </div>
  );
};
    export default Home;