import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const NavBar = () => {
    return (
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">ITSALANK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Nav className='ms-auto'>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a class='nav-social' href='https://github.com/ItsAlanK' target='_blank'><FontAwesomeIcon icon={ faGithub }/></a>
                    <a class='nav-social' href='https://www.instagram.com/alankinsella_/' target='_blank'><FontAwesomeIcon icon={ faInstagram }/></a>
                    <a class='nav-social' href='https://www.linkedin.com/in/alankinsella25/' target='_blank'><FontAwesomeIcon icon={ faLinkedin }/></a>
                </div>
            </span>
          </Container>
        </Navbar>
    )
}