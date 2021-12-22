import AsyncStorage from "@react-native-async-storage/async-storage";
const Storage = {
  getToken: async (name) => {
    const token = await AsyncStorage.getItem(`${name}_token`);
    if (token) {
      return token.split(" ")[1];
    }
    return null;
  },
  setAccessToken: async (token) => {
    return await AsyncStorage.setItem("access_token", `Bearer ${token}`);
  },
  setRefreshToken: async (token) => {
    return await AsyncStorage.setItem("refresh_token", `Bearer ${token}`);
  },

  clearTokens: async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("remove_token");
  },
};

export default Storage;
