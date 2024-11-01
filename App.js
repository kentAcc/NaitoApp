import { View, StatusBar, statusBarTransition } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Navigation } from "./src/infrastructure/navigation";
import DrawerScreen from "./src/features/account/screens/drawer.screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useState } from "react";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [hidden, setHidden] = useState(false);
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
      <GestureHandlerRootView>
        <AuthenticationContextProvider>
          <StatusBar
            animated={true}
            backgroundColor="#EDD901"
            barStyle={"dark-content"}
            showHideTransition={statusBarTransition}
            hidden={hidden}
          />

          <Navigation />
        </AuthenticationContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
