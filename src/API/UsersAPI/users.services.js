import axios from "../index";

const userService = {
  login: async (data) => {
    return await axios.post("/auth/jwt", data);
  },
};

export default userService;
