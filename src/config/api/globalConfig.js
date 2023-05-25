import axios from "axios";
import Cookies from "js-cookie";
// import { logout } from "../../../store/user/userSlice";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
//   const token = Cookies.get('userToken')
//   config.headers["Authorization"] = "Bearer " + token;
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // toast.error(error.response.data.message)
    const { dispatch } = store;
    if (error?.response?.status === 403) {
      dispatch(logout())
    }
    return Promise.reject(error);
  }
);

export default api;
