import { Image, ImageStyle, View, ViewStyle } from "react-native";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Counter } from "../Counter";
import { Icon } from "../Icon";
import { THEME } from "@shared/theme";
import { CardProps } from ".";
import { FC, useEffect, useState } from "react";
import { useProducts } from "@shared/hooks";

interface CardCartProps extends Omit<CardProps, "active" | "label"> {}

export const CardCart: FC<CardCartProps> = ({
  image,
  price,
  title,
  onPress,
  id,
  size,
  quantity = 1,
}) => {
  const [quantityCount, setQuantityCount] = useState(quantity);
  const { updateProductMyCard, deleteProductMyCart } = useProducts();

  useEffect(() => {
    updateProductMyCard({
      productId: id!,
      quantity: quantityCount,
      size: size!,
    });
  }, [quantityCount]);

  return (
    <View style={$container}>
      <Image source={image} style={$image} resizeMode="cover" />
      <View style={$content}>
        <View style={$header}>
          <View style={$headerText}>
            <Text size="md">{title}</Text>
            <Text size="sm" color="GRAY_400">
              {size} ml
            </Text>
          </View>

          <Heading size="sm">R${price}</Heading>
        </View>
        <View style={$footer}>
          <Counter
            value={quantityCount}
            onChange={setQuantityCount}
            size="sm"
          />
          <Icon
            name="Trash"
            color="PURPLE"
            size={24}
            style={{
              backgroundColor: THEME.COLORS.GRAY_700,
              height: 36,
              width: 36,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
            }}
            onPress={() => deleteProductMyCart(id!)}
          />
        </View>
      </View>
    </View>
  );
};
const $container: ViewStyle = {
  paddingHorizontal: 32,
  paddingVertical: 16,
  borderBottomWidth: 1,
  borderBottomColor: THEME.COLORS.GRAY_700,
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
  backgroundColor: THEME.COLORS.GRAY_900,
};

const $content: ViewStyle = {
  gap: 8,
  flex: 1,
};

const $image: ImageStyle = {
  width: 64,
  height: 64,
};

const $header: ViewStyle = {
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

const $headerText: ViewStyle = {
  gap: 2,
};

const $footer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 8,
};
