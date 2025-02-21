import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJzdWIiOiI2N2I4ZGZmZTI5NzQ0NjZhZmU4MGEyNGUiLCJpYXQiOjE3NDAxNzUwNDgsImV4cCI6MTc0MDI2MTQ0OH0.EXuOaJxR8p8jg_x_Typ59uOIenmsvdJFzSCQz8RdBMU"; // Pega o token (ex: do AsyncStorage)
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
      // ⚠️ Tratar diferentes códigos de erro da API
      const { status } = error.response;
      if (status === 401) {
        console.warn("⚠️ Usuário não autenticado. Redirecionando...");
        // Aqui você pode, por exemplo, deslogar o usuário
      } else if (status === 403) {
        console.warn("🚫 Acesso negado!");
      } else if (status >= 500) {
        console.error("🔥 Erro no servidor. Tente novamente mais tarde.");
      }
    } else {
      console.error("❌ Erro na requisição:", error.message);
    }

    return Promise.reject(error);
  },
);

export default apiClient;
