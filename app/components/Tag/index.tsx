import { FC, useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { $container, $text } from "./styles";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { THEME } from "@shared/theme";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface TagProps {
  label: string;
  selected?: boolean;
  selectable?: boolean;
}

export const Tag: FC<TagProps> = ({
  label,
  selected = false,
  selectable = false,
}) => {
  const [status, setStatus] = useState(() => selected);
  const selectValue = useSharedValue(0);

  const $animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        selectValue.value,
        [0, 1],
        ["transparent", THEME.COLORS.PURPLE]
      ),
    };
  });

  const $animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        selectValue.value,
        [0, 1],
        [THEME.COLORS.PURPLE, THEME.COLORS.WHITE]
      ),
    };
  });

  useEffect(() => {
    if (status) {
      selectValue.value = withTiming(1, { duration: 200 });
    } else {
      selectValue.value = withTiming(0, { duration: 200 });
    }
  }, [status]);

  return (
    <AnimatedPressable
      style={[$container, $animatedContainerStyle]}
      onPress={() => {
        if (selectable) {
          setStatus((s) => !s);
        }
      }}
    >
      <Animated.Text style={[$text, $animatedTextStyle]}>{label}</Animated.Text>
    </AnimatedPressable>
  );
};
