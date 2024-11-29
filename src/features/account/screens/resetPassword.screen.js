import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton, AuthInput } from "../component/account.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, HelperText, Snackbar } from "react-native-paper";
export const ResetPasswordScreen = (props) => {
  const [email, setEmail] = useState("abraham.kent.7@gmail.com");
  const [message, setMessage] = useState("");
  const { isLoading, OnResetPassword, error } = useContext(
    AuthenticationContext
  );
  const goback = () => {
    console.log(props.navigation.goBack());
  };
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const handlePasswordReset = async () => {
    try {
      // await OnResetPassword(email);

      if (error) setMessage(`ocurrió un error al registrarse:${error}`);
      setMessage("Se envío un mensaje a tu correo, favor de revisarlo");
      onToggleSnackBar();
      setTimeout(() => {
        props.navigation.goBack();
      }, 5000);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  return (
    <>
      <View
        visible={visible}
        style={{
          flexDirection: "column",
          height: "40%",
          width: "100%",
          backgroundColor: "transparent",
          alignItems: "center",
          paddingTop: 2,
          justifyContent: "center",
          position: "absolute",
          zIndex: 2,
        }}
      >
        <Snackbar
          position="bottom"
          visible={visible}
          onDismiss={onDismissSnackBar}
          wrapperStyle={{ flex: 1 }}
          action={{
            label: "Cerrar",
            onPress: () => {
              // Do something
            },
          }}
        >
          {message}
        </Snackbar>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Resetear passowrd</Text>
        <Spacer size="small">
          <AuthInput
            theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
            label="email"
            value={email}
            mode="outlined"
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={(p) => setEmail(p)}
          />
          <HelperText type="error" visible={!email.includes("@")}>
            Email es requerido
          </HelperText>
        </Spacer>

        {isLoading ? (
          <ActivityIndicator animating={true} color={"red"} />
        ) : (
          <>
            <Spacer size="large">
              <AuthButton
                icon="email"
                mode="contained"
                disabled={!email.includes("@")}
                onPress={handlePasswordReset}
                style={{ backgroundColor: "blue" }}
              >
                Enviar reset de password
              </AuthButton>
            </Spacer>
            <Spacer size="large">
              <AuthButton
                icon="email"
                mode="contained"
                onPress={goback}
                style={{ backgroundColor: "#D0421B" }}
              >
                regresar
              </AuthButton>
            </Spacer>
          </>
        )}

        {error ? <Text style={styles.message}>{error}</Text> : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  message: {
    marginTop: 20,
    textAlign: "center",
    color: "green",
  },
});
