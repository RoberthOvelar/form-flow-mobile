import { useAuthStore } from "@/store/auth-store";
import { LoadScreen } from "@/@screens/load-screen.tsx/load.screen";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { user, loading } = useAuthStore();

  if (loading) return <LoadScreen />;

  if (!user) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
