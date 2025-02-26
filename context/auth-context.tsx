import { ReturnLoginDto } from "@/api/dtos/return-login-dto";
import { secureStoreService } from "@/services/secure-store-service";
import { createContext, useContext, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (data: ReturnLoginDto) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (data: ReturnLoginDto) => {
    secureStoreService.saveToken(data.accessToken);
    setUser(data.user);
  };

  const signOut = () => {
    secureStoreService.deleteToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
