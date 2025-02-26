import { useAuthContext } from "@/context/auth-context";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { user } = useAuthContext();

  if (!user) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
