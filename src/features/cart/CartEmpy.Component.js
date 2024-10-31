import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const CartEmpyComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "silver",
        margin: 15,
        borderRadius: 10,
      }}
    >
      <Ionicons
        name="cart-outline"
        size={90}
        style={{ width: "50%", padding: 50 }}
      ></Ionicons>
      <Text style={{ width: "50%", padding: 50 }}>
        Agrega productos y consigue envíos gratis
      </Text>
    </View>
  );
};

export default CartEmpyComponent;
