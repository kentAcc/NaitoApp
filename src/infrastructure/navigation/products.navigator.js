import React, { useMemo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductsScreen } from "../../components/screens/product.screen";

import DrawerScreen from "./drawer.screen";
import { Detail } from "../../components/screens/product.detail.screen";
import { SafeArea } from "../../components/utility/safe-area.component";
import { SheetScreen } from "../../components/screens/sheet.screen";
import { Button } from "react-native";
const ProductsStack = createStackNavigator();
export const ProductsNavigator = () => {
  const createScreenOptions = ({ route }) => {
    return {
      headerShown: false,
      tabBarIcon: ({ size, color }) => <Badge>3</Badge>,
      tabBarOptions: () => {
        activeTintColor: "tomato";
        inactiveTintColor: "gray";
      },
    };
  };
  const DetailsScreen = ({ navigation }) => (
    <SafeArea>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </SafeArea>
  );

  return (
    <ProductsStack.Navigator screenOptions={createScreenOptions}>
      <ProductsStack.Screen
        name="products"
        component={DrawerScreen}
      ></ProductsStack.Screen>
      <ProductsStack.Screen
        name="Detail"
        component={Detail}
      ></ProductsStack.Screen>
      <ProductsStack.Screen
        name="carrito"
        component={DetailsScreen}
      ></ProductsStack.Screen>

      <ProductsStack.Screen
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: "rgba(19, 19, 20, 0.8)" },
          presentation: "transparentModal",
          animation: "none",
        }}
        name="sheet"
        component={SheetScreen}
      ></ProductsStack.Screen>
    </ProductsStack.Navigator>
  );
};
