export interface Error {
  username?: string;
  first_name?: string;
  last_name?: string;
  password?: [];
  password2?: [];
  email?: string;
}

export interface AuthState {
  username: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isLogged: boolean;
  access: string;
  refresh: string;
  message: Error;
}

export interface RegisterRequest {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
  email: string;
}

export interface RegisterResponse {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
  email: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface RegisterFormInputs {
  id: number;
  label: string;
  controlId: "username" | "first_name" | "last_name" | "password" | "password2" | "email";
  type: string;
  placeholder: string;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (val: string) => any;
}

export interface LoginFormInputs {
  id: number;
  label: string;
  controlId: "username" | "password";
  type: string;
  placeholder: string;
  minLength: {
    value: number;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
}
