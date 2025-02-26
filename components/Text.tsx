import { typograph } from "@/constants/typograph";
import { useThemeContext } from "@/context/theme-context";
import React from "react";
import {
  Text as DefaultText,
  type TextProps as DefaultTextProps,
} from "react-native";

export type TextProps = DefaultTextProps & {
  type?: keyof typeof typograph;
};

export function Text({ style, type = "paragraphRegular", ...rest }: TextProps) {
  const { colors } = useThemeContext();

  return (
    <DefaultText
      style={[{ color: colors.onSurface }, typograph[type], style]}
      {...rest}
    />
  );
}
