import axios from "axios";
import { server } from "../globalVariables/endpoints";
import { Register } from "../models/AuthenticationInterface";



export const registeration = (userData: FormData) => {
    return new Promise<{ data: Register }>((resolve) =>
    axios.post(server + "auth/register/", userData).then((res) => resolve({ data: res.data }))
    );
  }
  
