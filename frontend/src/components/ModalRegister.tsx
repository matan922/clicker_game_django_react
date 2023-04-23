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
import { useForm, SubmitHandler } from "react-hook-form";

const ModalRegister = () => {
  type FormValues = {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    password2: string;
    email: string;
  };

  type UserFormInputs = {
    id: number;
    label: string;
    controlId:
      | "username"
      | "first_name"
      | "last_name"
      | "password"
      | "password2"
      | "email";
    type: string;
    placeholder: string;
    minLength: {
      value: number;
      message: string;
    };
  }[];

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isError = useAppSelector(selectIsError);
  const message = useAppSelector(selectMessage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const [show, setShow] = useState<boolean>(true);
  // const [userDetails, setUserDetails] = useState({
  //   username: "",
  //   first_name: "",
  //   last_name: "",
  //   password: "",
  //   password2: "",
  //   email: "",
  // });

  console.log(errors);

  const handleClose = () => {
    setShow(false);
    navigate("..");
  };

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();

  //   // if (isError) {
  //   //   toast(message.password[0])
  //   // }
  //   const userData: Register = {
  //     username: userDetails.username,
  //     first_name: userDetails.first_name,
  //     last_name: userDetails.last_name,
  //     password: userDetails.password,
  //     password2: userDetails.password2,
  //     email: userDetails.email,
  //   };

  //   if (userDetails.password !== userDetails.password2 || userDetails.password === "" || userDetails.password2 === "") {
  //     return false // set to false so it doesn't send the form.
  //   }
  //   dispatch(registrationAsync(userData));
  //   setValidated(false);
  // };

  const inputs: UserFormInputs = [
    {
      id: 1,
      controlId: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
      minLength: {
        value: 6,
        message: "Minimum length is 6",
      },
    },
    {
      id: 2,
      controlId: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Your first name",
      minLength: {
        value: 3,
        message: "Minimum length is 3",
      },
    },
    {
      id: 3,
      controlId: "last_name",
      label: "Last Name",
      type: "text",
      placeholder: "Your last name",
      minLength: {
        value: 3,
        message: "Minimum length is 3",
      },
    },
    {
      id: 4,
      controlId: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      minLength: {
        value: 8,
        message: "Minimum length is 8",
      },
    },
    {
      id: 5,
      controlId: "password2",
      label: "Password",
      type: "password",
      placeholder: "Write password again",
      minLength: {
        value: 8,
        message: "Minimum length is 8",
      },
    },
    {
      id: 6,
      controlId: "email",
      label: "Password",
      type: "email",
      placeholder: "Email",
      minLength: {
        value: 0,
        message: "its fine for now",
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
                  {...register(input.controlId, {
                    required: "This line cannot be blank.",
                    minLength: {
                      value: input.minLength.value,
                      message: input.minLength.message,
                    },
                  })}
                  type={input.type}
                  placeholder={input.placeholder}
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setUserDetails({...userDetails,[e.target.id]: e.target.value,});}}
                  autoFocus
                />
                {errors?.[input.controlId] && (
                  <Form.Control.Feedback type="invalid">{errors?.[input.controlId]?.message}</Form.Control.Feedback>
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

{
  /* <Form.Group className="mb-3" controlId="username">
<Form.Label>Username</Form.Label>
<Form.Control
  {...register("username")}
  type="text"
  placeholder="Username"
  // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setUserDetails({...userDetails,[e.target.id]: e.target.value,});}}
  autoFocus
  required
/>
<Form.Control.Feedback type="invalid">
  {message.username}
</Form.Control.Feedback>
</Form.Group>

<Form.Group className="mb-3" controlId="first_name">
<Form.Label>First Name</Form.Label>
<Form.Control
  {...register("first_name")}
  type="text"
  placeholder="Your name"
  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUserDetails({
  //     ...userDetails,
  //     [e.target.id]: e.target.value,
  //   })
  // }
  autoFocus
  required
/>
<Form.Control.Feedback type="invalid">
  {message.first_name}
</Form.Control.Feedback>
</Form.Group>

<Form.Group className="mb-3" controlId="last_name">
<Form.Label>Last Name</Form.Label>
<Form.Control
  {...register("last_name")}
  type="text"
  placeholder="Your surname"
  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUserDetails({
  //     ...userDetails,
  //     [e.target.id]: e.target.value,
  //   })
  // }
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
  {...register("password")}
  type="password"
  placeholder="Password"
  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUserDetails({
  //     ...userDetails,
  //     [e.target.id]: e.target.value,
  //   })
  // }
  autoFocus
  required
/>
<Form.Control.Feedback type="invalid">
  {message.password.map((err) => err)}
</Form.Control.Feedback>
</Form.Group>

<Form.Group className="mb-3" controlId="password2">
<Form.Label>Confirm Password</Form.Label>
<Form.Control
  {...register("password2")}
  type="password"
  placeholder="Password"
  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUserDetails({
  //     ...userDetails,
  //     [e.target.id]: e.target.value,
  //   })
  // }
  autoFocus
  required
/>
<Form.Control.Feedback type="invalid">
  {message.password2.map((err) => err)}
</Form.Control.Feedback>
</Form.Group>

<Form.Group className="mb-3" controlId="email">
<Form.Label>Email</Form.Label>
<Form.Control
  {...register("email")}
  type="email"
  placeholder="Email"
  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUserDetails({
  //     ...userDetails,
  //     [e.target.id]: e.target.value,
  //   })
  // }
  autoFocus
  required
/>
<Form.Control.Feedback type="invalid">
  {message.email}
</Form.Control.Feedback>
</Form.Group> */
}
