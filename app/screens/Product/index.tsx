import {
  Button,
  Heading,
  Icon,
  Screen,
  Select,
  Tag,
  Text,
} from "@components/index";
import { Image, StyleProp, View, ViewStyle } from "react-native";

import * as styles from "./styles";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  AppNavigatorProps,
  AppNavigatorRouteProps,
} from "../../navigator/app.routes";
import { useNotification, useSafeAreaEdges, useProducts } from "@shared/hooks";
import { Smoke } from "./Smoke";

import { useCallback, useState } from "react";
import { Counter } from "@components/Counter";
import { THEME } from "@shared/theme";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export const ProductScreen = () => {
  const [valueSelect, setValueSelect] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const { getProductsById, addProductMyCart } = useProducts();
  const { paddingTop } = useSafeAreaEdges(["top"]);
  const { params } = useRoute<AppNavigatorRouteProps<"Product">>();
  const { goBack } =
    useNavigation<NavigationProp<AppNavigatorProps<"Product">>>();

  const { showNotification } = useNotification();

  const sizes = [
    { value: "114", label: "114 ml" },
    {
      value: "140",
      label: "140ml",
    },
    {
      value: "227",
      label: "227 ml",
    },
  ];

  const { id } = params;

  const erroValue = useSharedValue(0);
  const product = getProductsById(id);

  const handleChangeQuantity = useCallback((value: number) => {
    setQuantity(value);
  }, []);

  const headerAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        erroValue.value,
        [0, 1],
        [THEME.COLORS.GRAY_400, THEME.COLORS.YELLOW_DARK]
      ),
    };
  });

  const wrapperAnimatedStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      height: 42,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: interpolateColor(
        erroValue.value,
        [0, 1],
        ["transparent", THEME.COLORS.YELLOW_DARK]
      ),
    };
  });

  const $headerStyle = [
    styles.$header,
    { paddingTop: Number(paddingTop) + 26 },
  ] as StyleProp<ViewStyle>[];

  const handleAddProduct = useCallback(() => {
    if (!valueSelect) {
      erroValue.value = withSequence(
        withTiming(1, {
          duration: 500,
        }),
        withTiming(0, {
          duration: 500,
        })
      );
      return;
    }
    addProductMyCart(id, quantity, valueSelect);
    const message = (
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text color="GRAY_400" size="xs">
            {quantity}
          </Text>
          <Text color="GRAY_400" size="xs">
            {" "}
            {quantity > 1 ? "cafés" : "café"}{" "}
          </Text>
          <Text color="GRAY_400" size="xs" style={styles.$textBold}>
            {product!.name}
          </Text>
          <Text color="GRAY_400" size="xs">
            {" "}
            de{" "}
          </Text>
          <Text color="GRAY_400" size="xs" style={styles.$textBold}>
            {valueSelect}ml
          </Text>
        </View>
        <Text color="GRAY_400" size="xs">
          adicionado ao carrinho!
        </Text>
      </View>
    );
    showNotification(message);
    goBack();
  }, [valueSelect, quantity, id]);

  return (
    <Screen safeEdges={["bottom"]}>
      <View style={styles.$container}>
        <View style={$headerStyle}>
          <Icon name="ArrowLeft" color="WHITE" onPress={goBack} />

          <Icon name="Shopping" color="PURPLE" />
        </View>

        <View style={styles.$productInfo}>
          <View style={styles.$productInfoHeader}>
            <View style={styles.$productInfoHeaderTitle}>
              <Tag label={product!.type.toUpperCase()} selected />

              <Heading text={product!.name} size="lg" color="WHITE" />
            </View>

            <View style={styles.$productInfoHeaderPrice}>
              <Text text="R$" color="YELLOW_DARK" size="sm" />
              <Heading text={`${product!.price}`} size="xl" color="YELLOW" />
            </View>
          </View>

          <Text
            color="GRAY_500"
            style={styles.$productInfoDescription}
            text={product!.description}
          />
          <View
            style={{
              marginBottom: -50,
            }}
          >
            <Smoke />
          </View>
          <Image
            resizeMode="cover"
            style={{
              width: "100%",
              marginBottom: -50,
            }}
            source={require("../../assets/images/xicara.png")}
          />
        </View>
      </View>

      <View style={styles.$footer}>
        <Text
          text="Selecione o seu tamanho:"
          size="sm"
          style={headerAnimatedStyles}
          animated
        />
        <View style={styles.$coffeeSize}>
          {sizes.map((item) => (
            <Animated.View key={item.value} style={wrapperAnimatedStyle}>
              <Select
                label={item.label}
                value={item.value}
                onChange={setValueSelect}
                selected={valueSelect === item.value}
              />
            </Animated.View>
          ))}
        </View>
        <View style={$counter}>
          <Counter value={quantity} onChange={handleChangeQuantity} />
          <Button
            title="Adicionar"
            disabled={!valueSelect}
            onPress={handleAddProduct}
          />
        </View>
      </View>
    </Screen>
  );
};

export const $counter: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: 8,
  backgroundColor: THEME.COLORS.GRAY_700,
  borderRadius: 6,
};
