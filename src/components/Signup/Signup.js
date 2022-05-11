import React, { useState } from "react";
import "./Signup.scss";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stack, setStack] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpForm = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      localStorage.setItem("firstN", firstName);
      localStorage.setItem("lastN", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("stack", stack);
      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassword", confirmPassword);
      setFirstName("");
      setLastName("");
      setEmail("");
      setStack("");
      setPassword("");
      setConfirmPassword("");
      alert("Sign up successfully please login");
    } else {
      alert("Please enter2");
    }
  };
  return (
    <div>
      <div className="holdSign">
        <div className="holdForm">
          <div className="formItself">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4 style={{ marginBottom: "30px" }}>Sign Up</h4>
              <p>
                Click here to{" "}
                <span
                  style={{
                    fontSize: "17px",
                    color: "#1e88e5",
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
            <div>
              <Form onSubmit={signUpForm}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Select Stack</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={stack}
                    onChange={(e) => setStack(e.target.value)}
                  >
                    <option>Select option</option>
                    <option value="Front End Developer">
                      Front End Developer
                    </option>
                    <option value="Back End Developer">
                      Back End Developer
                    </option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="Software Engineer">Software Engineer</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
