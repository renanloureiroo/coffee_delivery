import { Icon, Screen } from "@components/index";
import { View } from "react-native";

import * as styles from "./styles";

export const Product = () => {
  return (
    <Screen safeEdges={["bottom"]}>
      <View style={styles.$header}>
        <Icon name="ArrowLeft" color="WHITE" />
      </View>
    </Screen>
  );
};
