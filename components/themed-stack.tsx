import { useTheme } from "@/context/theme-context";
import { Stack } from "expo-router";
import { ComponentProps } from "react";

type ThemedStackProps = ComponentProps<typeof Stack>;

export default function ThemedStack(props: ThemedStackProps) {
  const { colors } = useTheme();

  return (
    <Stack
      {...props}
      screenOptions={{
        ...props.screenOptions,
        contentStyle: { backgroundColor: colors.surface },
      }}
    />
  );
}
