import React, { useState, useEffect } from "react";
import "./LandingPage.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { Link, Outlet, useNavigate } from "react-router-dom";
import calender from "../../image/Date picker-rafiki.png";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <Col sm={12} style={{ padding: 0 }}>
              <div className="holdHead">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Logo"
                  style={{ height: "50px" }}
                />
                <div>
                  <Button
                    style={{ margin: "5px 15px" }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log in as a user
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              justifyContent: "center",
              backgroundColor: "whitesmoke",
              padding: "15px 40px",
              height: "auto",
            }}
          >
            <Col sm={6}>
              <div
                style={{
                  height: "80vh",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1>
                    Please turn on your mobile data to save your todo list in
                    the database
                  </h1>
                  <Button
                    style={{ margin: "15px 0" }}
                    onClick={() => {
                      navigate("/admin-login");
                    }}
                  >
                    Log in as admin
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <img src={calender} alt="calender" style={{ height: "80vh" }} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
