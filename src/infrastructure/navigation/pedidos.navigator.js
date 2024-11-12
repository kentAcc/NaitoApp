import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PedidosScreen from "../../components/screens/pedidos.screen";

import { PedidoInfoComponent } from "../../features/cart/pedido.info.component";
const ProductsStack = createStackNavigator();
export const PedidosNavigator = () => {
  const createScreenOptions = ({ route }) => {
    return {
      headerShown: false,
    };
  };

  return (
    <ProductsStack.Navigator screenOptions={createScreenOptions}>
      <ProductsStack.Screen
        name="PedidosScreen"
        component={PedidosScreen}
      ></ProductsStack.Screen>
      <ProductsStack.Screen
        name="pedidoInfo"
        component={PedidoInfoComponent}
      ></ProductsStack.Screen>
    </ProductsStack.Navigator>
  );
};
