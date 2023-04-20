import axios from "axios";
import { server } from "../globalVariables/endpoints";
import { Login, Register } from "../models/AuthenticationInterface";

// export const registration = (userData: Register) => {
//   return new Promise<{ data: Register }>((resolve, reject) =>
//     axios
//       .post(server + "auth/register/", userData)
//       .then((res) => {
//         resolve({ data: res.data });
//       })
//       .catch((error) => {
//         reject(error.response.data);
//       })
//   );
// };

export const registration = async (userData: Register): Promise<{ data: Register }> => {
  // Response is { data: RegisterResponse } therefore you can just return it
  const { data }: { data: Register } = await axios.post(server + "auth/register/",userData);
  return { data };
};

export const login = async (userData: Login): Promise<{ data: Login }> => {
  const { data }: { data: Register } = await axios.post(server + "auth/login/");
  return { data };
};
