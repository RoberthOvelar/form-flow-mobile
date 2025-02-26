import * as SecureStore from "expo-secure-store";

export const secureStoreService = {
  saveToken: async (value: string) => {
    const key = process.env.EXPO_PUBLIC_TOKEN_STORE_KEY ?? "formFlow$token";
    await SecureStore.setItemAsync(key, value);
  },
  getToken: async (key: string) => {
    return await SecureStore.getItemAsync(key);
  },
  deleteToken: async () => {
    const key = process.env.EXPO_PUBLIC_TOKEN_STORE_KEY ?? "formFlow$token";
    await SecureStore.deleteItemAsync(key);
  },
};
