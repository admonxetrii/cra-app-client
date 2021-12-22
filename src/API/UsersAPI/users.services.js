import axios from "../";

export default {
  login: async (data) => {
    return await axios.post("/auth/token/", data);
  },
  getToken: async (refresh) => {
    return await axios.post("/auth/token/refresh/", { refresh });
  },
  verifyToken: async (token) => {
    return await axios.post("/auth/token/verify/", { token });
  },
};
