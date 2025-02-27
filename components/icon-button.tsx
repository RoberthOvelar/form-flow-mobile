import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { useThemeContext } from "@/store/theme-context";

export type IconButtonProps = TouchableOpacityProps & {
  children?: React.ReactNode;
  variation?: "filled" | "outlined";
  style?: StyleProp<ViewStyle>;
};

export default function IconButton({
  variation = "filled",
  style,
  children,
  ...rest
}: IconButtonProps) {
  const { colors } = useThemeContext();

  const styles = StyleSheet.create({
    container: {
      backgroundColor:
        variation === "filled" ? colors.surfaceContainerHighest : "transparent",
      borderRadius: 8,
      borderWidth: 2,
      borderColor:
        variation === "filled"
          ? colors.surfaceContainerHighest
          : colors.outline,
      paddingHorizontal: 16,
      height: 40,
      justifyContent: "center",
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
