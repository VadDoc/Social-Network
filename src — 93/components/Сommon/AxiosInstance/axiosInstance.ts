import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
  }
})