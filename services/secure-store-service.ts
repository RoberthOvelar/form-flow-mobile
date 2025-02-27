import * as SecureStore from "expo-secure-store";

export const secureStoreService = {
  saveToken: async (value: string) => {
    const key = process.env.EXPO_PUBLIC_TOKEN_STORE_KEY ?? "formFlow$token";
    await SecureStore.setItemAsync(key, value);
  },
  saveUser: async (value: string) => {
    const key = process.env.EXPO_PUBLIC_USER_STORE_KEY ?? "formFlow$user";
    await SecureStore.setItemAsync(key, value);
  },
  getToken: async () => {
    const key = process.env.EXPO_PUBLIC_TOKEN_STORE_KEY ?? "formFlow$token";
    return await SecureStore.getItemAsync(key);
  },
  getUser: async () => {
    const key = process.env.EXPO_PUBLIC_USER_STORE_KEY ?? "formFlow$user";
    return await SecureStore.getItemAsync(key);
  },
  deleteToken: async () => {
    const key = process.env.EXPO_PUBLIC_TOKEN_STORE_KEY ?? "formFlow$token";
    await SecureStore.deleteItemAsync(key);
  },
  deleteUser: async () => {
    const key = process.env.EXPO_PUBLIC_USER_STORE_KEY ?? "formFlow$user";
    await SecureStore.deleteItemAsync(key);
  },
};
