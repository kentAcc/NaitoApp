import React, { createElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, Button, LogoTitle } from "react-native";
import { CartInfoComponent } from "../../features/cart/cart.info.component";
import { SafeArea } from "../../components/utility/safe-area.component";

import { ProductsNavigator } from "./products.navigator";
import { Badge, Appbar, Entypo } from "react-native-paper";
import { Header } from "@react-navigation/stack";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Productos: "search",
  Carrito: "cart-outline",
  Settings: "settings",
};

const Settings = ({ navigation }) => (
  <SafeArea>
    <Text>Settings</Text>
    <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
    <Button onPress={() => navigation.navigate("carrito")} title="Open Modal" />
  </SafeArea>
);
const DetailsScreen = () => (
  <SafeArea>
    <Text>Map</Text>
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

export const AppNavigator = () => (
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
        component={Settings}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
