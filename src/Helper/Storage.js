import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {
  getToken: async (name) => {
    const token = await AsyncStorage.getItem(`${name}_token`);
    if (token) {
      return token.split(" ")[1];
    }
    return null;
  },

  getUserDetail: async () => {
    const user = await AsyncStorage.getItem("user");
  },

  setAccessToken: async (token) => {
    return await AsyncStorage.setItem("access_token", `Bearer ${token}`);
  },
  setRefreshToken: async (token) => {
    return await AsyncStorage.setItem("refresh_token", `Bearer ${token}`);
  },

  setUserDetail: async (user) => {
    return await AsyncStorage.setItem("user", JSON.stringify(user));
  },

  clearTokens: async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("remove_token");
    await AsyncStorage.removeItem("user");
  },
};

export default Storage;
