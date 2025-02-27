import { ReturnLoginDto } from "@/api/dtos/return-login-dto";
import { secureStoreService } from "@/services/secure-store-service";
import { create } from "zustand";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthState = {
  user: User | null;
  signIn: (data: ReturnLoginDto) => void;
  signOut: () => void;
  loading: boolean;
};

export const useAuthStore = create<AuthState>((set) => {
  const loadCredentials = async () => {
    const user = await secureStoreService.getUser();
    const token = await secureStoreService.getToken();
    if (user && token) {
      set({ user: JSON.parse(user), loading: false });
    } else {
      set({ user: null, loading: false });
    }
  };

  loadCredentials();

  return {
    user: null,
    signIn: (data) => {
      secureStoreService.saveToken(data.accessToken);
      secureStoreService.saveUser(JSON.stringify(data.user));
      set({ user: data.user, loading: false });
    },
    signOut: () => {
      secureStoreService.deleteToken();
      secureStoreService.deleteUser();
      set({ user: null, loading: false });
    },
    loading: true,
  };
});
