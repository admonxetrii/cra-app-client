import Axios from "axios";

export default Axios.create({
  baseURL: "http://192.168.150.165:8000/api/",
});
