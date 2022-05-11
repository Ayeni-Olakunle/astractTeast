import React, { useState, useLayoutEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

function AllTask() {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const [show, setShow] = useState(false);

  const [taskNew, setTaskNew] = useState("");
  const [stackNew, setStackNew] = useState("");
  const [statusNew, setStatusNew] = useState("");
  const [descriptionNew, setDescriptionNew] = useState("");
  const [deadlineDateNew, setDeadlineDateNew] = useState("");
  const [deadlineTimeNew, setDeadlineTimeNew] = useState("");

  const [updateTask, setUpdateTask] = useState("");
  const [updateStack, setUpdateStack] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updateDeadlineDateNew, setUpdateDeadlineDateNew] = useState("");
  const [updateDeadlineTimeNew, setUpdateDeadlineTimeNew] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [TodoListTotal, setTodoListTotal] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();
  const [edit, setEdit] = useState();

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);
  const handleClose6 = () => setShow6(false);
  const handleClose7 = () => setShow7(false);

  const editTask = async (e) => {
    e.preventDefault();
    console.log(TodoListTotal[edit].id);
    const userDoc = doc(db, "users", TodoListTotal[edit].id);
    const newField = { task: updateTask };
    await updateDoc(userDoc, newField);
    setTimeout(function () {
      alert("Task Updated Successfully");
      setShow1(false);
      setShow(false);
      window.location.reload(true);
    }, 1000);
  };

  const editStack = async (e) => {
    e.preventDefault();
    console.log(TodoListTotal[edit].id);
    const userDoc = doc(db, "users", TodoListTotal[edit].id);
    const newField = { stack: updateStack };
    await updateDoc(userDoc, newField);
    setTimeout(function () {
      alert("Task Updated Successfully");
      setShow1(false);
      setShow(false);
      window.location.reload(true);
    }, 1000);
  };

  const editStatus = async (e) => {
    e.preventDefault();
    console.log(TodoListTotal[edit].id);
    const userDoc = doc(db, "users", TodoListTotal[edit].id);
    const newField = { status: updateStatus };
    await updateDoc(userDoc, newField);
    setTimeout(function () {
      alert("Task Updated Successfully");
      setShow3(false);
      setShow(false);
      window.location.reload(true);
    }, 1000);
  };

  const editDesc = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "users", TodoListTotal[edit].id);
    const newField = { desc: updateDesc };
    await updateDoc(userDoc, newField);
    setTimeout(function () {
      alert("Task Updated Successfully");
      setShow4(false);
      setShow(false);
      window.location.reload(true);
    }, 1000);
  };

  const editDateDeadLine = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "users", TodoListTotal[edit].id);
    const newField = { deadlineDate: updateDeadlineDateNew };
    await updateDoc(userDoc, newField);
    setTimeout(function () {
      alert("Task Updated Successfully");
      setShow4(false);
      setShow(false);
      window.location.reload(true);
    }, 1000);
  };

  const editTimeDeadLine = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "users", TodoListTotal[edit].id);
    const newField = { deadlineTime: updateDeadlineTimeNew };
    await updateDoc(userDoc, newField);
    setTimeout(function () {
      alert("Task Updated Successfully");
      setShow4(false);
      setShow(false);
      window.location.reload(true);
    }, 1000);
  };

  const handleValuement = (index) => {
    setTaskNew(TodoListTotal[index].task);
    setStackNew(TodoListTotal[index].stack);
    setStatusNew(TodoListTotal[index].status);
    setDescriptionNew(TodoListTotal[index].desc);
    setDeadlineDateNew(TodoListTotal[index].deadlineDate);
    setDeadlineDateNew(TodoListTotal[index].deadlineDate);
    setDeadlineTimeNew(TodoListTotal[index].deadlineTime);
    setShow(true);
    setEdit(index);
  };

  useLayoutEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(usersCollectionRef);
      setTodoListTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTasks();
  }, []);
  return (
    <div>
      <div className="holdUserForm detailScroll">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h3>All Task</h3>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Add Task
          </Button>
        </div>
        {TodoListTotal.map((item, index) => {
          return (
            <div className="holdLay2" key={index}>
              <div className="holdOne">
                <h4>{item.task}</h4>
                <p style={{ color: "gray", height: "auto" }}>{item.desc}</p>
              </div>
              <div>
                <p style={{ color: "gray", margin: 0 }}>
                  {currentDate.getDate() +
                    " " +
                    month[currentDate.getMonth()] +
                    ", " +
                    currentDate.getFullYear()}
                </p>
                <Button
                  variant="primary"
                  className="mb-0.5"
                  style={{
                    fontSize: "12px",
                    padding: "2px 5px",
                    width: "100%",
                  }}
                  onClick={() => {
                    handleValuement(index);
                  }}
                >
                  Edit
                </Button>
                <br />
                <Button
                  variant="primary"
                  style={{
                    fontSize: "12px",
                    padding: "2px 5px",
                    width: "100%",
                  }}
                  onClick={() => {
                    setShow7(true);
                  }}
                >
                  View Info
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div
              style={{
                justifyContent: "center",
              }}
            >
              <div>
                <div className="holdUserForm">
                  <Form>
                    <Form.Group className="mb-2" controlId="validationCustom01">
                      <Form.Label>Task</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Task"
                          value={taskNew}
                        />
                        <Button
                          style={{ marginLeft: "10px" }}
                          onClick={() => {
                            setShow1(true);
                            setShow(false);
                          }}
                        >
                          <FiEdit style={{ color: "white" }} />
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Select Stack</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Form.Select
                          aria-label="Default select example"
                          value={stackNew}
                        >
                          <option value="Select Option">Select Option</option>
                          <option value="Front End Developer">
                            Front End Developer
                          </option>
                          <option value="Back End Developer">
                            Back End Developer
                          </option>
                          <option value="Full Stack Developer">
                            Full Stack Developer
                          </option>
                          <option value="Software Engineer">
                            Software Engineer
                          </option>
                        </Form.Select>
                        <Button style={{ marginLeft: "10px" }}>
                          <FiEdit
                            style={{ color: "white" }}
                            onClick={() => {
                              setShow2(true);
                              setShow(false);
                            }}
                          />
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Status</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Form.Select
                          aria-label="Default select example"
                          value={statusNew}
                        >
                          <option value="Select Option">Select Option</option>
                          <option value="Pendin">Pendin</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Ready for Review">
                            Ready for Review
                          </option>
                          <option value="Comleted">Comleted</option>
                          <option value="Close">Close</option>
                        </Form.Select>
                        <Button
                          style={{ marginLeft: "10px" }}
                          onClick={() => {
                            setShow3(true);
                            setShow(false);
                          }}
                        >
                          <FiEdit style={{ color: "white" }} />
                        </Button>
                      </div>
                    </Form.Group>

                    <Row>
                      <Col>
                        <Form.Group
                          className="mb-2"
                          controlId="validationCustom01"
                        >
                          <Form.Label>Deadline Date</Form.Label>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Form.Control
                              required
                              type="date"
                              value={deadlineDateNew}
                            />
                            <Button
                              style={{ marginLeft: "10px" }}
                              onClick={() => {
                                setShow5(true);
                                setShow(false);
                              }}
                            >
                              <FiEdit style={{ color: "white" }} />
                            </Button>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          className="mb-2"
                          controlId="validationCustom01"
                        >
                          <Form.Label>Deadline Time</Form.Label>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Form.Control
                              required
                              type="time"
                              value={deadlineTimeNew}
                            />
                            <Button
                              style={{ marginLeft: "10px" }}
                              onClick={() => {
                                setShow6(true);
                                setShow(false);
                              }}
                            >
                              <FiEdit style={{ color: "white" }} />
                            </Button>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          style={{ width: "100%" }}
                        >
                          <Form.Control
                            as="textarea"
                            style={{ height: "100px", width: "100%" }}
                            value={descriptionNew}
                          />
                        </FloatingLabel>
                        <Button
                          style={{ marginLeft: "10px" }}
                          onClick={() => {
                            setShow4(true);
                            setShow(false);
                          }}
                        >
                          <FiEdit style={{ color: "white" }} />
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show7} onHide={handleClose7}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div
              style={{
                justifyContent: "center",
              }}
            >
              <div>
                <div className="holdUserForm">
                  <Form>
                    <Form.Group className="mb-2" controlId="validationCustom01">
                      <Form.Label>Task</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Task"
                          value={taskNew}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Select Stack</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Form.Select
                          aria-label="Default select example"
                          value={stackNew}
                        >
                          <option value="Select Option">Select Option</option>
                          <option value="Front End Developer">
                            Front End Developer
                          </option>
                          <option value="Back End Developer">
                            Back End Developer
                          </option>
                          <option value="Full Stack Developer">
                            Full Stack Developer
                          </option>
                          <option value="Software Engineer">
                            Software Engineer
                          </option>
                        </Form.Select>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Status</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Form.Select
                          aria-label="Default select example"
                          value={statusNew}
                        >
                          <option value="Select Option">Select Option</option>
                          <option value="Pendin">Pendin</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Ready for Review">
                            Ready for Review
                          </option>
                          <option value="Comleted">Comleted</option>
                          <option value="Close">Close</option>
                        </Form.Select>
                      </div>
                    </Form.Group>

                    <Row>
                      <Col>
                        <Form.Group
                          className="mb-2"
                          controlId="validationCustom01"
                        >
                          <Form.Label>Deadline Date</Form.Label>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Form.Control
                              required
                              type="date"
                              value={deadlineDateNew}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          className="mb-2"
                          controlId="validationCustom01"
                        >
                          <Form.Label>Deadline Time</Form.Label>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Form.Control
                              required
                              type="time"
                              value={deadlineTimeNew}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          style={{ width: "100%" }}
                        >
                          <Form.Control
                            as="textarea"
                            style={{ height: "100px", width: "100%" }}
                            value={descriptionNew}
                          />
                        </FloatingLabel>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editTask}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Current Task</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Task"
                value={taskNew}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Change Task</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Task"
                value={updateTask}
                onChange={(e) => setUpdateTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Stack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editStack}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Current Stack</Form.Label>
              <Form.Control value={stackNew} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Select Stack</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setUpdateStack(e.target.value)}
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
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editStatus}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Current Status</Form.Label>
              <Form.Control value={statusNew} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Select Status</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setUpdateStatus(e.target.value)}
                >
                  <option value="Select Option">Select Option</option>
                  <option value="Pendin">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Ready for Review">Ready for Review</option>
                  <option value="Comleted">Comleted</option>
                  <option value="Close">Close</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editDesc}>
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Current Description</Form.Label>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <FloatingLabel
                  controlId="floatingTextarea2"
                  style={{ width: "100%" }}
                >
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px", width: "100%" }}
                    value={descriptionNew}
                  />
                </FloatingLabel>
              </div>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Update Description</Form.Label>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <FloatingLabel
                  controlId="floatingTextarea2"
                  style={{ width: "100%" }}
                >
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px", width: "100%" }}
                    value={updateDesc}
                    onChange={(e) => setUpdateDesc(e.target.value)}
                  />
                </FloatingLabel>
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>Deadline Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editDateDeadLine}>
            <Form.Group className="mb-2" controlId="validationCustom01">
              <Form.Label>Current Deadline Date</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Control type="date" value={deadlineDateNew} />
              </div>
            </Form.Group>
            <Form.Group className="mb-2" controlId="validationCustom01">
              <Form.Label>Deadline Date</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Control
                  required
                  type="date"
                  value={updateDeadlineDateNew}
                  onChange={(e) => setUpdateDeadlineDateNew(e.target.value)}
                />
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
          <Modal.Title>Deadline Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editTimeDeadLine}>
            <Form.Group className="mb-2" controlId="validationCustom01">
              <Form.Label>Current Deadline Time</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Control type="time" value={deadlineTimeNew} />
              </div>
            </Form.Group>
            <Form.Group className="mb-2" controlId="validationCustom01">
              <Form.Label>Deadline Time</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Control
                  required
                  type="time"
                  value={updateDeadlineTimeNew}
                  onChange={(e) => setUpdateDeadlineTimeNew(e.target.value)}
                />
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AllTask;
