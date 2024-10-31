import React, { useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CartContext } from "../../services/cart/cart.context";
import { Divider } from "react-native-paper";
const Pricetext = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
`;
const Eliminar = styled.Text`
  text-align: "left";
  color: blue;
  margin-top: 10;
  margin-bottom: 10;
`;
const ItemCartComponent = ({ item, index, length }) => {
  const { removeCart } = useContext(CartContext);
  return (
    <>
      <View key={item.id} style={styles.contentContainersh}>
        <Image
          source={{ uri: `${item.photos}` }}
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
              removeCart(item.id);
            }}
          >
            <Eliminar>eliminar</Eliminar>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Text>{item.quantity} Unidad(es)</Text>
            <Pricetext>${Number(item.price) * Number(item.quantity)}</Pricetext>
          </View>
        </View>
      </View>
      {index < length - 1 && <Divider />}
    </>
  );
};

const styles = StyleSheet.create({
  contentContainersh: {
    flexDirection: "row",
    padding: 5,
    borderColor: "silver",
    backgroundColor: "#ffff",
  },
  borderB: {
    flexDirection: "row",
    padding: 5,
    borderColor: "silver",
    backgroundColor: "#ffff",
    borderColor: "silver",
    borderBottomWidth: 1,
  },

  container: {
    flex: 1,
    paddingTop: 200,
    elevation: 5,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});
export default ItemCartComponent;
