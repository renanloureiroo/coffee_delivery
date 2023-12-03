import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";

import { useFonts } from "@shared/hooks";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { SplashScreen } from "@components/SplashScreen";
import { AppRoutes } from "./app/navigator/app.routes";

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const fontsLoaded = useFonts();

  const onLayoutRootView = useCallback(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1000);
  }, []);

  if (showSplashScreen || !fontsLoaded) {
    return <SplashScreen onTransitionEnd={onLayoutRootView} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          style="dark"
          backgroundColor="transparent"
          animated={true}
          translucent
        />
        <AppRoutes />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
