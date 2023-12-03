import Animated, { Keyframe } from "react-native-reanimated";

import { ViewToken, useWindowDimensions } from "react-native";
import { Card } from "@components/Card";
import { useEffect, useRef, useState } from "react";

export const HorizontalScroll = () => {
  const [activeIndex, setActiveIndex] = useState<string>();
  const { width } = useWindowDimensions();

  const cardActiveWidth = width * 0.5546;
  const cardWidth = width * 0.4373;
  const snapInterval = width - cardActiveWidth + 60;
  const snapInterval2 = width - cardWidth;

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
        console.log(viewableItems);
        if (viewableItems.length <= 2) {
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
  );

  const $scrollHorizontalKeyframe = new Keyframe({
    0: {
      transform: [
        {
          translateX: width,
        },

        {
          scale: 0.5,
        },
      ],
    },

    100: {
      transform: [
        {
          translateX: 0,
        },

        {
          scale: 1,
        },
      ],
    },
  });

  return (
    <Animated.FlatList
      entering={$scrollHorizontalKeyframe.delay(400).duration(300)}
      style={{
        top: -140,
        overflow: "visible",
        maxHeight: 323,
      }}
      horizontal
      snapToAlignment={"center"}
      snapToInterval={activeIndex === data[0].id ? snapInterval : snapInterval2}
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
        />
      )}
      contentContainerStyle={{
        columnGap: 32,
        paddingLeft: 32,
        paddingRight: cardWidth / 2,
        alignItems: "center",
      }}
    />
  );
};
