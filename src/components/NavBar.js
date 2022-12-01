import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">ITSALANK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Nav className="me-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><FontAwesomeIcon icon={ faGithub }/></a>
                    <a href='#'><FontAwesomeIcon icon={ faInstagram }/></a>
                    <a href='#'><FontAwesomeIcon icon={ faLinkedin }/></a>
                </div>
            </span>
          </Container>
        </Navbar>
    )
}