import { THEME } from "@shared/theme";
import { ImageStyle, ViewStyle } from "react-native";

export const $root: ViewStyle = {
  backgroundColor: THEME.COLORS.GRAY_900,
};

export const $headerContainer: ViewStyle = {
  zIndex: 3,
  backgroundColor: THEME.COLORS.GRAY_100,
};

export const $header: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 20,
  paddingHorizontal: 32,
  zIndex: 3,
};

export const $headerLeft: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  height: 24,
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

  paddingHorizontal: 32,
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

export const $cartWrapper: ViewStyle = {
  position: "relative",
  width: 36,
  height: 36,
  alignItems: "center",
  justifyContent: "center",
};

export const $badge: ViewStyle = {
  backgroundColor: THEME.COLORS.YELLOW_DARK,
  width: 20,
  height: 20,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: -10,
  right: -10,
  borderRadius: 9999,
};
