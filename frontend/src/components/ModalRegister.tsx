import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import {
  registrationAsync,
} from "../reducers/authenticationSlice";
import { useAppDispatch } from "../app/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Register,
  RegisterFormInputs,
} from "../models/AuthenticationInterface";

const ModalRegister = () => {
  const [show, setShow] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<Register>();

  const onSubmit: SubmitHandler<Register> = (data) => {
    console.log(data);
    dispatch(registrationAsync(data))
  };

  console.log(errors);

  const handleClose = () => {
    setShow(false);
    navigate("..");
  };


  const inputs: RegisterFormInputs[] = [
    {
      id: 0,
      controlId: "username",
      label: "Username",
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
      controlId: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Your first name",
      minLength: {
        value: 3,
        message: "Minimum length is 3 and maximum 12.",
      },
      maxLength: {
        value: 12,
        message: "Minimum length is 3 and maximum 12.",
      },
    },
    {
      id: 2,
      controlId: "last_name",
      label: "Last Name",
      type: "text",
      placeholder: "Your last name",
      minLength: {
        value: 3,
        message: "Minimum length is 3 and maximum 12.",
      },
      maxLength: {
        value: 12,
        message: "Minimum length is 3 and maximum 12.",
      },
    },
    {
      id: 3,
      controlId: "password",
      label: "Password",
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
    {
      id: 4,
      controlId: "password2",
      label: "Password",
      type: "password",
      placeholder: "Write password again",
      minLength: {
        value: 8,
        message: "Minimum length is 8 and maximum 16.",
      },
      maxLength: {
        value: 16,
        message: "Minimum length is 8 and maximum 16.",
      },
      validate: (val: string) => {
        if (watch('password') !== val) {
          return "Passwords do not match."
        }
      }

    },
    {
      id: 5,
      controlId: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Bad email address.",
      },
    },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
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
                  {...register(input.controlId, 
                  {required: "This line cannot be blank.",
                  minLength: input.minLength,
                  maxLength: input.maxLength,
                  pattern: input.pattern,
                  validate:  input.validate,})}
                  type={input.type}
                  placeholder={input.placeholder}
                  autoFocus
                />
                {errors?.[input.controlId] && (
                  <Form.Control.Feedback type="invalid">
                    {errors?.[input.controlId]?.message}
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
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalRegister;