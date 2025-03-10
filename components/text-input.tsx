import { Text } from "@/components/text";
import { typograph } from "@/constants/typograph";
import { useThemeContext } from "@/store/theme-context";
import Feather from "@expo/vector-icons/Feather";
import React, { ReactElement } from "react";
import {
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import IconWrapper from "./icon-wrapper";
import { LucideInfo } from "lucide-react-native";

export type TextInputProps = DefaultTextInputProps & {
  label?: string;
  errorMessage?: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  actionButton?: { icon: ReactElement; onPress: () => void };
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
            <IconWrapper size={16} color={colors.outline}>
              {prefixIcon}
            </IconWrapper>
          </View>
        )}
        <DefaultTextInput
          style={styles.input}
          {...otherProps}
          placeholderTextColor={hasError ? colors.error : colors.outline}
        />
        {suffixIcon && (
          <View style={styles.iconContainer}>
            <IconWrapper size={16} color={colors.outline}>
              {suffixIcon}
            </IconWrapper>
          </View>
        )}
        {actionButton && (
          <TouchableOpacity
            onPress={actionButton.onPress}
            style={styles.iconContainer}
          >
            <IconWrapper size={16} color={colors.outline}>
              {actionButton.icon}
            </IconWrapper>
          </TouchableOpacity>
        )}
      </View>
      {hasError && errorMessage && (
        <View style={styles.infoContainer}>
          <IconWrapper style={styles.infoIcon} size={16} color={colors.error}>
            <LucideInfo />
          </IconWrapper>
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
