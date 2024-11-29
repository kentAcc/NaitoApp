import React, { useState, useContext } from "react";
import AccountStyle from "../component/account.style";
import { View, Button, Text, StyleSheet } from "react-native";
import { LoginRequest } from "../../../services/authentication/authentication.service";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
} from "../component/account.style";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RegisterScreen } from "./register.screen";
import { TextInput } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
import { Link } from "@react-navigation/native";
export const LoginScreen = ({ navigation }) => {
  const { onLogin, user, error, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      await onLogin({ email, password });
      navigation.navigate("Main");

      // Navigate to the next screen or perform further actions
    } catch (e) {
      //setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <>
      <AccountBackground>
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
        <AccountCover />
        <AccountContainer>
          <TextInput
            label="Email"
            mode="outlined"
            activeOutlineColor="#4975F6"
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
            outlineColor="#DEDEDE"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            label="Password"
            value={password}
            outlineColor="#DEDEDE"
            activeOutlineColor="#4975F6"
            secureTextEntry
            mode="outlined"
            onChangeText={(text) => setPassword(text)}
            underlineColor="#4975F6"
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                disabled={email && password ? false : true}
                onPress={handleLogin}
                style={{ backgroundColor: "#4975F6" }}
              >
                Iniciar sessión
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color="red" />
            )}
          </Spacer>
          <Spacer size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
              style={{ backgroundColor: "green" }}
            >
              Registrarse
            </AuthButton>
          </Spacer>

          <Spacer size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
              style={{ backgroundColor: "green" }}
            >
              Registrarse
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#00000000",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: "red",
    marginBottom: 12,
  },
});

export default LoginScreen;
