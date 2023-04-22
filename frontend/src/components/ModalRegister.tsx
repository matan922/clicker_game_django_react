import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import {
  registrationAsync,
  selectIsError,
  selectMessage,
} from "../reducers/authenticationSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Register } from "../models/AuthenticationInterface";
import { toast } from "react-toastify";

const ModalRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isError = useAppSelector(selectIsError);
  const message = useAppSelector(selectMessage);

  const [show, setShow] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
    navigate("..");
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // if (isError) {
    //   toast(message.password[0])
    // }
    const userData: Register = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      password: password,
      password2: password2,
      email: email,
    };

    if (password !== password2) {
      setValidated(false); // Set validated to false to show validation error
    }

    setValidated(true);
    dispatch(registrationAsync(userData));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
                autoFocus
                required
              />
              <Form.Control.Feedback type="invalid">
                {message.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
                autoFocus
                required
              />
              <Form.Control.Feedback type="invalid">
                {message.first_name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your surname"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                autoFocus
                required
              />
              <Form.Control.Feedback type="invalid">
                {message.last_name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                autoFocus
                required
              />
              <Form.Control.Feedback type="invalid">
                {message.password.map(err => err)}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword2(e.target.value)
                }
                autoFocus
                required
              />
              <Form.Control.Feedback type="invalid">
                {message.password2.map(err => err)}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                autoFocus
                required
              />
              <Form.Control.Feedback type="invalid">
                {message.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalRegister;
