// CardItem.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
const TextName = styled.Text`
  padding: 2px;
  font-size: 15px;
  text-align: left;
  font-weight: Thin;
  text-transform: capitalize;
`;
const Price = styled.Text`
  padding: 2px;
  font-size: 19px;
  text-align: left;
  font-weight: bold;
  text-transform: capitalize;
`;
const Envio = styled.Text`
  padding: 2px;
  font-size: 12px;
  text-align: left;
  font-weight: Thin;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.ui.success};
`;
const CardItem = ({ item }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <Card.Cover source={{ uri: item.photos[0] }} style={styles.image} />
        <View style={styles.textContainer}>
          <TextName>{item.name}</TextName>
          <Price>${item.price}</Price>
          <Envio>Envío gratis</Envio>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 7,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "white",
    shadowColor: "transparent",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 80,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
});

export default CardItem;
