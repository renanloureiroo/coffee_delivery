import { Screen } from "@components/Screen";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  SectionList,
  SectionListProps,
  StyleProp,
  View,
  ViewStyle,
  ViewToken,
  useWindowDimensions,
} from "react-native";

import * as styles from "./styles";
import { StatusBar } from "expo-status-bar";

import { CardCatalog } from "../../components/Card/CardCatalog";

import { useSafeAreaEdges } from "@shared/hooks";

import { Search, Text, Heading, Icon, Card, Tag } from "@components/index";
import { useCallback, useEffect, useRef, useState } from "react";
import Animated, {
  Easing,
  Extrapolate,
  FadeInDown,
  Keyframe,
  SlideInUp,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { HorizontalScroll } from "./HorizontalScroll";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { THEME } from "@shared/theme";
import { coffees, Product } from "../../data/coffees";
const coffePNG = require("@assets/images/coffee.png");

type SelectionListDataProps = {
  title: string;
  data: Product[];
};

const AnimatedSectionList =
  Animated.createAnimatedComponent<
    SectionListProps<Product, SelectionListDataProps>
  >(SectionList);

export const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loadingPress, setLoadingPress] = useState(false);
  const [search, setSearch] = useState<string>("");
  const { paddingTop } = useSafeAreaEdges(["top"]);

  const { width } = useWindowDimensions();

  const sectionListRef = useRef<any>(null);
  const scrollY = useSharedValue(0);
  const introContainerPosition = useSharedValue(0);
  const positionY = useSharedValue(-300);

  const sections = coffees.reduce((acumulador, produto) => {
    const { type, name, description, price, image } = produto;
    const produtoFormatado = {
      id: produto.id,
      type,
      name,
      description,
      price,
      image,
    };

    const categoriaExistente = acumulador.find((item) => item.title === type);

    if (categoriaExistente) {
      categoriaExistente.data.push(produtoFormatado);
    } else {
      acumulador.push({ title: type, data: [produtoFormatado] });
    }

    return acumulador;
  }, [] as { title: string; data: Array<Product> }[]);

  const titles = {
    tradicional: "Tradicionais",
    doce: "Doces",
    especial: "Especiais",
  };

  const scrollToSection = (sectionIndex: number) => {
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        viewOffset: 0,
        animated: true,
      });
    }
  };

  const handlePressTab = (index: number) => {
    setLoadingPress(true);
    setActiveTab(index);
    scrollToSection(index);

    setTimeout(() => {
      setLoadingPress(false);
    }, 300);
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => {
    if (viewableItems.length > 0) {
      const sectionIndex = sections.findIndex(
        ({ title }) => title === viewableItems[0].section.title
      );
      if (sectionIndex !== -1 && !loadingPress) {
        setActiveTab(sectionIndex);
      }
    }
  };

  const onPanUp = Gesture.Pan()
    .activateAfterLongPress(200)
    .onUpdate((event) => {
      if (event.translationY < 0) {
        introContainerPosition.value = event.translationY;
      } else {
        introContainerPosition.value = scrollY.value + event.translationY;
      }
    })
    .onEnd((event) => {
      if (event.translationY > 20) {
        introContainerPosition.value = withTiming(0, {
          duration: 600,
          easing: Easing.inOut(Easing.quad),
        });
      }

      if (event.translationY < -20) {
        introContainerPosition.value = withTiming(-220, {
          duration: 600,
          easing: Easing.inOut(Easing.quad),
        });
      }

      scrollY.value = event.translationY <= -220 ? -220 : event.translationY;
    });

  const $headerStyle = [
    styles.$header,
    {
      paddingTop: Number(paddingTop) + 16,
    },
  ] as StyleProp<ViewStyle>;

  const introContainerAnimatedStyles = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        introContainerPosition.value,
        [0, -180],
        [0, -532],
        Extrapolate.CLAMP
      ),
      backgroundColor: interpolateColor(
        introContainerPosition.value,
        [-10, -150],
        [THEME.COLORS.GRAY_100, THEME.COLORS.GRAY_900]
      ),
    };
  });

  const headerContainerAnimatedStyles = useAnimatedStyle(() => {
    return {
      marginBottom: interpolate(
        introContainerPosition.value,
        [0, -180],
        [180, 120],
        Extrapolate.CLAMP
      ),
    };
  });

  const headerAnimatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        introContainerPosition.value,
        [0, -180],
        [THEME.COLORS.GRAY_100, THEME.COLORS.GRAY_900]
      ),
    };
  });

  const headerTextAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        introContainerPosition.value,
        [0, -100],
        [THEME.COLORS.GRAY_900, THEME.COLORS.GRAY_200]
      ),
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
    <Screen safeEdges={["bottom"]} style={styles.$root}>
      <StatusBar
        style={introContainerPosition.value === 0 ? "light" : "dark"}
        backgroundColor="transparent"
        translucent
        animated
        hideTransitionAnimation="slide"
      />
      <Animated.View
        style={[styles.$headerContainer, headerContainerAnimatedStyles]}
        entering={SlideInUp.duration(600).easing(
          Easing.bezierFn(0, 0.79, 0.52, 0.98)
        )}
      >
        <Animated.View style={[$headerStyle, headerAnimatedStyles]}>
          <View style={[styles.$headerLeft]}>
            <Icon name="MapPin" color="PURPLE" />
            <Text
              text={"Vitória, ES"}
              size="sm"
              style={headerTextAnimatedStyles}
              animated
            />
          </View>

          <Icon name="Shopping" color="YELLOW_DARK" />
        </Animated.View>

        <Animated.View
          style={[styles.$scrollHeader, introContainerAnimatedStyles]}
        >
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
          <HorizontalScroll />
        </Animated.View>
      </Animated.View>
      <GestureDetector gesture={onPanUp}>
        <Animated.View
          entering={FadeInDown.delay(200).duration(300)}
          style={[styles.$content]}
        >
          <Heading text="Nossos cafés" color="GRAY_300" size="sm" />

          <ScrollView
            horizontal
            style={{
              marginBottom: 16,
            }}
            contentContainerStyle={{
              gap: 8,
              paddingTop: 12,
              paddingBottom: 16,
            }}
          >
            {Object.keys(titles).map((item, index) => (
              <Tag
                key={index}
                label={item}
                selected={activeTab === index}
                selectable
                onPress={() => handlePressTab(index)}
              />
            ))}
          </ScrollView>

          <AnimatedSectionList
            ref={sectionListRef}
            windowSize={10}
            sections={sections}
            initialNumToRender={20}
            maxToRenderPerBatch={10}
            onEndReachedThreshold={0.1}
            removeClippedSubviews={true}
            keyExtractor={(item) => item.id}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
            onViewableItemsChanged={(items) => onViewableItemsChanged(items)}
            contentContainerStyle={{
              gap: 16,
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Heading
                text={titles[title as keyof typeof titles]}
                color="GRAY_400"
                size="xs"
                style={{
                  marginBottom: 16,
                }}
              />
            )}
            renderItem={({ item }) => (
              <CardCatalog
                title={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )}
          />
        </Animated.View>
      </GestureDetector>
    </Screen>
  );
};
