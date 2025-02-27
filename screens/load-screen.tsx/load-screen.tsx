import { useThemeContext } from "@/store/theme-context";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export function LoadScreen() {
  const { colors } = useThemeContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}
