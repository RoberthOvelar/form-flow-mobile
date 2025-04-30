import { Text } from "@/components/text";
import { useThemeContext } from "@/store/theme-context";
import { CircleCheck, CircleX, Info } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import Toast, { BaseToastProps, ToastProps } from "react-native-toast-message";

type CustomBaseToastProps = BaseToastProps & {
  type: "info" | "success" | "error";
};

function CustomBaseToast(props: CustomBaseToastProps) {
  const { type } = props;
  const { colors } = useThemeContext();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors[type],
      width: "90%",
      alignItems: "center",
      padding: 8,
      borderRadius: 8,
      height: 48,
      flexDirection: "row",
      gap: 8,
    },
    text: {
      color: colors.white,
    },
  });

  return (
    <View style={styles.container}>
      {type === "info" && <Info size={24} color={colors.white} />}
      {type === "success" && <CircleCheck size={24} color={colors.white} />}
      {type === "error" && <CircleX size={24} color={colors.white} />}
      <Text type="smallSemiBold" style={styles.text}>
        {props.text1}
      </Text>
    </View>
  );
}

export function CustomToast(props: ToastProps) {
  return (
    <Toast
      config={{
        info: (props) => <CustomBaseToast {...props} type="info" />,
        error: (props) => <CustomBaseToast {...props} type="error" />,
        success: (props) => <CustomBaseToast {...props} type="success" />,
      }}
      {...props}
    />
  );
}
