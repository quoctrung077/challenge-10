import axios from "axios";
import { API_URL } from "../../config/config.tsx";
export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const signUp = async (email: string, password: string, name: string) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    email,
    password,
    name,
  });
  return response.data;
};
