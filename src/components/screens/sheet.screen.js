import react, {
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
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
import styled from "styled-components/native";
import { useIsFocused } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button as PaperButton } from "react-native-paper";
export const SheetScreen = (property) => {
  const Pricetext = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
  `;
  const Envios = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.body};
  `;
  const isFocused = useIsFocused();
  const { theme } = useTheme();
  const snapPoints = useMemo(() => ["26.5%"], ["50%"]);
  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) property.navigation.goBack(null);
  }, []);
  useEffect(() => {
    if (isFocused) {
      handlePresentModalPress();
    }
  }, [isFocused]);

  return (
    <BottomSheetModalProvider snapPoints={snapPoints}>
      <SafeAreaView>
        <View style={styles.containersh}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={{ alignSelf: "flex-end", marginRight: 15 }}>
              <PaperButton
                onPress={() => {
                  bottomSheetModalRef.current?.close();
                }}
              >
                <Ionicons name="close" color="green" size={25} />
              </PaperButton>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                marginLeft: 15,
                marginRight: 15,
                padding: 0,
                marginTop: 0,
              }}
            >
              <BottomSheetView style={{ width: "100%" }}>
                <View style={styles.contentContainersh}>
                  <Image
                    source={{ uri: `${property.route.params.photos[0]}` }}
                    resizeMode={"cover"}
                    style={styles.image}
                  ></Image>

                  <Text style={{ marginLeft: 10, paddingTop: 0 }}>
                    <Pricetext>Agregaste a tu carrito{"\n"}</Pricetext>
                    <Text
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {property.route.params.name}
                      {"\n"}
                    </Text>
                    <Text style={{ paddingTop: 5, paddingBottom: 10 }}>
                      {property.route.params.newquantity} Unidad
                      {"\n"}
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderColor: "silver",
                    marginTop: 5,
                    borderTopWidth: 1,
                    padding: 10,
                  }}
                >
                  <Envios style={{ color: "green" }}>
                    ¡Tienes envío gratis!
                  </Envios>
                </View>
              </BottomSheetView>
            </View>
          </BottomSheetModal>
        </View>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  containersh: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentContainersh: {
    flex: 1,
    alignItems: "alignItems",
    flexDirection: "row",
    marginBottom: 10,

    marginBottom: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
  image: {
    width: 70,
    height: 70,
    borderColor: "#FFEE58",
    borderWidth: 2,
    borderRadius: 65,
  },
});
