import axios from "axios";
import { Config } from "../settings";

const { AUTH_SERVICE_URL } = Config();

console.log(AUTH_SERVICE_URL);

export const AUTH_SERVICE_API = axios.create({
  baseURL: AUTH_SERVICE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
