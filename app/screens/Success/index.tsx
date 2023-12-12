import { Button, Heading, Screen, Text } from "@components/index";

import { $button, $image, $root, $subtitle } from "./styles";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "app/navigator/app.routes";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export const SuccessScreen = () => {
  const { reset } = useNavigation<AppNavigatorProps<"Success">>();

  const positionY = useSharedValue(0);

  const imageAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: positionY.value }],
    };
  });

  const handleToHome = () => {
    reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  useEffect(() => {
    positionY.value = withRepeat(
      withSequence(withTiming(-5), withTiming(0)),
      -1
    );
  }, []);

  return (
    <Screen style={$root}>
      <Animated.Image
        style={[$image, imageAnimatedStyles]}
        source={require("../../assets/images/illustration.png")}
      />
      <Heading
        text="Uhu! Pedido confirmado"
        color="YELLOW_DARK"
        size="lg"
        align="center"
      />
      <Text
        text="Agora é só aguardar que logo o café chegará até você!"
        color="GRAY_200"
        size="sm"
        align="center"
        style={$subtitle}
      />
      <View style={$button}>
        <Button title="Ir para Home" onPress={handleToHome} />
      </View>
    </Screen>
  );
};
