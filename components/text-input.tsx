import { Text } from "@/components/text";
import { typograph } from "@/constants/typograph";
import { useThemeContext } from "@/context/theme-context";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import {
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export type TextInputProps = DefaultTextInputProps & {
  label?: string;
  errorMessage?: string;
  suffixIcon?: keyof typeof Feather.glyphMap;
  prefixIcon?: keyof typeof Feather.glyphMap;
  actionButton?: { icon: keyof typeof Feather.glyphMap; onPress: () => void };
  onActionPress?: () => void;
};

export function TextInput(props: TextInputProps) {
  const {
    label,
    prefixIcon,
    suffixIcon,
    actionButton,
    errorMessage,
    ...otherProps
  } = props;

  const hasError = !!errorMessage;

  const { colors } = useThemeContext();

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
    infoContainer: {
      marginTop: 4,
      textAlign: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    infoIcon: {
      marginRight: 4,
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
      {hasError && errorMessage && (
        <View style={styles.infoContainer}>
          <Feather
            style={styles.infoIcon}
            name="info"
            size={16}
            color={colors.error}
          />
          <Text
            type="smallMedium"
            style={{ color: colors.error }}
            allowFontScaling={false}
          >
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
}
