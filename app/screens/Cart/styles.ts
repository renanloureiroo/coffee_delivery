import { THEME } from "@shared/theme";
import { ViewStyle } from "react-native";

export const $root: ViewStyle = {
  flex: 1,
  backgroundColor: THEME.COLORS.GRAY_900,
};

export const $header: ViewStyle = {
  paddingHorizontal: 32,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 26,
  borderBottomWidth: 1,
  borderBottomColor: THEME.COLORS.GRAY_700,
};
