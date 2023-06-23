import axios from "axios";
import { apiPaths } from "../constant/apiPaths";

export const authenticateRepository = {
  login: async ({ email, password }) => {
    const response = await axios.post(apiPaths.login, {
      email: email,
      password: password,
      deviceId: "1342",
    });
    return response.data;
  },
  logout: async (refreshToken) => {
    const response = await axios.post(apiPaths.logout, {
      refreshToken: refreshToken,
      deviceId: "1342",
    });
    return response.data;
  },
};
