import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { SafeArea } from "../../components/utility/safe-area.component";

import {
  Avatar,
  Button as ButtonA,
  Card,
  Text,
  DataTable,
  TouchableRipple,
} from "react-native-paper";
import styled from "styled-components/native";
import { CartContext } from "../../services/cart/cart.context";
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import { Divider, useTheme, Button, ListItem } from "@rneui/themed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetModal,
  Ges,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
import { SkiaShadow } from "react-native-skia-shadow";
export const CartInfoComponent = (props) => {
  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) props.navigation.goBack(null);
  }, []);
  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const Pricetext = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.h5};
  `;
  const Envios = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
  `;

  const { cart, setCart } = useContext(CartContext);

  const [isVisible, setIsVisible] = useState(true);
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
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <>
      <ScrollView style={{}}>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: "#fffff",
            margin: 15,
            padding: 2,
          }}
        >
          {cart.map((item, index) => (
            <View
              key={item.id}
              style={
                index === cart.length - 1
                  ? styles.contentContainersh
                  : styles.borderB
              }
            >
              <Image
                source={{ uri: `${item.photos[0]}` }}
                resizeMode={"cover"}
                style={{ width: 60, height: 60 }}
              ></Image>
              <View style={{ marginLeft: 10, paddingTop: 0, width: "100%" }}>
                <Text
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log("button press");
                  }}
                >
                  <Text
                    style={{
                      textAlign: "left",
                      color: "blue",
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    eliminar
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    width: "80%",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Text
                    style={{
                      textAlignVertical: "center",
                    }}
                  >
                    {item.quantity} Unidad1
                  </Text>

                  <Pricetext>
                    ${Number(item.price) * Number(item.quantity)}
                  </Pricetext>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <SkiaShadow blur={10} dx={30} dy={-5} borderRadius={10} color="silver">
        <GestureHandlerRootView style={{}} elevation={5}>
          <View style={styles.container}>
            <BottomSheet
              ref={sheetRef}
              index={0}
              elevation={5}
              snapPoints={snapPoints}
              onChange={handleSheetChange}
            >
              <BottomSheetScrollView
                elevation={5}
                contentContainerStyle={styles.contentContainer}
              >
                <View
                  style={{
                    flexDirection: "column",
                    alignContent: "space-between",
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 15,
                        paddingRight: 15,
                      },
                    ]}
                  >
                    <View style={[{ flex: 1, flexDirection: "row" }]}>
                      <Text>Productos</Text>
                    </View>
                    <View
                      style={[
                        { justifyContent: "space-evenly", marginVertical: 10 },
                      ]}
                    >
                      <Text>
                        ${cart.reduce((sum, current) => sum + current.price, 0)}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 15,
                        paddingRight: 15,
                      },
                    ]}
                  >
                    <View style={[{ flex: 1, flexDirection: "row" }]}>
                      <Text>Envío</Text>
                    </View>
                    <View
                      style={[
                        { justifyContent: "space-evenly", marginVertical: 10 },
                      ]}
                    >
                      <Text style={{ color: "green" }}>¡Gratis!</Text>
                    </View>
                  </View>
                </View>
              </BottomSheetScrollView>
            </BottomSheet>
          </View>
        </GestureHandlerRootView>
      </SkiaShadow>
    </>
  );
};
const styles = StyleSheet.create({
  contentContainersh: {
    flexDirection: "row",
    padding: 5,
    borderColor: "silver",
    backgroundColor: "#ffff",
  },
  borderB: {
    flexDirection: "row",
    padding: 5,
    borderColor: "silver",
    backgroundColor: "#ffff",
    borderColor: "silver",
    borderBottomWidth: 1,
  },

  container: {
    flex: 1,
    paddingTop: 200,
    elevation: 5,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});
