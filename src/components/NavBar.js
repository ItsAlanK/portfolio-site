import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className={ activeLink === 'home' ? 'active' : '' } onClick={() => onUpdateActiveLink('home')}>ITSALANK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Nav className='ms-auto'>
            <Nav.Link href="#about" className={ activeLink === 'about' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#projects" className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={ activeLink === 'contact' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
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