import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Logging in with:", email, password);

    const userInfo = {
      email: email,
      password: password,
    };

    try {
      const url = "http://localhost:3001/api/auth/";
      const response = await axios.post(url, userInfo);
      const token = response.data.data;

      const decodedToken = jwt_decode(token);
      const isAdmin = JSON.parse(decodedToken.isAdmin);

      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", isAdmin);

      console.log("Login " + isAdmin);
      // typeof isAdmin
      console.log(typeof isAdmin);
      navigate("/");
      window.location.reload();

      // if (isAdmin) {
      //   navigate("/admin");
      // } else {
      //   navigate("/home");
      // }
    } catch (error) {
      console.log(error);
      setError("Invalid email or password");
    }
  };

  return (
    <Container className="product-page-container">
      <Row>
        <Col className="text-center">
          <h3>Login to your Account</h3>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {error && <div>{error}</div>}
            <Button type="submit" variant="primary" className="mr-15">
              Login
            </Button>

            <Link to="/signup">
              <Button type="button" className="btn-secondary">
                Sign Up
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
