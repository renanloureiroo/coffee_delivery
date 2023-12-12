import { THEME } from "@shared/theme";
import { ViewStyle } from "react-native";

export const $root: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  borderWidth: 1,
  borderColor: THEME.COLORS.GRAY_600,
  overflow: "hidden",
};

export const $item: ViewStyle = {
  width: 46,
  height: 46,
  borderRadius: 6,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

export const $itemSm: ViewStyle = {
  width: 34,
  height: 34,
  borderRadius: 6,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

export const $pressed: ViewStyle = {
  backgroundColor: THEME.COLORS.GRAY_700,
};
