import TextInput from "@/components/TextInput";
import Text from "@/components/Text";
import { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useTheme } from "@/context/themeContext";
import database from "@/db";

export default function SignIn() {
  const { colorScheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const fetchProducts = async () => {
    const products = await database.collections.get("products").query().fetch();
    console.log(products);
  };

  const logoSource =
    colorScheme === "dark"
      ? require("@/assets/images/light-logo.png") // Logo para tema escuro
      : require("@/assets/images/dark-logo.png");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    imageContainer: {
      flex: 1,
      //backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 300,
      resizeMode: "contain",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={logoSource} />
      </View>
      <Text type="titleSemiBold">Entrar</Text>
      <Text type="paragraphRegular">
        Faça o login para utilizar o nosso app
      </Text>
      <TextInput label="Email" prefixIcon="mail" />
      <TextInput
        label="Password"
        prefixIcon="lock"
        secureTextEntry={!showPassword}
        actionButton={{
          icon: showPassword ? "eye" : "eye-off",
          onPress: () => setShowPassword(!showPassword),
        }}
      />
      <TouchableOpacity>
        <Text type="smallMedium">Esqueceu a senha?</Text>
      </TouchableOpacity>
      <Button title="Entrar" />
      <Button
        variation="outlined"
        title="Criar conta"
        onPress={() => fetchProducts()}
      />
    </View>
  );
}
