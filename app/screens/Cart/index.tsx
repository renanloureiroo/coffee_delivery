import { Card, Heading, Icon, Screen, Text } from "@components/index";
import { useProducts, useSafeAreaEdges } from "@shared/hooks";
import {
  Image,
  ImageStyle,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
  useAnimatedValue,
} from "react-native";

import * as styles from "./styles";
import Animated, {
  Layout,
  SlideInLeft,
  SlideOutRight,
  useSharedValue,
} from "react-native-reanimated";
import { Swipeable } from "react-native-gesture-handler";
import { useRef } from "react";
import { Counter } from "@components/Counter";
import { THEME } from "@shared/theme";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "app/navigator/app.routes";

export const CartScreen = () => {
  const { paddingTop } = useSafeAreaEdges(["top"]);
  const $headerStyle = [
    styles.$header,
    { paddingTop: Number(paddingTop) + 26 },
  ] as StyleProp<ViewStyle>[];

  const { goBack } = useNavigation<AppNavigatorProps<"Cart">>();

  const { myCart, getProductsById, deleteProductMyCart } = useProducts();

  const items = myCart.map((item) => {
    return {
      id: item.productId,
      size: item.size,
      quantity: item.quantity,
      product: getProductsById(item.productId),
    };
  });

  const swipebleRef = useRef<Swipeable[]>(null);

  return (
    <Screen safeEdges={["bottom"]} style={styles.$root}>
      <View style={$headerStyle}>
        <Icon name="ArrowLeft" color="GRAY_100" onPress={goBack} />

        <Heading text="Carrinho" size="sm" />

        <View
          style={{
            width: 24,
            height: 24,
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={$list}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item) => (
          <Animated.View
            key={item.id}
            entering={SlideInLeft}
            exiting={SlideOutRight}
            layout={Layout.springify()}
          >
            <Swipeable
              ref={(ref) => {
                if (ref) {
                  swipebleRef.current?.push(ref);
                }
              }}
              overshootLeft={true}
              renderRightActions={() => null}
              containerStyle={$container}
              renderLeftActions={() => (
                <View style={$trashWrapper}>
                  <Icon
                    name="Trash"
                    color="RED_DARK"
                    size={32}
                    onPress={() => deleteProductMyCart(item.id)}
                  />
                </View>
              )}
            >
              <Card
                id={item.id}
                image={item.product!.image}
                title={item.product!.name}
                size={item.size}
                quantity={item.quantity}
                price={item.product!.price}
                variant="cart"
              />
            </Swipeable>
          </Animated.View>
        ))}
      </ScrollView>
    </Screen>
  );
};

const $trashWrapper: ViewStyle = {
  height: "100%",
  width: 95,
  padding: 16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: THEME.COLORS.RED_LIGHT,
};

const $container: ViewStyle = {
  backgroundColor: THEME.COLORS.RED_LIGHT,
};

const $list: ViewStyle = {
  flexGrow: 1,
};
