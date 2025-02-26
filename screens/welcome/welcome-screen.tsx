import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { useIsFocused } from "@react-navigation/native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

export function WelcomeScreen() {
  const { width } = Dimensions.get("window");

  const isFocused = useIsFocused();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: width * 0.7,
      resizeMode: "contain",
    },
    bottomContainer: {
      paddingVertical: 20,
      paddingHorizontal: 24,
      gap: 24,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {isFocused && <StatusBar style="light" />}
      <ImageBackground
        style={styles.topContainer}
        source={require("@/assets/images/welcome-background.png")}
      >
        <Image
          style={styles.logo}
          source={require("@/assets/images/light-logo.png")}
        />
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View>
          <Text type="titleMedium">Seja bem-vindo!</Text>
          <Text type="paragraphRegular">
            Gerencie formulários de forma prática e eficiente.
          </Text>
        </View>
        <Button
          title="Vamos começar!"
          onPress={() => router.push("/(auth)/login")}
        />
      </View>
    </SafeAreaView>
  );
}
