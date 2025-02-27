import { Button } from "@/components/button";
import { useAuthStore } from "@/store/auth-store";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  const { signOut, user } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text>Olá, {user?.firstName}</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
