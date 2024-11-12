import React, { useContext, useCallback, useRef, useMemo } from "react";

import { CartContext } from "../../services/cart/cart.context";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import CartEmpyComponent from "./CartEmpy.Component";
import { Divider } from "react-native-paper";
import { ButtonSheetComponent } from "./ButtonSheet.component";
import ItemCartComponent from "./ItemCart.component";

export const CartInfoComponent = (props) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["100%"]);

  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) props.navigation.goBack(null);
  }, []);
  const handleSheetChange = useCallback((index) => {}, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const { cart, count, total } = useContext(CartContext);

  return (
    <>
      <ScrollView style={{}}>
        {count == 0 && <CartEmpyComponent></CartEmpyComponent>}
        {count > 0 && (
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              margin: 15,
              padding: 4,
            }}
          >
            <Text style={{ margin: 10 }}>Productos</Text>
            <Divider />

            {cart.map((item, index) => (
              <ItemCartComponent
                key={item.id}
                item={item}
                index={index}
                length={cart.length}
              ></ItemCartComponent>
            ))}
          </View>
        )}
      </ScrollView>
      {count > 0 && (
        <ButtonSheetComponent
          cart={cart}
          count={count}
          navigation={props}
          total={total}
        ></ButtonSheetComponent>
      )}
    </>
  );
};
