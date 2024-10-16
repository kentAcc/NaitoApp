import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { BannerContextProvider } from "./src/services/banners/banner.context";
import { ProductsContextProvider } from "./src/services/products/products.context";
import { CartContextProvider } from "./src/services/cart/cart.context";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <CartContextProvider>
          <ProductsContextProvider>
            <BannerContextProvider>
              <GestureHandlerRootView>
                <Navigation />
              </GestureHandlerRootView>
            </BannerContextProvider>
          </ProductsContextProvider>
        </CartContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
