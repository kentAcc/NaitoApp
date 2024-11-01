import React, { createElement, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { CartInfoComponent } from "../../features/cart/cart.info.component";

import { ProductsNavigator } from "./products.navigator";
import { AccountNavigator } from "./account.navigator";
import { Badge } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { CartContext } from "../../../src/services/cart/cart.context";
import { ProductsRandomContextProvider } from "../../../src/services/productRandom/productsRandom.context";
import { BannerContextProvider } from "../../../src/services/banners/banner.context";
import { ProductsContextProvider } from "../../../src/services/products/products.context";
import App from "./drawer.screen";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Productos: "search",
  Carrito: "cart-outline",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const { count } = useContext(CartContext);
  return {
    tabBarIcon: ({ size, color }) => (
      <>
        {iconName == "cart-outline" && count > 0 && (
          <View style={{ position: "absolute", left: 85, top: 1 }}>
            <Badge>{count}</Badge>
          </View>
        )}
        <Ionicons
          name={iconName}
          size={size}
          color={"orange"}
          style={[iconName == "cart-outline" ? styles.textvalid : ""]}
        />
      </>
    ),
  };
};

export const AppNavigator = () => {
  return (
    <ProductsContextProvider>
      <BannerContextProvider>
        <ProductsRandomContextProvider>
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
        </ProductsRandomContextProvider>
      </BannerContextProvider>
    </ProductsContextProvider>
  );
};
const styles = StyleSheet.create({
  textvalid: {},
});
