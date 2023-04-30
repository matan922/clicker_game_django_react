import axios from "axios";
import { server } from "../globalVariables/endpoints";
import { LoginRequest, RegisterRequest, LoginResponse, RegisterResponse } from "../models/AuthenticationInterface";


export const registration = async (userData: RegisterRequest): Promise<{ data: RegisterResponse }> => {
  // Response is { data: RegisterResponse } therefore you can just return it
  const { data }: { data: RegisterResponse } = await axios.post(server + "auth/register/", userData);
  return { data };
};

export const login = async (userData: LoginRequest): Promise<{ data: LoginResponse }> => {
  const { data }: { data: LoginResponse } = await axios.post(server + "auth/login/", userData);
  return { data };
};
