import React, { useState, useContext, useEffect } from "react";
import { ScrollView, View } from "react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
  SubTitle,
} from "../component/account.style";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, HelperText, Snackbar } from "react-native-paper";
export const RegisterScreen = ({ navigation }) => {
  const [password, setPassword] = useState("1234567");
  const [ciudad, setCiudad] = useState("ciudad");
  const [colonia, setColonia] = useState("asd");
  const [email, SetEmail] = useState("a@a.com");
  const [cp, SetCp] = useState("asd");
  const [telefono, setTelefono] = useState("555656232");
  const [estado, SetEstado] = useState("asd");
  const [nombre, setNombre] = useState("asd");
  const [entrecalles, setEntreCalles] = useState("asd");
  const [visible, setVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const [repeatedPassword, setRepeatedPassword] = useState("1234567");
  const onDismissSnackBar = () => setVisible(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const [mensage, setMensaje] = useState("");
  const CheckhasError = () => {
    if (!telefono || !ciudad || !email.includes("@") || !password)
      setHasError(true);
    else {
      setHasError(false);
    }
  };
  useEffect(() => {
    CheckhasError();
  }, [telefono, ciudad, email, password]);

  async function hola() {
    await OnNoRegister({
      email,
      nombre,
      telefono,
      cp,
      estado,
      ciudad,
      colonia,
      cart,
      total,
    }).then(() => {
      cleanCart();
      onToggleSnackBar();
      setTimeout(() => {
        navigation.navigate("products");
      }, 2000);
    });
  }
  const handleLogin = async () => {
    try {
      await onRegister({
        email,
        password,
        repeatedPassword,
        telefono,
        nombre,
        estado,
        ciudad,
        colonia,
        cp,
        entrecalles,
      });
      if (error) setMensaje(`ocurrió un error al registrarse:${error}`);
      setMensaje("Registro exitoso!");
      onToggleSnackBar();
      // Navigate to the next screen or perform further actions
    } catch (e) {
      //setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <ScrollView>
      <AccountBackground>
        <AccountCover />
        <AccountContainer>
          <Spacer size="small">
            <SubTitle>Datos para registro en Naito</SubTitle>
          </Spacer>

          <Spacer size="small">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="email"
              value={email}
              mode="outlined"
              textContentType="emailAddress"
              autoCapitalize="none"
              onChangeText={(p) => SetEmail(p)}
            />
            <HelperText type="error" visible={!email.includes("@")}>
              Email es requerido
            </HelperText>
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="Password"
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              value={password}
              textContentType="password"
              secureTextEntry
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
            <HelperText type="error" visible={!password}>
              password es requerido
            </HelperText>
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="confirmar contraseña"
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
            <HelperText type="error" visible={!repeatedPassword}>
              confirmar contraseña es requerido
            </HelperText>
          </Spacer>
          <Spacer size="large">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="Telefono"
              mode="outlined"
              autoCapitalize="none"
              textContentType="password"
              value={telefono}
              onChangeText={(u) => setTelefono(u)}
            />
            <HelperText type="error" visible={!telefono}>
              Teléfono es requerido
            </HelperText>
          </Spacer>
          <Spacer size="small">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="nombre"
              value={nombre}
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => setNombre(p)}
            />
            <HelperText type="error" visible={!nombre}>
              Nombre es requerido
            </HelperText>
          </Spacer>
          <Spacer size="small">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="estado"
              value={estado}
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => SetEstado(p)}
            />
            <HelperText type="error" visible={!estado}>
              Estado es requerido
            </HelperText>
          </Spacer>
          <Spacer size="small">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="ciudad"
              value={ciudad}
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => setCiudad(p)}
            />
            <HelperText type="error" visible={!ciudad}>
              Ciudad es requerido
            </HelperText>
          </Spacer>
          <Spacer size="small">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="colonia"
              value={colonia}
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => setColonia(p)}
            />
            <HelperText type="error" visible={!colonia}>
              Colonia es requerido
            </HelperText>
          </Spacer>
          <Spacer size="small">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="cp"
              value={cp}
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => SetCp(p)}
            />
            <HelperText type="error" visible={!cp}>
              Código Postal es requerido
            </HelperText>
          </Spacer>
          <Spacer size="small">
            <AuthInput
              theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
              label="Entre que calles"
              value={entrecalles}
              mode="outlined"
              autoCapitalize="none"
              onChangeText={(p) => setEntreCalles(entrecalles)}
            />
            <HelperText type="error" visible={!cp}>
              Entre calles
            </HelperText>
          </Spacer>

          {error && (
            <ErrorContainer size="large">
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}

          {!isLoading ? (
            <>
              <Spacer size="large">
                <AuthButton
                  icon="email"
                  mode="contained"
                  onPress={handleLogin}
                  disabled={hasError}
                >
                  Registrarse
                </AuthButton>
              </Spacer>
              <Spacer size="large">
                <AuthButton mode="contained">Regresar</AuthButton>
              </Spacer>
            </>
          ) : (
            <ActivityIndicator animating={true} color={"red"} />
          )}

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
              {mensage}
            </Snackbar>
          </View>
        </AccountContainer>
      </AccountBackground>
    </ScrollView>
  );
};
