import { ImageSourcePropType } from "react-native";

import { FC } from "react";
import { CardEmphasis } from "./CardEmphasis";
import { CardCatalog } from "./CardCatalog";
import { CardCart } from "./CardCart";

export interface CardProps {
  id?: string;
  active?: boolean;
  label?: string;
  title: string;
  description?: string;
  price: number;
  image: ImageSourcePropType;
  variant?: "emphasis" | "cart" | "default";
  onPress?: () => void;
  size?: string;
  quantity: number;
}

export const Card: FC<CardProps> = ({
  id,
  description,
  label,
  price,
  title,
  image,
  active = false,
  variant = "default",
  onPress,
  size = "0",
  quantity,
}) => {
  if (variant === "cart") {
    return (
      <CardCart
        {...{
          description,
          label,
          price,
          title,
          image,
          active,
          onPress,
          size,
          quantity,
          id,
        }}
      />
    );
  }

  if (variant === "emphasis") {
    return (
      <CardEmphasis
        {...{ description, label, price, title, image, active, onPress }}
      />
    );
  }

  return (
    <CardCatalog
      {...{ description, label, price, title, image, active, onPress }}
    />
  );
};
