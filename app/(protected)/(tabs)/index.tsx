import { Button } from "@/components/button";
import { useAuthContext } from "@/context/auth-context";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  const { signOut } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text>Tab [Home]</Text>
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
