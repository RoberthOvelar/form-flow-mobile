import { ColorSchemeName } from "react-native";

export const getLogoSource = (colorSchema: ColorSchemeName) => {
  return colorSchema === "dark"
    ? require("@/assets/images/light-logo.png") // Logo para tema escuro
    : require("@/assets/images/dark-logo.png");
};
