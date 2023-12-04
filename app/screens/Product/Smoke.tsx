import { View } from "react-native";

import Smoke1 from "@assets/smoke-1.svg";
import Smoke2 from "@assets/smoke-2.svg";
import Smoke3 from "@assets/smoke-3.svg";
import Smoke4 from "@assets/smoke-4.svg";
import Smoke5 from "@assets/smoke-5.svg";
import Smoke6 from "@assets/smoke-6.svg";
import Smoke7 from "@assets/smoke-7.svg";
import Smoke8 from "@assets/smoke-8.svg";
import Smoke9 from "@assets/smoke-9.svg";
import Smoke10 from "@assets/smoke-10.svg";

const smokes = [
  Smoke1,
  Smoke2,
  Smoke3,
  Smoke4,
  Smoke5,
  Smoke6,
  Smoke7,
  Smoke8,
  Smoke9,
  Smoke10,
];

import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutUp,
} from "react-native-reanimated";
import { FC, useEffect, useState } from "react";
import { SvgProps } from "react-native-svg";

const Item = ({
  component,
  show,
}: {
  component: FC<SvgProps>;
  show: boolean;
}) => {
  const Svg = component;
  if (!show) {
    return null;
  }
  return (
    <Animated.View
      entering={FadeIn.duration(1000).easing(Easing.linear)}
      exiting={FadeOut.duration(1000).easing(Easing.linear)}
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Svg />
    </Animated.View>
  );
};

export const Smoke = () => {
  const [indexVisible, setIndexVisible] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setIndexVisible((prev) => {
        if (prev === smokes.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: 240,
        alignItems: "center",
      }}
    >
      {smokes.map((Smoke, index) => {
        return (
          <Item key={index} component={Smoke} show={index === indexVisible} />
        );
      })}
    </View>
  );
};
