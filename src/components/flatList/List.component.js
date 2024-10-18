import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Divider, Text } from "react-native-paper";
import CardItem from "./card.component"; // Adjust the path if necessary
import { ProductsRandomContext } from "../../services/productRandom/productsRandom.context";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const ListComponent = ({ props }) => {
  const { isLoadingB, errorB, productsC } = useContext(ProductsRandomContext);

  const actionOnRow = (item) => {
    const product = { ...item, quantity: 1 };
    props.navigate("Detail", product);
  };
  return (
    <>
      <View style={[styles.card]}>
        <Text style={{ margin: 2 }}>Mejores productos</Text>
        <Divider></Divider>
      </View>
      <View
        style={{
          marginTop: 0,
          backgroundColor: "white",
          shadowColor: "transparent",
          marginLeft: 5,
          marginRight: 5,
          flex: 1,
          flexDirection: "row",
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <FlatList
          data={productsC}
          renderItem={({ item, index }) => (
            <View
              style={{
                resizeMode: "contain",
                flex: 1,
              }}
            >
              <TouchableOpacity onPress={() => actionOnRow(item)}>
                <CardItem item={item}></CardItem>
              </TouchableOpacity>
              <Divider></Divider>
            </View>
          )}
        />
      </View>
      <View
        style={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
      ></View>
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
