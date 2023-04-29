import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { Login, LoginFormInputs } from "../models/AuthenticationInterface";
import { useForm, SubmitHandler } from "react-hook-form";

const ModalLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    setShow(false);
    navigate("..");
  };

  const inputs: LoginFormInputs[] = [
    {
      id: 0,
      label: "Username",
      controlId: "username",
      type: "text",
      placeholder: "Username",
      minLength: {
        value: 6,
        message: "Minimum length is 6 and maximum 16.",
      },
      maxLength: {
        value: 16,
        message: "Minimum length is 6 and maximum 16.",
      },
    },
    {
      id: 1,
      label: "Password",
      controlId: "password",
      type: "password",
      placeholder: "Password",
      minLength: {
        value: 8,
        message: "Minimum length is 8 and maximum 16.",
      },
      maxLength: {
        value: 16,
        message: "Minimum length is 8 and maximum 16.",
      },
    },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            {inputs.map((input) => (
              <Form.Group
                key={input.id}
                className="mb-3"
                controlId={input.controlId}
              >
                <Form.Label>{input.label}</Form.Label>
                <Form.Control
                  className={`form-control ${errors?.[input.controlId] ? "is-invalid" : ""}`}
                  {...register(input.controlId, {
                    required: "This line cannot be blank.",
                    minLength: input.minLength,
                    maxLength: input.maxLength,
                  })}
                  type={input.type}
                  placeholder={input.placeholder}
                  // onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
                {errors?.[input.controlId] && (
                  <Form.Control.Feedback type="invalid">
                    error
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLogin;
