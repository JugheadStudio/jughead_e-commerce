import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from "react-router-dom";

function HomeProducts() {

  const featuredProducts = [
    { id: 'featured-01', name: 'Trippy Hoody', price: '$19.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'featured-02', name: 'Trippy Hoody', price: '$29.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'featured-03', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'featured-04', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'featured-05', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'featured-06', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' }
  ];

  const discountedProducts = [
    { id: 'discounted-01', name: 'Trippy Hoody', price: '$19.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'discounted-02', name: 'Trippy Hoody', price: '$29.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'discounted-03', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'discounted-04', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'discounted-05', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' },
    { id: 'discounted-06', name: 'Trippy Hoody', price: '$39.99', image: 'hoody-placeholder.png', description: 'NFT Hoody' }
  ];

  return (
    <>
      <Row>
        <Col>
          <div className='diveder-heading'>
            <h3><strong>Featured</strong> Products</h3>
          </div>
        </Col>
      </Row>

      <Row>
        {featuredProducts.map(product => (
          <Col xs={12} md={4} xl={2} key={product.id}>
            <div className='product-card'>
              <img src={'./images/' + product.image} alt={product.description} />
              <p className='product-name'>{product.name}</p>
              <p className='product-price'>{product.price}</p>
              <NavLink to="/clothing/clothingProduct" className='nav-link'>
                <Button variant="primary">View Product</Button>
              </NavLink>
            </div>
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
          <div className='diveder-heading mt-0'>
            <h3><strong>Discounted</strong> Products</h3>
          </div>
        </Col>
      </Row>

      <Row>
        {discountedProducts.map(product => (
          <Col xs={12} md={4} xl={2} key={product.id}>
            <div className='product-card'>
              <img src={'./images/' + product.image} alt={product.description} />
              <p className='product-name'>{product.name}</p>
              <p className='product-price'>{product.price}</p>
              <Button variant="primary">View Product</Button>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeProducts;
