import axios from "axios";
import { API_URL } from "../../config/config.tsx";
export const searchApi = async (query: string) => {
  const response = await axios.get(`${API_URL}/search?q=${query}`);
  return response.data;
};
