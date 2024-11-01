import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Search } from "../../components/screens/search.component";
import { Ionicons } from "@expo/vector-icons";
import { ProductsScreen } from "../../components/screens/product.screen";

import AntDesign from "@expo/vector-icons/AntDesign";
function HomeScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    ></View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home2">
      <Drawer.Screen
        name="Home"
        component={ProductsScreen}
        options={({ navigation }) => ({
          title: "Productos",
          headerTintColor: "black",
          headerLeftContainerStyle: {
            backgroundColor: "#EDD901",
            marginLeft: 10,
          },
          headerTitleContainerStyle: {
            paddingTop: 0,
          },
          headerTitle: () => <Search />,
          headerStyle: { backgroundColor: "#EDD901" },
          headerLeft: () => (
            <>
              <AntDesign
                name="menuunfold"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  verticalAlign: "middle",
                  padding: 0,
                  margin: "auto",
                }}
              />
            </>
          ),
        })}
      />
      <Drawer.Screen name="Notifications1" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
