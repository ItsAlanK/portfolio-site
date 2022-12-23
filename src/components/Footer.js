import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} lg={4} className="text-center">
            <Navbar.Brand href="#">ItsAlanK</Navbar.Brand>
          </Col>
          <Col sm={12} lg={4} className="text-center">
            <div className="social-icon">
              <a class='nav-social' href='https://github.com/ItsAlanK' target='_blank'><FontAwesomeIcon icon={ faGithub }/></a>
              <a class='nav-social' href='https://www.instagram.com/itsalank_/' target='_blank'><FontAwesomeIcon icon={ faInstagram }/></a>
              <a class='nav-social' href='https://www.linkedin.com/in/alankinsella25/' target='_blank'><FontAwesomeIcon icon={ faLinkedin }/></a>
            </div>
          </Col>
          <Col sm={12} lg={4} className="text-center">
            <small >&copy; Copyright 2022 <a href='https://itsalank.com'>itsalank.com</a></small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}