import React from 'react';
import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const ClothingProduct = () => {

  return (

    <Container className='product-page-container'>
      <Row>
        <Col>
          <Breadcrumb>
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <span>/</span>
            <NavLink to="/clothing" className='nav-link'>Clothing</NavLink>
            <span>/</span>
            <Breadcrumb.Item active>Item Name</Breadcrumb.Item>
          </Breadcrumb> 
        </Col>
      </Row>

      <Row className='pt-5 pb-5'>
        <Col xs={4} md={2} className='product-thumbnails d-flex flex-column align-items-center'>
          <div className='thumbnail-container active'><img src={'../images/hoody-placeholder.png'} alt='NFT Hoody' /></div>
          <div className='thumbnail-container'><img src={'../images/hoody-placeholder.png'} alt='NFT Hoody' /></div>
          <div className='thumbnail-container'><img src={'../images/hoody-placeholder.png'} alt='NFT Hoody' /></div>
          <div className='thumbnail-container'><img src={'../images/hoody-placeholder.png'} alt='NFT Hoody' /></div>
        </Col>

        <Col xs={8} md={5} className='product-main-image d-flex justify-content-center m-auto'>
          <img src={'../images/hoody-placeholder.png'} alt='NFT Hoody' />
        </Col>

        <Col xs={12} md={5} className='product-page-info d-flex flex-column justify-content-center'>
          <h3>Trippy Hoody</h3>
          <h2>R850.00</h2>
          <p><strong>Free Local Shipping</strong></p>
          <p><strong>Style:</strong> JH20230007</p>

          <ul className='product-page-ul'>
            <li>Fabric: 100% Organic Cotton</li>
            <li>Fit: Relax Fit</li>
            <li>Branding: Graphic Screen Printing On Fron And Back</li>
          </ul>

          <ul className='product-sizes'>
            <li className='active'>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>

          <div>
            <button className='add-to-cart-btn'>Add To Cart</button>
          </div>
        </Col>

      </Row>
    </Container>

  );
}

export default ClothingProduct;
