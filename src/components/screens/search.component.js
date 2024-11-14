import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { ProductsContext } from "../../services/products/products.context";
import { StyleSheet, Text, View } from "react-native";

const SearchContainer = styled.View`
  width: 100%;
  background-color: "red";
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(ProductsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        onIconPress={onFavouritesToggle}
        placeholder="Buscar en Naito"
        value={searchKeyword}
        onSubmitEditing={() => {
          if (keyword !== searchKeyword) search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        style={{
          height: 30,
          width: 300,
          marginLeft: 0,
        }}
        inputStyle={{
          minHeight: 0, // Add this
          alignItems: "center",
          alignContent: "center",
          paddingBottom: 4,
        }}
      />
    </SearchContainer>
  );
};
