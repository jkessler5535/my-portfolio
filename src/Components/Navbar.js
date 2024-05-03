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
          <span className="logo">JK</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto align-items-center">
            <Nav.Link as={Link} to="/" onClick={() => setCurrentPage('home')}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setCurrentPage('about')}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={() => setCurrentPage('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setCurrentPage('projects')}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setCurrentPage('contact')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
  
export default MyNavbar;