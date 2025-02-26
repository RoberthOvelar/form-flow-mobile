import apiClient from "@/api/api-client";
import { CreateUserDto } from "@/api/dtos/create-user-dto";
import { LoginDto } from "@/api/dtos/login-dto";
import { ReturnLoginDto } from "@/api/dtos/return-login-dto";
import { ReturnUserDto } from "@/api/dtos/return-user-dto";

export const authService = {
  login: async (data: LoginDto) => {
    const response = await apiClient.post<ReturnLoginDto>("/auth/login", data);
    return response.data;
  },
  register: async (data: CreateUserDto) => {
    const response = await apiClient.post<ReturnUserDto>("/user", data);
    return response.data;
  },
};
