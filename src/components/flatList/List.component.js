import React, { useContext } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Divider, Text } from "react-native-paper";
import CardItem from "./card.component"; // Adjust the path if necessary
import { ProductsRandomContext } from "../../services/productRandom/productsRandom.context";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeArea } from "../utility/safe-area.component";
const DATA = [
  {
    id: "1",
    title: "Card 1",
    description: "This is the description for card 1.",
    image: "https://via.placeholder.com/150?text=Image+1",
  },
  {
    id: "2",
    title: "Card 2",
    description: "This is the description for card 2.",
    image: "https://via.placeholder.com/150?text=Image+2",
  },
  {
    id: "3",
    title: "Card 3",
    description: "This is the description for card 3.",
    image: "https://via.placeholder.com/150?text=Image+3",
  },
  {
    id: "4",
    title: "Card 4",
    description: "This is the description for card 4.",
    image: "https://via.placeholder.com/150?text=Image+4",
  },
];

export const ListComponent = (props) => {
  const { isLoadingB, errorB, productsC } = useContext(ProductsRandomContext);
  console.log(props, "props");
  const actionOnRow = (item) => {
    const product = { ...item, quantity: 1 };

    props.navigation.navigate("Detail", product);
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
          marginLeft: 10,
          marginRight: 10,
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
