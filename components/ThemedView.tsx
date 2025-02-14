import { useTheme } from "@/context/themeContext";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function ThemedView({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      flex: 1,
    },
  });

  return <View style={styles.container}>{children}</View>;
}
