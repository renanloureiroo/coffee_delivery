import { StatusBar } from "expo-status-bar";

import { useFonts } from "@shared/hooks";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { SplashScreen } from "@components/SplashScreen";
import { AppRoutes } from "./app/navigator/app.routes";
import { useCallback, useEffect, useState } from "react";

import * as ExpoSplashScreen from "expo-splash-screen";

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const fontsLoaded = useFonts();

  const onLayoutRootView = useCallback(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 500);
  }, []);

  if (showSplashScreen || !fontsLoaded) {
    return <SplashScreen onTransitionEnd={onLayoutRootView} />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppRoutes />
    </SafeAreaProvider>
  );
}
