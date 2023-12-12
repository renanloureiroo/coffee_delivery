import {
  Button,
  Card,
  Heading,
  Icon,
  Screen,
  Text,
  Counter,
} from "@components/index";
import { useProducts, useSafeAreaEdges } from "@shared/hooks";
import { FlatList, ScrollView, StyleProp, View, ViewStyle } from "react-native";

import * as styles from "./styles";
import Animated, {
  Layout,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";
import { Swipeable } from "react-native-gesture-handler";
import { useRef } from "react";

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

  const totalPrice = items.reduce((acc, current) => {
    //@ts-ignore
    acc += current.quantity * current.product!.price;
    return acc;
  }, 0);

  const swipebleRef = useRef<Swipeable[]>(null);

  const handleConfirm = () => {};

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
      <FlatList
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$list}
        data={items}
        renderItem={({ item }) => (
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
        )}
      />

      <View style={$footer}>
        <View style={$footerHeader}>
          <Text text="Valor total:" color="GRAY_200" />
          <Heading color="GRAY_200">{`R$${totalPrice.toFixed(2)}`}</Heading>
        </View>

        <Button
          variant="yellow"
          title="CONFIRMAR PEDIDO"
          onPress={handleConfirm}
          disabled={items.length === 0}
        />
      </View>
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

const $footer: ViewStyle = {
  padding: 32,
  borderTopWidth: 1,
  borderTopColor: THEME.COLORS.GRAY_700,
  gap: 20,
};

const $footerHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
