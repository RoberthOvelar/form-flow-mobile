import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { useAuthStore } from "@/store/auth-store";
import { View } from "react-native";

export function HomeScreen() {
  const { signOut } = useAuthStore();

  return (
    <View>
      <Text>App</Text>
      <Button title="Signout" onPress={() => signOut()} />
    </View>
  );
}
