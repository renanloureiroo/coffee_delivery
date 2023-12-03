import {
  Image,
  ImageSourcePropType,
  View,
  useWindowDimensions,
} from "react-native";

import * as styles from "./styles";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { FC, useEffect } from "react";
import { Tag } from "../Tag";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { THEME } from "@shared/theme";
import { CardEmphasis } from "./CardEmphasis";
import { CardCatalog } from "./CardCatalog";

const expressoPNG = require("../../assets/images/expresso.png");

export interface CardProps {
  active?: boolean;
  label: string;
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  variant?: "emphasis" | "default";
}

export const Card: FC<CardProps> = ({
  description,
  label,
  price,
  title,
  image,
  active = false,
  variant = "default",
}) => {
  if (variant === "emphasis") {
    return (
      <CardEmphasis {...{ description, label, price, title, image, active }} />
    );
  }

  return (
    <CardCatalog {...{ description, label, price, title, image, active }} />
  );
};
