import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  if (true) {
    return <Redirect href="/welcome" />;
  }

  return <Stack />;
}
