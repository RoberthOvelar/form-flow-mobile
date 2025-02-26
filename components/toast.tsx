import { View, StyleSheet } from "react-native";
import { Text } from "@/components/text";
import { useThemeContext } from "@/context/theme-context";

export default function Toast() {
  const { colors } = useThemeContext();

  const styles = StyleSheet.create({
    spacingContainer: {
      paddingHorizontal: 20,
    },
    container: {
      padding: 8,
      backgroundColor: colors.surface,
      boxShadow: `0 0 5px ${colors.shadow}80`,
      borderRadius: 8,
      borderLeftWidth: 3,
    },
  });

  return (
    <View style={styles.spacingContainer}>
      <View style={styles.container}>
        <Text>Toast bonitinho</Text>
        <Text>Essa é a mensagem do seu toast</Text>
      </View>
    </View>
  );
}
