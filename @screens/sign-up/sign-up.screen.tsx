import { Button } from "@/components/button";
import { getLogoSource } from "@/constants/logo-source";
import { useThemeContext } from "@/store/theme-context";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export function SignUpScreen() {
  const { colorScheme } = useThemeContext();

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 20,
    },
    imageContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 300,
      resizeMode: "contain",
    },
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.mainContainer}
            keyboardShouldPersistTaps="always"
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={getLogoSource(colorScheme)} />
            </View>
            <Button title="Sign Up" onPress={() => {}} />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}
