import react, { useContext, useState, useEffect } from "react";

import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Button, Card, TextInput, ActivityIndicator } from "react-native-paper";
import { CartContext } from "../../services/cart/cart.context";
import { SliderBox } from "react-native-image-slider-box";
import styled from "styled-components/native";
import { ProductsRandomContext } from "../../services/productRandom/productsRandom.context";

export const Detail = ({ route, navigation }) => {
  const {
    photos,
    quantity,
    name,
    id,
    price,
    stock,
    detail,
    largedetail,
  } = route.params;
  const { addCart } = useContext(CartContext);

  const { isLoadingB } = useContext(ProductsRandomContext);

  const [disabledView, setDisabledView] = useState(false);
  function hola() {
    () => {
      addCart({ id, photos, quantity: newquantity, name, price });
    };
    navigation.navigate("sheet", {
      newquantity,
      photos,
      name,
      price,
    });
  }
  const handleClick = () => {
    // Show an alert or perform your action

    // Disable the button
    setIsDisabled(true);
    addCart({ id, photos, quantity: newquantity, name, price });
    navigation.navigate("sheet", {
      newquantity,
      photos,
      name,
      price,
    });

    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  };
  useEffect(() => {}, [isDisabled]);

  const temp = photos.map((data, i) => {
    return data;
  });

  const [newquantity, setQuantity] = useState("1");
  const [isDisabled, setIsDisabled] = useState(false);
  const currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const Pricetext = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.h3};
  `;
  const TextoSaber = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.body};
    line-height: 30;
  `;
  const ViewSaber = styled.ScrollView`
    margin-top: 15px;
    margin-left: 10px;
  `;
  const TextInputP = styled(TextInput)`
    margin-bottom: 5;
    margin-left: 10;
    margin-right: 10;
    margin-top: 0;
    border-color: "#D84B11";
    height: 40;
  `;

  TextInput;
  return (
    <>
      <Card
        style={{
          borderRadius: 1,
          marginTop: 0,
          elevation: 0,
          shadowColor: "white",
        }}
      >
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
            paddingBottom: 0,
            marginBottom: 0,
          }}
        >
          Nuevo
        </Text>
        <Card.Title
          title={`${name}`}
          subtitle="Envío gratis"
          subtitleStyle={{ color: "green", marginTop: -5 }}
          titleStyle={{ marginTop: -10 }}
          style={{ marginTop: -5 }}
        />

        {!isLoadingB ? (
          <>
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
                height: 300,
                width: 300,
                marginTop: 5,
                objectFit: "cover",
              }}
              imageLoadingColor="#2196F3"
            />
          </>
        ) : (
          <ActivityIndicator animating={true} color={"red"} />
        )}

        <Card.Content style={{ paddingTop: 15 }}>
          <Pricetext>{currencyFormat(price)}</Pricetext>
        </Card.Content>
      </Card>

      <TextInputP
        defaultValue={newquantity}
        maxLength={2}
        mode="outlined"
        label="Cantidad"
        keyboardType="numeric"
        value={newquantity}
        onChangeText={(text) => {
          if (text != "0") setQuantity(text);
        }}
      />
      {!disabledView ? (
        <>
          <Button
            style={
              (!newquantity ? styles.silver : styles.orange,
              { marginLeft: 10, marginRight: 10, borderRadius: 5 })
            }
            disabled={isDisabled || !newquantity || newquantity == "0"}
            elevated={2}
            mode="contained"
            onPress={handleClick}
          >
            Agregar a carrito
          </Button>
        </>
      ) : (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
          ></ActivityIndicator>
        </View>
      )}

      <ViewSaber>
        <TextoSaber>{detail}</TextoSaber>

        <TextoSaber>{largedetail}</TextoSaber>
      </ViewSaber>
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
    marginBottom: "10px",
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
    marginBottom: "px",
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
  orange: { backgroundColor: "#3483FA" },
  silver: { backgroundColor: "silver" },
});
