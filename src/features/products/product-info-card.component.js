import react from "react";
import { Text, Card, Button } from "react-native-paper";
import styled from "styled-components/native";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ProductCard = styled(Card)`
  background-color: transparent;
  justify-content: "space-between";
`;
const ProductCardCover = styled(Card.Cover)`
  padding-bottom: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 1px;
  width: 100%;
  height: 180px;
  border-radius: 6px;
`;
const Title = styled.Text`
  padding-left: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  padding: 3px;
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  color: black;
`;
const Pricetext = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Envio = styled.View`
  font-size: ${(props) => props.theme.fontSizes.caption};
  flex-direction: "row";
  align-items: "center";
`;
export const ProductInfoCard = (product, index = {}) => {
  const ratingArray = Array.from(
    //new Array(product.product.rating ? 1 : product.product.rating)
    new Array(5)
  );
  const width = Dimensions.get("window").width;
  return (
    <View>
      <ProductCard
        style={{}}
        elevation={0}
        key={() => {
          return Math.floor(Math.random() * 11);
        }}
      >
        <ProductCardCover
          source={{
            uri: product.product.photos[0],
          }}
        />
      </ProductCard>
      <View style={{ paddingBottom: 7 }}>
        <Text
          style={{
            textTransform: "capitalize",
          }}
        >
          {product.product.name}
        </Text>
        <Rating>
          {ratingArray.map((rating, i) => (
            <SvgXml key={`star-${i}`} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>{"MX$"}</Text>
          <Pricetext>{product.product.price}</Pricetext>
        </View>
        <Envio
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "green", marginRight: 5 }}>
            {"Envío gratis"}
          </Text>
          <MaterialCommunityIcons name="truck-fast" size={15} color="green" />
        </Envio>
      </View>
    </View>
  );
};
