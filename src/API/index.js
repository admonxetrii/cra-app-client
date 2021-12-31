import Axios from "axios";

export default Axios.create({
  baseURL: "http://192.168.254.113:8000/api/",
});
