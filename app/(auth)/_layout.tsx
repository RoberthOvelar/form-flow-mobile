import { useAuthStore } from "@/store/auth-store";
import { LoadScreen } from "@/screens/load-screen.tsx/load-screen";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user, loading } = useAuthStore();

  if (loading) return <LoadScreen />;

  if (user) return <Redirect href="/" />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
