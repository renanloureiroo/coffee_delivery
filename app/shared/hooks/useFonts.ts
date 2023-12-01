import { useFonts as expoUseFonts } from "expo-font";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export const useFonts = () => {
  const [fontsLoaded] = expoUseFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return fontsLoaded;
};
