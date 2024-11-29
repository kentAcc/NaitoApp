import React, { useContext, useEffect, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../component/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { auth } from "../../../../firebaseConfig";
import LottieView from "lottie-react-native";
export const AccountScreen = ({ navigation }) => {
  const { user, onLogout, isAuthenticated } = useContext(AuthenticationContext);

  useEffect(() => {}, [user]);
  const handleLogOut = async () => {
    try {
      await onLogout(auth);

      // Navigate to the next screen or perform further actions
    } catch (e) {
      //setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <AccountBackground>
      <AccountCover />

      <AnimationWrapper>
        <LottieView
          colorFilters={[
            {
              keypath: "button",
              color: "#F00000",
            },
            {
              keypath: "Sending Loader",
              color: "#F00000",
            },
          ]}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
          source={require("../../../../assets/delivery.json")}
          resizeMode={"cover"}
        />
      </AnimationWrapper>

      <Title
        style={{
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        Naito
      </Title>

      {user && (
        <View>
          <Text>{user.email}</Text>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={handleLogOut}
            style={{ backgroundColor: "red" }}
          >
            Log out
          </AuthButton>
        </View>
      )}
      {!user && (
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Iniciar sessión
          </AuthButton>
          <Spacer size="large">
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
              style={{ backgroundColor: "green" }}
            >
              Registrarse
            </AuthButton>
          </Spacer>
          <Spacer size="large">
            <AuthButton
              icon="email"
              mode="text"
              onPress={() => navigation.navigate("ResetPassword")}
              style={{ backgroundColor: "transparent" }}
            >
              Olvidé mi contraseña
            </AuthButton>
          </Spacer>
        </AccountContainer>
      )}
    </AccountBackground>
  );
};
