import { THEME } from "@shared/theme";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const $container: ViewStyle = {
  borderTopRightRadius: 28,
  borderBottomLeftRadius: 28,
  borderTopLeftRadius: 4,
  borderBottomRightRadius: 4,
  backgroundColor: THEME.COLORS.GRAY_800,
  alignItems: "center",
  position: "relative",
  overflow: "visible",
};

export const $containerCardCatalog: ViewStyle = {
  height: 120,
  flexDirection: "row",
  borderTopRightRadius: 28,
  borderBottomLeftRadius: 28,
  borderTopLeftRadius: 4,
  borderBottomRightRadius: 4,
  backgroundColor: THEME.COLORS.GRAY_800,
  paddingHorizontal: 8,
  gap: 12,
};

export const $imageContainer: ViewStyle = {
  zIndex: 1,
  position: "absolute",
};

export const $imageContainerCatalog: ViewStyle = {
  zIndex: 1,
  position: "absolute",
  top: -10,
  width: 96,
  height: 96,
};

export const $heading: TextStyle = {
  textAlign: "center",
};

export const $description: TextStyle = {
  textAlign: "center",
};

export const $priceContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
};
