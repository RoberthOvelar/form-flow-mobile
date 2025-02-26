import { useAuthContext } from "@/context/auth-context";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user } = useAuthContext();

  if (user) return <Redirect href="/" />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
