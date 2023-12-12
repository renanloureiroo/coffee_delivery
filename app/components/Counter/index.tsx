import { Pressable, View } from "react-native";
import { Icon } from "../Icon";
import { FC, useEffect, useState } from "react";
import { Text } from "../Text";
import Animated from "react-native-reanimated";

import { $root, $item, $itemSm, $pressed } from "./styles";

interface CounterProps {
  value?: number;
  onChange: (value: number) => void;
  size?: "sm" | "md";
}

export const Counter: FC<CounterProps> = ({
  value = 1,
  onChange,
  size = "md",
}) => {
  const [counterValue, setCounterValue] = useState<number>(value);

  const onPressMinus = () => {
    if (counterValue === 1) return;
    setCounterValue((prev) => prev - 1);
  };

  const onPressPlus = () => {
    setCounterValue((prev) => prev + 1);
  };

  useEffect(() => {
    if (counterValue !== value) {
      onChange(counterValue);
    }
  }, [counterValue]);
  return (
    <View
      style={[
        $root,
        { height: size === "md" ? 46 : 36, borderWidth: size === "md" ? 0 : 1 },
      ]}
    >
      <Pressable onPress={onPressMinus}>
        {({ pressed }) => (
          <Animated.View
            style={[size === "md" ? $item : $itemSm, pressed && $pressed]}
          >
            <Icon name="Minus" color={pressed ? "PURPLE_DARK" : "PURPLE"} />
          </Animated.View>
        )}
      </Pressable>
      <View style={$item}>
        <Text text={String(value)} />
      </View>
      <Pressable onPress={onPressPlus}>
        {({ pressed }) => (
          <Animated.View
            style={[size === "md" ? $item : $itemSm, pressed && $pressed]}
          >
            <Icon name="Plus" color={pressed ? "PURPLE_DARK" : "PURPLE"} />
          </Animated.View>
        )}
      </Pressable>
    </View>
  );
};
