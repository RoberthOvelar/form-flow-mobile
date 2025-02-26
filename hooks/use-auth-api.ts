import { useAuthContext } from "@/context/auth-context";
import { authService } from "@/services/auth-service";
import { useMutation } from "@tanstack/react-query";

export function useLoginApi() {
  const { signIn } = useAuthContext();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: authService.login,
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

export function useRegisterApi() {
  const {
    mutate: register,
    isPending,
    error,
  } = useMutation({
    mutationFn: authService.register,
  });

  return {
    register,
    isPending,
    error,
  };
}
