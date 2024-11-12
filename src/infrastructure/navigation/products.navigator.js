import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Detail } from "../../components/screens/product.detail.screen";
import { ProductsScreen } from "../../components/screens/product.screen";
import { SheetScreen } from "../../components/screens/sheet.screen";

const ProductsStack = createStackNavigator();
export const ProductsNavigator = () => {
  const createScreenOptions = ({ route }) => {
    return {
      headerShown: false,
    };
  };

  return (
    <ProductsStack.Navigator screenOptions={createScreenOptions}>
      <ProductsStack.Screen
        name="products"
        component={ProductsScreen}
      ></ProductsStack.Screen>
      <ProductsStack.Screen
        name="Detail"
        component={Detail}
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
