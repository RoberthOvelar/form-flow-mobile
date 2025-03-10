import { useAuthStore } from "@/store/auth-store";
import { secureStoreService } from "@/services/secure-store.service";
import axios from "axios";

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
    const { signOut } = useAuthStore();
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.warn(
          "Usuário não autenticado. Redirecionando...",
          JSON.stringify(error),
        );
        signOut();
      } else if (status === 403) {
        console.warn("Acesso negado!", JSON.stringify(error));
        signOut();
      } else if (status >= 500) {
        console.error(
          "Erro no servidor. Tente novamente mais tarde.",
          JSON.stringify(error),
        );
      }
    } else {
      console.error("Erro na requisição:", JSON.stringify(error));
    }

    return Promise.reject(error);
  },
);

export default apiClient;
