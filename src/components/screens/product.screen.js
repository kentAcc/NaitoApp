import React, { useState, createContext, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  statusBarTransition,
} from "react-native";
import { ProductInfoCard } from "../../features/products/product-info-card.component";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { ProductsContext } from "../../services/products/products.context";
import ImageSlider from "../Slider/ImageSlider.component";
import { ListComponent } from "../flatList/List.component";

import { LinearGradient } from "expo-linear-gradient";

export const ProductsScreen = (props) => {
  const { isLoading, error, products } = useContext(ProductsContext);
  const [hidden, setHidden] = useState(false);

  const actionOnRow = (item) => {
    const product = { ...item, quantity: 1 };

    props.navigation.navigate("Detail", product);
  };

  useEffect(() => {}, [isLoading]);

  return (
    <>
      <SafeAreaProvider style={{ paddingLeft: 2, paddingRight: 2 }}>
        <StatusBar
          animated={true}
          backgroundColor="#EDD901"
          barStyle={"dark-content"}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(237, 217, 1, 1)", "transparent"]}
          style={styles.background}
        />

        {(!products || products.length == 0) && (
          <>
            <ImageSlider props={props.navigation} />
            <ListComponent props={props.navigation} />
          </>
        )}
        {products && products.length > 0 && (
          <FlatList
            style={{ flex: 1 / 2 }}
            vertical={true}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={products}
            renderItem={({ item, index }) => (
              <View
                style={{
                  width: "48.5%",
                  resizeMode: "contain",
                  margin: 3,
                }}
              >
                <TouchableOpacity onPress={() => actionOnRow(item)}>
                  <ProductInfoCard product={item}></ProductInfoCard>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        {isLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animating={true}
            ></ActivityIndicator>
          </View>
        )}
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
  },
});
