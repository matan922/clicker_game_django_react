import axios from "axios";
import { server } from "../globalVariables/endpoints";
import { Login, Register } from "../models/AuthenticationInterface";


export const registration = (userData: Register) => {
  return new Promise<{ data: Register }>((resolve) =>
    axios.post(server + "auth/register/", userData).then((res) => {
      console.log({ data: res.data });
    })
  );
};


export const login = (userData: FormData) => {
  return new Promise<{ data: Login }>((resolve) =>
    axios.post(server + "auth/login/").then((res) => {
      console.log({ data: res.data });
    })
  );
};
