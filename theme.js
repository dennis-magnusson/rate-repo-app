import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    textLight: "#f8f8f8",
    textDark: "#24292e",
    textWhite: "#ffffff",
    textBlack: "#000000",
    textGrey: "#808080",
    textLightGrey: "#d3d3d3",
    textDarkGrey: "#a9a9a9",
    textBlue: "#1e90ff",
    error: "#d73a4a",
  },
  titleTextSize: 16,
  secondaryTextSize: 14,
  text: {
    font: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  screenWideButton: {
    padding: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    display: "inline-block",
    backgroundColor: "#0366d6", // colors.primary
    borderRadius: 6,
  },
};

export default theme;
