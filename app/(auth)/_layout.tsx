import ThemedStack from "@/components/themed-stack";
import { useAuth } from "@/context/auth-context";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) return <Redirect href="/" />;

  return (
    <ThemedStack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
