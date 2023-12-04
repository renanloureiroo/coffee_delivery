import { Heading, Icon, Screen, Tag, Text } from "@components/index";
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
import { useSafeAreaEdges } from "@shared/hooks";
import { Smoke } from "./Smoke";

export const ProductScreen = () => {
  const { paddingTop } = useSafeAreaEdges(["top"]);
  const { params } = useRoute<AppNavigatorRouteProps<"Product">>();
  const { goBack } =
    useNavigation<NavigationProp<AppNavigatorProps<"Product">>>();

  const { id } = params;

  const $headerStyle = [
    styles.$header,
    { paddingTop: Number(paddingTop) + 26 },
  ] as StyleProp<ViewStyle>[];

  console.log(id);
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
              <Tag label="Especial" selected />

              <Heading text="Irlandês" size="lg" color="WHITE" />
            </View>

            <View style={styles.$productInfoHeaderPrice}>
              <Text text="R$" color="YELLOW_DARK" size="sm" />
              <Heading text={`9,90`} size="xl" color="YELLOW" />
            </View>
          </View>

          <Text
            color="GRAY_500"
            style={styles.$productInfoDescription}
            text="Bebida a base de café, uísque irlandês, açúcar e chantilly"
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
    </Screen>
  );
};
