import axios from "axios";
import { server } from "../globalVariables/endpoints";
import { Register } from "../models/AuthenticationInterface";



export const registeration = (userData: Register) => {
    return new Promise<{ data: Register }>((resolve) =>
    axios.post(server + "auth/register/").then((res) => resolve({ data: res.data }))
    );
  }
  
