import apiClient from "@/api/api-client";
import { Button } from "@/components/button";
import { secureStoreService } from "@/services/secure-store.service";
import { useAuthStore } from "@/store/auth-store";
import { StyleSheet, Text, View } from "react-native";

export default function Tab() {
  const { signOut, user } = useAuthStore();

  const showToken = async () => {
    const token = await secureStoreService.getToken();
    console.log(token);
  };

  const changeToken = async () => {
    await secureStoreService.saveToken("new-token");
  };

  const fetchUser = async () => {
    const response = await apiClient.get("/user/me");
    console.log(response.data);
  };

  return (
    <View style={styles.container}>
      <Text>Olá, {user?.firstName}</Text>
      <Button title="Change Token" onPress={changeToken} />
      <Button title="Show Token" onPress={showToken} />
      <Button title="Fetch User" onPress={fetchUser} />
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
