import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../component/account.style";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [SetName, name] = useState("");
  const [address, SetAddress] = useState("");
  const [telefono, SetTelefono] = useState("");

  SetTelefono;
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  const handleLogin = async () => {
    try {
      await onRegister({ email, password, repeatedPassword, address, name });

      // Navigate to the next screen or perform further actions
    } catch (e) {
      //setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Datos de envío</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Nombre Completo"
            value={name}
            autoCapitalize="none"
            onChangeText={(p) => SetName(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Dirección"
            value={address}
            autoCapitalize="none"
            onChangeText={(p) => SetAddress(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Telefono"
            value={telefono}
            autoCapitalize="none"
            onChangeText={(p) => SetTelefono(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton icon="email" mode="contained" onPress={handleLogin}>
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={"red"} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
