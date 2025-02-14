import React from "react";
import { typograph } from "@/constants/typograph";
import {
  Text as DefaultText,
  type TextProps as DefaultTextProps,
} from "react-native";
import { useTheme } from "@/context/themeContext";

export type TextProps = DefaultTextProps & {
  type?: keyof typeof typograph;
};

export default function Text({
  style,
  type = "paragraphRegular",
  ...rest
}: TextProps) {
  const { colors } = useTheme();

  return (
    <DefaultText
      style={[{ color: colors.onSurface }, typograph[type], style]}
      {...rest}
    />
  );
}
