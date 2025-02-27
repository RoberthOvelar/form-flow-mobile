import { View } from "react-native";
import { useAuthStore } from "@/store/auth-store";
import { Text } from "@/components/text";
import { Button } from "@/components/button";

export function HomeScreen() {
  const { signOut } = useAuthStore();

  return (
    <View>
      <Text>App</Text>
      <Button title="Signout" onPress={() => signOut()} />
    </View>
  );
}
