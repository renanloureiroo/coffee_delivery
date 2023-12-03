import { SvgProps } from "react-native-svg";

import { Color, THEME } from "@shared/theme";
import { FC } from "react";
import { Platform, Pressable } from "react-native";

import ArrowLeft from "../../assets/arrow-left-regular.svg";
import ArrowRight from "../../assets/arrow-right-regular.svg";
import MagnifyingGlass from "../../assets/magnifying-glass-regular.svg";
import MapPin from "../../assets/map-pin-fill.svg";
import Minus from "../../assets/minus-bold.svg";
import Plus from "../../assets/plus-bold.svg";
import Shopping from "../../assets/shopping-cart-fill.svg";
import Trash from "../../assets/trash-regular.svg";

export const icons = {
  ArrowLeft,
  ArrowRight,
  MagnifyingGlass,
  MapPin,
  Minus,
  Plus,
  Shopping,
  Trash,
};

export type IconName = keyof typeof icons;

interface IconProps extends SvgProps {
  name: IconName;
  color?: Color;
  androidRippleColor?: Color;
  size?: number;
}

export const Icon: FC<IconProps> = ({
  name,
  color = "GRAY_100",
  androidRippleColor = "GRAY_500",
  size = 24,
  onPress,
  ...rest
}) => {
  const Svg = icons[name];

  if (onPress)
    return (
      <Pressable
        onPress={onPress}
        android_ripple={{
          borderless: true,
          color: THEME.COLORS[androidRippleColor],
        }}
        style={({ pressed }) => ({
          height: size,
          width: size,
          opacity: Platform.OS === "ios" ? (pressed ? 0.5 : 1) : 1,
        })}
      >
        <Svg color={THEME.COLORS[color]} width={size} height={size} {...rest} />
      </Pressable>
    );

  return (
    <Svg color={THEME.COLORS[color]} width={size} height={size} {...rest} />
  );
};
