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
  const [show, setShow] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleClose = () => {
    setShow(false);
    navigate("..");
  };

  const handleSubmit = () => {
    const userData = new FormData();
    userData.append("username", username);
    userData.append("first_name", firstName);
    userData.append("last_name", lastName);
    userData.append("password", password);
    userData.append("password2", password2);
    userData.append("email", email);

    dispatch(registerationAsync(userData));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Your surname" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value)} autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} autoFocus />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalRegister;
