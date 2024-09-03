import React, { useState, useEffect, useContext } from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import {
  Avatar,
  Button as ButtonA,
  Card,
  Text,
  DataTable,
  TouchableRipple,
} from "react-native-paper";
import styled from "styled-components/native";
import { CartContext } from "../../services/cart/cart.context";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { Divider, useTheme, Button } from "@rneui/themed";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const CartInfoComponent = (props) => {
  const Pricetext = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.h5};
  `;
  const Envios = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
  `;

  const { cart, setCart } = useContext(CartContext);

  return (
    <View style={{ backgroundColor: "silver" }}>
      <View
        style={{
          borderRadius: 5,
          backgroundColor: "#fff",
          margin: 15,
          padding: 2,
        }}
      >
        {cart.map((item, index) => (
          <View
            key={item.id}
            style={
              index === cart.length - 1
                ? styles.contentContainersh
                : styles.borderB
            }
          >
            <Image
              source={{ uri: `${item.photos[0]}` }}
              resizeMode={"cover"}
              style={{ width: 60, height: 60 }}
            ></Image>
            <View style={{ marginLeft: 10, paddingTop: 0, width: "100%" }}>
              <Text
                style={{
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("button press");
                }}
              >
                <Text
                  style={{
                    textAlign: "left",
                    color: "blue",
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                >
                  eliminar
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Text
                  style={{
                    textAlignVertical: "center",
                  }}
                >
                  {item.quantity} Unidad
                </Text>

                <Pricetext>${item.price}</Pricetext>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainersh: {
    flexDirection: "row",
    padding: 5,
    borderColor: "silver",
    backgroundColor: "transparent",
  },
  borderB: {
    flexDirection: "row",
    padding: 5,
    borderColor: "silver",
    backgroundColor: "transparent",
    borderColor: "silver",
    borderBottomWidth: 1,
  },

  image: {
    width: 70,
    height: 70,
    borderColor: "#FFEE58",
    borderWidth: 2,
    borderRadius: 65,
  },
});
