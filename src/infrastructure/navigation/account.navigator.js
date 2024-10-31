import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { NoRegisterScreen } from "../../features/account/screens/noregister.screen";
const Stack = createStackNavigator();
const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,

    tabBarOptions: () => {
      activeTintColor: "tomato";
      inactiveTintColor: "gray";
    },
    headerShown: false,
  };
};
export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="Screen" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="NoRegister" component={NoRegisterScreen} />
  </Stack.Navigator>
);
