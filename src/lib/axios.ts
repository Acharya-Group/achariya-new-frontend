import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL:"http://localhost:4000/api/v1",
  withCredentials: true,
});

export default api;
