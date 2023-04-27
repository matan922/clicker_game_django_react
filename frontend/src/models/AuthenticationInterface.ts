import { Validate } from "react-hook-form";

export interface AuthState {
  username: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isLogged: boolean;
  message: {
    username: string;
    first_name: string;
    last_name: string;
    password: [];
    password2: [];
    email: string;
  };
}

export interface Register {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
  email: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface RegisterFormInputs {
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
  } | undefined;
  maxLength: {
    value: number;
    message: string;
  } | undefined;
  pattern: {
    value: RegExp;
    message: string;
  } | undefined;
  validate: ((val: string) => any) | undefined;
}
