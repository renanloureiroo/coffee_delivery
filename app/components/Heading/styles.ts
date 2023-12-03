import { THEME } from "@shared/theme";
import { TextStyle } from "react-native";

const $bold: TextStyle = {
  fontFamily: THEME.TYPOGRAPHY.BALOO_2.BOLD,
};

const $xs: TextStyle = {
  fontSize: THEME.FONT_SIZES.TITLE.XS,
  lineHeight: THEME.FONT_SIZES.TITLE.XS * 1.3,
};

const $sm: TextStyle = {
  fontSize: THEME.FONT_SIZES.TITLE.SM,
  lineHeight: THEME.FONT_SIZES.TITLE.SM * 1.3,
};

const $md: TextStyle = {
  fontSize: THEME.FONT_SIZES.TITLE.MD,
  lineHeight: THEME.FONT_SIZES.TITLE.MD * 1.3,
};

const $lg: TextStyle = {
  fontSize: THEME.FONT_SIZES.TITLE.LG,
  lineHeight: THEME.FONT_SIZES.TITLE.LG * 1.3,
};
const $xl: TextStyle = {
  fontSize: THEME.FONT_SIZES.TITLE.XL,
  lineHeight: THEME.FONT_SIZES.TITLE.XL * 1.3,
};

export const $weight = {
  bold: $bold,
};
export const $sizes = {
  xs: $xs,
  sm: $sm,
  md: $md,
  lg: $lg,
  xl: $xl,
};
