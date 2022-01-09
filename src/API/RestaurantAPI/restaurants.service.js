import axios from "../";
import Storage from "../../Helper/Storage";

export default {
  fetchAllRestaurant: async () => {
    return await axios.get("/restaurants/");
  },
  fetchRestaurantCategories: async () => {
    const token = await Storage.getToken("access");
    return await axios.get("/restaurant-types/", {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  fetchRestaurantByCategory: async (id) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/restaurant-type/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
};
