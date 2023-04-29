import axios from "axios";
import { server } from "../globalVariables/endpoints";
import { Login, Register } from "../models/AuthenticationInterface";


export const registration = async (userData: Register): Promise<{ data: Register }> => {
  // Response is { data: RegisterResponse } therefore you can just return it
  const { data }: { data: Register } = await axios.post(server + "auth/register/", userData);
  return { data };
};

export const login = async (userData: Login): Promise<{ data: Login }> => {
  const { data }: { data: Login } = await axios.post(server + "auth/login/", userData);
  console.log(data)
  return { data };
};
