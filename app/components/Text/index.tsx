import { Color, THEME } from "@shared/theme";
import { FC, ReactNode } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { $sizes, $weight } from "./styles";
import Animated from "react-native-reanimated";

interface TextProps extends Omit<RNTextProps, "children"> {
  text?: string;
  children?: ReactNode;
  color?: Color;
  weight?: "regular" | "bold";
  size?: "xs" | "sm" | "md" | "lg";
  animated?: boolean;
  align?: TextStyle["textAlign"];
}

export const Text: FC<TextProps> = ({
  text,
  children,
  color = "GRAY_100",
  size = "md",
  weight = "regular",
  style: $overrideStyles,
  animated = false,
  align = "auto",
  ...rest
}) => {
  const $styles = [
    {
      color: THEME.COLORS[color],
      textAlign: align,
    },
    $sizes[size],
    $weight[weight],

    $overrideStyles,
  ] as StyleProp<TextStyle>;

  if (animated) {
    return (
      <Animated.Text style={$styles} {...rest}>
        {text ? text : children}
      </Animated.Text>
    );
  }

  return (
    <RNText style={$styles} {...rest}>
      {text ? text : children}
    </RNText>
  );
};
