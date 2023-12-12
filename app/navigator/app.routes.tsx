import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductScreen, HomeScreen, CartScreen } from "../screens";
import { ProductsProvider, NotificationsProvider } from "../context";

type AppRoutesParamsList = {
  Home: undefined;
  Product: { id: string };
  Cart: undefined;
};

export type AppNavigatorProps<T extends keyof AppRoutesParamsList> =
  NavigationProp<AppRoutesParamsList, T>;

export type AppNavigatorRouteProps<T extends keyof AppRoutesParamsList> =
  RouteProp<AppRoutesParamsList, T>;

export const { Navigator, Screen } =
  createNativeStackNavigator<AppRoutesParamsList>();

export const AppRoutes = () => {
  return (
    <NotificationsProvider>
      <ProductsProvider>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Product" component={ProductScreen} />
            <Screen name="Cart" component={CartScreen} />
          </Navigator>
        </NavigationContainer>
      </ProductsProvider>
    </NotificationsProvider>
  );
};
