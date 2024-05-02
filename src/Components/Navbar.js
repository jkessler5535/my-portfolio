import { Navbar, Nav, Container } from 'react-bootstrap';
import '.styles/Navbar.css';



function MyNavbar({ setCurrentPage})  {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <Container>
        <Navbar expand="lg" className="mb-2">
          <Navbar.Brand className="mr-auto">
            <span className="logo">JK</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto align-items-center">
                <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
                <Nav.Link onClick={() => handleNavClick('About')}>About</Nav.Link>
                <Nav.Link onClick={() => handleNavClick('skills')}>Skills</Nav.Link>
                <Nav.Link onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
                <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Container>
  );
}

export default MyNavbar;