import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ProductScreen,
  HomeScreen,
  CartScreen,
  SuccessScreen,
} from "../screens";
import { ProductsProvider, NotificationsProvider } from "../context";

export type AppRoutesParamsList = {
  Home: undefined;
  Product: { id: string };
  Cart: undefined;
  Success: undefined;
};

export type AppNavigatorProps<T extends keyof AppRoutesParamsList> =
  NavigationProp<AppRoutesParamsList, T>;

export type AppNavigatorRouteProps<T extends keyof AppRoutesParamsList> =
  RouteProp<AppRoutesParamsList, T>;

export const { Navigator, Screen } =
  createNativeStackNavigator<AppRoutesParamsList>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <NotificationsProvider>
        <ProductsProvider>
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Product" component={ProductScreen} />
            <Screen name="Cart" component={CartScreen} />
            <Screen name="Success" component={SuccessScreen} />
          </Navigator>
        </ProductsProvider>
      </NotificationsProvider>
    </NavigationContainer>
  );
};
