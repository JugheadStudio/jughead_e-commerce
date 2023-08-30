import React from "react";

// Components
import ProductComponent from "../Product/product";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

const AdminConsole = () => {

  return (
    <div>
      <Container className="product-page-container">
        <Row className="justify-content-center">
          <Col>
            <ProductComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminConsole;