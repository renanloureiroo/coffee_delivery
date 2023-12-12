import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text } from "../Text";
import { THEME } from "@shared/theme";
import { FC, useEffect, useState } from "react";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

interface SelectProps {
  label: string;
  value: string;
  selected?: boolean;
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = ({
  label,
  value,
  onChange,
  selected = false,
}) => {
  const selectedValue = useSharedValue(0);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        selectedValue.value,
        [0, 1],
        [THEME.COLORS.GRAY_700, "transparent"]
      ),
      borderColor: interpolateColor(
        selectedValue.value,
        [0, 1],
        ["transparent", THEME.COLORS.PURPLE]
      ),
    };
  }, []);

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        selectedValue.value,
        [0, 1],
        [THEME.COLORS.GRAY_300, THEME.COLORS.PURPLE]
      ),
      fontFamily:
        selectedValue.value === 0
          ? THEME.TYPOGRAPHY.ROBOTO.REGULAR
          : THEME.TYPOGRAPHY.ROBOTO.BOLD,
    };
  });

  const $textStyle = [
    $label,
    {
      fontWeight: selected ? "bold" : "normal",
    },
  ] as StyleProp<TextStyle>[];

  useEffect(() => {
    selectedValue.value = withTiming(selected ? 1 : 0, {
      duration: 300,
    });
  }, [selected]);

  return (
    <PressableAnimated
      style={[$container, containerAnimatedStyle]}
      onPress={() => {
        onChange(value);
      }}
    >
      <Text animated style={[$textStyle, textAnimatedStyle]}>
        {label}
      </Text>
    </PressableAnimated>
  );
};

export const $container: ViewStyle = {
  flex: 1,
  borderWidth: 1,
  borderRadius: 6,
  height: 40,
  paddingHorizontal: 12,
  paddingVertical: 6,
  alignItems: "center",
  justifyContent: "center",
};

export const $label: TextStyle = {
  fontSize: THEME.FONT_SIZES.BODY.SM,
};
