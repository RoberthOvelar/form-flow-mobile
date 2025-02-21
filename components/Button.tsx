import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { useTheme } from "@/context/theme-context";
import Text from "@/components/text";

export type ButtonProps = TouchableOpacityProps & {
  title?: string;
  variation?: "filled" | "outlined";
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  variation = "filled",
  title,
  style,
  ...rest
}: ButtonProps) {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: variation === "filled" ? colors.primary : "transparent",
      borderColor: colors.primary,
      borderWidth: 2,
      borderRadius: 8,
    },
    title: {
      color: variation === "filled" ? colors.onPrimary : colors.primary,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text type={"paragraphSemiBold"} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
