import axios from "../";

export default {
  login: async (data) => {
    return await axios.post("/auth/token/", data);
  },
  getToken: async (refresh) => {
    return await axios.post("/auth/token/refresh/", { refresh });
  },
  getUserDetail: async (token) => {
    return await axios.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  verifyToken: async (token) => {
    return await axios.post("/auth/token/verify/", { token });
  },
  signup: async (data) => {
    return await axios.post("/auth/register/", data);
  },
};
