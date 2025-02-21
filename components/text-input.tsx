import {
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Text from "@/components/text";
import { useTheme } from "@/context/theme-context";
import { typograph } from "@/constants/typograph";
import Feather from "@expo/vector-icons/Feather";

type TextInputProps = DefaultTextInputProps & {
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  suffixIcon?: keyof typeof Feather.glyphMap;
  prefixIcon: keyof typeof Feather.glyphMap;
  actionButton?: { icon: keyof typeof Feather.glyphMap; onPress: () => void };
  onActionPress?: () => void;
};

export default function TextInput(props: TextInputProps) {
  const {
    label,
    hasError,
    prefixIcon,
    suffixIcon,
    actionButton,
    ...otherProps
  } = props;

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
    },
    label: {
      color: hasError ? colors.error : colors.onSurface,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: hasError ? colors.error : colors.outline,
      borderRadius: 8,
    },
    input: {
      flex: 1,
      textAlignVertical: "center",
      height: 40,
      color: colors.onSurface,
      ...typograph.paragraphRegular,
    },
    iconContainer: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      {label && (
        <Text type="smallMedium" style={styles.label}>
          {label}
        </Text>
      )}
      <View style={styles.inputContainer}>
        {prefixIcon && (
          <View style={styles.iconContainer}>
            <Feather
              name={prefixIcon}
              size={16}
              color={hasError ? colors.error : colors.outline}
            />
          </View>
        )}
        <DefaultTextInput
          style={styles.input}
          {...otherProps}
          placeholderTextColor={hasError ? colors.error : colors.outline}
        />
        {suffixIcon && (
          <View style={styles.iconContainer}>
            <Feather
              name={suffixIcon}
              size={16}
              color={hasError ? colors.error : colors.outline}
            />
          </View>
        )}
        {actionButton && (
          <TouchableOpacity
            onPress={actionButton.onPress}
            style={styles.iconContainer}
          >
            <Feather
              name={actionButton.icon}
              size={16}
              color={hasError ? colors.error : colors.outline}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
