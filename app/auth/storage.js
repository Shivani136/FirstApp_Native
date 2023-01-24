import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error Storing the Auth Token", error);
  }
};

const getToken = async () => {
  try {
    await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the Auth Token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the Auth Token", error);
  }
};

export default {
  storeToken,
  getToken,
  getUser,
  removeToken,
};
