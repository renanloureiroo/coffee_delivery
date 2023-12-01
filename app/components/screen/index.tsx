import { FC, ReactNode } from "react";

import { useSafeAreaEdges } from "@shared/hooks";

import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

type SafeEdges = "top" | "bottom" | "right" | "left";

interface ScreenProps {
  children: ReactNode;
  safeEdges?: Array<SafeEdges>;
  style?: ViewProps["style"];
}

export const Screen: FC<ScreenProps> = (props) => {
  const {
    children,
    safeEdges = ["bottom", "top"],
    style: $overrideStyles,
    ...rest
  } = props;

  const insets = useSafeAreaEdges(safeEdges);

  const $styles = [$root, insets, $overrideStyles] as StyleProp<ViewStyle>;

  return <View style={$styles}>{children}</View>;
};

const $root: ViewStyle = {
  flex: 1,
  width: "100%",
};
