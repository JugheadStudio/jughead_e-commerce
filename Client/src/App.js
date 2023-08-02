import './App.css';
import React from 'react';

// Components
import Navigation from './components/navbar';
import Carousel from './components/carousel';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Row>
          <Col>
            <Carousel/>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
