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
};

export const $productInfoDescription: TextStyle = {
  width: "100%",
};

export const $productInfoHeaderPrice: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
};
