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
  fetchRestaurantById: async (id) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/restaurant/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  fetchRestaurantMenusByRestaurantId: async (id) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/restaurant/${id}/menuList`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  fetchSimilarRestaurantById: async (id) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/restaurant-similarities/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  fetchTableByRestaurant: async (id) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/restaurant/${id}/tableList`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  confirmTableBooking: async (requestData) => {
    console.log(requestData);
    return await axios.post("/restaurant-booking/", requestData);
  },
  cancelReservation: async (requestData) => {
    console.log(requestData);
    return await axios.patch("/restaurant-booking/", requestData);
  },
  fetchMyReservations: async (id) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/my-reservations/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
};
