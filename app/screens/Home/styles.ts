import { THEME } from "@shared/theme";
import { ImageStyle, ViewStyle } from "react-native";

export const $root: ViewStyle = {
  backgroundColor: THEME.COLORS.GRAY_100,
};

export const $header: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 20,
  marginBottom: 20,
  paddingHorizontal: 32,
};

export const $headerLeft: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
};

export const $scrollHeader: ViewStyle = {
  paddingHorizontal: 32,
};
export const $searchContainer: ViewStyle = {
  position: "relative",
  marginBottom: 30,
  paddingBottom: 137,
};

export const $search: ViewStyle = {
  marginTop: 16,

  position: "relative",
};

export const $image: ImageStyle = {
  position: "absolute",
  top: 64,
  zIndex: -1,
  right: -24,
};

export const $content: ViewStyle = {
  flex: 1,
  minHeight: "150%",
  backgroundColor: THEME.COLORS.WHITE,
};

export const $listContainer: ViewStyle = {
  top: -140,
  paddingTop: 16,
  paddingHorizontal: 32,
};

export const $tags: ViewStyle = {
  flexDirection: "row",
  gap: 8,
  marginTop: 12,
  marginBottom: 16,
};