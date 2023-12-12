import { Pressable, View, ViewStyle } from "react-native";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { FC } from "react";
import { THEME } from "@shared/theme";

interface CartButtonProps {
  quantity?: number;
  onPress?: () => void;
  color?: "yellow" | "purple";
}

export const CartButton: FC<CartButtonProps> = ({
  quantity = 0,
  onPress,
  color = "purple",
}) => {
  return (
    <Pressable style={$cartWrapper} onPress={onPress}>
      <Icon
        name="Shopping"
        color={color === "purple" ? "PURPLE" : "YELLOW_DARK"}
      />

      {quantity > 0 && (
        <View style={[$badge, color === "purple" ? $purple : $yellow]}>
          <Text text={String(quantity)} color="WHITE" size="xs" />
        </View>
      )}
    </Pressable>
  );
};

export const $cartWrapper: ViewStyle = {
  position: "relative",
  width: 36,
  height: 36,
  alignItems: "center",
  justifyContent: "center",
};

const $yellow: ViewStyle = {
  backgroundColor: THEME.COLORS.YELLOW_DARK,
};

const $purple: ViewStyle = {
  backgroundColor: THEME.COLORS.PURPLE,
};

export const $badge: ViewStyle = {
  width: 20,
  height: 20,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: -10,
  right: -10,
  borderRadius: 9999,
};
