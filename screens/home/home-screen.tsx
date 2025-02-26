import { View } from "react-native";
import { useAuthContext } from "@/context/auth-context";
import { Text } from "@/components/text";
import { Button } from "@/components/button";

export function HomeScreen() {
  const { signOut } = useAuthContext();

  return (
    <View>
      <Text>App</Text>
      <Button title="Signout" onPress={() => signOut()} />
    </View>
  );
}
