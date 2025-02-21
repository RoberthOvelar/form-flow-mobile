import Button from "@/components/button";
import { useAuth } from "@/context/auth-context";
import { View, Text } from "react-native";

export default function App() {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>App</Text>
      <Button title="Signout" onPress={() => signOut()} />
    </View>
  );
}
