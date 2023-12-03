import { THEME } from "@shared/theme";
import { TextStyle } from "react-native";

const $bold: TextStyle = {
  fontFamily: THEME.TYPOGRAPHY.ROBOTO.BOLD,
};

const $regular: TextStyle = {
  fontFamily: THEME.TYPOGRAPHY.ROBOTO.REGULAR,
};

const $xs: TextStyle = {
  fontSize: THEME.FONT_SIZES.BODY.XS,
  lineHeight: THEME.FONT_SIZES.BODY.XS * 1.3,
};

const $sm: TextStyle = {
  fontSize: THEME.FONT_SIZES.BODY.SM,
  lineHeight: THEME.FONT_SIZES.BODY.SM * 1.3,
};

const $md: TextStyle = {
  fontSize: THEME.FONT_SIZES.BODY.MD,
  lineHeight: THEME.FONT_SIZES.BODY.MD * 1.3,
};

const $lg: TextStyle = {
  fontSize: THEME.FONT_SIZES.BODY.LG,
  lineHeight: THEME.FONT_SIZES.BODY.LG * 1.3,
};

export const $weight = {
  regular: $regular,
  bold: $bold,
};
export const $sizes = {
  xs: $xs,
  sm: $sm,
  md: $md,
  lg: $lg,
};
