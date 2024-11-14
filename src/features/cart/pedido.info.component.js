import React, { useContext, useCallback, useRef, useMemo } from "react";

import { View, ScrollView, Text, StyleSheet } from "react-native";

import { Divider } from "react-native-paper";

import ItemPedidosComponent from "./ItemPedidos.component";

export const PedidoInfoComponent = ({ route }) => {
  const { item } = route.params;

  return (
    <>
      <ScrollView style={{}}>
        {item.data.cart.length > 0 && (
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              margin: 15,
              padding: 4,
            }}
          >
            <Text style={{ margin: 10 }}>Productos</Text>
            <Divider />

            {item.data.cart.map((item, index) => (
              <ItemPedidosComponent
                key={item.id}
                item={item}
                index={index}
                length={1}
              ></ItemPedidosComponent>
            ))}
          </View>
        )}
      </ScrollView>
    </>
  );
};
