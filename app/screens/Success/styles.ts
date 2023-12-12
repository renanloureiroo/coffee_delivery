import { THEME } from "@shared/theme";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const $root: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-start",
  paddingHorizontal: 48,
  paddingTop: 200,
};

export const $image: ImageStyle = {
  width: 210,
  height: 161,
  marginBottom: 48,
};

export const $subtitle: TextStyle = {
  maxWidth: 259,
  marginTop: 8,
};

export const $button: ViewStyle = {
  width: "100%",
  marginTop: 64,
};
