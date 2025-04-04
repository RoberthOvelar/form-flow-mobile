import { LoginSchema } from "@/api/dtos/login-dto";
import { Button } from "@/components/button";
import { FormTextInput } from "@/components/hook-forms/form-text-input";
import IconButton from "@/components/icon-button";
import Apple from "@/components/icons/apple";
import Facebook from "@/components/icons/facebook";
import Google from "@/components/icons/google";
import { Text } from "@/components/text";
import { useLogin } from "@screens/login/use-login";
import { useThemeContext } from "@/store/theme-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import {
  LucideEye,
  LucideEyeOff,
  LucideLock,
  LucideMail,
} from "lucide-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export function LoginScreen() {
  const { login } = useLogin();
  const { colors, colorScheme } = useThemeContext();
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const logoSource =
    colorScheme === "dark"
      ? require("@/assets/images/light-logo.png") // Logo para tema escuro
      : require("@/assets/images/dark-logo.png");

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
    buttonContainer: {
      gap: 16,
      alignItems: "center",
    },
    divider: {
      width: 300,
      height: 1,
      backgroundColor: colors.outline,
    },
    logoContainer: {
      flexDirection: "row",
      gap: 16,
      justifyContent: "center",
    },
    logoIcon: {
      color: colors.onSurfaceVariant,
    },
  });

  return (
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
            <Image style={styles.image} source={logoSource} />
          </View>
          <View style={{ gap: 40 }}>
            <View style={{ gap: 16 }}>
              <View>
                <Text type="titleSemiBold">Entrar</Text>
                <Text type="paragraphRegular">
                  Faça o login para utilizar o nosso app
                </Text>
              </View>
              <FormTextInput
                name="email"
                control={control}
                label="Email"
                placeholder="Digite seu email"
                prefixIcon={<LucideMail />}
              />
              <FormTextInput
                name="password"
                control={control}
                label="Senha"
                placeholder="Digite sua senha"
                prefixIcon={<LucideLock />}
                secureTextEntry={!showPassword}
                actionButton={{
                  icon: showPassword ? <LucideEye /> : <LucideEyeOff />,
                  onPress: () => setShowPassword(!showPassword),
                }}
              />
              <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                <Text type="smallMedium">Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Entrar"
                onPress={handleSubmit((data) => login(data))}
              />
              <Button
                variation="outlined"
                title="Criar conta"
                onPress={() => router.push("/(auth)/sign-up")}
              />
              <View style={styles.divider} />
              <View style={styles.logoContainer}>
                <IconButton variation="outlined">
                  <Facebook />
                </IconButton>
                <IconButton variation="outlined">
                  <Google />
                </IconButton>
                <IconButton variation="outlined">
                  <Apple color={colors.onSurfaceVariant} />
                </IconButton>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
