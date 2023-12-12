import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { useSafeAreaEdges } from "../shared/hooks/useSafeAreaEdges";
import { THEME } from "@shared/theme";
import { FC, ReactNode, createContext, useCallback, useState } from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import Animated, {
  Easing,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";

interface NotificationsContextProps {
  showNotification: (message: ReactNode) => void;
}

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsContext = createContext<NotificationsContextProps>(
  {} as NotificationsContextProps
);

export const NotificationsProvider: FC<NotificationsProviderProps> = ({
  children,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [messageComponent, setMessageComponent] = useState<ReactNode>("");
  const { paddingBottom } = useSafeAreaEdges(["bottom"]);

  const $containerStyles = [
    $root,
    {
      paddingBottom: Number(paddingBottom) + 16,
    },
  ] as StyleProp<ViewStyle>[];

  const showNotification = useCallback((message: ReactNode) => {
    setMessageComponent(message);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <NotificationsContext.Provider
      value={{
        showNotification,
      }}
    >
      {children}
      {show && (
        <Animated.View
          entering={SlideInDown.duration(300)}
          exiting={SlideOutDown.duration(300)}
          style={$containerStyles}
        >
          <View style={$icon}>
            <Icon name="Shopping" color="WHITE" />
          </View>

          <View style={$textWrapper}>
            {messageComponent && messageComponent}
          </View>

          <Pressable
            style={({ pressed }) => [
              $iconRight,
              pressed && {
                opacity: 0.5,
              },
            ]}
            android_ripple={{
              color: THEME.COLORS.PURPLE,
              borderless: true,
            }}
          >
            <Text text="Ver" color="PURPLE" />
            <Icon name="ArrowRight" color="PURPLE" />
          </Pressable>
        </Animated.View>
      )}
    </NotificationsContext.Provider>
  );
};

const $root: ViewStyle = {
  padding: 24,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: THEME.COLORS.WHITE,
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 999,

  gap: 24,
};

const $icon: ViewStyle = {
  width: 40,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  backgroundColor: THEME.COLORS.GRAY_600,
};

const $iconRight: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
};

const $textWrapper: ViewStyle = {
  flex: 1,
  flexDirection: "row",
};
