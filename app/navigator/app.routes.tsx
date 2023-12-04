import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";
import { ProductScreen } from "../screens/Product";
import { ProductsProvider } from "../context/ProductsContext";

type AppRoutesParamsList = {
  Home: undefined;
  Product: { id: string };
};

export type AppNavigatorProps<T extends keyof AppRoutesParamsList> =
  NavigationProp<AppRoutesParamsList, T>;

export type AppNavigatorRouteProps<T extends keyof AppRoutesParamsList> =
  RouteProp<AppRoutesParamsList, T>;

export const { Navigator, Screen } =
  createNativeStackNavigator<AppRoutesParamsList>();

export const AppRoutes = () => {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Product" component={ProductScreen} />
        </Navigator>
      </NavigationContainer>
    </ProductsProvider>
  );
};
