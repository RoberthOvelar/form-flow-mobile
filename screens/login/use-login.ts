import { useAuthStore } from "@/store/auth-store";
import { loginService } from "@/screens/login/login-service";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const { signIn } = useAuthStore();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginService.login,
    onSuccess: (data) => {
      signIn(data);
    },
  });

  return {
    login,
    isPending,
    error,
  };
}
