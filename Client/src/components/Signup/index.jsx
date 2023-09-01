import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/registerUser";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <Container className="product-page-container">
      <Row>
        <Col className="text-center">
          <h3>Sign Up</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
            />
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="surname"
              onChange={handleChange}
              value={data.surname}
              required
            />
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <div>{error}</div>}
            <Button type="submit">Sign Up</Button>
            <Link to="/login">
              <Button type="button" className="btn-secondary">Sign in</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
