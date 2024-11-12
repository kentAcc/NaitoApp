import React, { useContext } from "react";
import { Button, View, useState, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Search } from "../../components/screens/search.component";
import { Ionicons } from "@expo/vector-icons";
import { ProductsNavigator } from "./products.navigator";
import { CartInfoComponent } from "../../features/cart/cart.info.component";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AccountNavigator } from "./account.navigator";
import { Badge } from "react-native-paper";
import { PedidosNavigator } from "./pedidos.navigator";
import { CartContext } from "../../../src/services/cart/cart.context";
const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  const { count, isLoading } = useContext(CartContext);
  return (
    <Drawer.Navigator initialRouteName="Home2">
      <Drawer.Screen
        name="Home"
        component={ProductsNavigator}
        options={({ navigation }) => ({
          title: "Productos",
          headerTintColor: "black",
          headerLeftContainerStyle: {
            backgroundColor: "#EDD901",
            marginLeft: 10,
          },
          headerTitleContainerStyle: {
            paddingTop: 0,
          },
          headerTitle: () => <Search />,
          headerStyle: { backgroundColor: "#EDD901" },
          headerLeft: () => (
            <>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons
                  name="menu"
                  size={30}
                  style={{ marginLeft: 20 }}
                ></Ionicons>
              </TouchableOpacity>
            </>
          ),
          headerRight: () => (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Carrito");
                }}
              >
                <Ionicons
                  name="cart-outline"
                  size={25}
                  style={{ marginRight: 25 }}
                ></Ionicons>
                {count > 0 && (
                  <View style={{ position: "absolute", right: 5, top: -5 }}>
                    <Badge>{count}</Badge>
                  </View>
                )}
              </TouchableOpacity>
            </>
          ),
        })}
      />
      <Drawer.Screen
        name="Pedidos de hoy"
        component={PedidosNavigator}
        options={({ navigation }) => ({
          title: "Pedidos",
          headerTintColor: "black",
          headerLeftContainerStyle: {
            backgroundColor: "#EDD901",
            marginLeft: 10,
          },
          headerTitleContainerStyle: {
            paddingTop: 0,
          },
          headerTitle: "Pedidos de hoy",
          headerStyle: { backgroundColor: "#EDD901" },
          headerLeft: () => (
            <>
              <AntDesign
                name="menuunfold"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  verticalAlign: "middle",
                  padding: 0,
                  margin: "auto",
                  marginLeft: 20,
                }}
              />
            </>
          ),
        })}
      />
      <Drawer.Screen
        name="Carrito"
        component={CartInfoComponent}
        options={({ navigation }) => ({
          title: "Carrito",
          headerTintColor: "black",
          headerLeftContainerStyle: {
            backgroundColor: "#EDD901",
            marginLeft: 10,
          },
          headerTitleContainerStyle: {
            paddingTop: 0,
          },
          headerTitle: "Carrito de pedidos",
          headerStyle: { backgroundColor: "#EDD901" },
          headerLeft: () => (
            <>
              <AntDesign
                name="menuunfold"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  verticalAlign: "middle",
                  padding: 0,
                  margin: "auto",
                  marginLeft: 20,
                }}
              />
            </>
          ),
        })}
      />
      <Drawer.Screen
        name="Cuenta"
        component={AccountNavigator}
        options={({ navigation }) => ({
          title: "Mi Cuenta",
          headerTintColor: "black",
          headerLeftContainerStyle: {
            backgroundColor: "#EDD901",
            marginLeft: 10,
          },
          headerTitleContainerStyle: {
            paddingTop: 0,
          },
          headerTitle: "Mi Cuenta",
          headerStyle: { backgroundColor: "#EDD901" },
          headerLeft: () => (
            <>
              <AntDesign
                name="menuunfold"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  verticalAlign: "middle",
                  padding: 0,
                  margin: "auto",
                  marginLeft: 20,
                }}
              />
            </>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}
