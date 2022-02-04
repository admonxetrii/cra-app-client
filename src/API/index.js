import Axios from "axios";
import Storage from "../Helper/Storage";

export default Axios.create({
  baseURL: "http://192.168.0.108:8000/api/",
});
