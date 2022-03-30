import axios from "../";
import Storage from "../../Helper/Storage";

export default {
  fetchAllRestaurant: async () => {
    const token = await Storage.getToken("access");
    return await axios.get("/restaurants/", {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  fetchFavouriteRestaurant: async (user) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/favourite-restaurants/${user}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  fetchIsFavourite: async (requestData) => {
    const token = await Storage.getToken("access");
    return await axios.get("/is-favourite/", {
      params: {
        username: requestData.username,
        restaurant: requestData.restaurant,
      },
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },

  fetchRestaurantsBySearch: async (query) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/restaurants/?q=${query}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
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
  fetchSimilarPercentRestaurantById: async (id) => {
    const token = await Storage.getToken("access");
    return await axios.get(`/restaurant-similarities-percent/${id}`, {
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
    return await axios.post("/restaurant-booking/", requestData);
  },
  cancelReservation: async (requestData) => {
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
