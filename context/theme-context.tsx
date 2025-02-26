import { darkTheme } from "@/constants/theme/dark-theme";
import { lightTheme } from "@/constants/theme/light-theme";
import { StatusBar } from "expo-status-bar";
import {
  DefaultTheme,
  ThemeProvider as DefaultThemeProvider,
} from "@react-navigation/native";
import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance, ColorSchemeName } from "react-native";

export type ThemeType = typeof darkTheme | typeof lightTheme;

type ThemeContextType = {
  colors: ThemeType["colors"];
  typograph: ThemeType["typograph"];
  colorScheme: ColorSchemeName;
  setColorScheme: (colorScheme: ColorSchemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme(),
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme: newColorScheme }) => {
        setColorScheme(newColorScheme);
      },
    );

    return () => subscription.remove();
  }, []);

  const colors = colorScheme === "dark" ? darkTheme.colors : lightTheme.colors;

  const typograph = lightTheme.typograph;

  return (
    <ThemeContext.Provider
      value={{ colors, typograph, colorScheme, setColorScheme }}
    >
      <DefaultThemeProvider
        value={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: colors.surface,
            primary: colors.primary,
          },
        }}
      >
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        {children}
      </DefaultThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
