import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { ProductsContext } from "../../services/products/products.context";
import { StyleSheet, Text, View } from "react-native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(ProductsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(237, 217, 1, 1)", "transparent"]}
        style={styles.background}
      />
      <LinearGradient colors={["#EDD901", "#EDD901"]}> </LinearGradient>
      <Searchbar
        onIconPress={onFavouritesToggle}
        placeholder="buscar en Naito"
        value={searchKeyword}
        onSubmitEditing={() => {
          if (keyword !== searchKeyword) search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        style={{
          height: 30,
          width: 400,
        }}
        inputStyle={{
          minHeight: 0, // Add this
        }}
      />
    </SearchContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
