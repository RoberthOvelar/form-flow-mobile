import { secureStoreService } from "@/services/secure-store.service";
import { useAuthStore } from "@/store/auth-store";
import axios from "axios";
import Toast from "react-native-toast-message";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token =
      process.env.EXPO_PUBLIC_TOKEN_STORE_KEY &&
      (await secureStoreService.getToken());
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        useAuthStore.getState().signOut();
        console.warn(JSON.stringify(error, null, 2));
      } else if (status === 403) {
        useAuthStore.getState().signOut();
        console.warn(JSON.stringify(error, null, 2));
      } else if (status >= 500) {
        console.error(JSON.stringify(error, null, 2));
      }
    } else if (error.request) {
      console.error(JSON.stringify(error.message, null, 2));
    } else {
      console.error(
        "Erro na requisição:",
        JSON.stringify(error.message, null, 2),
      );
    }

    Toast.show({
      text1:
        error.response?.data?.message || error.message || "Erro na requisição",
      type: "error",
    });

    return Promise.reject(error);
  },
);

export default apiClient;
