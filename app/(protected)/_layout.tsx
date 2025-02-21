import ThemedStack from "@/components/themed-stack";
import { useAuth } from "@/context/auth-context";
import { Redirect } from "expo-router";

export default function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return <ThemedStack />;
}
