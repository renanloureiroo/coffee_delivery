import { THEME } from "@shared/theme";
import { TextStyle, ViewStyle } from "react-native";

export const $container: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 12,
  gap: 8,
  backgroundColor: THEME.COLORS.GRAY_200,
  borderRadius: 4,
};

export const $textInput: TextStyle = {
  flex: 1,
  color: THEME.COLORS.GRAY_700,
  fontSize: THEME.FONT_SIZES.BODY.SM,
  fontFamily: THEME.TYPOGRAPHY.ROBOTO.REGULAR,
};
