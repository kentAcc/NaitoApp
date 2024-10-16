import React, { createElement, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, Button, LogoTitle } from "react-native";
import { CartInfoComponent } from "../../features/cart/cart.info.component";
import { SafeArea } from "../../components/utility/safe-area.component";

import { ProductsNavigator } from "./products.navigator";
import { AccountNavigator } from "./account.navigator";
import { Badge, Appbar, Entypo } from "react-native-paper";
import { Header } from "@react-navigation/stack";
import { View } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import LoginScreen from "../../features/account/screens/login.screen";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Productos: "search",
  Carrito: "cart-outline",
  Settings: "settings",
};

const DetailsScreen = () => (
  <SafeArea>
    <View>Map</View>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarOptions: () => {
      activeTintColor: "tomato";
      inactiveTintColor: "gray";
    },
  };
};

export const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  const Settings = ({ navigation }) => (
    <SafeArea>
      <View>
        {isAuthenticated && <Text>hola</Text>}
        {!isAuthenticated && <Text>no</Text>}
      </View>
    </SafeArea>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Productos"
          component={ProductsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Carrito"
          component={CartInfoComponent}
          options={{
            headerShown: true,
            title: "Carrito de compras",
            headerStyle: {
              backgroundColor: "#EDD901",
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={AccountNavigator}
          options={{
            headerShown: true,
            title: "Account",
            headerStyle: {
              backgroundColor: "#EDD901",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
