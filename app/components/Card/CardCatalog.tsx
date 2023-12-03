import { FC } from "react";
import { CardProps } from ".";
import { View, Image, Pressable } from "react-native";

import * as styles from "./styles";
import { Text } from "../Text";
import { Heading } from "../Heading";

interface CardCatalogProps extends Omit<CardProps, "active" | "label"> {}

export const CardCatalog: FC<CardCatalogProps> = ({
  description,
  image,
  price,
  title,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.$containerCardCatalog,
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <View
        style={{
          width: 96,
          height: "100%",
        }}
      >
        <View style={[styles.$imageContainerCatalog]}>
          <Image
            source={image}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingVertical: 16,
        }}
      >
        <Heading text={title} color="GRAY_200" />

        <Text
          text={description}
          color="GRAY_400"
          size="xs"
          style={{
            marginBottom: 8,
          }}
        />

        <View style={styles.$priceContainer}>
          <Text
            text="R$"
            color="YELLOW_DARK"
            style={{
              fontSize: 10,
            }}
          />
          <Heading text={`${price}`} color="YELLOW_DARK" />
        </View>
      </View>
    </Pressable>
  );
};
