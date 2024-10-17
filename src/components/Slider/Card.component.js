import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
const TextName = styled.Text`
  padding: 2px;
  font-size: 10px;
  text-align: left;
  font-weight: Thin;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.ui.sliderName};
`;
const Price = styled.Text`
  padding: 2px;
  font-size: 14px;
  text-align: left;
  font-weight: Thin;
  text-transform: capitalize;
`;
const Card = ({ image, title, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <TextName>{title}</TextName>
      <Price>${price}</Price>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%", // Full width for each card
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3, // Shadow effect for Android
    shadowColor: "#000", // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingLeft: 5,
    paddingRight: 5,
  },
  image: {
    width: "100%",
    height: 115,
    resizeMode: "stretch",
  },
});

export default Card;
