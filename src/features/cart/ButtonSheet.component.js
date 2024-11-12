import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SkiaShadow } from "react-native-skia-shadow";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button as ButtonA, Text } from "react-native-paper";
export const ButtonSheetComponent = ({ cart, count, navigation, total }) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["100%"]);

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
  useEffect(() => {}, [count]);
  return (
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
                    <Text>Productos({count})</Text>
                  </View>
                  <View
                    style={[
                      { justifyContent: "space-evenly", marginVertical: 10 },
                    ]}
                  >
                    <Text>{total}</Text>
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

                <ButtonA
                  elevated={5}
                  mode="contained"
                  disabled={count < 1}
                  onPress={() => {
                    navigation.navigation.navigate("Cuenta", {
                      screen: "NoRegister",
                    });
                  }}
                >
                  Hacer pedido
                </ButtonA>
              </View>
            </BottomSheetScrollView>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </SkiaShadow>
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
