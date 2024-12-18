import axios from "axios";

const API_URL = "https://spotify-api-production-75f9.up.railway.app/api/auth";
export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const signUp = async (email: string, password: string, name: string) => {
  const response = await axios.post(`${API_URL}/register`, {
    email,
    password,
    name,
  });
  return response.data;
};
