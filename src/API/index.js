import Axios from "axios";
<<<<<<< HEAD

export default Axios.create({
  baseURL: "http://192.168.0.104:8000/api/",
=======
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
>>>>>>> d9bcb08 (redux and saga implementation)
});
