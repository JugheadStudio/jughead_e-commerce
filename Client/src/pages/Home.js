import React from 'react';
import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// Components
import Carousel from '../components/carousel';
import HomeProducts from '../components/homeProducts';

import HomeQuickNav1 from "../images/home-clothing.png";
import HomeQuickNav2 from "../images/home-prints.png";
import HomeQuickNav3 from "../images/home-accessories.png";
import HomeQuickNav4 from "../images/home-new-arrivals.png";

const Home = () => {

  return (

    <Container>
      <Row>
        <Col>
          <Carousel/>
        </Col>
      </Row>

      <Row className='discover-container'>
        <div>
          <h1 className='discover-heading'>DISCOVER</h1>
        </div>
        <div className='discover-line'>
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </Row>

      <Row>
        <Col>
          <NavLink to="/clothing" className='nav-link'>
            <div className='home-quick-nav-container' style={{ backgroundImage: `url(${HomeQuickNav1})` }}>
              <div className='quick-nav-hover-box'>
                <p>Clothing</p>
              </div>
            </div>
          </NavLink>
        </Col>

        <Col>
          <NavLink to="/prints" className='nav-link'>
            <div className='home-quick-nav-container' style={{ backgroundImage: `url(${HomeQuickNav2})` }}>
              <div className='quick-nav-hover-box'>
                <p>Prints</p>
              </div>
            </div>
          </NavLink>
        </Col>

        <Col>
          <div className='home-quick-nav-container' style={{ backgroundImage: `url(${HomeQuickNav3})` }}>
            <div className='quick-nav-hover-box'>
              <p>Accessories</p>
            </div>
          </div>
        </Col>

        <Col>
          <div className='home-quick-nav-container' style={{ backgroundImage: `url(${HomeQuickNav4})` }}>
            <div className='quick-nav-hover-box'>
              <p>New Arrivals</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* ========== Featured Products generate here ========== */}
      <HomeProducts />

    </Container>

  );
}

export default Home;
