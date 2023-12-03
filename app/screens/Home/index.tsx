import { Screen } from "@components/Screen";
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StyleProp,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native";

import * as styles from "./styles";
import { StatusBar } from "expo-status-bar";

import { CardCatalog } from "../../components/Card/CardCatalog";

import { useSafeAreaEdges } from "@shared/hooks";

import { Search, Text, Heading, Icon, Card, Tag } from "@components/index";
import { useCallback, useEffect, useState } from "react";
import Animated, {
  Easing,
  Keyframe,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { HorizontalScroll } from "./HorizontalScroll";
const coffePNG = require("@assets/images/coffee.png");

export const HomeScreen = () => {
  const [search, setSearch] = useState<string>("");
  const { paddingTop } = useSafeAreaEdges(["top"]);

  const { width } = useWindowDimensions();

  const DATA = [
    {
      title: "TRADICIONAIS",
      data: [
        {
          id: "1",
          title: "Latte",
          description: "Café expresso com o dobro de leite e espuma cremosa",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
        {
          id: "2",
          title: "Mocaccino",
          description: "Café expresso com calda de chocolate, leite e espuma",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
        {
          id: "3",
          title: "Mocaccino",
          description: "Café expresso com calda de chocolate, leite e espuma",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
      ],
    },
    {
      title: "DOCES",
      data: [
        {
          id: "4",
          title: "Latte",
          description: "Café expresso com o dobro de leite e espuma cremosa",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
        {
          id: "5",
          title: "Mocaccino",
          description: "Café expresso com calda de chocolate, leite e espuma",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
        {
          id: "6",
          title: "Mocaccino",
          description: "Café expresso com calda de chocolate, leite e espuma",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
      ],
    },
    {
      title: "ESPECIAIS",
      data: [
        {
          id: "7",
          title: "Latte",
          description: "Café expresso com o dobro de leite e espuma cremosa",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
        {
          id: "8",
          title: "Mocaccino",
          description: "Café expresso com calda de chocolate, leite e espuma",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
        {
          id: "9",
          title: "Mocaccino",
          description: "Café expresso com calda de chocolate, leite e espuma",
          price: 9.9,
          image: require("../../assets/images/expresso.png"),
        },
      ],
    },
  ];

  const positionY = useSharedValue(-300);

  const $headerStyle = [styles.$header] as StyleProp<ViewStyle>;

  const $contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: positionY.value,
        },
      ],
    };
  });

  const onTypingSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  useEffect(() => {
    positionY.value = withTiming(0, {
      duration: 300,
      easing: Easing.quad,
    });
  }, []);

  return (
    <Screen safeEdges={["top"]} style={styles.$root}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        animated={true}
        translucent
      />
      <View style={$headerStyle}>
        <View style={styles.$headerLeft}>
          <Icon name="MapPin" color="PURPLE" />
          <Text text={"Vitória, ES"} color="WHITE" size="sm" />
        </View>

        <Icon name="Shopping" color="YELLOW_DARK" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.$scrollHeader}>
          <Heading
            text="Encontre o café perfeito para qualquer hora do dia"
            color="WHITE"
          />

          <View style={styles.$searchContainer}>
            <Search
              onChangeText={onTypingSearch}
              value={search}
              style={styles.$search}
            />

            <Image source={coffePNG} resizeMode="cover" style={styles.$image} />
          </View>
        </View>
        <Animated.View style={[styles.$content, $contentAnimatedStyle]}>
          <HorizontalScroll />
          <View style={styles.$listContainer}>
            <Heading text="Nossos cafés" color="GRAY_300" size="sm" />

            <View style={styles.$tags}>
              {DATA.map(({ title, data }) => (
                <Tag key={title} label={title.toUpperCase()} selectable />
              ))}
            </View>

            {DATA.map(({ title, data }) => (
              <View
                key={title}
                style={{
                  gap: 32,
                }}
              >
                <Heading text={title} color="GRAY_400" size="xs" />
                <View
                  style={{
                    gap: 16,
                    marginBottom: 48,
                  }}
                >
                  {data.map((item) => (
                    <CardCatalog
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </Screen>
  );
};
