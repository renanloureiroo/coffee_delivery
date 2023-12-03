import Animated, { Easing, SlideInRight } from "react-native-reanimated";

import { Platform, ViewToken } from "react-native";
import { Card } from "@components/Card";
import { useRef, useState } from "react";

export const HorizontalScroll = () => {
  const [activeIndex, setActiveIndex] = useState<string>();

  const data = [
    {
      id: "1",
      label: "TRADICIONAL",
      title: "Latte",
      description: "Café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      image: require("../../assets/images/expresso.png"),
    },
    {
      id: "2",
      label: "DOCE",
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: 9.9,
      image: require("../../assets/images/expresso.png"),
    },
    {
      id: "3",
      label: "DOCE",
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: 9.9,
      image: require("../../assets/images/expresso.png"),
    },
  ];

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        if (Platform.OS === "ios") {
          if (viewableItems.length <= 2) {
            if (viewableItems[0].item.id === data[0].id) {
              setActiveIndex((s) => viewableItems?.[0]?.item?.id ?? s);
            } else {
              setActiveIndex((s) => viewableItems?.[1]?.item?.id ?? s);
            }
          } else {
            setActiveIndex((s) => viewableItems?.[1]?.item?.id ?? s);
          }
        } else {
          if (viewableItems.length <= 3) {
            if (viewableItems[0].item.id === data[0].id) {
              setActiveIndex((s) => viewableItems?.[0]?.item?.id ?? s);
            } else {
              setActiveIndex((s) => viewableItems?.[1]?.item?.id ?? s);
            }
          } else {
            setActiveIndex((s) => viewableItems?.[1]?.item?.id ?? s);
          }
        }
      }
    }
  );

  return (
    <Animated.FlatList
      entering={SlideInRight.delay(300)
        .duration(500)
        .easing(Easing.in(Easing.quad))}
      style={{
        bottom: -180,
        zIndex: 5,
        overflow: "visible",
        height: 323,
        position: "absolute",
      }}
      horizontal
      snapToInterval={165}
      onViewableItemsChanged={onViewableItemsChanged.current}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item, index }) => (
        <Card
          label={item.label}
          price={item.price}
          image={item.image}
          title={item.title}
          description={item.description}
          active={item.id === activeIndex}
          variant="emphasis"
        />
      )}
      contentContainerStyle={{
        columnGap: 32,
        paddingHorizontal: 32,
        alignItems: "center",
      }}
    />
  );
};
