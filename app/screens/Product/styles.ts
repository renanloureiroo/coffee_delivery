import { THEME } from "@shared/theme";
import { TextStyle, ViewStyle } from "react-native";

export const $container: ViewStyle = {
  backgroundColor: THEME.COLORS.GRAY_100,
};

export const $header: ViewStyle = {
  paddingHorizontal: 32,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 26,
};

export const $productInfo: ViewStyle = {
  paddingHorizontal: 32,
  alignItems: "center",
  width: "100%",
};

export const $productInfoHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 20,
  width: "100%",
};

export const $productInfoHeaderTitle: ViewStyle = {
  gap: 12,
  alignItems: "flex-start",
};

export const $productInfoDescription: TextStyle = {
  width: "100%",
};

export const $productInfoHeaderPrice: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
};
export const $footer: ViewStyle = {
  paddingTop: 42,
  paddingHorizontal: 32,
};

export const $coffeeSize: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
  width: "100%",
  gap: 8,
  marginTop: 8,
};

export const $textBold: TextStyle = {
  fontFamily: THEME.TYPOGRAPHY.ROBOTO.BOLD,
};
