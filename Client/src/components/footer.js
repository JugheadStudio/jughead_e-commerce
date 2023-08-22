import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import JugheadLogo from "../jughead-logo-primary.svg";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Container className='footer-container'>
      <Row>
        <Col>
          <img src={JugheadLogo} alt="Jughead Logo" />
        </Col>

        <Col>
          <div className='w-100 d-flex justify-content-center navbar-links'>
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <p className='teal weight-700 slash-divider'>&#47;&#47;</p>
            <NavLink to="/clothing" className='nav-link'>Clothing</NavLink>
            <p className='teal weight-700 slash-divider'>&#47;&#47;</p>
            <NavLink to="/prints" className='nav-link'>Prints</NavLink>
          </div>

          <div className='w-100 d-flex justify-content-center navbar-links footer-nav'>
            <NavLink to="/team" className='nav-link'>Team</NavLink>
            <p className='teal weight-700 slash-divider'>&#47;&#47;</p>
            <NavLink to="/contact-us" className='nav-link'>Contact Us</NavLink>
            <p className='teal weight-700 slash-divider'>&#47;&#47;</p>
            <NavLink to="/affiliate-program" className='nav-link'>Affiliate Program</NavLink>
            <p className='teal weight-700 slash-divider'>&#47;&#47;</p>
            <NavLink to="/policy" className='nav-link'>Policy&#39;s</NavLink>
          </div>
        </Col>

        <Col className='d-flex text-end footer-nav align-items-center justify-content-end footer-disclaimer'>
        <p>By <strong>Jughead <span className='yellow'>Studios</span></strong> <br />
        &#169; 2023 Jughead. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;