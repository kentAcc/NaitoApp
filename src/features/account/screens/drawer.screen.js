import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Search } from "../../../components/screens/search.component";
import { Ionicons } from "@expo/vector-icons";
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

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home2">
      <Drawer.Screen
        name="Home1"
        component={Search}
        options={({ navigation }) => ({
          title: "Home",

          headerStyle: {
            backgroundColor: "rgb(0, 145, 234)",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },

          headerLeft: () => (
            <Ionicons
              name={"md-menu"}
              size={24}
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
          headerTitle: () => (
            <View style={{ flex: 1, backgroundColor: "red" }}>
              <Search style={{ with: 400, height: 60 }}></Search>
            </View>
          ),
          headerStyle: { width: 100 },
          headerTitleAlign: "center",
        })}
      />
      <Drawer.Screen name="Notifications1" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
