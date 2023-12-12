import { FC, useEffect, useState } from "react";
import { CardProps } from ".";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image, Pressable, View, useWindowDimensions } from "react-native";
import { THEME } from "@shared/theme";

import * as styles from "./styles";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Tag } from "../Tag";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

interface CardEmphasisProps extends Omit<CardProps, "size" | "quantity"> {}

export const CardEmphasis: FC<CardEmphasisProps> = ({
  description,
  image,
  label,
  price,
  title,
  active,
}) => {
  const activeCard = useSharedValue(0);
  const pressed = useSharedValue(0);

  const { width } = useWindowDimensions();

  const cardWidth = width * 0.4373;
  const cardActiveWidth = width * 0.5546;

  const animatedStyles = useAnimatedStyle(() => {
    return {
      paddingTop: interpolate(activeCard.value, [0, 1], [72, 100]),
      paddingHorizontal: interpolate(activeCard.value, [0, 1], [14, 16]),
      paddingBottom: interpolate(activeCard.value, [0, 1], [16, 20]),
      width: interpolate(
        activeCard.value,
        [0, 1],
        [cardWidth, cardActiveWidth]
      ),
      height: interpolate(activeCard.value, [0, 1], [204.4, 262]),
      opacity: interpolate(pressed.value, [0, 1], [1, 0.7]),
    };
  });

  const animatedImageStyles = useAnimatedStyle(() => {
    return {
      top: interpolate(activeCard.value, [0, 1], [-10, -32]),
      width: interpolate(activeCard.value, [0, 1], [64, 120]),
      height: interpolate(activeCard.value, [0, 1], [64, 120]),
    };
  });

  const animatedHeadingStyles = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(
        activeCard.value,
        [0, 1],
        [THEME.FONT_SIZES.TITLE.XS, THEME.FONT_SIZES.TITLE.MD]
      ),
      lineHeight: interpolate(
        activeCard.value,
        [0, 1],
        [THEME.FONT_SIZES.TITLE.XS * 1.3, THEME.FONT_SIZES.TITLE.MD * 1.3]
      ),
      marginTop: interpolate(activeCard.value, [0, 1], [12, 14]),
    };
  });

  const animatedDescriptionStyles = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(
        activeCard.value,
        [0, 1],
        [10, THEME.FONT_SIZES.TITLE.XS]
      ),
      marginBottom: interpolate(activeCard.value, [0, 1], [12, 14]),
      lineHeight: interpolate(
        activeCard.value,
        [0, 1],
        [10 * 1.3, THEME.FONT_SIZES.TITLE.XS * 1.3]
      ),
    };
  });
  const animatedPriceStyles = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(
        activeCard.value,
        [0, 1],
        [THEME.FONT_SIZES.TITLE.MD, THEME.FONT_SIZES.TITLE.LG]
      ),
      lineHeight: interpolate(
        activeCard.value,
        [0, 1],
        [THEME.FONT_SIZES.TITLE.MD * 1.3, THEME.FONT_SIZES.TITLE.LG * 1.3]
      ),
    };
  });
  const animatedPricePrefixStyles = useAnimatedStyle(() => {
    return {
      top: interpolate(activeCard.value, [0, 1], [0, -2]),
      fontSize: interpolate(
        activeCard.value,
        [0, 1],
        [10, THEME.FONT_SIZES.BODY.SM]
      ),
      lineHeight: interpolate(
        activeCard.value,
        [0, 1],
        [10 * 1.3, THEME.FONT_SIZES.BODY.SM * 1.3]
      ),
    };
  });

  useEffect(() => {
    if (active) {
      activeCard.value = withTiming(1, {
        duration: 300,
      });
    } else {
      activeCard.value = withTiming(0, {
        duration: 300,
      });
    }
  }, [active]);

  useEffect(() => {}, []);

  return (
    <PressableAnimated
      style={[styles.$container, animatedStyles]}
      onPressIn={() =>
        (pressed.value = withTiming(1, {
          duration: 100,
        }))
      }
      onPressOut={() =>
        (pressed.value = withTiming(0, {
          duration: 100,
        }))
      }
    >
      <Animated.View style={[styles.$imageContainer, animatedImageStyles]}>
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </Animated.View>
      <Tag label={label} />

      <Heading
        text={title}
        color="GRAY_200"
        style={[styles.$heading, animatedHeadingStyles]}
        animated
      />

      <Text
        text={description}
        color="GRAY_400"
        size="xs"
        style={[styles.$description, animatedDescriptionStyles]}
        animated
      />

      <View style={styles.$priceContainer}>
        <Text
          text="R$"
          color="YELLOW_DARK"
          style={animatedPricePrefixStyles}
          animated
        />
        <Heading
          text={`${price}`}
          color="YELLOW_DARK"
          style={animatedPriceStyles}
          animated
        />
      </View>
    </PressableAnimated>
  );
};
