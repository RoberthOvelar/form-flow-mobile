import apiClient from "@/api/api-client";
import { LoginDto } from "@/api/dtos/login-dto";
import { ReturnLoginDto } from "@/api/dtos/return-login-dto";

export const loginService = {
  login: async (data: LoginDto) => {
    const response = await apiClient.post<ReturnLoginDto>("/auth/login", data);
    return response.data;
  },
};
