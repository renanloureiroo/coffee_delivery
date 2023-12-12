import { FC, useEffect, useState } from "react";
import { Pressable, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "../Text";
import { THEME } from "@shared/theme";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "yellow" | "purple";
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  variant = "purple",
  disabled = false,
}) => {
  const pressedValue = useSharedValue(0);
  const opacity = useSharedValue(0);

  const rangeColor =
    variant === "purple"
      ? [THEME.COLORS.PURPLE_DARK, THEME.COLORS.PURPLE]
      : [THEME.COLORS.YELLOW_DARK, THEME.COLORS.YELLOW];

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      backgroundColor: interpolateColor(pressedValue.value, [0, 1], rangeColor),
    };
  });

  const onPressIn = () => {
    pressedValue.value = withTiming(1, { duration: 150 });
  };

  const onPressOut = () => {
    pressedValue.value = withTiming(0, { duration: 150 });
  };

  useEffect(() => {
    if (disabled) {
      opacity.value = withTiming(0.4, { duration: 150 });
    } else {
      opacity.value = withTiming(1, { duration: 150 });
    }
  }, [disabled]);

  return (
    <PressableAnimated
      style={[$root, animatedStyles]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      <Text text={title} size="sm" color="WHITE" style={$buttonTitle} />
    </PressableAnimated>
  );
};

export const $root: ViewStyle = {
  flex: 1,
  padding: 12,
  borderRadius: 6,
  height: 46,
  alignItems: "center",
  justifyContent: "center",
};

export const $buttonTitle: TextStyle = {
  fontFamily: THEME.TYPOGRAPHY.ROBOTO.BOLD,
};
