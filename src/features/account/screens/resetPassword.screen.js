import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton, AuthInput } from "../component/account.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, HelperText, Snackbar } from "react-native-paper";
export const ResetPasswordScreen = () => {
  const [email, setEmail] = useState("abraham.kent.7@gmail.com");
  const [message, setMessage] = useState("");
  const { isLoading, OnResetPassword, error } = useContext(
    AuthenticationContext
  );
  const handlePasswordReset = async () => {
    try {
      console.log("entra", email);
      OnResetPassword(email);
      // await auth().sendPasswordResetEmail(email);
      //setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  return (
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
      )}

      {error ? <Text style={styles.message}>{error}</Text> : null}
    </View>
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
