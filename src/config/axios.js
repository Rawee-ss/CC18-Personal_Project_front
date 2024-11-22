import axios from "axios";
import { getAccessToken } from "../utils/LocalStorage";

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
