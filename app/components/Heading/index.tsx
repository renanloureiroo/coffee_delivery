import { Color, THEME } from "@shared/theme";
import { FC, ReactNode } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { $sizes, $weight } from "./styles";
import Animated from "react-native-reanimated";

interface HeadingProps extends Omit<RNTextProps, "children"> {
  text?: string;
  children?: ReactNode;
  color?: Color;
  weight?: "bold";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export const Heading: FC<HeadingProps> = ({
  text,
  children,
  color = "GRAY_100",
  size = "md",
  weight = "bold",
  style: $overrideStyles,
  animated = false,
  ...rest
}) => {
  const $styles = [
    {
      color: THEME.COLORS[color],
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
