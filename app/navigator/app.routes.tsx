import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";

type AppRoutesParamsList = {
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesParamsList>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
