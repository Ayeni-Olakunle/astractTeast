import React, { useState, useEffect } from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const usersCollectionRef = collection(db, "users");
  const [task, setTask] = useState("");
  const [stack, setStack] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      task !== "" &&
      description !== "" &&
      stack !== "Select Option" &&
      status !== "Select Option"
    ) {
      const formValues = {
        task: task,
        stack: stack,
        status: status,
        desc: description,
        deadlineDate: deadlineDate,
        deadlineTime: deadlineTime,
      };
      console.log(formValues);
      await addDoc(usersCollectionRef, formValues);
      setTask("");
      setStatus("Select Option");
      setStack("Select Option");
      setDescription("");
      setDeadlineDate("");
      setDeadlineTime("");
    } else {
      alert("Please fill in the input");
    }
  };
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          padding: "15px 40px",
        }}
      >
        <div>
          <div className="holdUserForm">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3>Add Task</h3>
              <Button
                onClick={() => {
                  navigate("all-task");
                }}
              >
                View Task
              </Button>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="validationCustom01">
                <Form.Label>Task</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Select Stack</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={stack}
                  onChange={(e) => setStack(e.target.value)}
                >
                  <option value="Select Option">Select Option</option>
                  <option value="Front End Developer">
                    Front End Developer
                  </option>
                  <option value="Back End Developer">Back End Developer</option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="Software Engineer">Software Engineer</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Select Option">Select Option</option>
                  <option value="Pendin">Pendin</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Ready for Review">Ready for Review</option>
                  <option value="Comleted">Comleted</option>
                  <option value="Close">Close</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-2" controlId="validationCustom01">
                    <Form.Label>Deadline Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      value={deadlineDate}
                      onChange={(e) => setDeadlineDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2" controlId="validationCustom01">
                    <Form.Label>Deadline Time</Form.Label>
                    <Form.Control
                      required
                      type="time"
                      value={deadlineTime}
                      onChange={(e) => setDeadlineTime(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <FloatingLabel controlId="floatingTextarea2">
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
