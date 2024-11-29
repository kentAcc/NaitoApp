import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  SubTitle,
} from "../component/account.style";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, HelperText, Snackbar } from "react-native-paper";
import { CartContext } from "../../../services/cart/cart.context";

export const NoRegisterScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const onDismissSnackBar = () => setVisible(false);
  const [ciudad, setCiudad] = useState("rfwe");
  const [colonia, setColonia] = useState("asd");
  const [email, SetEmail] = useState("asd@");
  const [cp, SetCp] = useState("asd");
  const [telefono, setTelefono] = useState("5563392403");
  const [estado, SetEstado] = useState("asd");
  const [nombre, setNombre] = useState("asd");
  const [entrecalles, setEntreCalles] = useState("asd");
  const { error, isLoading, OnNoRegister, user } = useContext(
    AuthenticationContext
  );
  const { cart, total, count, cleanCart } = useContext(CartContext);
  const hasError = () => {
    if (!telefono || !ciudad || !email.includes("@")) return true;
    else {
      return false;
    }
  };

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
  return (
    <ScrollView>
      <AccountBackground>
        <AccountCover />
        <AccountContainer>
          <Spacer size="small">
            <SubTitle>Captura los datos para el envío</SubTitle>
          </Spacer>
          <AuthInput
            theme={{ colors: { onSurfaceVariant: "#b0b0b0" } }}
            label="Telefono"
            mode="outlined"
            value={telefono}
            onChangeText={(u) => setTelefono(u)}
          />
          <HelperText type="error" visible={!telefono}>
            Teléfono es requerido
          </HelperText>
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
                  onPress={hola}
                  disabled={hasError() || count < 1}
                >
                  Confirmar
                </AuthButton>
              </Spacer>
              <Spacer size="large">
                <AuthButton
                  mode="contained"
                  onPress={() => navigation.goBack()}
                >
                  regresar
                </AuthButton>
              </Spacer>
            </>
          ) : (
            <ActivityIndicator animating={true} color={"red"} />
          )}

          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            wrapperStyle={{ top: 20 }}
            action={{
              label: "Cerrar",
              onPress: () => {
                // Do something
              },
            }}
          >
            Se ha realizado tu pedido, en breve recibiras mensaje en el whatsapp
          </Snackbar>
        </AccountContainer>
      </AccountBackground>
    </ScrollView>
  );
};
