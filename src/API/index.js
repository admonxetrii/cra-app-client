import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getBearerToken = () => {
  const token = AsyncStorage.getItem("access_token");
  if (token) {
    return token;
  }
  return null;
};

export default Axios.create({
  baseURL: process.env.BACKEND_API_URL,
  headers: { Authorization: getBearerToken() },
});
