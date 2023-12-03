import { THEME } from "@shared/theme";
import { TextStyle, ViewStyle } from "react-native";

export const $container: ViewStyle = {
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 9999,
  borderWidth: 1,
  borderColor: THEME.COLORS.PURPLE,
  alignItems: "center",
  justifyContent: "center",
  height: 25,
};

export const $text: TextStyle = {
  fontSize: THEME.FONT_SIZES.TAG,
  fontFamily: THEME.TYPOGRAPHY.ROBOTO.BOLD,
};
