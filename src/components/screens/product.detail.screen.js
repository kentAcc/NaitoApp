import react, { useContext, useState, useEffect } from "react";
import FastImage from "react-native-fast-image";
import { SafeArea } from "../utility/safe-area.component";
import {
  Text,
  Platform,
  Dimensions,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  BackHandler,
} from "react-native";
import { Avatar, Button, Card, TextInput } from "react-native-paper";
import { CartContext } from "../../services/cart/cart.context";
import { SliderBox } from "react-native-image-slider-box";
import styled from "styled-components/native";

export const Detail = ({ route, navigation }) => {
  const [text, setText] = useState("");

  const { photos, quantity, name, id, price } = route.params;

  const { addCart, setCart } = useContext(CartContext);

  const temp = photos.map((data, i) => {
    return data;
  });

  const [newquantity, setQuantity] = useState("1");
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];

  const currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const Pricetext = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.h3};
  `;
  return (
    <>
      <Card style={{ borderRadius: 1, marginTop: 0 }}>
        <Text
          variant="labelSmall"
          style={{
            marginTop: 1,
            marginLeft: 15,
            backgroundColor: "#D84B11",
            alignSelf: "flex-start",
            paddingLeft: 4,
            paddingRight: 4,
            color: "white",
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          Nuevo
        </Text>
        <Card.Title
          title={`${name}`}
          subtitle="Envío gratis"
          subtitleStyle={{ color: "green" }}
        />
        <SliderBox
          images={temp}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="blue"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={"resize"}
          resizeMode={"cover"}
          paginationBoxStyle={{
            position: "absolute",
            bottom: -40,
            padding: 10,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
          ImageComponentStyle={{
            borderRadius: 1,
            height: 320,
            width: 300,
            marginTop: 5,
            objectFit: "cover",
          }}
          imageLoadingColor="#2196F3"
        />
        <Card.Content style={{ paddingTop: 20 }}>
          <Pricetext>{currencyFormat(price)}</Pricetext>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>

      <TextInput
        style={{
          backgroundColor: "#f1efee",
          marginBottom: 5,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
        }}
        label="Cantidad"
        maxLength={2}
        defaultValue={newquantity}
        keyboardType="numeric"
        value={newquantity}
        onChangeText={(text) => {
          setQuantity(text);
        }}
      />
      <Button
        style={!newquantity ? styles.silver : styles.orange}
        disabled={!newquantity}
        elevated={5}
        mode="contained"
        onPress={() => {
          addCart({ id, photos, quantity: newquantity, name, price });
          navigation.navigate("sheet", {
            newquantity,
            photos,
            name,
            price,
          });
        }}
      >
        Agregar a carrito
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  slider: { backgroundColor: "#000", height: 350 },
  content1: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  content2: {
    width: "100%",
    height: 100,
    marginTop: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: { color: "#fff" },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSelected: {
    opacity: 1,
    color: "red",
  },
  customSlide: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  customImage: {
    width: 100,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },

  containersh: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  contentContainersh: {
    flex: 1,
    alignItems: "center",
  },
  orange: { backgroundColor: "#D84B11" },
  silver: { backgroundColor: "silver" },
});
