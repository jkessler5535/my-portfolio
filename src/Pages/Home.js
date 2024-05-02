import '../Styles/Home.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../Images/ImageStyles.css';
import Sidebar from '../Components/Sidebar';



function Home() {
  
  /* handles contact button */
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth'});
  };



  return (
    <div className="background box-shadow-bottom" id="home">
      <Sidebar/>
      <Container className="container-padding hero-banner">
          <Row className="justify-content-center">
            <Col md={6} className="order-md-1 d-flex justify-content-center flex-column align-items-center ">
              <div className="inner-content">
                <h1>Hi, I'm <span className="my-name">Jamie!</span></h1>
                <h2 className="job-title">Front end Developer</h2>
                <p>Vista, Ca Based developer. That creates Web applications and responsive user interfaces. </p>
                <a href="/contact" className="contact-btn" onClick={handleContactClick}>Contact</a>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Home;