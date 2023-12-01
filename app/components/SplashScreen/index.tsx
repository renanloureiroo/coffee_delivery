import { Screen } from "@components/screen";
import { THEME } from "@shared/theme";
import { Dimensions, View, ViewStyle } from "react-native";

import LogoSvg from "@assets/logo.svg";
import LogoTextSvg from "@assets/logo_text.svg";

import Animated, {
  Easing,
  Keyframe,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { FC, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

interface SplashScreenProps {
  onTransitionEnd: () => void;
}

export const SplashScreen: FC<SplashScreenProps> = ({ onTransitionEnd }) => {
  const diametro = useSharedValue(0);
  const opacity = useSharedValue(1);

  const color = useSharedValue(0);

  const logoEnteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        {
          translateX: 50,
        },
      ],
    },
    10: {
      opacity: 1,
    },

    100: {
      opacity: 1,
      transform: [
        {
          translateX: 0,
        },
      ],
    },
  });
  const logoTextEnteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        {
          translateX: SCREEN_WIDTH,
        },
      ],
    },
    30: {
      opacity: 1,
    },

    100: {
      opacity: 1,
      transform: [
        {
          translateX: 0,
        },
      ],
    },
  });
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        color.value,
        [0, 1],
        [THEME.COLORS.BRAND.PURPLE_DARK, THEME.COLORS.BRAND.PURPLE]
      ),
    };
  });
  const waveAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: diametro.value,
      height: diametro.value,
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    color.value = withTiming(1, {
      duration: 500,
      easing: Easing.linear,
    });
    diametro.value = withTiming(SCREEN_HEIGHT * 1.5, {
      duration: 500,
      easing: Easing.linear,
    });

    setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: 300,
        easing: Easing.linear,
      });
    }, 500);
  }, []);

  return (
    <Animated.View style={[$root, containerAnimatedStyle]}>
      <StatusBar style="light" />
      <Animated.View style={[$wave, waveAnimatedStyle]} />
      <View style={[$logoContainer]}>
        <Animated.View entering={logoEnteringKeyframe.duration(700)}>
          <LogoSvg />
        </Animated.View>
        <Animated.View
          entering={logoTextEnteringKeyframe
            .duration(500)
            .delay(500)
            .delay(200)
            .withCallback((finished) => {
              "worklet";
              if (finished) {
                runOnJS(onTransitionEnd)();
              }
            })}
        >
          <LogoTextSvg />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const $logoContainer: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: 14,
  zIndex: 2,
};

const $wave: ViewStyle = {
  borderRadius: 9999,
  position: "absolute",
  backgroundColor: THEME.COLORS.BRAND.PURPLE,
  zIndex: 1,
};
