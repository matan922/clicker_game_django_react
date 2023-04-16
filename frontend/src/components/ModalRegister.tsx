import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { registerationAsync } from "../reducers/authenticationSlice";
import { useAppDispatch } from "../app/hooks";

const ModalRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate("..");
  };

  const registeration = () => {
    const userData = new FormData();
    userData.append("username", "test");
    userData.append("password", "123");
    userData.append("password2", "123");
    userData.append("email", "matantentententen@gmail.com");
    console.log(Object.fromEntries(userData).username)
    dispatch(registerationAsync({username: "matan", password: "123", password2: "123", email: "matanten1020@gmail.com"}))
  };

  useEffect(() => {
    registeration();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRegister;
