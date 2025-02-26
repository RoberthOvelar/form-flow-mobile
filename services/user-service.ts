import apiClient from "@/api/api-client";
import { ReturnUserDto } from "@/api/dtos/return-user-dto";

export const userService = {
  /**
   * Find current user data
   * @returns ReturnUserDto
   */
  findProfile: async () => {
    const response = await apiClient.get<ReturnUserDto>("/user/me");
    return response.data;
  },
};
