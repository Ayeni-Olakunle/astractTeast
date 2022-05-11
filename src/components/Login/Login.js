import React, { useState } from "react";
import "./Login.scss";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginEmail, SetLoginEmail] = useState("");
  const [loginPassword, SetLoginPassword] = useState("");

  const navigate = useNavigate();

  const tryLogin = (e) => {
    e.preventDefault();
    if (
      loginEmail === localStorage.getItem("email") &&
      loginPassword === localStorage.getItem("password")
    ) {
      navigate("/user/add-task");
    } else {
      alert("Wrong email or password");
    }
  };
  return (
    <div>
      <div className="holdLogin">
        <div className="holdForm">
          <div className="formItself">
            <h4 style={{ marginBottom: "30px" }}>Login</h4>
            <div>
              <Form onSubmit={tryLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Enter email"
                    value={loginEmail}
                    onChange={(e) => SetLoginEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => SetLoginPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Keep me login" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <p style={{ textAlign: "center" }}>
              <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
