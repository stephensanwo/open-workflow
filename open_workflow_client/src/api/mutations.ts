import { UserSignInProps, UserSignUpProps } from "../types/user";
import { AUTH_SERVICE_API } from "./axios";

export const Register = async (user: UserSignUpProps) => {
  const response = await AUTH_SERVICE_API.post("/register", user);
  return response;
};

export const Login = async (user: UserSignInProps) => {
  const response = await AUTH_SERVICE_API.post("/login", user);
  //   localStorage.setItem('variableName', data);
  console.log(response);
  return response;
};
