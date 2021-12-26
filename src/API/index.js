import Axios from "axios";

export default Axios.create({
  baseURL: "http://192.168.0.112:8000/api/",
});
