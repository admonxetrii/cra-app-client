import Axios from "axios";
import Storage from "../Helper/Storage";

export default Axios.create({
  baseURL: "https://thejoyfuljwells.com/api/",
});
